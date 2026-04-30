# Get Started - High-Converting AI Workshop Landing Page

A premium, modern single-page website for Get Started - an AI workshop business helping beginners build real projects.

## Features

- 🎯 **High-Converting Design** - Optimized for registration signups
- 🎨 **Premium Aesthetics** - Clean, dark theme with modern accents
- ⚡ **Performance Optimized** - Built with Next.js 14 for speed
- 📱 **Fully Responsive** - Perfect on all devices
- ✨ **Smooth Animations** - Framer Motion for premium feel
- 🔒 **Production Ready** - Complete form validation and submission handling

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Form Handling**: React Hook Form
- **Language**: TypeScript

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   Navigate to `http://localhost:3000`

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # App layout
├── components/
│   ├── Navigation.tsx      # Header nav
│   ├── Hero.tsx           # Hero section
│   ├── Problem.tsx        # Problem section
│   ├── HowItWorks.tsx     # How it works
│   ├── WorkshopBreakdown.tsx
│   ├── WhyDifferent.tsx   # Differentiation
│   ├── SocialProof.tsx    # Testimonials
│   ├── FuturePath.tsx     # Learning path
│   └── FinalCTA.tsx       # Registration form
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
- `accent`: Primary blue (#0099ff)
- `accent-light`: Light blue (#00bfff)
- `accent-dark`: Dark blue (#0077cc)
- `dark`: Background (#0a0e27)

### Content
Edit each component file to update:
- Headlines and subheadlines
- Problem statements
- Workshop details
- Testimonials
- Form fields

### Form Submission
In `components/FinalCTA.tsx`, replace the simulation in `onSubmit()` with your actual API endpoint:

```typescript
const response = await fetch('/api/register', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: { 'Content-Type': 'application/json' }
})
```

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- Build: `npm run build`
- Start: `npm start`
- Environment: Node.js 18+

## Performance Tips

- Images are optimized automatically by Next.js
- CSS is minified via Tailwind
- JavaScript is tree-shaken and minified
- Consider adding a CDN for faster image delivery

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - Get Started

## Support

For questions or customizations, contact the development team.
