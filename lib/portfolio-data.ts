// Portfolio Data - Customized for Nguyen Minh Vu

export const portfolioData = {
  // Hero Section
  name: 'Nguyen Minh Vu',
  role: 'Fresher Full-stack Web Developer',
  bio: `Software Engineering student at Saigon University with hands-on experience building full-stack web applications using Laravel, Next.js, React.js, and Spring Boot. I enjoy creating responsive user interfaces, developing practical backend systems, and turning ideas into clean, user-focused products.`,
  shortBio:
    'I build responsive full-stack web applications with Laravel, Next.js, React.js, and Spring Boot.',

  // Contact Info
  email: 'nguyenminhvu591@gmail.com',
  github: 'https://github.com/VuNguyen26',
  linkedin: 'https://www.linkedin.com/in/vu-nguyen-sgu/',
  cv: '/NguyenMinhVuCV.pdf',
  avatar: '/avatar/nguyen-minh-vu.jpg',

  // About Section
  aboutTitle: 'About Me',
  aboutContent: `I'm Nguyen Minh Vu, a Software Engineering student who is passionate about full-stack web development. 
I have experience building academic and personal projects with Laravel, Next.js, React.js, Spring Boot, and MySQL. 
I enjoy working on both frontend and backend, from designing responsive user interfaces to building REST APIs, authentication flows, and modular application structures. 
My goal is to grow as a professional developer by building real-world products, writing clean and maintainable code, and continuously improving my technical skills.`,

  // Skills organized by category
  skills: {
    frontend: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'HTML',
      'CSS',
      'Blade',
      'Livewire',
      'Responsive Design',
    ],
    backend: [
      'Laravel',
      'Spring Boot',
      'Node.js',
      'ASP.NET Core',
      'REST APIs',
      'Authentication',
      'Role-Based Access Control',
      'Server-side Validation',
    ],
    database: ['MySQL', 'PostgreSQL', 'Redis', 'SQL'],
    tools: ['Git', 'GitHub', 'Docker', 'Postman', 'Vite', 'VS Code'],
  },

  // Projects
  projects: [
    {
      id: 1,
      name: 'Navara Hotel Management System',
      description:
        'A full-stack hotel booking and management web application with separate public-facing and admin interfaces.',
      role: 'Full-stack Developer',
      technologies: [
        'Laravel 10',
        'PHP',
        'MySQL',
        'Blade',
        'Tailwind CSS',
        'Jetstream',
        'Livewire',
        'Vite',
      ],
      highlights: [
        'Built core modules for room types, rooms, customers, bookings, payments, and contact management',
        'Implemented authentication, role-based access control, CRUD workflows, and form validation',
        'Delivered a responsive UI for both public users and admin management',
      ],
      github: 'https://github.com/VuNguyen26/hotel-project',
      demo: 'https://navarahotel.kesug.com/',
      image: '/projects/project-1.jpg',
    },
    {
      id: 2,
      name: 'GearVN Clone E-commerce',
      description:
        'A responsive e-commerce frontend inspired by GearVN, focused on reusable components, UI consistency, and SEO-friendly structure.',
      role: 'Frontend Developer',
      technologies: [
        'Next.js',
        'React.js',
        'TypeScript',
        'Tailwind CSS',
        'SEO',
      ],
      highlights: [
        'Developed homepage, product listing, product detail, login/register, cart, and checkout pages',
        'Built responsive layouts for a smooth shopping experience across major pages',
        'Improved SEO with metadata, semantic structure, and optimized rendering',
      ],
      github: 'https://github.com/VuNguyen26/gearvn-clone',
      demo: 'https://gearvn-clone-t14d.vercel.app/',
      image: '/projects/project-2.jpg',
    },
    {
      id: 3,
      name: 'MedBook Microservices System',
      description:
        'A microservices-based medical management system with a React frontend, Spring Boot services, and an AI-powered chatbot for appointment support.',
      role: 'Full-stack Developer',
      technologies: [
        'Spring Boot',
        'React.js',
        'Spring AI',
        'Microservices',
        'RAG',
        'Vector Database',
        'Eureka Server',
        'API Gateway',
        'Docker',
        'REST APIs',
        'MySQL',
      ],
      highlights: [
        'Implemented services for patient, doctor, appointment, prescription, and payment management',
        'Integrated Eureka Server, API Gateway, and Dockerized deployment for service discovery and modular architecture',
        'Built an AI-powered chatbot using Spring AI, RAG, and a vector database to support appointment booking',
      ],
      github: 'https://github.com/VuNguyen26/medbook-microservice',
      demo: 'https://medbook-nine.vercel.app/',
      image: '/projects/project-3.jpg',
    },
  ],

  // Experience & Education
  experience: [
    {
      id: 1,
      type: 'education',
      title: 'Software Engineering Student',
      organization: 'Saigon University',
      period: '2022 - Present',
      description:
        'Studying software engineering with a focus on web development, software design, and practical project implementation.',
    },
    {
      id: 2,
      type: 'experience',
      title: 'Full-stack Developer',
      organization: 'Navara Hotel Management System',
      period: 'Mar 2026',
      description:
        'Built a hotel booking and management system using Laravel, MySQL, Blade, Tailwind CSS, Jetstream, and Livewire.',
    },
    {
      id: 3,
      type: 'experience',
      title: 'Frontend Developer',
      organization: 'GearVN Clone E-commerce',
      period: 'Feb 2026 - Apr 2026',
      description:
        'Developed a responsive e-commerce frontend with Next.js, React.js, TypeScript, and Tailwind CSS.',
    },
    {
      id: 4,
      type: 'experience',
      title: 'Full-stack Developer',
      organization: 'MedBook Microservices System',
      period: 'Sep 2025 - Dec 2025',
      description:
        'Built a microservices-based medical management system with Spring Boot, React.js, REST APIs, Docker, and Spring AI.',
    },
  ],

  // Social Links
  social: [
    { name: 'GitHub', url: 'https://github.com/VuNguyen26', icon: 'github' },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vu-nguyen-sgu/',
      icon: 'linkedin',
    },
    {
      name: 'Email',
      url: 'mailto:nguyenminhvu591@gmail.com',
      icon: 'mail',
    },
  ],
};

export type PortfolioData = typeof portfolioData;