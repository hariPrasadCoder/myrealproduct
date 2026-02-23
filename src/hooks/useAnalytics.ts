import { useEffect, useRef, useState } from 'react';
import { trackScrollDepth, trackSectionView } from '../lib/posthog';

// Track scroll depth milestones (25%, 50%, 75%, 100%)
export const useScrollDepthTracking = () => {
  const trackedDepths = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      const milestones = [25, 50, 75, 100];
      
      milestones.forEach((milestone) => {
        if (scrollPercent >= milestone && !trackedDepths.current.has(milestone)) {
          trackedDepths.current.add(milestone);
          trackScrollDepth(milestone);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

// Track when a section enters the viewport
export const useSectionTracking = (sectionName: string) => {
  const sectionRef = useRef<HTMLElement>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            hasTracked.current = true;
            trackSectionView(sectionName);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [sectionName]);

  return sectionRef;
};

// Track time spent on page
export const useTimeOnPage = () => {
  useEffect(() => {
    const startTime = Date.now();

    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      // PostHog handles this with capture_pageleave, but we can add custom tracking
      if (typeof window !== 'undefined' && (window as any).posthog) {
        (window as any).posthog.capture('time_on_page', {
          seconds: timeSpent,
          page: window.location.pathname,
        });
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);
};

// Hook to track A/B test variant exposure
export const useABTest = (testName: string, variants: string[]): string => {
  const [variant, setVariant] = useState<string>(variants[0]);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).posthog) {
      const posthog = (window as any).posthog;
      
      // Wait for PostHog to load feature flags
      posthog.onFeatureFlags(() => {
        const flag = posthog.getFeatureFlag(testName);
        if (flag && variants.includes(flag as string)) {
          setVariant(flag as string);
        }
      });
    }
  }, [testName, variants]);

  return variant;
};
