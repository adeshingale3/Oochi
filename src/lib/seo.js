/**
 * SEO, GEO, and AEO Utilities
 * Helper functions for managing metadata, structured data, and optimization
 */

/**
 * Update document title and meta tags
 * @param {Object} options - SEO options
 * @param {string} options.title - Page title
 * @param {string} options.description - Meta description
 * @param {string} options.keywords - Meta keywords
 * @param {string} options.canonical - Canonical URL
 * @param {string} options.ogImage - Open Graph image URL
 * @param {string} options.ogUrl - Open Graph URL
 * @param {string} options.twitterHandle - Twitter handle
 */
export const updateSEO = ({
  title = 'Oochi - Strategic Agency for Tech Companies',
  description = 'Strategic partner for fast-growing tech businesses. We create eye-opening presentations for fundraising, product launches, and growth.',
  keywords = 'agency, presentations, strategy, design, tech',
  canonical = 'https://oochi.agency',
  ogImage = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop',
  ogUrl = 'https://oochi.agency',
  twitterHandle = '@oochi_agency'
} = {}) => {
  // Update document title
  document.title = title;

  // Update or create meta tags
  updateMetaTag('description', description);
  updateMetaTag('keywords', keywords);
  updateMetaTag('og:title', title, true);
  updateMetaTag('og:description', description, true);
  updateMetaTag('og:image', ogImage, true);
  updateMetaTag('og:url', ogUrl, true);
  updateMetaTag('twitter:title', title, true);
  updateMetaTag('twitter:description', description, true);
  updateMetaTag('twitter:card', 'summary_large_image', true);
  updateMetaTag('twitter:site', twitterHandle, true);

  // Update canonical link
  updateCanonicalLink(canonical);
};

/**
 * Update or create a meta tag
 * @param {string} name - Meta tag name or property
 * @param {string} content - Meta tag content
 * @param {boolean} isProperty - Whether to use property attribute (og, twitter)
 */
const updateMetaTag = (name, content, isProperty = false) => {
  const attribute = isProperty ? 'property' : 'name';
  let tag = document.querySelector(`meta[${attribute}="${name}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
};

/**
 * Update or create canonical link
 * @param {string} url - Canonical URL
 */
const updateCanonicalLink = (url) => {
  let link = document.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }

  link.href = url;
};

/**
 * Add JSON-LD structured data (Schema.org)
 * Useful for SEO and AI/LLM understanding (AEO)
 * @param {Object} schema - Schema.org compliant object
 */
export const addStructuredData = (schema) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

/**
 * Create FAQ structured data
 * Great for AEO - AI engines use this for answers
 * @param {Array} faqs - Array of FAQ items
 */
export const addFAQStructuredData = (faqs) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  addStructuredData(schema);
};

/**
 * Create article/blog post structured data
 * @param {Object} article - Article data
 */
export const addArticleStructuredData = ({
  headline = '',
  description = '',
  image = '',
  datePublished = new Date().toISOString(),
  author = 'Oochi',
  url = ''
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image,
    datePublished,
    author: {
      '@type': 'Person',
      name: author
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  };

  addStructuredData(schema);
};

/**
 * Create breadcrumb structured data
 * Helps with navigation and SEO
 * @param {Array} breadcrumbs - Array of breadcrumb items
 */
export const addBreadcrumbStructuredData = (breadcrumbs) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };

  addStructuredData(schema);
};

/**
 * Create local business structured data
 * Great for GEO - helps with local SEO
 * @param {Object} business - Business data
 */
export const addLocalBusinessStructuredData = ({
  name = 'Oochi Agency',
  description = '',
  address = {},
  telephone = '',
  email = '',
  image = '',
  url = 'https://oochi.agency',
  sameAs = []
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    image,
    telephone,
    email,
    url,
    address: {
      '@type': 'PostalAddress',
      ...address
    },
    sameAs
  };

  addStructuredData(schema);
};

/**
 * Create product/service structured data
 * @param {Object} service - Service data
 */
export const addServiceStructuredData = ({
  name = '',
  description = '',
  provider = 'Oochi',
  image = '',
  areaServed = 'US',
  price = '',
  priceCurrency = 'USD'
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider
    },
    image,
    areaServed,
    ...(price && {
      offers: {
        '@type': 'Offer',
        price,
        priceCurrency
      }
    })
  };

  addStructuredData(schema);
};

/**
 * Add Open Graph image with fallback
 * @param {string} imageUrl - Image URL
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {string} type - Image MIME type
 */
export const updateOGImage = (imageUrl, width = 1200, height = 630, type = 'image/jpeg') => {
  updateMetaTag('og:image', imageUrl, true);
  updateMetaTag('og:image:width', width.toString(), true);
  updateMetaTag('og:image:height', height.toString(), true);
  updateMetaTag('og:image:type', type, true);
};

/**
 * Track pageview for analytics (AEO helps with visibility)
 * Integration point for Google Analytics, Mixpanel, etc.
 * @param {string} pageName - Page name/path
 * @param {Object} metadata - Additional metadata
 */
export const trackPageView = (pageName, metadata = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('pageview', {
      page_path: pageName,
      page_title: document.title,
      ...metadata
    });
  }

  // Log for debugging
  console.log('[SEO] Page view tracked:', pageName, metadata);
};

/**
 * Add JSON-LD for Person (Author/Creator)
 * Useful for bylines and author information
 */
export const addPersonStructuredData = ({
  name = '',
  url = '',
  image = '',
  sameAs = []
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    url,
    image,
    sameAs
  };

  addStructuredData(schema);
};

/**
 * Add JSON-LD for Organization
 * Already in index.html, but can be updated dynamically
 */
export const updateOrganizationData = ({
  name = 'Oochi',
  url = 'https://oochi.agency',
  logo = '',
  description = '',
  sameAs = [],
  contactPoint = {}
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    description,
    sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      ...contactPoint
    }
  };

  addStructuredData(schema);
};

/**
 * SEO Audit Helper
 * Check if page has proper SEO elements
 */
export const performSEOAudit = () => {
  const audit = {
    hasMetaDescription: !!document.querySelector('meta[name="description"]'),
    hasMetaKeywords: !!document.querySelector('meta[name="keywords"]'),
    hasCanonical: !!document.querySelector('link[rel="canonical"]'),
    hasOGTags: !!document.querySelector('meta[property="og:title"]'),
    hasTwitterTags: !!document.querySelector('meta[name="twitter:card"]'),
    hasStructuredData: !!document.querySelector('script[type="application/ld+json"]'),
    hasH1: !!document.querySelector('h1'),
    titleLength: document.title.length,
    descriptionLength: document.querySelector('meta[name="description"]')?.getAttribute('content')?.length || 0,
    images: document.querySelectorAll('img').length,
    imagesWithoutAlt: document.querySelectorAll('img:not([alt])').length
  };

  // Log results
  console.table(audit);
  return audit;
};

/**
 * Generate dynamic sitemap entry data
 * Use to send to sitemap generator
 */
export const generateSitemapEntry = ({
  url,
  lastmod = new Date().toISOString().split('T')[0],
  changefreq = 'weekly',
  priority = 0.8
}) => {
  return {
    url,
    lastmod,
    changefreq,
    priority
  };
};

/**
 * Export default utilities object
 */
export default {
  updateSEO,
  addStructuredData,
  addFAQStructuredData,
  addArticleStructuredData,
  addBreadcrumbStructuredData,
  addLocalBusinessStructuredData,
  addServiceStructuredData,
  updateOGImage,
  trackPageView,
  addPersonStructuredData,
  updateOrganizationData,
  performSEOAudit,
  generateSitemapEntry
};
