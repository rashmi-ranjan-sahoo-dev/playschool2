import { useEffect, useRef, useState } from 'react';

/**
 * High-performance, bulletproof scroll reveal hook.
 * Features:
 * 1. Immediate viewport check on mount (no flash of invisibility for above-the-fold/nearby content)
 * 2. Anticipatory rootMargin (triggers 80px before element enters viewport)
 * 3. Fast automatic safety fallback (guarantees visibility within 300ms)
 * 4. Zero layout shifts and guarantees content/cards are NEVER stuck invisible.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // 1. Immediate check: if already in or near viewport, reveal immediately
    try {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= viewportHeight + 120 && rect.bottom >= -100) {
        setIsVisible(true);
        return;
      }
    } catch {
      // Fall through to observer if getBoundingClientRect is unavailable
    }

    // 2. Safety fallback: guarantees visibility after 300ms in case observer is delayed
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, options.fallbackDelay ?? 300);

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return () => clearTimeout(timer);
    }

    // 3. Anticipatory IntersectionObserver: triggers 80px before element enters view
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(element);
        clearTimeout(timer);
      }
    }, {
      threshold: options.threshold ?? 0.01,
      rootMargin: options.rootMargin ?? '0px 0px 80px 0px',
    });

    observer.observe(element);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [options.threshold, options.rootMargin, options.fallbackDelay]);

  return [ref, isVisible];
}
