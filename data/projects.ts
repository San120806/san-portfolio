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
    github: 'https://github.com/saniyakapure/buildtrack',
    live: 'https://buildtrack-demo.vercel.app',
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
    slug: 'drift',
    title: 'DRIFT',
    tagline: 'Personal Operations System',
    description: 'A personal operations system designed to bring tasks, time, communication and personal workflows into one intelligent interface.',
    year: '2026',
    category: 'AI / Product',
    views: '28.6K',
    itemsCount: 5,
    color: '#6366f1',
    accent: '#4f46e5',
    technologies: ['Next.js', 'React', 'FastAPI', 'Python', 'PostgreSQL', 'pgvector', 'AI Workflows'],
    role: 'Full Stack & AI Engineer',
    github: 'https://github.com/saniyakapure/drift-ops',
    live: 'https://drift-ops.vercel.app',
    overview: 'Drift is an autonomous second-brain and personal command center that aggregates asynchronous tasks, emails, calendar commitments, and notes into an adaptive timeline driven by contextual AI vectors.',
    problem: 'Context switching across task managers, email clients, and calendars leads to cognitive fatigue and dropped priorities.',
    approach: 'Leveraged embeddings and pgvector storage in PostgreSQL to rank tasks by cognitive load, urgency, and calendar context, presenting a single intelligent "Next Action" view.',
    features: [
      'Semantic search across all personal notes, tasks, and meeting transcripts',
      'Automated daily priority curation generated each morning via LLM pipeline',
      'Smart time-blocking that adapts automatically when scheduled meetings move',
      'Fast keyboard-first command bar (`Cmd + K`) for instant capture',
      'Interactive voice memos with automatic action-item extraction'
    ],
    architecture: 'Next.js 15 App Router frontend paired with a high-throughput Python FastAPI backend, PostgreSQL with pgvector embeddings, and Redis caching for instant retrieval.',
    outcome: 'Eliminated daily task triage overhead, helping early test users save an average of 45 minutes of daily administrative planning.'
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
    slug: 'urbanmove',
    title: 'URBANMOVE',
    tagline: 'Cloud Ride-Sharing Infrastructure',
    description: 'A cloud infrastructure project demonstrating compute, database, storage, networking, monitoring and identity services for a ride-sharing application.',
    year: '2025',
    category: 'Cloud / AWS',
    views: '8.8K',
    itemsCount: 4,
    color: '#0284c7',
    accent: '#0369a1',
    technologies: ['AWS EC2', 'AWS RDS', 'AWS S3', 'AWS VPC', 'CloudWatch', 'IAM', 'Docker', 'MySQL'],
    role: 'Cloud Infrastructure Architect',
    github: 'https://github.com/saniyakapure/urbanmove-cloud',
    live: 'https://github.com/saniyakapure/urbanmove-cloud',
    overview: 'UrbanMove is an end-to-end cloud infrastructure blueprint designed for high-availability urban mobility platforms, architected following AWS Well-Architected Framework best practices.',
    problem: 'Ride-sharing backends encounter unpredictable demand spikes, requiring auto-scaling compute, geo-replicated low-latency database queries, and secure network isolation.',
    approach: 'Engineered a multi-tier AWS VPC with public and private subnets, auto-scaling EC2 instances behind an Application Load Balancer, Multi-AZ RDS MySQL, and strict least-privilege IAM roles.',
    features: [
      'Isolated VPC architecture with NAT Gateways, public web tiers, and private database tiers',
      'Auto Scaling Group with dynamic scaling policies responding to CPU and request spikes',
      'S3 bucket storage with lifecycle policies and CloudFront CDN for driver profile assets',
      'CloudWatch dashboards with custom metrics and automated SNS alarm triggers',
      'Docker containerized deployment with blue/green deployment strategy'
    ],
    architecture: 'Highly resilient AWS Multi-AZ infrastructure with load-balanced containerized microservices and automated database failover.',
    outcome: 'Achieved 99.99% simulated uptime under synthetic peak ride demand tests with sub-50ms database query response times.'
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
    github: 'https://github.com/saniyakapure/mescora-interiors',
    live: 'https://mescora-interiors.vercel.app',
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
