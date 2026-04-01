# 🎯 Quick Customization Reference

**Edit ONLY this file to customize your portfolio:** `/lib/portfolio-data.ts`

## Step-by-Step Customization

### 1️⃣ HERO SECTION (First thing visitors see)
```typescript
name: '[YOUR_NAME]',              // e.g., "Nguyễn Văn A"
role: '[YOUR_ROLE]',              // e.g., "Full Stack Developer"
bio: '[YOUR_BIO]',                // 2-3 sentences about yourself
shortBio: '...',                  // 1-2 sentence summary
```

### 2️⃣ CONTACT INFORMATION
```typescript
email: '[YOUR_EMAIL]',            // e.g., "hello@example.com"
github: '[YOUR_GITHUB]',          // Full URL, e.g., "https://github.com/yourname"
linkedin: '[YOUR_LINKEDIN]',      // Full URL, e.g., "https://linkedin.com/in/yourname"
cv: '[YOUR_CV_LINK]',             // PDF link, e.g., "https://example.com/cv.pdf"
```

### 3️⃣ ABOUT ME SECTION
```typescript
aboutTitle: 'About Me',           // Usually keep as is
aboutContent: `...`,              // Your professional background (2-3 paragraphs)
```

### 4️⃣ SKILLS (Tech Stack)
```typescript
skills: {
  frontend: ['React.js', 'Next.js', 'TypeScript', ...],
  backend: ['Node.js', 'Express.js', ...],
  database: ['PostgreSQL', 'MongoDB', ...],
  tools: ['Git', 'Docker', ...],
}
```

### 5️⃣ PROJECTS (Most Important!)
For each project:
```typescript
{
  id: 1,
  name: 'Project Name',           // Clear, professional name
  description: 'What it does...',  // 1-2 sentences
  role: 'Your specific role',      // e.g., "Frontend Developer"
  technologies: ['React', 'Node.js', ...],  // Tech stack used
  highlights: [
    'Key achievement/feature',
    'Another key feature',
    'Impact or result',
  ],
  github: 'https://github.com/...',        // GitHub repo link
  demo: 'https://project-url.com',        // Live demo link
  image: '/projects/project-1.jpg',       // Screenshot path
}
```

### 6️⃣ EXPERIENCE & EDUCATION
```typescript
experience: [
  {
    id: 1,
    type: 'education',  // or 'experience'
    title: 'Your Degree/Title',
    organization: 'School/Company Name',
    period: '2020 - 2024',
    description: 'What you learned/did',
  },
]
```

---

## 🎨 File Locations Cheat Sheet

| What to Customize | File | Notes |
|------------------|------|-------|
| **All text content** | `/lib/portfolio-data.ts` | ⭐ Main file - edit here! |
| **Colors & theme** | `/app/globals.css` | Change primary, accent colors |
| **Navigation styles** | `/components/navbar.tsx` | Advanced styling |
| **Project images** | `/public/projects/` | Add your screenshots here |
| **Site metadata** | `/app/layout.tsx` | SEO & page title |

---

## 📝 Common Customizations

### Change Primary Color
In `/app/globals.css`:
```css
:root {
  --primary: oklch(0.25 0.05 260);  /* Change this */
}
```

### Add More Projects
In `/lib/portfolio-data.ts`:
```typescript
projects: [
  { /* existing projects */ },
  { /* existing projects */ },
  {
    id: 5,
    name: 'New Project',
    // ... fill in other fields
  },
]
```

### Update Skills
In `/lib/portfolio-data.ts`:
```typescript
skills: {
  frontend: ['React', 'Vue', 'Svelte'],  // Add/remove as needed
  backend: ['Python', 'Java'],           // Your actual skills
  // ...
}
```

---

## ✅ Pre-Launch Checklist

- [ ] Filled in all `[YOUR_*]` placeholders
- [ ] Added 4+ projects
- [ ] Added project screenshot images
- [ ] Verified all links (GitHub, LinkedIn, demo URLs)
- [ ] Tested on mobile (use dev tools: F12 → responsive mode)
- [ ] Checked all sections scroll smoothly
- [ ] Verified no "placeholder" text visible
- [ ] Deployed to Vercel or other hosting

---

## 🚀 Quick Start Summary

1. **Install:** `pnpm install`
2. **Edit:** `/lib/portfolio-data.ts` - replace all `[YOUR_*]` placeholders
3. **Add images:** Put project screenshots in `/public/projects/`
4. **Test:** `pnpm dev` → Open http://localhost:3000
5. **Deploy:** Push to GitHub → Deploy on Vercel

---

## 💡 Tips for Best Results

### Project Names
- ❌ "My Project 1"
- ✅ "Real-time Chat Application" or "E-commerce Platform"

### Descriptions
- ❌ "A website I made"
- ✅ "Built a full-stack e-commerce platform with payment integration, handling 10K+ monthly users"

### Links
- Always include GitHub repo links
- Include live demo links when possible
- Use your full URLs (https://github.com/yourname not github.com/yourname)

### Images
- Use professional screenshots (not blurry phone photos)
- Recommended size: 800x600px or larger
- Format: JPG or PNG

---

## ❓ Frequently Changed Values

```typescript
// Most commonly updated fields:
name: 'YOUR_NAME_HERE',
role: 'YOUR_JOB_TITLE',
email: 'YOUR_EMAIL@example.com',
github: 'https://github.com/yourname',
linkedin: 'https://linkedin.com/in/yourname',
cv: 'https://yoursite.com/cv.pdf',

// Projects array - add your actual projects
projects: [
  { id: 1, name: 'Real Project 1', ... },
  { id: 2, name: 'Real Project 2', ... },
  { id: 3, name: 'Real Project 3', ... },
  { id: 4, name: 'Real Project 4', ... },
],

// Skills - update to match YOUR skills
skills: {
  frontend: ['Your', 'Frontend', 'Skills'],
  backend: ['Your', 'Backend', 'Skills'],
  database: ['Your', 'Database', 'Skills'],
  tools: ['Your', 'Tools'],
},
```

---

**That's it! You now have a professional portfolio. Good luck! 🎉**
