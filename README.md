# Luka's Portfolio

A modern, responsive portfolio website showcasing software development projects, skills, and experience. Built with React, Vite, and Tailwind CSS, featuring smooth animations powered by GSAP and Framer Motion.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Prerequisites](#prerequisites)
5. [Installation](#installation)
6. [Development](#development)
7. [Project Structure](#project-structure)
8. [Components Documentation](#components-documentation)
9. [Animations](#animations)
10. [Styling](#styling)
11. [Configuration](#configuration)
12. [Deployment](#deployment)
13. [Customization Guide](#customization-guide)
14. [Troubleshooting](#troubleshooting)
15. [Contributing](#contributing)
16. [License](#license)

---

## Overview

This portfolio website serves as a professional showcase for software development work. It features a modern, dark-themed design with interactive elements, smooth scroll animations, and a fully responsive layout that works seamlessly across all devices.

The website includes:
- Hero section with animated aurora background
- About section with skills and interests
- Projects timeline with 3D card effects
- Contact form with EmailJS integration
- Tech stack marquee display
- Smooth scroll navigation

---

## Features

### Core Features
- Fully responsive design (mobile, tablet, desktop)
- Dark mode optimized interface
- Smooth scroll animations with Lenis
- GSAP-powered scroll triggers
- 3D interactive project cards
- Contact form with email functionality
- Loading screen with progress indicator

### UI/UX Features
- Aurora background animation using WebGL/OGL
- Fade-in content animations on scroll
- Interactive tech stack marquee
- Tooltip-enabled navigation
- Mobile hamburger menu with scroll lock
- Custom cursor interactions

### Performance Features
- Lazy loading for videos and images
- Optimized asset preloading
- GPU-accelerated animations
- Efficient re-renders with React hooks

---

## Tech Stack

### Core Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.0.0 | UI Framework |
| Vite | 6.2.0 | Build Tool & Dev Server |
| Tailwind CSS | 4.1.3 | Utility-first CSS |

### Animation Libraries
| Library | Version | Purpose |
|---------|---------|---------|
| GSAP | 3.13.0 | Scroll animations & triggers |
| Framer Motion | 12.7.3 | React motion components |
| Lenis | 1.2.3 | Smooth scrolling |
| OGL | 1.0.11 | WebGL aurora background |

### UI Components
| Library | Version | Purpose |
|---------|---------|---------|
| React Fast Marquee | 1.6.5 | Tech stack carousel |
| React Tooltip | 5.28.0 | Navigation tooltips |
| Tabler Icons React | 3.31.0 | Icon components |

### Utilities
| Library | Version | Purpose |
|---------|---------|---------|
| EmailJS Browser | 4.4.1 | Contact form emails |
| clsx | 2.1.1 | Conditional classnames |
| tailwind-merge | 3.2.0 | Tailwind class merging |

### Development Tools
| Tool | Version | Purpose |
|------|---------|---------|
| ESLint | 9.21.0 | Code linting |
| Prettier | 3.5.3 | Code formatting |
| TypeScript Types | 19.0.10 | Type definitions |

---

## Prerequisites

Before you begin, ensure you have the following installed:

### Required Software
- Node.js (version 18.0.0 or higher)
- npm (version 9.0.0 or higher) or yarn (version 1.22.0 or higher)
- Git (version 2.30.0 or higher)

### Verify Installation
Open your terminal and run these commands to verify:

```bash
# Check Node.js version
node --version
# Expected output: v18.x.x or higher

# Check npm version
npm --version
# Expected output: 9.x.x or higher

# Check Git version
git --version
# Expected output: git version 2.30.x or higher
```

### System Requirements
- Operating System: Windows 10+, macOS 10.15+, or Linux (Ubuntu 20.04+)
- RAM: Minimum 4GB (8GB recommended)
- Disk Space: At least 500MB free space
- Browser: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

---

## Installation

### Step 1: Clone the Repository

```bash
# Using HTTPS
git clone https://github.com/Luka12-dev/luka-portfolio.git

# Or using SSH
git clone git@github.com:Luka12-dev/luka-portfolio.git

# Navigate to project directory
cd luka-portfolio
```

### Step 2: Install Dependencies

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

Using pnpm:
```bash
pnpm install
```

### Step 3: Verify Installation

After installation, your node_modules folder should contain all dependencies. Verify by checking:

```bash
# List installed packages
npm list --depth=0
```

Expected output should include:
- @emailjs/browser
- @tailwindcss/vite
- gsap
- lenis
- motion
- ogl
- react
- react-dom
- react-fast-marquee
- react-tooltip
- tailwindcss

---

## Development

### Starting the Development Server

```bash
# Start development server
npm run dev
```

The development server will start at:
```
http://localhost:5000/
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 5000 |
| `npm run build` | Create production build in /dist folder |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

### Development Server Options

The Vite development server is configured with:
- Hot Module Replacement (HMR) for instant updates
- Port 5000 (configurable in vite.config.js)
- Source maps for debugging

### Building for Production

```bash
# Create optimized production build
npm run build

# Preview the production build
npm run preview
```

The build output will be in the `dist/` directory, ready for deployment.

---

## Project Structure

```
luka-portfolio/
├── public/                          # Static assets
│   ├── vite.svg                     # Favicon
│   ├── projects/                    # Project demo videos
│   │   ├── 1.mp4                    # Xengine demo
│   │   ├── 2.mp4                    # Explain My Repo demo
│   │   ├── 3.mp4                    # Windows XP Theme demo
│   │   └── 4.mp4                    # AI Web Chatbot demo
│   └── tech-icons/                  # Technology stack icons
│       ├── CSharp.svg               # C# icon
│       ├── C++.svg                  # C++ icon
│       ├── C.svg                    # C icon
│       ├── css.svg                  # CSS icon
│       ├── Dart.svg                 # Dart icon
│       ├── Flutter.svg              # Flutter icon
│       ├── git.svg                  # Git icon
│       ├── html5.svg                # HTML5 icon
│       ├── java.svg                 # Java icon
│       ├── javascript.svg           # JavaScript icon
│       ├── nodedotjs.svg            # Node.js icon
│       ├── python.svg               # Python icon
│       ├── react.svg                # React icon
│       ├── tailwindcss.svg          # Tailwind CSS icon
│       └── typescript.svg           # TypeScript icon
├── src/                             # Source code
│   ├── App.jsx                      # Main application component
│   ├── main.jsx                     # Application entry point
│   ├── index.css                    # Global styles and Tailwind config
│   ├── animations/                  # Animation components
│   │   ├── Aurora.jsx               # WebGL aurora background
│   │   ├── FadeContent.jsx          # Fade-in animation wrapper
│   │   ├── Loader.jsx               # Loading screen component
│   │   └── Orb.jsx                  # WebGL orb animation
│   ├── assets/                      # Component assets
│   │   └── navbar/                  # Navigation icons
│   │       ├── about.svg
│   │       ├── contact.svg
│   │       ├── github.svg
│   │       ├── home.svg
│   │       ├── projects.svg
│   │       └── youtube.svg
│   ├── components/                  # React components
│   │   ├── Button.jsx               # Reusable button component
│   │   ├── Icon.jsx                 # Icon link component
│   │   ├── functions/               # Utility functions
│   │   │   └── scroll-to-section.js # Smooth scroll utility
│   │   ├── layout/                  # Layout components
│   │   │   ├── footer.jsx           # Footer component
│   │   │   ├── header.jsx           # Header with navigation
│   │   │   └── navbar.jsx           # Bottom navigation bar
│   │   └── ui/                      # UI components
│   │       ├── icons-with-tooltips.jsx
│   │       ├── luka-logo.jsx        # Animated logo
│   │       ├── SendEmail.jsx        # Contact form
│   │       ├── techstack.jsx        # Tech stack marquee
│   │       └── timeline-section/    # Project timeline
│   │           ├── 3d-card.jsx      # 3D card effect
│   │           ├── timeline-content.jsx
│   │           ├── timeline-title.jsx
│   │           └── timeline.jsx
│   ├── lib/                         # Library utilities
│   │   └── utils.js                 # Class name utilities
│   └── styles/                      # CSS stylesheets
│       ├── burger.css               # Hamburger menu styles
│       └── loader.css               # Loading animation styles
├── index.html                       # HTML entry point
├── vite.config.js                   # Vite configuration
├── eslint.config.js                 # ESLint configuration
├── vercel.json                      # Vercel deployment config
├── package.json                     # Project dependencies
└── README.md                        # This file
```

---

## Components Documentation

### App.jsx - Main Application

The main application component that orchestrates all sections:

```jsx
// Main sections rendered in App.jsx
<Aurora />           // Background animation
<Header />           // Navigation header
<HeroSection />      // Landing section with title
<TechStack />        // Technology marquee
<AboutSection />     // Skills and interests
<ProjectSection />   // Project timeline
<ContactSection />   // Contact form
<Footer />           // Site footer
<Navbar />           // Bottom navigation (desktop)
```

### Layout Components

#### Header (src/components/layout/header.jsx)
- Desktop: Fixed top navigation with smooth scroll links
- Mobile: Hamburger menu with slide-out drawer
- Features scroll lock when mobile menu is open

#### Footer (src/components/layout/footer.jsx)
- Displays logo and social links
- Copyright information
- Responsive layout (stacked on mobile)

#### Navbar (src/components/layout/navbar.jsx)
- Fixed bottom navigation (desktop only)
- GSAP-animated entrance on scroll
- Icon tooltips for navigation items
- Social media links

### UI Components

#### Button (src/components/Button.jsx)
```jsx
<Button 
  className="bg-primary text-light"
  text="Click Me"
  handleClick={() => console.log('clicked')}
/>
```

Props:
- `className`: Additional CSS classes
- `text`: Button label text
- `handleClick`: Click handler function

#### Icon (src/components/Icon.jsx)
```jsx
<Icon 
  link="https://github.com/username"
  img={githubIcon}
  alt="GitHub"
  customStyle="additional-classes"
/>
```

Props:
- `link`: External URL (opens in new tab)
- `img`: Icon image source
- `alt`: Alt text for accessibility
- `customStyle`: Additional CSS classes

#### TechStack (src/components/ui/techstack.jsx)
Displays a scrolling marquee of technology icons:
- Auto-fills to create seamless loop
- Pauses on hover
- Shows technology name on hover
- Responsive sizing

#### SendEmail (src/components/ui/SendEmail.jsx)
Contact form with EmailJS integration:
- Name, email, and message fields
- Form validation
- Success/error toast notifications
- Loading state during submission
- Animated orb background

### Timeline Components

#### Timeline (src/components/ui/timeline-section/timeline.jsx)
Main container for project timeline:
- Vertical scroll-triggered layout
- Animated dot indicators
- GSAP scroll animations
- Responsive design

#### TimelineTitle (src/components/ui/timeline-section/timeline-title.jsx)
Project title component:
- Clickable project name
- Technology tags
- Hover effects

#### TimelineContent (src/components/ui/timeline-section/timeline-content.jsx)
Project content card:
- 3D perspective effect on hover
- Video preview (autoplay, muted, looped)
- Project description
- "Try now" action button

#### 3D Card (src/components/ui/timeline-section/3d-card.jsx)
Interactive 3D card effect:
- Mouse-follow rotation
- Depth-based transforms
- Context provider for child components

---

## Animations

### Aurora Background (src/animations/Aurora.jsx)

WebGL-powered animated background using OGL:

Features:
- Smooth color transitions
- Responsive to viewport size
- GPU-accelerated rendering
- Automatic cleanup on unmount

Configuration options:
```jsx
<Aurora 
  colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
  amplitude={1.0}
  blend={0.5}
/>
```

### FadeContent (src/animations/FadeContent.jsx)

Intersection Observer-based fade-in animation:

```jsx
<FadeContent
  blur={true}              // Apply blur effect
  duration={1000}          // Animation duration (ms)
  easing="ease-out"        // CSS easing function
  delay={200}              // Delay before animation
  threshold={0.1}          // Intersection threshold
  initialOpacity={0}       // Starting opacity
  className="custom-class"
>
  {children}
</FadeContent>
```

Features:
- Automatically disabled on mobile for performance
- Unobserves after animation completes
- Supports blur effect
- Configurable timing

### Loader (src/animations/Loader.jsx)

Loading screen with animated typing indicator:

```jsx
<Loader progress={75} />
```

Features:
- Three bouncing dots animation
- Shadow effects
- Progress percentage display
- Pure CSS animations

### Orb Animation (src/animations/Orb.jsx)

WebGL orb effect for contact section:

```jsx
<Orb
  hoverIntensity={0.5}
  rotateOnHover={true}
  hue={260}
  forceHoverState={false}
/>
```

---

## Styling

### Tailwind CSS Configuration

Custom theme defined in `src/index.css`:

```css
@theme {
  /* Colors */
  --color-primary: #5d275d;      /* Purple primary */
  --color-analogous: #5d2741;    /* Red-purple accent */
  --color-accent: #f8c162;       /* Gold accent */
  --color-light: #f4f4f4;        /* Light text */
  --color-dark: #2e2e2e;         /* Dark backgrounds */
  --color-bg: #0c0c0c;           /* Main background */
  --color-gray: #bdbdbd;         /* Muted text */

  /* Breakpoints */
  --breakpoint-xs: 360px;        /* Extra small devices */

  /* Fonts */
  --font-serif: "Playfair Display", serif;
  --font-sans: "Inria Sans", sans-serif;
  --font-display: "Clash Display", sans-serif;
  --font-array: "Array", sans-serif;
}
```

### Font Classes

```css
.array   { font-family: var(--font-array); }
.sans    { font-family: var(--font-sans); }
.serif   { font-family: var(--font-serif); }
.display { font-family: var(--font-display); }
```

### Custom Utility Classes

```css
/* Navbar icons */
.navbar-icon {
  @apply h-4 hover:scale-150 group-hover:scale-110 
         duration-300 transition-all cursor-pointer 
         hover:px-2 group-hover:m-1 hover:opacity-80;
}

/* Form inputs */
.form-input {
  @apply border-b border-light mb-2 py-2 px-4 
         focus:outline-none w-[70%] z-10 
         xs:text-sm sm:text-base focus:bg-dark 
         transition-colors;
}

/* Contact button */
.contact-button {
  @apply cursor-pointer py-1.5 px-3 border z-10 
         border-light rounded-sm active:bg-dark/10 
         transition-colors drop-shadow-primary 
         drop-shadow xs:text-sm md:text-base;
}
```

### Text Selection

```css
::selection {
  background-color: var(--color-accent);
  color: var(--color-light);
}
```

---

## Configuration

### Vite Configuration (vite.config.js)

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5000  // Development server port
  },
  optimizeDeps: {
    include: ['ogl'],
    exclude: ['ogl/dist/ogl.module.js']
  }
})
```

### ESLint Configuration (eslint.config.js)

The project uses ESLint with React-specific rules:
- React Hooks linting
- React Refresh compatibility
- Unused variable warnings (ignores capitalized/underscored)

## License

2026 All rights reserved.

This project is proprietary and NOT available for public use. You cannot use this code, design, or any part of this website for your own projects without explicit written permission from the developer.

### Usage Restrictions

- You MAY NOT copy, clone, or fork this repository for personal or commercial use
- You MAY NOT use this code as a template for your own portfolio
- You MAY NOT redistribute or modify this code in any form
- You MAY NOT use any assets, animations, or components from this project

### Want to Use This Code?

If you would like to use this portfolio template or any part of it, you MUST contact the developer first:

**Developer:** Luka
**GitHub:** https://github.com/Luka12-dev
**YouTube:** https://www.youtube.com/@LukaCyber-s4b7o

Send a message explaining:
1. What parts of the code you want to use
2. What project you want to use it for
3. Whether it's for personal or commercial use

Only after receiving explicit written approval from Luka can you use any part of this project. All other use is strictly prohibited and may result in legal action.

---

## Contact

- GitHub: https://github.com/Luka12-dev
- YouTube: https://www.youtube.com/@LukaCyber-s4b7o
- Website: https://luka-portfolio.vercel.app

For inquiries, use the contact form on the website.

---

## Acknowledgments

- React Team for the amazing framework
- Vite Team for the blazing fast build tool
- Tailwind CSS for utility-first styling
- GSAP for powerful animations
- OGL for WebGL utilities
- All open source contributors

---

Built with passion by Luka
