# Oochi Template - Quick Start Guide

Get your agency landing page live in 15 minutes!

---

## ⚡ 5-Minute Setup

### Step 1: Install Dependencies (2 min)
```bash
npm install
```

### Step 2: Start Dev Server (1 min)
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Step 3: Update Basic Info (2 min)

**Edit `index.html`:**
```html
<!-- Line 11: Update title -->
<title>YOUR AGENCY - Your Tagline</title>

<!-- Line 14: Update description -->
<meta name="description" content="Your company description here" />
```

**That's it! Basic setup done.** ✅

---

## 🎨 15-Minute Customization

### 1. Update Hero Section (5 min)

**File:** `src/Components/LandingPage.jsx`

Find this and replace:
```jsx
{["We Create", "Eye-Opening", "Presentations"].map((item, index) => (
```

Change to:
```jsx
{["YOUR HEADLINE", "LINE TWO", "LINE THREE"].map((item, index) => (
```

### 2. Update About Section (3 min)

**File:** `src/Components/About.jsx`

Find:
```jsx
<h1 className='text-2xl md:text-4xl...'>
  Ochi is a strategic partner...
</h1>
```

Replace with your mission statement.

### 3. Replace Images (5 min)

**Option A: Use Unsplash**
- Find all `src="https://images.unsplash.com/..."`
- Replace URL with your Unsplash image

**Option B: Upload Your Own**
1. Save images to `public/images/`
2. Use: `src="/images/your-image.jpg"`

### 4. Update Footer (2 min)

**File:** `src/Components/Footer.jsx`

Update:
- Company name
- Email address
- Phone number
- Social media links

---

## 🚀 30-Minute Full Setup

### Additional Customizations

#### Add Company Name Everywhere
1. Search for "Oochi" in codebase
2. Replace with your company name
3. Update social media handles

#### Update Colors
1. Find `bg-yellow-400` in components
2. Change to your brand color
3. Update `text-zinc-900` for text

#### Add FAQ Section
1. Go to `src/App.jsx`
2. Add before `</div>`:
```jsx
import FAQ from './Components/FAQ'

// Inside return:
<FAQ />
```

#### Update Keywords
In `index.html`, find:
```html
<meta name="keywords" content="..." />
```

Add your keywords:
```html
<meta name="keywords" content="your keyword 1, keyword 2, keyword 3" />
```

---

## ✅ Pre-Launch Quick Checklist

- [ ] Changed title and description
- [ ] Updated hero headline
- [ ] Replaced images
- [ ] Updated contact info
- [ ] Tested on mobile
- [ ] Ran PageSpeed Insights
- [ ] Checked for typos

---

## 🚀 Deploy in 5 Minutes

### Option 1: Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Option 3: GitHub Pages
```bash
npm run build
# Upload dist/ folder to gh-pages branch
```

---

## 🔍 Quick SEO Check

1. **Google PageSpeed Insights**
   - Go to: https://pagespeed.web.dev/
   - Paste your URL
   - Target score: 90+

2. **Google Rich Results Test**
   - Go to: https://search.google.com/test/rich-results
   - Paste your URL
   - Check for errors

3. **Twitter Card Preview**
   - Go to: https://cards-dev.twitter.com/validator
   - Paste your URL
   - Verify preview looks good

---

## 📁 File Quick Reference

| File | What to Edit | What for |
|------|-------------|----------|
| `index.html` | Meta tags | SEO, social sharing |
| `src/App.jsx` | Component imports | Add/remove sections |
| `src/Components/LandingPage.jsx` | Hero text | Main headline |
| `src/Components/About.jsx` | Mission statement | Value proposition |
| `src/Components/Services.jsx` | Service titles | What you offer |
| `src/Components/FAQ.jsx` | Questions/answers | FAQ section |
| `src/Components/Footer.jsx` | Contact info | Contact details |

---

## 🎯 Essential Customizations (Must Do)

1. ✅ Update page title (index.html)
2. ✅ Update description (index.html)
3. ✅ Change hero headline (LandingPage.jsx)
4. ✅ Update company info (Footer.jsx)
5. ✅ Replace placeholder images
6. ✅ Update social links (Footer.jsx)

---

## 💡 Optional Customizations (Nice to Have)

1. Change colors to match brand
2. Update fonts to match brand
3. Add company logo
4. Customize FAQ questions
5. Add more sections
6. Adjust animation speeds

---

## 🆘 Common Issues

**Issue: Images not showing?**
- Make sure image URLs are correct
- Check that Unsplash images work
- Try uploading to `public/images/`

**Issue: Website looks slow?**
- Compress images using TinyPNG
- Run PageSpeed Insights
- Check browser cache

**Issue: Mobile looks bad?**
- Test in Chrome DevTools (F12)
- Check responsive design
- Adjust text sizes if needed

**Issue: Meta tags not updating?**
- Edit `index.html` (not components)
- Clear browser cache
- Check browser DevTools

---

## 📚 Need More Help?

- **Installation?** → See README.md
- **SEO details?** → See SEO-GUIDE.md
- **Full customization?** → See IMPLEMENTATION-GUIDE.md
- **Pre-launch?** → See PRE-PUBLICATION-CHECKLIST.md
- **What's included?** → See V0_TEMPLATE_INFO.md

---

## 🎉 You're Done!

Once you've completed these steps:

✅ Your landing page is live
✅ SEO is optimized
✅ Mobile responsive
✅ Ready for your audience

**Next steps:**
1. Add your domain name
2. Set up Google Search Console
3. Share with your network
4. Start driving traffic!

---

## 📊 Success Metrics

After launch, monitor:

| Metric | Tool | Target |
|--------|------|--------|
| Page Speed | PageSpeed Insights | 90+ |
| SEO Score | Lighthouse | 90+ |
| Mobile Usability | Google Search Console | Pass |
| Structured Data | Rich Results Test | 0 errors |

---

## 💬 Pro Tips

1. **Mobile First** - Always test on actual phones
2. **Content is King** - Great copy beats fancy design
3. **Load Speed Matters** - Optimize images before upload
4. **Mobile Optimization** - 60%+ of users are on mobile
5. **Social Sharing** - Test on Facebook, Twitter, LinkedIn
6. **Keep Updated** - Monitor Google Search Console monthly

---

## 🚀 Ready?

```bash
npm run dev
```

Start editing and see live changes! 🎨

---

**Questions?** Check the docs or run:
```bash
npm run build  # Build for production
npm run preview  # Preview production build
```

Good luck! 🍀
