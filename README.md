# Oochi - Strategic Agency Landing Page Template

**A modern, high-performance agency landing page template designed for tech-driven businesses.**

![Oochi Agency Landing Page](https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop)

## Overview

Oochi is a professional agency landing page template built with **React + Vite + TailwindCSS**. It showcases a strategic agency's services, approach, and expertise with stunning animations, interactive elements, and modern design principles.

### Perfect For:
- Design & Creative Agencies
- Digital Strategy Firms
- Presentation & Pitch Deck Services
- Tech Consulting Companies
- Fundraising & Investor Relations Specialists
- Product Launch Agencies

## Key Features

### 🎨 **Visual Excellence**
- Smooth scroll animations with Locomotive Scroll
- Framer Motion for fluid, interactive animations
- Responsive design optimized for all devices
- Custom cursor interactions
- Circular reveal animations
- Dynamic image galleries

### 🚀 **Performance**
- Lightning-fast Vite build process
- Optimized React 18 with strict mode
- CSS-in-JS with Tailwind for minimal bundle size
- Lazy-loaded images and components
- Mobile-first responsive design

### 📱 **Fully Responsive**
- Mobile-optimized navigation
- Adaptive layouts for tablets and desktops
- Touch-friendly interactive elements
- Accessible component structure

### 🔍 **SEO & Digital Marketing**
- Comprehensive SEO meta tags
- Open Graph tags for social media sharing
- Twitter Card optimization
- JSON-LD structured data (Schema.org)
- Multiple location/geo targeting support
- Answer Engine Optimization (AEO) for AI indexing
- Canonical URLs
- Semantic HTML structure

### ♿ **Accessibility**
- Semantic HTML elements
- ARIA-compliant component structure
- Proper color contrast
- Keyboard navigation support
- Screen reader friendly

## Technology Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | UI Framework |
| **Vite 5** | Build tool & Dev server |
| **Tailwind CSS 3** | Utility-first CSS styling |
| **Framer Motion 11** | Smooth animations |
| **Locomotive Scroll 5** | Scroll-based animations |
| **GSAP 3** | Advanced animation library |
| **React Icons 5** | Icon library |

## Project Structure

```
oochi/
├── src/
│   ├── Components/
│   │   ├── About.jsx              # About section with value proposition
│   │   ├── Cards.jsx              # Feature cards
│   │   ├── CircularRevealHeading.jsx   # Circular animated reveal
│   │   ├── CustomCursor.jsx       # Custom cursor interaction
│   │   ├── Eyes.jsx               # Interactive eye-tracking animation
│   │   ├── Feature.jsx            # Feature showcase section
│   │   ├── Footer.jsx             # Footer with links
│   │   ├── LandingPage.jsx        # Hero section
│   │   ├── Marquee.jsx            # Animated marquee
│   │   ├── Navbar.jsx             # Navigation bar
│   │   ├── RevealImages.jsx       # Service showcase with image reveal
│   │   └── Services.jsx           # Services section
│   ├── App.jsx                    # Main app component
│   ├── main.jsx                   # React entry point
│   ├── index.css                  # Global styles
│   └── lib/
│       └── utils.js               # Utility functions
├── public/
│   └── vite.svg                   # Vite logo
├── index.html                     # HTML entry point with SEO
├── package.json                   # Dependencies
├── tailwind.config.js             # Tailwind configuration
├── vite.config.js                 # Vite configuration
└── README.md                      # This file
```

## Installation & Setup

### Prerequisites
- Node.js 16+ (18+ recommended)
- npm, yarn, pnpm, or bun

### Quick Start

1. **Clone or download the template**
   ```bash
   git clone https://github.com/adeshingale3/oochi.git
   cd oochi
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Customization Guide

### Update Your Brand Information

#### 1. **HTML Meta Tags** (`index.html`)
Update company info, description, and contact details in the SEO section:
```html
<title>Your Company - Modern Agency Landing Page</title>
<meta name="description" content="Your company description here" />
```

#### 2. **Schema.org Structured Data**
Modify JSON-LD scripts for your company:
```json
{
  "name": "Your Company Name",
  "url": "https://your-domain.com",
  "email": "hello@yourcompany.com",
  "address": { ... }
}
```

#### 3. **Component Content**
Update text in individual components:
- `Navbar.jsx` - Navigation items
- `LandingPage.jsx` - Hero copy and CTAs
- `About.jsx` - Company value proposition
- `Services.jsx` - Your services
- `Footer.jsx` - Footer links and contact

### Styling Customization

#### Colors
Modify in `index.css` and `tailwind.config.js`:
```css
/* Update primary colors */
:root {
  --primary: #your-color;
  --secondary: #your-color;
}
```

#### Fonts
Currently using Google Fonts (Montserrat, Poppins). Update in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```

### Adding Images

Replace image URLs (currently using Unsplash):
```jsx
<img 
  src="your-image-url" 
  alt="Descriptive alt text for SEO"
  className="w-full h-full object-cover"
/>
```

### Enable Animation Speed Control
Modify speed values in components:
```jsx
<div data-scroll-speed=".3">  {/* Adjust scroll speed */}
```

## Performance Optimization

### Already Implemented:
- ✅ Image optimization with `object-fit` and responsive sizes
- ✅ Font preloading in HTML head
- ✅ CSS minification via Tailwind
- ✅ Lazy scroll animations
- ✅ Efficient React component splitting

### Additional Tips:
1. **Compress images** to WebP format
2. **Use CDN** for image delivery (e.g., Cloudinary, Imgix)
3. **Enable gzip** compression on server
4. **Implement caching** strategies
5. **Monitor Core Web Vitals** with Web Vitals CLI

## SEO & Marketing Features

### Search Engine Optimization (SEO)
- Meta descriptions for all pages
- Proper heading hierarchy (h1, h2, h3)
- Internal linking structure
- Mobile-friendly responsive design
- Fast page load times
- Semantic HTML5 markup

### Geo-Targeting (GEO)
- Location-based meta tags
- Geographic schema markup
- Support for multi-location services
- Localized content structure

### Answer Engine Optimization (AEO)
- FAQ structured data support (ready to add)
- Conversational content
- Question-based headings
- Featured snippet optimization
- Clear, concise answers to user queries
- Schema.org structured data for AI indexing

### Social Media Integration
- Open Graph tags for Facebook/LinkedIn sharing
- Twitter Card optimization
- Preview-friendly content structure
- Shareable hero section imagery

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome | Latest 2 versions |
| Firefox | Latest 2 versions |
| Safari | Latest 2 versions |
| Edge | Latest 2 versions |
| Mobile (iOS/Android) | Latest 2 versions |

## Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages
```bash
npm run build
# Upload dist/ folder to gh-pages branch
```

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## Accessibility Checklist

- [x] Semantic HTML structure
- [x] Color contrast compliance (WCAG AA)
- [x] Keyboard navigation support
- [x] ARIA labels on interactive elements
- [x] Alt text on all meaningful images
- [x] Focus indicators visible
- [x] Screen reader friendly content

## Performance Metrics Target

- **Lighthouse Score:** 90+
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1
- **Time to Interactive:** < 3s

## Common Issues & Solutions

### Issue: Scroll animations not working
**Solution:** Ensure Locomotive Scroll is initialized and elements have `data-scroll` attributes.

### Issue: Images not loading
**Solution:** Check image URLs and ensure CORS is enabled for external images.

### Issue: Animations lag on mobile
**Solution:** Disable animations on mobile devices using CSS media queries or component props.

```jsx
const isMobile = window.innerWidth < 768;
const animate = isMobile ? false : true;
```

## Contributing

To contribute improvements:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this template for personal and commercial projects.

## Support & Contact

- **Email:** support@oochi.agency
- **Twitter:** [@oochi_agency](https://twitter.com/oochi_agency)
- **LinkedIn:** [Oochi Agency](https://linkedin.com/company/oochi-agency)
- **Website:** [oochi.agency](https://oochi.agency)

## Credits

- Design inspiration from modern agency websites
- Images from Unsplash
- Icons from React Icons
- Animation libraries: Framer Motion, GSAP, Locomotive Scroll

## Changelog

### v1.0.0 (Current)
- Initial release
- Full SEO optimization
- Responsive design
- Smooth animations
- Component library ready

---

**Ready to launch your agency? Start customizing now!** 🚀

For detailed customization guidance, check out the [Customization Guide](#customization-guide) section above.
