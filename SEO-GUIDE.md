# SEO, GEO, and AEO Customization Guide

This guide explains how to customize the SEO (Search Engine Optimization), GEO (Geo-targeting), and AEO (Answer Engine Optimization) features of the Oochi landing page template.

## Table of Contents
1. [SEO Basics](#seo-basics)
2. [GEO Optimization](#geo-optimization)
3. [AEO Optimization](#aeo-optimization)
4. [Implementation Examples](#implementation-examples)
5. [Testing & Verification](#testing--verification)

---

## SEO Basics

### What is SEO?
SEO helps search engines like Google understand and rank your website. Better SEO = higher visibility in search results.

### Core SEO Elements Already Implemented

✅ **Meta Tags**
- Title tag (60 characters)
- Meta description (160 characters)
- Keywords meta tag
- Canonical URL

✅ **Open Graph Tags**
- For social media sharing (Facebook, LinkedIn, etc.)
- Includes image, title, description

✅ **Twitter Cards**
- Optimized for Twitter/X sharing
- Summary large image format

✅ **Structured Data**
- JSON-LD format (Schema.org)
- Organization data
- Local business information

### Customizing Basic SEO

#### 1. Update Page Title & Description

**File:** `index.html`

```html
<!-- BEFORE -->
<title>Oochi</title>
<meta name="description" content="..." />

<!-- AFTER - Your Company -->
<title>YourCompany - Strategic Creative Agency | Design & Innovation</title>
<meta name="description" content="We create stunning digital experiences for tech companies. From pitch decks to brand strategy, we help you succeed." />
```

**Best Practices:**
- Title: 50-60 characters
- Include main keyword at the beginning
- Include brand name at the end
- Make it compelling - users see this in search results

#### 2. Update Keywords

```html
<meta name="keywords" content="your agency, design, strategy, presentations, tech, innovation, branding" />
```

**Keyword Strategy:**
- Research 5-10 relevant keywords (use Google Keyword Planner, SEMrush, Ahrefs)
- Include long-tail keywords (e.g., "creative agency for tech startups")
- Don't keyword stuff - keep it natural

#### 3. Update Canonical URL

```html
<link rel="canonical" href="https://your-agency-domain.com" />
```

Always point to your actual domain to avoid duplicate content issues.

---

## GEO Optimization

### What is GEO?
Geo-targeting helps search engines understand your business location and reach local customers.

### Customize GEO Tags

**File:** `index.html`

```html
<!-- Single Location -->
<meta name="geo.placename" content="San Francisco, CA" />
<meta name="geo.region" content="US-CA" />
<meta name="ICBM" content="37.7749,-122.4194" /> <!-- Latitude, Longitude -->

<!-- Multiple Locations -->
<!-- Repeat for each office location -->
```

### Update Business Address in Schema

**File:** `index.html` - Organization Schema

```json
{
  "@type": "Organization",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Your Street",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94105",
    "addressCountry": "US"
  }
}
```

### Create Multi-Location Schema

For agencies with multiple offices:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "YourCompany",
  "url": "https://yourcompany.com",
  "location": [
    {
      "@type": "Place",
      "name": "San Francisco Office",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Market St",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "postalCode": "94105",
        "addressCountry": "US"
      }
    },
    {
      "@type": "Place",
      "name": "New York Office",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "456 5th Ave",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "postalCode": "10017",
        "addressCountry": "US"
      }
    }
  ]
}
```

### Geo Coordinates

Get coordinates from:
- Google Maps (right-click → coordinates)
- [Latitude/Longitude Finder](https://www.latlong.net/)
- GPS coordinates format: "latitude,longitude"

---

## AEO Optimization

### What is AEO?
AEO (Answer Engine Optimization) helps AI models (ChatGPT, Claude, Gemini) understand and cite your content. As AI becomes more prominent in search, AEO becomes critical.

### 1. Add FAQ Schema

Great for AEO - AI models use FAQs to provide answers.

**Using the utility function** (`src/lib/seo.js`):

```javascript
import { addFAQStructuredData } from './lib/seo';

// Add to your component or App.jsx
addFAQStructuredData([
  {
    question: "What services does Oochi provide?",
    answer: "Oochi provides strategic presentation design, brand strategy, and digital design services for fast-growing tech companies."
  },
  {
    question: "How long does a project take?",
    answer: "Project timelines vary based on complexity. Most projects take 4-12 weeks from initial consultation to delivery."
  },
  {
    question: "Do you work with startups?",
    answer: "Yes! We specialize in working with early-stage startups and help them with fundraising presentations, pitch decks, and investor relations."
  },
  {
    question: "What industries do you serve?",
    answer: "We work with SaaS companies, fintech, healthtech, deeptech, and other B2B technology companies globally."
  }
]);
```

**Or manually in HTML:**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does your agency provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your detailed answer here..."
      }
    }
  ]
}
</script>
```

### 2. Optimize for Conversational Content

AI models look for natural language answers to questions.

**Good Content Structure:**
```
Question: "What is a pitch deck?"
Clear Answer: "A pitch deck is a 10-20 slide presentation that summarizes your business, 
including the problem, solution, market opportunity, team, and financial projections. 
Most startups use pitch decks when raising capital from investors."
```

### 3. Add Article/Blog Schema

If you have blog posts or content:

```javascript
import { addArticleStructuredData } from './lib/seo';

addArticleStructuredData({
  headline: "How to Create a Compelling Pitch Deck",
  description: "Guide to creating investor-ready presentations",
  image: "https://yoursite.com/images/pitch-deck.jpg",
  datePublished: "2024-01-15T10:30:00Z",
  author: "Your Name",
  url: "https://yoursite.com/blog/pitch-deck-guide"
});
```

### 4. Breadcrumb Schema (Navigation)

Helps AI understand site structure:

```javascript
import { addBreadcrumbStructuredData } from './lib/seo';

addBreadcrumbStructuredData([
  { name: "Home", url: "https://yoursite.com" },
  { name: "Services", url: "https://yoursite.com/services" },
  { name: "Pitch Deck Design", url: "https://yoursite.com/services/pitch-decks" }
]);
```

### 5. Write Content for AI (Answer Engine Optimization)

**Tips:**
1. **Use clear headings** - H1, H2, H3 hierarchy
2. **Answer questions directly** - First paragraph should answer the main question
3. **Provide context** - Explain the "why" not just the "what"
4. **Use lists and tables** - Structured data is easier for AI to parse
5. **Include statistics** - Real data helps credibility
6. **Use natural language** - Write as if explaining to a person

**Bad (not AEO optimized):**
```
Presentations. We do them. They're good. Call us.
```

**Good (AEO optimized):**
```
What are presentation design services?

Presentation design services involve creating professional, 
visually compelling slides and decks for business communications. 
This includes:

- Pitch decks for fundraising (typically 10-20 slides)
- Product launch presentations (30-50 slides)
- Internal strategy presentations
- Investor relations materials

Most tech companies spend 2-4 weeks on presentation design 
before major pitches or announcements.
```

### 6. Add Service Schema

```javascript
import { addServiceStructuredData } from './lib/seo';

addServiceStructuredData({
  name: "Pitch Deck Design",
  description: "Professional pitch deck creation for startup fundraising",
  provider: "Your Company",
  image: "https://yoursite.com/pitch-deck.jpg",
  areaServed: "US, EU, APAC",
  price: "3000", // Optional
  priceCurrency: "USD"
});
```

---

## Implementation Examples

### Example 1: Complete Agency Customization

**Step 1: Update index.html**

```html
<!-- Change title and description -->
<title>Creative Minds Studio - Brand & Design Agency | NYC</title>
<meta name="description" content="Full-service design agency specializing in brand identity, web design, and creative strategy for tech and finance companies." />

<!-- Update Open Graph -->
<meta property="og:title" content="Creative Minds Studio - Award-Winning Design Agency" />
<meta property="og:description" content="We create innovative digital experiences..." />
<meta property="og:image" content="https://yoursite.com/og-image.jpg" />

<!-- Update JSON-LD -->
<script type="application/ld+json">
{
  "@type": "Organization",
  "name": "Creative Minds Studio",
  "url": "https://creativeminds.com",
  "email": "hello@creativeminds.com",
  "address": {
    "streetAddress": "456 Broadway",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "postalCode": "10012",
    "addressCountry": "US"
  }
}
</script>
```

**Step 2: Add SEO Functions to App.jsx**

```jsx
import { useEffect } from 'react';
import { updateSEO, addFAQStructuredData, performSEOAudit } from './lib/seo';

function App() {
  useEffect(() => {
    // Update SEO on mount
    updateSEO({
      title: "Creative Minds Studio - Brand & Design Agency",
      description: "Full-service design agency...",
      keywords: "design agency, branding, web design, NYC",
      ogImage: "https://yoursite.com/og-image.jpg"
    });

    // Add FAQ data
    addFAQStructuredData([
      {
        question: "What's your design process?",
        answer: "Our process includes discovery, strategy, design, testing, and iteration..."
      },
      // More FAQs...
    ]);

    // Run audit (remove in production)
    performSEOAudit();
  }, []);

  return (
    // Your components...
  );
}
```

### Example 2: Geo-Targeted Agency

```javascript
// For multi-location agencies
const locations = [
  {
    name: "San Francisco",
    coords: "37.7749,-122.4194",
    region: "US-CA"
  },
  {
    name: "Austin",
    coords: "30.2672,-97.7431",
    region: "US-TX"
  },
  {
    name: "Miami",
    coords: "25.7617,-80.1918",
    region: "US-FL"
  }
];

// Update geo tags for each office location
locations.forEach(location => {
  // Update meta tags with location info
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify({
    "@type": "LocalBusiness",
    "name": `Your Agency - ${location.name}`,
    "address": {
      "streetAddress": "Your Address",
      "addressLocality": location.name
    }
  });
  document.head.appendChild(script);
});
```

---

## Testing & Verification

### 1. Google Search Console
- [Google Search Console](https://search.google.com/search-console)
- Submit your sitemap
- Monitor search performance
- Check for indexing errors

### 2. Structured Data Testing
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

**Steps:**
1. Go to Google Rich Results Test
2. Enter your website URL
3. Check for errors in structured data
4. Verify breadcrumbs, FAQs, organization details

### 3. Open Graph Preview
- [Facebook OG Debug Tool](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### 4. Lighthouse Audit
Built into Chrome DevTools:
1. Open DevTools (F12)
2. Click Lighthouse tab
3. Run SEO audit
4. Review recommendations

### 5. SEO Audit in Code

```javascript
// Import and run audit
import { performSEOAudit } from './lib/seo';

// In your component or App
performSEOAudit();
// Check console for results
```

### 6. AEO Testing

**Test with AI Models:**
1. Copy some page content
2. Ask ChatGPT/Claude: "Based on this content, what does this company do?"
3. Check if the answer is accurate and complete
4. Iterate if needed

**Example:**
```
Content: "We create pitch decks that help startups raise $1M+. Our average success 
rate is 87%. We specialize in SaaS, Fintech, and Deeptech companies."

Question: "What does this agency specialize in?"

Good AEO = Clear, accurate answer from AI
```

---

## Monitoring & Maintenance

### Monthly SEO Tasks
- [ ] Check Google Search Console for errors
- [ ] Monitor ranking keywords
- [ ] Review analytics for top pages
- [ ] Update outdated content
- [ ] Check for broken links

### Quarterly Tasks
- [ ] Run Lighthouse audit
- [ ] Update structured data if content changes
- [ ] Review competitor SEO strategies
- [ ] Test Open Graph/Twitter previews
- [ ] Check mobile usability

### Annual Tasks
- [ ] Comprehensive site audit
- [ ] Update all structured data
- [ ] Refresh outdated content
- [ ] Review and update keywords
- [ ] Plan content calendar for next year

---

## Common SEO Mistakes to Avoid

❌ **Duplicate Content** - Use canonical tags
❌ **Thin Content** - Create substantial, valuable content
❌ **Keyword Stuffing** - Write naturally
❌ **Broken Links** - Regularly audit and fix
❌ **Missing Meta Tags** - Include all SEO basics
❌ **Poor Mobile Experience** - Test on mobile devices
❌ **Slow Load Times** - Optimize images and code
❌ **No Structured Data** - Add JSON-LD schemas
❌ **Irrelevant Keywords** - Research before implementing
❌ **Outdated Information** - Keep content current

---

## Resources & Tools

**Free Tools:**
- [Google Search Console](https://search.google.com/search-console)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Screaming Frog SEO Spider](https://www.screamingfrog.co.uk/seo-spider/) (free version)

**Keyword Research:**
- [Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/) (free)
- [Ubersuggest](https://ubersuggest.com/) (freemium)
- [Moz Keyword Explorer](https://moz.com/keyword-explorer) (paid)

**Paid Tools:**
- [SEMrush](https://www.semrush.com/)
- [Ahrefs](https://ahrefs.com/)
- [Moz Pro](https://moz.com/pro)

---

## Summary

**SEO** - Make it findable ✅
- Meta tags, keywords, canonicals

**GEO** - Make it locatable ✅
- Location data, local schema, region targeting

**AEO** - Make it answerable ✅
- FAQ schema, structured data, conversational content

By implementing all three, your Oochi landing page template will have:
- ✅ Better Google rankings
- ✅ Higher click-through rates from search
- ✅ Better AI understanding and citations
- ✅ Improved social media sharing
- ✅ Local visibility for geo-targeted services

---

Happy optimizing! 🚀
