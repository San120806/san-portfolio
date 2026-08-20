export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  category: string;
  views: string;
  itemsCount: number;
  color: string;
  accent: string;
  technologies: string[];
  role: string;
  github: string;
  live: string;
  overview: string;
  problem: string;
  approach: string;
  features: string[];
  architecture: string;
  outcome: string;
}

export const projectsData: Project[] = [
  {
    slug: 'buildtrack',
    title: 'BUILDTRACK',
    tagline: 'Construction Project Tracker',
    description: 'A construction project management platform for tracking site progress, material deliveries, worker hours, milestones, approvals and budget status.',
    year: '2026',
    category: 'Full Stack',
    views: '14.2K',
    itemsCount: 6,
    color: '#f59e0b',
    accent: '#d97706',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'WebSockets'],
    role: 'Lead Full-Stack Developer & UI Architect',
    github: 'https://github.com/San120806/buildtrack',
    live: '',
    overview: 'BuildTrack is a centralized operational suite engineered specifically for modern construction site supervisors, contractors, and project managers. It replaces fragmented WhatsApp chats and physical logbooks with real-time digital site management.',
    problem: 'Traditional construction site reporting suffers from 40%+ delays in tracking material deliveries, irregular worker shift logs, manual budget oversight, and slow safety approval turnarounds.',
    approach: 'Designed an offline-first responsive web platform with mobile-friendly check-ins, automated milestone verification workflows, and instant multi-tier manager approvals.',
    features: [
      'Real-time site progress logs & photographic milestone audits',
      'Inventory & material delivery tracking with invoice scanning',
      'Daily worker shift management & automated hour reconciliation',
      'Tiered approval system with role-based permissions (Admin, Site Lead, Inspector)',
      'Interactive budget runway graphs & cost variance alerts'
    ],
    architecture: 'Modular MERN stack architecture with JWT auth, optimistic UI state updates, WebSockets for push notifications, and MongoDB aggregation pipelines for site-wide analytics.',
    outcome: 'Streamlined daily logging workflows across 12 active construction pilots, reducing material discrepancy reporting time by over 65%.'
  },
  {
    slug: 'github-profile-analyzer',
    title: 'GITHUB PROFILE ANALYZER',
    tagline: 'Developer Intelligence & Tech Stack Analyzer',
    description: 'A developer intelligence engine that analyzes GitHub profiles, detects tech stack footprints, classifies developer specializations, stores analytics, and exposes REST APIs.',
    year: '2026',
    category: 'Full Stack',
    views: '24.8K',
    itemsCount: 6,
    color: '#6366f1',
    accent: '#4f46e5',
    technologies: ['Node.js', 'Express.js', 'MySQL', 'GitHub API', 'JavaScript', 'Tailwind CSS', 'Vercel'],
    role: 'Full Stack Developer & Backend Architect',
    github: 'https://github.com/San120806/GitHub-Profile-Analyzer',
    live: 'https://git-hub-profile-analyzer-omega.vercel.app/',
    overview: 'GitHub Profile Analyzer is a lightweight developer intelligence engine built to analyze public GitHub developer profiles, compute technology stack frequency, determine primary engineering specializations, and persist processed metrics into a MySQL database with RESTful query capabilities.',
    problem: 'Manually evaluating developer portfolios and repositories across GitHub is tedious, subjective, and lacks quantitative metrics on real language distributions, commit activity, and domain expertise.',
    approach: 'Built an automated ingestion pipeline using the GitHub REST API and specialized heuristics in an analysis engine to aggregate repository languages, detect frameworks, calculate activity scores, and store structured profile analytics in MySQL.',
    features: [
      'Automated GitHub developer profile ingestion & real-time metadata analysis',
      'Tech stack detection & programming language frequency distributions',
      'Developer specialization classification (Frontend, Backend, Full Stack, DevOps)',
      'MySQL database persistence with optimized schema for analytics history',
      'Scalable REST APIs with filtering, sorting, pagination, and incremental synchronization',
      'Interactive responsive web client with data visualizations & profile lookup'
    ],
    architecture: 'Client UI -> Express.js API Gateway -> GitHub API Ingestion Service -> Heuristic Analysis Engine -> MySQL Database with Connection Pooling.',
    outcome: 'Delivered sub-second profile evaluation with automated developer scoring, reducing technical talent screening and portfolio assessment time by over 70%.'
  },
  {
    slug: 'smart-timetable',
    title: 'SMART TIMETABLE',
    tagline: 'AI Scheduling Platform',
    description: 'An intelligent timetable and scheduling platform that allows administrators to create schedules and use an AI interface to dynamically reschedule meetings and calendar workflows.',
    year: '2025',
    category: 'AI / Full Stack',
    views: '19.4K',
    itemsCount: 5,
    color: '#10b981',
    accent: '#059669',
    technologies: ['Next.js', 'React', 'TypeScript', 'AI Workflows', 'Google Calendar API', 'Google Meet API'],
    role: 'Product Developer & AI Integrator',
    github: 'https://github.com/saniyakapure/smart-timetable',
    live: 'https://smart-timetable.vercel.app',
    overview: 'Smart Timetable empowers educational institutions and enterprise teams to solve complex constraint-satisfaction scheduling problems through natural language queries and automated conflict resolution.',
    problem: 'Manual timetable generation for multi-department colleges involves dozens of overlapping teacher availability constraints, classroom capacities, and recurring schedule conflicts.',
    approach: 'Created a constraint-solving scheduler enhanced by an AI dialogue interface that allows administrators to prompt adjustments like "Reschedule Lab 3 to Thursday afternoon without overlapping Prof. Sharma\'s lecture".',
    features: [
      'Zero-conflict automatic timetable generator with custom room/faculty constraints',
      'Natural language AI scheduling assistant for on-the-fly room changes',
      'Two-way synchronization with Google Calendar & automated Google Meet link generation',
      'Student & faculty role portals with real-time class cancellation push notifications',
      'Print-ready matrix view & export to CSV/PDF'
    ],
    architecture: 'React frontend with drag-and-drop schedule grid, TypeScript serverless route handlers, and integration with Google Workspace OAuth2.',
    outcome: 'Successfully reduced timetable creation turnaround from 3 full days to under 10 minutes for departmental academic test batches.'
  },
  {
    slug: 'gradscope',
    title: 'GRADSCOPE',
    tagline: 'AI Career & Higher Education Guidance',
    description: 'An AI-powered career and higher education platform providing personalized roadmaps, skill-gap analysis, study-abroad mentorship, and university diagnostics.',
    year: '2026',
    category: 'AI / Full Stack',
    views: '18.5K',
    itemsCount: 5,
    color: '#4f46e5',
    accent: '#4338ca',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'AI Workflows', 'Vercel'],
    role: 'Full Stack Developer & Product Architect',
    github: 'https://github.com/San120806/GradScope',
    live: 'https://grad-scope-nine.vercel.app/',
    overview: 'GradScope is an AI-powered career navigation and higher education platform that eliminates forum clutter by providing diagnostic career assessments, automated skill-gap roadmaps, and a direct 1-on-1 peer mentorship bridge to verified seniors studying at top global universities.',
    problem: 'Students face fragmented advice across unverified Reddit threads and low LinkedIn outreach response rates when seeking career blueprints, graduate admissions advice, and visa/housing preparation.',
    approach: 'Engineered an interactive Next.js platform featuring tailored diagnostic questionnaires, dynamic visual career roadmaps, university exploration filters, and verified mentor scheduling pipelines.',
    features: [
      'Diagnostic Career Assessment with compatibility scoring across top industry roles',
      'Interactive personalized career blueprints and degree-specific skill-gap roadmaps',
      'Direct 1-on-1 study abroad peer mentorship bridge with verified international seniors',
      'Global university exploration directory with tuition, rankings, and acceptance rate insights',
      'Persistent student dashboard for roadmap tracking and mentor connection history'
    ],
    architecture: 'Next.js App Router with server-side rendering, Lucide icons, responsive Tailwind CSS layouts, and edge deployment on Vercel.',
    outcome: 'Created a unified career guidance portal covering 20+ career paths and 15+ global university networks, improving peer mentorship reach.'
  },
  {
    slug: 'mescora',
    title: 'MESCORA INTERIORS',
    tagline: 'Interior Design Digital Experience',
    description: 'A digital experience for an interior design brand focused on responsive presentation and lead generation.',
    year: '2025',
    category: 'Web / UI/UX',
    views: '11.5K',
    itemsCount: 4,
    color: '#e11d48',
    accent: '#be123c',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Figma', 'UI/UX Design', 'Vercel'],
    role: 'UI/UX Designer & Frontend Developer',
    github: 'https://github.com/San120806/mescorainteriors',
    live: 'https://mescorainteriors.com/',
    overview: 'Mescora Interiors is an elevated digital showcase designed for a boutique interior design studio, featuring interactive 3D spatial moodboards and high-conversion client onboarding.',
    problem: 'Interior studios struggle to showcase high-res project imagery without sluggish page speeds, and standard contact forms have high drop-off rates for premium clients.',
    approach: 'Crafted an editorial-grade aesthetic with Next.js image optimization, smooth layout transitions, and an interactive spatial project questionnaire.',
    features: [
      'Interactive portfolio gallery with before/after comparison sliders',
      'Custom spatial questionnaire estimating design packages and timelines',
      'Sub-second page transitions and WebP image optimization with blur placeholders',
      'Integrated client booking system and WhatsApp direct consult widget'
    ],
    architecture: 'Next.js static site generation (SSG) with ISR for portfolio galleries, Tailwind CSS for custom typographic hierarchy, and deployed on Vercel Edge.',
    outcome: 'Increased client consultation inquiries by 40% within the first month of launch.'
  }
];
