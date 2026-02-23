import posthog from 'posthog-js';

// Initialize PostHog
export const initPostHog = () => {
  if (typeof window !== 'undefined') {
    posthog.init('phc_h73gqvgIfvQaybBrdweajxsAjWlyykxbHTkue7zzBhL', {
      api_host: 'https://us.i.posthog.com',
      person_profiles: 'identified_only',
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: true, // Auto-capture clicks, form submissions, etc.
      session_recording: {
        maskAllInputs: false,
        maskInputOptions: {
          password: true,
        },
      },
    });
  }
  return posthog;
};

// Track custom events
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  posthog.capture(eventName, properties);
};

// Track button clicks with context
export const trackButtonClick = (buttonName: string, section: string, additionalProps?: Record<string, any>) => {
  trackEvent('button_clicked', {
    button_name: buttonName,
    section: section,
    ...additionalProps,
  });
};

// Track CTA clicks specifically
export const trackCTAClick = (ctaType: string, location: string) => {
  trackEvent('cta_clicked', {
    cta_type: ctaType,
    location: location,
    page: window.location.pathname,
  });
};

// Track Apply button clicks (Tally form)
export const trackApplyClick = (location: string) => {
  trackEvent('apply_clicked', {
    location: location,
    page: window.location.pathname,
  });
};

// Track Book Call button clicks (Cal.com)
export const trackBookCallClick = (location: string) => {
  trackEvent('book_call_clicked', {
    location: location,
    page: window.location.pathname,
  });
};

// Track Tally form submission
export const trackTallySubmission = (formId: string, responseId?: string) => {
  trackEvent('application_submitted', {
    form_id: formId,
    response_id: responseId,
    page: window.location.pathname,
  });
};

// Track Cal.com booking
export const trackCalBooking = (eventType: string, bookingId?: string) => {
  trackEvent('call_booked', {
    event_type: eventType,
    booking_id: bookingId,
    page: window.location.pathname,
  });
};

// Track section views
export const trackSectionView = (sectionName: string) => {
  trackEvent('section_viewed', {
    section_name: sectionName,
    page: window.location.pathname,
  });
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth_reached', {
    depth_percentage: depth,
    page: window.location.pathname,
  });
};

// Track video interactions
export const trackVideoInteraction = (action: 'play' | 'pause' | 'complete', videoId: string) => {
  trackEvent('video_interaction', {
    action,
    video_id: videoId,
    page: window.location.pathname,
  });
};

// Track Cal.com booking widget opened
export const trackBookingInitiated = (source: string) => {
  trackEvent('booking_initiated', {
    source,
    page: window.location.pathname,
  });
};

// Track external link clicks
export const trackExternalLink = (url: string, linkText: string) => {
  trackEvent('external_link_clicked', {
    url,
    link_text: linkText,
    page: window.location.pathname,
  });
};

// Track FAQ interactions
export const trackFAQInteraction = (question: string, action: 'expand' | 'collapse') => {
  trackEvent('faq_interaction', {
    question,
    action,
  });
};

// A/B Testing helpers
export const getFeatureFlag = (flagName: string): boolean | string | undefined => {
  return posthog.getFeatureFlag(flagName);
};

export const isFeatureEnabled = (flagName: string): boolean => {
  return posthog.isFeatureEnabled(flagName) ?? false;
};

// Identify user (for when they book a call or provide email)
export const identifyUser = (userId: string, properties?: Record<string, any>) => {
  posthog.identify(userId, properties);
};

export { posthog };
