# Tigran Keshishyan - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Dark/Light theme with persistent preference
- 📱 Fully responsive design (mobile-first)
- ✨ Smooth animations with Framer Motion
- ♿ Accessible (semantic HTML, ARIA labels, keyboard navigation)
- 🚀 Optimized for performance
- 📄 Static export for GitHub Pages

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building

```bash
# Build for production
npm run build
```

The static export will be generated in the `out` directory.

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Automatic Deployment

The repository uses GitHub Actions for automatic deployment:

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at: `https://tigrankeshishyan.github.io`

### Manual Deployment

If you prefer to deploy manually:

```bash
# Build and deploy
npm run deploy
```

This will:
1. Build the Next.js static export
2. Create a `.nojekyll` file to prevent Jekyll processing
3. Deploy to the `gh-pages` branch

### GitHub Pages Configuration

Make sure GitHub Pages is configured to use the `gh-pages` branch:

1. Go to your repository Settings
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "Deploy from a branch"
4. Select the `gh-pages` branch and `/ (root)` folder
5. Click "Save"

## Customization

### Update Personal Information

Edit the data in `src/data/portfolio.ts`:

- Contact information
- Experience details
- Languages
- Social media links

### Replace CV

Replace `public/Tigran_Keshishyan_CV.pdf` with your actual CV file.

### Update Favicon and Images

Replace these files in the `public` directory:
- `favicon.ico` - Browser tab icon
- `apple-touch-icon.png` - iOS home screen icon
- `og-image.png` - Social media preview image (1200x630px recommended)

### Theme Colors

Edit `tailwind.config.js` to customize colors:

```javascript
colors: {
  primary: {
    light: '#3b82f6',  // Light mode primary color
    dark: '#60a5fa',   // Dark mode primary color
  },
}
```

## Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Main page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── Navigation.tsx   # Navigation bar
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About section
│   │   ├── Experience.tsx   # Experience timeline
│   │   ├── Languages.tsx    # Languages section
│   │   ├── Contact.tsx      # Contact section
│   │   ├── Footer.tsx       # Footer
│   │   └── ThemeProvider.tsx # Theme context
│   └── data/
│       └── portfolio.ts     # Portfolio data
├── public/
│   └── Tigran_Keshishyan_CV.pdf              # CV file
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind configuration
└── package.json            # Dependencies
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Tigran Keshishyan. All rights reserved.

## Contact

- **Email**: tigrankeshishyan1@gmail.com
- **LinkedIn**: [linkedin.com/in/tigran-keshishyan](https://linkedin.com/in/tigran-keshishyan)
- **GitHub**: [github.com/tigrankeshishyan](https://github.com/tigrankeshishyan)
