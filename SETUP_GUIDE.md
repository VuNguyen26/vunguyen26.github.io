# Professional Developer Portfolio - Setup Guide

## 📋 Table of Contents
1. [Quick Start](#quick-start)
2. [Installation](#installation)
3. [Customization Guide](#customization-guide)
4. [Project Structure](#project-structure)
5. [Deployment](#deployment)

## 🚀 Quick Start

This is a complete, production-ready developer portfolio built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion. Everything you need is already implemented—just customize with your own information!

### Prerequisites
- Node.js 16+ (recommended: LTS version)
- pnpm (or npm/yarn)

## 📦 Installation

### Step 1: Install Dependencies
```bash
pnpm install
# or
npm install
# or
yarn install
```

### Step 2: Run Development Server
```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio!

### Step 3: Build for Production
```bash
pnpm build
pnpm start
```

## 🎨 Customization Guide

### 1. **Personal Information** (MOST IMPORTANT)
Edit `/lib/portfolio-data.ts` - This is your main customization file:

```typescript
export const portfolioData = {
  // Hero Section
  name: '[YOUR_NAME]',                    // Your full name
  role: '[YOUR_ROLE]',                    // Your job title (e.g., "Frontend Developer")
  bio: '[YOUR_BIO]',                      // Short bio
  shortBio: '...',                        // 1-2 sentence intro
  
  // Contact Info
  email: '[YOUR_EMAIL]',
  github: '[YOUR_GITHUB]',                // Full GitHub URL (e.g., https://github.com/yourname)
  linkedin: '[YOUR_LINKEDIN]',            // Full LinkedIn URL
  cv: '[YOUR_CV_LINK]',                   // Link to your CV PDF
  
  // ... more fields below
};
```

**Placeholder Values to Replace:**
- `[YOUR_NAME]` - Your full name
- `[YOUR_ROLE]` - Your professional title
- `[YOUR_BIO]` - Brief professional biography
- `[YOUR_EMAIL]` - Your email address
- `[YOUR_GITHUB]` - Your GitHub profile URL
- `[YOUR_LINKEDIN]` - Your LinkedIn profile URL
- `[YOUR_CV_LINK]` - Link to your CV/Resume PDF

### 2. **Skills Section**
In `/lib/portfolio-data.ts`, update the `skills` object:

```typescript
skills: {
  frontend: [
    'React.js',
    'Next.js',
    'TypeScript',
    // Add your frontend skills
  ],
  backend: [
    'Node.js',
    'Express.js',
    // Add your backend skills
  ],
  database: [
    'PostgreSQL',
    'MongoDB',
    // Add your database knowledge
  ],
  tools: [
    'Git',
    'Docker',
    // Add your tools
  ],
},
```

### 3. **Projects Section**
Update the `projects` array in `/lib/portfolio-data.ts`:

```typescript
projects: [
  {
    id: 1,
    name: 'Your Project Name',
    description: 'Brief description of what the project does',
    role: 'Your role (e.g., Full Stack Developer)',
    technologies: ['React', 'Node.js', 'MongoDB'],
    highlights: [
      'Key feature 1',
      'Key feature 2',
      'Key feature 3',
    ],
    github: 'https://github.com/yourname/project',
    demo: 'https://projectdemo.com',
    image: '/projects/project-1.jpg',  // Add project screenshot
  },
  // Add more projects...
],
```

**Notes:**
- Add at least 3-4 projects for best visual impact
- Include project screenshots in `/public/projects/` folder
- If no screenshot, the portfolio shows a placeholder emoji

### 4. **Experience & Education**
Update the `experience` array:

```typescript
experience: [
  {
    id: 1,
    type: 'education',  // or 'experience'
    title: 'Bachelor of Science in Computer Science',
    organization: 'University Name',
    period: '2020 - 2024',
    description: 'Your studies, achievements, or key learnings',
  },
  // Add more entries...
],
```

### 5. **Theme Customization**
The portfolio uses a modern dark-mode-first theme. To customize colors, edit `/app/globals.css`:

```css
:root {
  /* Light mode colors */
  --primary: oklch(0.25 0.05 260);        /* Main brand color */
  --accent: oklch(0.55 0.15 260);         /* Highlight color */
  --background: oklch(0.98 0.001 231);    /* Light background */
  --foreground: oklch(0.15 0.01 230);     /* Light text */
}

.dark {
  /* Dark mode colors */
  --primary: oklch(0.95 0.01 230);
  --accent: oklch(0.65 0.18 260);
  --background: oklch(0.11 0.01 230);     /* Dark background */
  --foreground: oklch(0.95 0.01 230);     /* Light text on dark */
}
```

**Note:** Using oklch() color format for better color perception. You can use any CSS color format.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx               # Home page (main portfolio)
│   └── globals.css            # Global styles & theme
├── components/
│   ├── navbar.tsx             # Navigation with active section
│   ├── hero-section.tsx       # Hero/Landing section
│   ├── about-section.tsx      # About me section
│   ├── skills-section.tsx     # Tech stack section
│   ├── projects-section.tsx   # Featured projects
│   ├── experience-section.tsx # Timeline (exp & education)
│   ├── contact-section.tsx    # Contact/CTA section
│   ├── footer.tsx             # Footer with links
│   └── scroll-to-top.tsx      # Floating scroll-to-top button
├── lib/
│   ├── portfolio-data.ts      # All customizable data (EDIT THIS!)
│   └── utils.ts               # Utility functions
├── public/
│   └── projects/              # Add project screenshots here
├── package.json               # Dependencies
└── tsconfig.json             # TypeScript config
```

## ✨ Features Explained

### Responsive Design
- Mobile-first approach
- Optimized for desktop, tablet, and mobile
- All sections are fully responsive

### Animations
- Smooth scroll animations on section reveal
- Hover effects on projects and cards
- Typing animation on page load
- Floating scroll-to-top button

### Dark Mode
- Primary theme with dark mode
- Light mode supported via system preference
- Smooth theme transitions

### SEO Optimized
- Meta tags for open graph
- Keywords and descriptions
- Semantic HTML
- Fast performance

### Navigation
- Fixed navbar with active section indicator
- Smooth scroll to sections
- Mobile hamburger menu
- Logo with gradient accent

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click "Deploy"
5. Done! Your portfolio is live

**Setting up a custom domain:**
1. In Vercel project settings → Domains
2. Add your custom domain
3. Update DNS settings (instructions provided by Vercel)

### Deploy to Other Platforms

**Netlify:**
```bash
pnpm build
# Then drag & drop the `.next` folder to Netlify
```

**Traditional Server (VPS/Shared Hosting):**
```bash
pnpm build
pnpm start
```

## 📸 Adding Project Images

1. Create a `/public/projects/` folder
2. Add your project screenshots (JPG/PNG)
3. Update the `image` field in projects array:
```typescript
image: '/projects/my-project.jpg',
```

**Recommended image sizes:** 800x600px or larger

## 🔗 Important Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)

## 💡 Pro Tips

1. **Keep Content Fresh:** Update your projects every 3-6 months
2. **Add Links:** Always include GitHub and demo links for projects
3. **Project Descriptions:** Be specific about what you built and your role
4. **Skills Order:** List most relevant/strong skills first
5. **Responsive Testing:** Test on multiple devices before deployment

## 🐛 Troubleshooting

**Styles not loading?**
- Clear browser cache: `Cmd/Ctrl + Shift + Delete`
- Restart dev server: `Ctrl + C` then `pnpm dev`

**Images not showing?**
- Ensure images are in `/public/` folder
- Check image paths don't start with `/public/`
- Use format: `/images/file.jpg` not `/public/images/file.jpg`

**Animations not working?**
- Ensure `framer-motion` is installed: `pnpm install`
- Restart dev server

## 📝 Content Guidelines

### Bio Section
Keep it professional and concise:
- ✅ "Full-stack developer passionate about building scalable web applications"
- ❌ "I love coding lol"

### Project Descriptions
Be specific about impact:
- ✅ "Built a real-time chat application serving 500+ users with WebSocket integration"
- ❌ "A chat app"

### Skills
Only list technologies you're comfortable with:
- ✅ List technologies you've used in real projects
- ❌ Don't list everything you've heard of

## 🎯 Next Steps

1. ✅ Install dependencies: `pnpm install`
2. ✅ Update `/lib/portfolio-data.ts` with your info
3. ✅ Add project screenshots to `/public/projects/`
4. ✅ Test locally: `pnpm dev`
5. ✅ Deploy to Vercel or your preferred platform
6. ✅ Share your portfolio with recruiters!

---

**Built with ❤️ using Next.js, React, TypeScript, Tailwind CSS, and Framer Motion**

Happy building! 🚀
