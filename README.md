# RackMinder Website

Official website for RackMinder - the smart roof rack safety app that prevents garage damage.

## Overview

This is a static website built with **Hugo** using a custom outdoor lifestyle theme. The site is designed to convert visitors into iOS app downloads and iBeacon hardware purchases.

## Tech Stack

- **Hugo** v0.154+ (Static Site Generator)
- **Custom Theme** (RackMinder - Outdoor/Adventure Brand)
- **SCSS** for styling (compiled via Hugo Pipes)
- **Vanilla JavaScript** for interactions
- **Google Fonts** (Orbitron + Inter)

## Project Structure

```
website/
├── content/                  # Markdown content
│   ├── _index.md            # Homepage metadata & SEO
│   ├── privacy/             # Privacy Policy
│   └── terms/               # Terms of Service
├── static/                   # Static assets
│   ├── logo.svg             # RackMinder logo (Forest Green)
│   └── favicon.ico          # Favicon
├── themes/rackminder/       # Custom theme
│   ├── assets/
│   │   ├── scss/            # Stylesheets
│   │   └── js/              # JavaScript
│   ├── layouts/             # HTML templates
│   │   ├── _default/        # Base templates
│   │   ├── partials/        # Reusable components
│   │   ├── index.html       # Homepage
│   │   └── 404.html         # Error page
│   └── theme.toml           # Theme metadata
├── hugo.toml                # Hugo configuration
└── README.md                # This file
```

## Brand Guidelines

### Color Palette

**Primary Colors:**
- Forest Green: `#2C5F2D` (trust, nature, safety)
- Earth Orange: `#E97451` (energy, adventure, CTAs)
- Sky Blue: `#4A90A4` (freedom, clarity)

**Neutrals:**
- Charcoal: `#2B2D2F` (dark theme background)
- Slate Gray: `#3A3F44` (cards, secondary backgrounds)
- Off-White: `#F5F3F0` (primary text)

### Typography

- **Titles:** Orbitron Regular 400 (uppercase for headers)
- **Body:** Inter 400 & 600 (clean, readable)

### Voice & Tone

- Conversational but competent
- Light-hearted, fun
- Action-oriented
- No tech jargon

## Development

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) v0.120.0 or higher
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/rackminder/website.git
   cd website
   ```

2. **Start the development server**
   ```bash
   hugo server -D
   ```

3. **View the site**
   - Open http://localhost:1313/ in your browser
   - Site auto-reloads on file changes

### Building for Production

```bash
# Build optimized site
hugo --minify

# Output will be in ./public/
```

### Deployment

The site is configured for GitHub Pages deployment:

1. **Automatic (Recommended):**
   - GitHub Actions workflow builds on every push to `main`
   - Deploys to GitHub Pages automatically

2. **Manual:**
   ```bash
   hugo --minify
   git add public
   git commit -m "Build site"
   git push
   ```

## Content Management

### Adding New Pages

```bash
hugo new about/_index.md
```

### Editing Homepage

- **Content:** `content/_index.md` (SEO metadata, descriptions)
- **Template:** `themes/rackminder/layouts/index.html` (structure, sections)
- **Styles:** `themes/rackminder/assets/scss/` (SCSS files)

### Updating Legal Pages

- **Privacy Policy:** `content/privacy/_index.md`
- **Terms of Service:** `content/terms/_index.md`

## Customization

### Changing Colors

Edit `themes/rackminder/assets/scss/_variables.scss`:

```scss
$color-primary: #2C5F2D;  // Forest Green
$color-accent: #E97451;   // Earth Orange
```

### Adding Social Links

Edit `hugo.toml`:

```toml
[[params.social]]
  name = "Instagram"
  icon = "instagram"
  url = "https://instagram.com/rackminder"
```

### Modifying Navigation

Edit `themes/rackminder/layouts/partials/header.html`

## Phase Status

### ✅ Phase 1: MVP Foundation (COMPLETE)
- [x] Custom theme structure
- [x] Homepage with all sections
- [x] Legal pages (Privacy, Terms)
- [x] Mobile responsive design
- [x] Dark theme with outdoor branding
- [x] Logo recolored to Forest Green

### 🚧 Phase 2: Visual Polish (IN PROGRESS)
- [ ] Real photography assets
- [ ] App screenshots
- [ ] iBeacon product photos
- [ ] Enhanced animations
- [ ] Android waitlist integration

### 📋 Phase 3: Optimization (PLANNED)
- [ ] Image optimization
- [ ] Performance tuning
- [ ] SEO enhancements
- [ ] Analytics setup
- [ ] Social media cards

## Asset Needs (Phase 2)

### Hero Image
- **Type:** High-quality outdoor lifestyle photo
- **Subject:** Person loading bike/kayak on roof rack
- **Resolution:** 2400x1350px minimum
- **Format:** JPG, WebP
- **Sources:** Unsplash, Pexels, or custom photography

### App Screenshots
- **Device:** iPhone 15 Pro mockup
- **Count:** 3-4 screens
- **Content:** Actual iOS app UI
- **Format:** PNG with transparency

### Product Photography
- **Subject:** iBeacon hardware
- **Style:** Clean, textured background
- **Include:** Size reference, weatherproof badge

### Icons
- **Style:** Rounded line icons (Feather/Phosphor)
- **Colors:** Match brand palette
- **Format:** SVG

## Performance Goals

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Lighthouse Targets
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

## Browser Support

- Chrome (latest)
- Safari (latest)
- Firefox (latest)
- Edge (latest)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigable
- Screen reader optimized
- Reduced motion support
- 4.5:1 text contrast ratio

## Links

- **Live Site:** https://rackminder.com
- **iOS App:** https://apps.apple.com/app/rackminder
- **Support:** support@rackminder.com

## License

© 2026 Rack Minder LLC. All rights reserved.

## Notes

- This is a marketing/landing page, not the iOS app
- See `~/Documents/ios/CLAUDE.md` for iOS app documentation
- Hugo theme is custom-built, not a third-party template
- Dark theme is default (light mode planned for Phase 3)
