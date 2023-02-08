/**
 * Tracks a pageview to our "imaginary api" - in this demo just the browser console. ;)
 * Params: visitorId, variationType, pageViewCounts
 */
export const trackPageview = (params) => {
  console.log(`--> Tracking Pageview:`, params);
};

/**
 * Tracks an event to our "imaginary api" - in this demo just the browser console. ;)
 * Params: visitorId, variationType, eventCounts, eventType
 */
export const trackEvent = (params) => {
  console.log(`--> Tracking Event:`,params);
};
