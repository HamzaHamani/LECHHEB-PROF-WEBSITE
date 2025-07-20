// Google Analytics configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Log the pageview with their URL
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// Log specific events happening
export const event = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track academic interactions
export const trackPublication = (publicationTitle: string, type: string) => {
  event('view_publication', 'Publications', `${type}: ${publicationTitle}`);
};

export const trackExternalLink = (url: string, linkType: string) => {
  event('click_external_link', 'External Links', `${linkType}: ${url}`);
};

export const trackContact = (method: string) => {
  event('contact_attempt', 'Contact', method);
};

export const trackLanguageChange = (language: string) => {
  event('language_change', 'UI', language);
};

export const trackThemeChange = (theme: string) => {
  event('theme_change', 'UI', theme);
};
