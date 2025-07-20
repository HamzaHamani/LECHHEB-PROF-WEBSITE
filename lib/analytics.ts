// Google Analytics configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Check if GA is enabled
export const isGAEnabled = () => GA_TRACKING_ID && typeof window !== 'undefined';

// Initialize GA with enhanced academic tracking
export const initGA = () => {
  if (!isGAEnabled()) return;
  
  (window as any).gtag('config', GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
    anonymize_ip: true, // Privacy compliance
    allow_google_signals: false, // Academic privacy
    restricted_data_processing: true, // GDPR compliance
  });
};

// Log the pageview with their URL
export const pageview = (url: string) => {
  if (isGAEnabled() && (window as any).gtag) {
    (window as any).gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// Log specific events happening
export const event = (action: string, category: string, label?: string, value?: number) => {
  if (isGAEnabled() && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Enhanced academic tracking functions
export const trackPublication = (publicationTitle: string, type: string, year?: number) => {
  event('view_publication', 'Academic_Publications', `${type}: ${publicationTitle}`, year);
};

export const trackPublicationFilter = (filterType: string, resultCount: number) => {
  event('filter_publications', 'Publications_Filter', filterType, resultCount);
};

export const trackExternalLink = (url: string, linkType: string, context?: string) => {
  event('click_external_link', 'External_Links', `${linkType}: ${url} (${context || 'general'})`);
};

export const trackAcademicProfile = (platform: string) => {
  event('visit_academic_profile', 'Academic_Profiles', platform);
};

export const trackResearchInterest = (topic: string) => {
  event('explore_research_topic', 'Research_Interests', topic);
};

export const trackContact = (method: string, context?: string) => {
  event('contact_attempt', 'Contact', `${method}${context ? ` - ${context}` : ''}`);
};

export const trackLanguageChange = (fromLang: string, toLang: string) => {
  event('language_change', 'UI_Interaction', `${fromLang} to ${toLang}`);
};

export const trackThemeChange = (fromTheme: string, toTheme: string) => {
  event('theme_change', 'UI_Interaction', `${fromTheme} to ${toTheme}`);
};

export const trackSearchQuery = (query: string, resultCount?: number) => {
  event('site_search', 'Search', query, resultCount);
};

export const trackDownload = (fileName: string, fileType: string) => {
  event('file_download', 'Downloads', `${fileType}: ${fileName}`);
};

// Track user engagement with academic content
export const trackTimeOnPage = (pageName: string, timeSpent: number) => {
  event('time_on_page', 'Engagement', pageName, Math.round(timeSpent / 1000)); // Convert to seconds
};

export const trackScrollDepth = (pageName: string, scrollPercentage: number) => {
  event('scroll_depth', 'Engagement', pageName, scrollPercentage);
};
