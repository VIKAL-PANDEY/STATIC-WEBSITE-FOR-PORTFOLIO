// ─── Portfolio Data ────────────────────────────────────────────────────────

export const personal = {
  name: 'Vikal Pandey',
  role: 'CSE UNDERGRAD',
  tagline: 'Building efficient software solutions with C++, Java, and React.',
  about: [
    'I\'m a Computer Science undergraduate who bridges the gap between rigorous algorithmic thinking and modern full-stack development. My journey began with the fundamentals — data structures, algorithms, and systems programming in C and C++ — before naturally evolving into building real-world applications.',
    'Today, I architect and ship end-to-end products: from designing RESTful APIs to crafting polished React UIs. I believe great software is born at the intersection of clean code, thoughtful design, and genuine problem-solving.',
    'When I\'m not coding, I\'m exploring open-source projects, contributing to developer communities, and constantly seeking harder problems to solve.',
  ],
  email: 'vpand301@gmail.com',
  github: 'https://github.com/VIKAL-PANDEY',
  linkedin: 'https://linkedin.com/in/vikal-pandey',
  location: 'India',
  available: true,
};

export const skills = [
  {
    category: 'Languages',
    icon: 'Code2',
    items: ['Java', 'Python', 'C++', 'C', 'JavaScript'],
  },
  {
    category: 'Web Development',
    icon: 'Globe',
    items: ['React', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Data & Tools',
    icon: 'Database',
    items: ['SQL', 'Firebase', 'Git', 'GitHub', 'Vite'],
  },
];

export const projects = [
  {
    id: 'medibridge',
    title: 'MediBridge',
    subtitle: 'Healthcare Platform',
    problem: 'Remote patients in underserved regions lack reliable access to qualified doctors, leading to delayed diagnoses and poor health outcomes.',
    solution: 'Built a real-time healthcare platform connecting patients and doctors regardless of geography, featuring live diagnostic tools, secure communication channels, and appointment management.',
    stack: ['React', 'Firebase', 'JavaScript', 'Firestore', 'Auth'],
    highlights: [
      'Real-time doctor-patient consultation via Firestore listeners',
      'Secure multi-role authentication (Patient / Doctor)',
      'AI-assisted diagnostic intake form',
      'Responsive mobile-first UI across all breakpoints',
    ],
    github: 'https://github.com/VIKAL-PANDEY/MEDIBRIDGE',
    live: null,
    featured: true,
    color: '#3b82f6',
  },
  {
    id: 'portfolio',
    title: 'Developer Portfolio',
    subtitle: 'This Site',
    problem: 'Generic student portfolio templates fail to communicate engineering depth, design sensibility, or professional-grade thinking.',
    solution: 'Designed and engineered a production-ready portfolio with editorial aesthetics, dark/light theming, Framer Motion animations, and full TypeScript typesafety — built to impress, not just inform.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    highlights: [
      'Swiss-editorial design system with design tokens',
      'Persistent dark/light mode with zero flash',
      'Scroll-reveal animations with reduced motion support',
      'Semantic HTML, WCAG accessible, mobile-first responsive',
    ],
    github: 'https://github.com/VIKAL-PANDEY',
    live: null,
    featured: false,
    color: '#8b5cf6',
  },
];

export const education = {
  degree: 'B.Tech in Computer Science & Engineering',
  institution: 'IPS Academy',
  period: '2024 — 2028',
  highlights: [
    'Data Structures & Algorithms',
    'Operating Systems',
    'Database Management Systems',
    'Computer Networks',
    'Software Engineering',
  ],
};
