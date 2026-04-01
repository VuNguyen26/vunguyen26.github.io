# 📝 Portfolio Data File - Complete Example

**File Location:** `/lib/portfolio-data.ts`

This is the MOST IMPORTANT file to edit. Everything in your portfolio is driven by this data.

---

## Complete Example with Real Data

Replace the default `/lib/portfolio-data.ts` with this example (then update with YOUR data):

```typescript
// lib/portfolio-data.ts

export const portfolioData = {
  // ============================================
  // HERO SECTION - First thing visitors see
  // ============================================
  name: 'Nguyễn Văn A',                    // Your name
  role: 'Full Stack Developer',             // Your title
  bio: 'I build beautiful, performant web experiences with modern technologies.',  // One-liner
  
  // Longer bio for the page
  shortBio: 'Building scalable web applications with React, Node.js, and TypeScript. Passionate about clean code and user experience.',
  
  // ============================================
  // CONTACT INFORMATION
  // ============================================
  email: 'hello@example.com',               // Your email
  github: 'https://github.com/yourname',   // Your GitHub URL
  linkedin: 'https://linkedin.com/in/yourname',  // Your LinkedIn
  cv: 'https://example.com/cv.pdf',        // Your CV PDF link
  
  // ============================================
  // ABOUT ME SECTION
  // ============================================
  aboutTitle: 'About Me',                   // Usually keep as is
  aboutContent: `I'm a passionate full-stack developer with 2+ years of experience building web applications. 
  I specialize in React and Node.js, and I'm deeply committed to writing clean, maintainable code.
  
  My journey started with a curiosity about how things work online. Through self-learning and hands-on projects, 
  I've grown into a confident developer who enjoys solving complex problems and collaborating with teams.`,
  
  // ============================================
  // SKILLS / TECH STACK
  // ============================================
  skills: {
    frontend: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'HTML/CSS',
      'JavaScript ES6+',
      'Responsive Design',
    ],
    backend: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'Authentication',
      'Server-side Rendering',
    ],
    database: [
      'PostgreSQL',
      'MongoDB',
      'Firebase',
      'Supabase',
    ],
    tools: [
      'Git & GitHub',
      'VS Code',
      'Vercel',
      'Docker',
      'npm/pnpm',
      'Figma',
      'Postman',
    ],
  },
  
  // ============================================
  // PROJECTS - MOST IMPORTANT SECTION!
  // ============================================
  // Add your real projects here (4+ recommended)
  projects: [
    {
      id: 1,
      name: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with product catalog, shopping cart, and secure payment processing using Stripe.',
      role: 'Full Stack Developer',
      technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      highlights: [
        'Implemented real-time inventory management',
        'Integrated Stripe for secure payments',
        'Built responsive UI serving 5K+ monthly users',
        'Optimized database queries reducing load time by 60%',
      ],
      github: 'https://github.com/yourname/ecommerce-platform',
      demo: 'https://ecommerce-demo.vercel.app',
      image: '/projects/project-1.jpg',  // Add screenshot here
    },
    
    {
      id: 2,
      name: 'Real-Time Chat Application',
      description: 'Modern chat application with real-time messaging using WebSockets, user authentication, and message persistence.',
      role: 'Frontend Developer',
      technologies: ['React', 'TypeScript', 'Socket.IO', 'Node.js', 'MongoDB'],
      highlights: [
        'Implemented real-time messaging with WebSockets',
        'Built responsive UI for desktop and mobile',
        'User authentication and authorization',
        'Message history and search functionality',
      ],
      github: 'https://github.com/yourname/chat-app',
      demo: 'https://chat-app-demo.vercel.app',
      image: '/projects/project-2.jpg',
    },
    
    {
      id: 3,
      name: 'Task Management Dashboard',
      description: 'Collaborative task management tool with real-time updates, user roles, and project organization features.',
      role: 'Full Stack Developer',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Framer Motion'],
      highlights: [
        'Built full-stack application with Supabase',
        'Implemented real-time data synchronization',
        'User authentication with Supabase Auth',
        'Responsive dashboard with charts and analytics',
      ],
      github: 'https://github.com/yourname/task-dashboard',
      demo: 'https://task-dashboard.vercel.app',
      image: '/projects/project-3.jpg',
    },
    
    {
      id: 4,
      name: 'Content Management System',
      description: 'Headless CMS built with Next.js and GraphQL for managing blog content, media, and user roles.',
      role: 'Backend Developer',
      technologies: ['Node.js', 'GraphQL', 'PostgreSQL', 'Express.js', 'JWT'],
      highlights: [
        'Designed and implemented GraphQL API',
        'Built role-based access control',
        'Optimized database schema for performance',
        'Created comprehensive API documentation',
      ],
      github: 'https://github.com/yourname/cms-backend',
      demo: 'https://cms-api-docs.example.com',
      image: '/projects/project-4.jpg',
    },
  ],
  
  // ============================================
  // EXPERIENCE & EDUCATION
  // ============================================
  // Timeline format - both education and work
  experience: [
    {
      id: 1,
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      organization: 'XYZ University',
      period: '2020 - 2024',
      description: 'Major in Software Engineering. Focused on full-stack web development and software architecture. GPA: 3.8/4.0.',
    },
    {
      id: 2,
      type: 'experience',
      title: 'Junior Full Stack Developer',
      organization: 'Tech Company Inc.',
      period: '2023 - Present',
      description: 'Building full-stack web applications using React and Node.js. Collaborating with designers and product managers. Improved app performance by 40%.',
    },
    {
      id: 3,
      type: 'experience',
      title: 'Frontend Development Intern',
      organization: 'Startup XYZ',
      period: '2022 - 2023',
      description: 'Built responsive React components, fixed UI bugs, and implemented new features. Worked with Tailwind CSS and Framer Motion.',
    },
  ],
  
  // ============================================
  // SOCIAL LINKS (Auto-generated from data above)
  // ============================================
  social: [
    { name: 'GitHub', url: 'https://github.com/yourname', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourname', icon: 'linkedin' },
    { name: 'Email', url: 'mailto:hello@example.com', icon: 'mail' },
  ],
};

export type PortfolioData = typeof portfolioData;
```

---

## 🎯 Field-by-Field Guide

### Hero Section

```typescript
name: 'Your Full Name',
```
- This appears as the huge heading on the first section
- Example: "Nguyễn Văn A" or "Alex Johnson"
- Make it prominent and professional

```typescript
role: 'Your Job Title',
```
- Your current or desired job title
- Examples:
  - "Frontend Developer"
  - "Full Stack Engineer"
  - "React Developer"
  - "JavaScript Specialist"

```typescript
shortBio: 'One-liner about you'
```
- Brief introduction (1-2 sentences)
- Example: "Building scalable web applications with React and Node.js"
- Keep it professional and specific

### Contact Information

All of these enable buttons and links:

```typescript
email: 'your.email@example.com',
```
- Creates "Email" contact card
- Creates "Send me an Email" CTA button
- Users will be able to click to email you

```typescript
github: 'https://github.com/yourusername',
```
- Must be FULL URL (with https://)
- Creates GitHub icon in hero and footer
- Creates "Visit My GitHub" button

```typescript
linkedin: 'https://linkedin.com/in/yourprofile',
```
- Must be FULL URL
- Creates LinkedIn contact card

```typescript
cv: 'https://yoursite.com/resume.pdf',
```
- Link to your CV/Resume PDF
- Creates "Download CV" button
- Should be publicly accessible

### About Content

```typescript
aboutContent: `Multi-line text...`,
```
- Professional biography (2-3 paragraphs)
- Include:
  - Your background
  - What you're passionate about
  - Your approach to work
  - Key achievements or focus areas
- Use backticks (`) for multi-line text

### Skills

Each category is an array of strings:

```typescript
frontend: [
  'React.js',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  // Add more...
],
```

**Tips:**
- Put strongest skills first
- Only list technologies you've actually used
- Include both languages and frameworks
- Be honest - you'll be asked about these in interviews!

### Projects (CRITICAL!)

This is what stands out most. Make each one count:

```typescript
{
  id: 1,                    // Unique number
  name: 'Project Name',     // Clear, professional name
  description: '...',       // What problem it solves (1-2 sentences)
  role: 'Your Role',        // What YOU specifically did
  technologies: [...],      // Array of tech used
  highlights: [             // 3-4 key achievements/features
    'Major feature 1',
    'Impact metric (e.g., "Served 10K users")',
    'Technical achievement',
  ],
  github: 'https://github.com/.../project',  // FULL URL to repo
  demo: 'https://live-demo.com',             // FULL URL to live site
  image: '/projects/project-1.jpg',          // Screenshot file
}
```

**Project Tips:**
- At least 4 projects for good impact
- Include real, completed projects (not "learning projects")
- Add actual screenshots
- Be specific about metrics ("Reduced load time by 40%")
- Always include GitHub and demo links when possible

### Experience & Education

Timeline entries in order (newest first):

```typescript
{
  id: 1,
  type: 'education',        // or 'experience'
  title: 'Degree Name',      // E.g., "Bachelor of Science"
  organization: 'School',    // University or company name
  period: '2020 - 2024',     // Date range
  description: 'Details',    // What you studied/did there
}
```

---

## 🔄 Template: Fill in Your Own

```typescript
export const portfolioData = {
  name: '[Enter your full name]',
  role: '[Your job title]',
  bio: '[Your one-liner]',
  shortBio: '[1-2 sentence intro]',
  
  email: '[your.email@example.com]',
  github: '[https://github.com/yourname]',
  linkedin: '[https://linkedin.com/in/yourname]',
  cv: '[https://example.com/cv.pdf]',
  
  aboutTitle: 'About Me',
  aboutContent: `[Your background and experience...]`,
  
  skills: {
    frontend: ['[Your frontend skills...]'],
    backend: ['[Your backend skills...]'],
    database: ['[Your databases...]'],
    tools: ['[Your tools...]'],
  },
  
  projects: [
    {
      id: 1,
      name: '[Project name]',
      description: '[What it does...]',
      role: '[Your role...]',
      technologies: ['[Tech 1]', '[Tech 2]'],
      highlights: ['[Feature 1]', '[Feature 2]'],
      github: '[GitHub URL]',
      demo: '[Live demo URL]',
      image: '/projects/project-1.jpg',
    },
    // ... repeat for 4+ projects
  ],
  
  experience: [
    {
      id: 1,
      type: '[education/experience]',
      title: '[Position/Degree]',
      organization: '[School/Company]',
      period: '[Year range]',
      description: '[What you did/learned]',
    },
    // ... repeat for your timeline
  ],
  
  social: [
    { name: 'GitHub', url: '[GitHub URL]', icon: 'github' },
    { name: 'LinkedIn', url: '[LinkedIn URL]', icon: 'linkedin' },
    { name: 'Email', url: 'mailto:[email]', icon: 'mail' },
  ],
};
```

---

## ✅ Checklist Before Deployment

- [ ] `name` - Your full name
- [ ] `role` - Your job title
- [ ] `email` - Valid email address
- [ ] `github` - Full URL starting with https://
- [ ] `linkedin` - Full URL starting with https://
- [ ] `cv` - Link to accessible PDF
- [ ] `skills` - Updated with YOUR skills
- [ ] At least 4 `projects` with real data
- [ ] All project images added to `/public/projects/`
- [ ] All GitHub and demo links are valid
- [ ] At least 2-3 `experience` entries

---

## 📞 Need Help?

- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Full setup guide
- **[CUSTOMIZATION_QUICK_REFERENCE.md](./CUSTOMIZATION_QUICK_REFERENCE.md)** - Quick tips
- **[README.md](./README.md)** - Project overview

---

**That's it! Your portfolio data is the core of everything. Get this right, and your portfolio will shine! ✨**
