# Matabi Cat Café & Gift Shop — Website

> **"A Cat Café to Return To!"**
> Jl. Dewi Sri No.8 Ruko F, Legian, Kec. Kuta, Kabupaten Badung, Bali 80361

---

## 📁 File Structure

```
matabi-website/
├── index.html              ← Homepage (English)
├── about.html              ← About Us (English)
├── menu.html               ← Menu (English)
├── cats.html               ← Meet the Cats (English)
├── gift-shop.html          ← Gift Shop (English)
├── gallery.html            ← Gallery (English)
├── contact.html            ← Contact (English)
│
├── zh/                     ← Traditional Chinese versions
│   ├── index.html
│   ├── about.html
│   ├── menu.html
│   ├── cats.html
│   ├── gift-shop.html
│   ├── gallery.html
│   └── contact.html
│
├── id/                     ← Bahasa Indonesia versions
│   ├── index.html
│   ├── ...
│   └── contact.html
│
├── assets/
│   ├── css/style.css       ← Global styles (all brand colors, layout)
│   ├── js/main.js          ← Nav, scroll reveal, mobile menu
│   ├── fonts/              ← ⚠️ Place DFPPaoW4-B5 font files here
│   │   ├── DFPPaoW4-B5.woff2
│   │   ├── DFPPaoW4-B5.woff
│   │   └── DFPPaoW4-B5.ttf
│   └── images/             ← ⚠️ Place all photos here
│       ├── logo.jpg            ← Matabi circular logo (required)
│       ├── og-image.jpg        ← 1200×630px for social sharing
│       ├── cafe-interior.jpg   ← Café interior photo
│       ├── cafe-cats-*.jpg     ← Individual cat photos
│       └── ig-1.jpg ... ig-6.jpg  ← Instagram grid photos
│
├── sitemap.xml             ← Full sitemap (all 3 languages)
├── robots.txt              ← Search engine crawler rules
├── _redirects              ← Cloudflare Pages URL redirects
├── _headers                ← Cloudflare Pages security headers
└── README.md               ← This file
```

---

## 🚀 Deploying to Cloudflare Pages

1. **Push to GitHub/GitLab** — commit all files to a repository
2. **Cloudflare Dashboard** → Pages → Create a project → Connect your repo
3. **Build settings:**
   - Build command: *(leave blank — static HTML)*
   - Build output directory: `/` (root)
4. **Deploy** → Cloudflare will deploy automatically on each push
5. **Custom Domain** — Add your domain in Pages → Custom Domains

---

## 🖼️ Images You Need to Add

Place all images in `assets/images/`. Required files:

| Filename | Size | Purpose |
|---|---|---|
| `logo.jpg` | 400×400px | The Matabi circular logo |
| `og-image.jpg` | 1200×630px | Social media sharing preview |
| `cafe-interior.jpg` | 1200×900px | About / homepage section |
| `cat-1.jpg` … `cat-6.jpg` | 600×600px | Individual cat profiles |
| `menu-bg.jpg` | 1400×700px | Menu page hero (optional) |
| `ig-1.jpg` … `ig-6.jpg` | 800×800px | Instagram grid on homepage |
| `gallery-1.jpg` … | 800×600px | Gallery page photos |

---

## 🔤 Font Setup

The brand font **DFPPaoW4-B5** is a commercial DynaFont product.
You must have a valid license to use it on the web.

1. Convert the font to web formats using [FontSquirrel](https://www.fontsquirrel.com/tools/webfont-generator) or similar
2. Place the output files in `assets/fonts/`:
   - `DFPPaoW4-B5.woff2` (preferred — smallest size)
   - `DFPPaoW4-B5.woff` (fallback)
   - `DFPPaoW4-B5.ttf` (fallback)

The CSS already has the `@font-face` declaration ready.
**Fallback**: If the font isn't loaded, `Noto Serif TC` (loaded from Google Fonts) is used as the fallback — it supports all three languages (Traditional Chinese, Latin, and Indonesian).

---

## 🌐 Domain & SEO Notes

- **Replace `matabicafe.com`** with your actual domain in:
  - All `<link rel="canonical">` tags
  - All `<meta property="og:url">` tags
  - `sitemap.xml` — all `<loc>` entries
  - `robots.txt` — Sitemap line
- **Google Search Console**: Submit `sitemap.xml` after launch
- **Google Business Profile**: Create/update your business listing and link to your website
- **hreflang**: Already set up for EN / zh-TW / id — links all language versions for Google

---

## 📋 Pages Checklist

- [x] `index.html` — Homepage (EN)
- [ ] `about.html` — About Us (EN)
- [ ] `menu.html` — Menu (EN)
- [ ] `cats.html` — Meet the Cats (EN)
- [ ] `gift-shop.html` — Gift Shop (EN)
- [ ] `gallery.html` — Gallery (EN)
- [ ] `contact.html` — Contact (EN)
- [ ] `zh/` — All 7 pages in Traditional Chinese
- [ ] `id/` — All 7 pages in Bahasa Indonesia

---

## 📞 Business Info Reference

| | |
|---|---|
| **Name** | Matabi Cat Café & Gift Shop |
| **Address** | Jl. Dewi Sri No.8 Ruko F, Legian, Kec. Kuta, Kabupaten Badung, Bali 80361 |
| **Phone / WhatsApp** | 0819-1345-8888 |
| **Hours** | 7 days/week · 10:00 AM – 10:00 PM (Bali time, WITA) |
| **Entry** | Minimum purchase Rp 50,000 per customer |
| **Instagram** | @matabicatcafe |
| **Facebook** | https://www.facebook.com/share/1Dvrdeeawm/ |

---

*Built for Cloudflare Pages · Optimized for Google Search*
