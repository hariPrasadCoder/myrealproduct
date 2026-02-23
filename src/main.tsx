import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Initialize PostHog analytics
import { initPostHog, trackTallySubmission, trackCalBooking, trackEvent } from './lib/posthog';
initPostHog();

// Listen for Tally form submissions
window.addEventListener('message', (event) => {
  if (event.data && event.data.event === 'Tally.FormSubmitted') {
    const { formId, responseId } = event.data.payload || {};
    trackTallySubmission(formId, responseId);
    console.log('[PostHog] Tally form submitted:', formId);
  }
});

// Listen for Cal.com booking events
declare global {
  interface Window {
    Cal?: any;
  }
}

// Set up Cal.com event listener after Cal loads
const setupCalTracking = () => {
  if (window.Cal) {
    window.Cal('on', {
      action: 'bookingSuccessful',
      callback: (e: any) => {
        trackCalBooking(e.detail?.data?.eventType?.slug || 'info', e.detail?.data?.uid);
        console.log('[PostHog] Cal.com booking successful:', e.detail);
      },
    });
    
    // Track when Cal.com modal opens
    window.Cal('on', {
      action: 'linkReady',
      callback: () => {
        trackEvent('cal_widget_opened', { page: window.location.pathname });
      },
    });
  }
};

// Try to set up Cal tracking, retry if Cal not loaded yet
if (window.Cal) {
  setupCalTracking();
} else {
  // Wait for Cal to load
  const checkCal = setInterval(() => {
    if (window.Cal) {
      setupCalTracking();
      clearInterval(checkCal);
    }
  }, 500);
  // Stop checking after 10 seconds
  setTimeout(() => clearInterval(checkCal), 10000);
}

// Import fonts
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/700.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
