export function trackEvent(eventName: string, properties?: Record<string, any>) {
  if (typeof window === 'undefined') return;

  // Optional PostHog / Vercel Analytics integration hook
  const w = window as any;
  if (w.posthog) {
    w.posthog.capture(eventName, properties);
  }
}
