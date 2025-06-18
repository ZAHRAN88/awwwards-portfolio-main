import { useEffect } from 'react';
import { seoConfig } from '../config/seo';

const SEO = ({
  title,
  description,
  keywords,
  author = seoConfig.author,
  url = seoConfig.siteUrl,
  image = seoConfig.ogImage.url,
  type = "website",
  twitterHandle = seoConfig.social.twitter,
  locale = "en_US",
  siteName = seoConfig.siteName,
  pageKey = null
}) => {
  // Use page-specific config if pageKey is provided
  const pageConfig = pageKey ? seoConfig.pages[pageKey] : null;
  
  // Set defaults from config
  const finalTitle = title || pageConfig?.title || seoConfig.defaultTitle;
  const finalDescription = description || pageConfig?.description || seoConfig.defaultDescription;
  const finalKeywords = keywords || seoConfig.keywords.join(", ");
  const finalUrl = url || (pageConfig ? `${seoConfig.siteUrl}${pageConfig.path}` : seoConfig.siteUrl);

  useEffect(() => {
    // Update document title
    document.title = finalTitle;

    // Function to update or create meta tag
    const updateMetaTag = (property, content, attribute = 'name') => {
      if (!content) return; // Skip if content is empty
      
      let metaTag = document.querySelector(`meta[${attribute}="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute(attribute, property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', finalDescription);
    updateMetaTag('keywords', finalKeywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow');

    // Open Graph meta tags
    updateMetaTag('og:title', finalTitle, 'property');
    updateMetaTag('og:description', finalDescription, 'property');
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:url', finalUrl, 'property');
    updateMetaTag('og:image', image, 'property');
    updateMetaTag('og:image:width', seoConfig.ogImage.width.toString(), 'property');
    updateMetaTag('og:image:height', seoConfig.ogImage.height.toString(), 'property');
    updateMetaTag('og:image:alt', seoConfig.ogImage.alt, 'property');
    updateMetaTag('og:site_name', siteName, 'property');
    updateMetaTag('og:locale', locale, 'property');

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:site', twitterHandle);
    updateMetaTag('twitter:creator', twitterHandle);
    updateMetaTag('twitter:title', finalTitle);
    updateMetaTag('twitter:description', finalDescription);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:image:alt', seoConfig.ogImage.alt);

    // Additional SEO meta tags
    updateMetaTag('theme-color', seoConfig.themeColor);
    updateMetaTag('msapplication-TileColor', seoConfig.themeColor);
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
    updateMetaTag('format-detection', 'telephone=no');

    // Update structured data
    const structuredData = pageKey === 'home' 
      ? [seoConfig.structuredData.person, seoConfig.structuredData.website]
      : seoConfig.structuredData.person;

    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(Array.isArray(structuredData) ? structuredData : [structuredData]);

    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = finalUrl;

    // Add alternate language links
    let alternateLang = document.querySelector('link[rel="alternate"][hreflang="en"]');
    if (!alternateLang) {
      alternateLang = document.createElement('link');
      alternateLang.rel = 'alternate';
      alternateLang.hreflang = 'en';
      document.head.appendChild(alternateLang);
    }
    alternateLang.href = finalUrl;

  }, [finalTitle, finalDescription, finalKeywords, author, finalUrl, image, type, twitterHandle, locale, siteName, pageKey]);

  return null;
};

export default SEO; 