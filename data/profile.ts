export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  roles: string[];
  location: string;
  education: {
    degree: string;
    college: string;
  };
  bio: {
    intro: string;
    story: string;
    interests: string[];
    community: string;
  };
  skills: {
    frontend: string[];
    fullstack: string[];
    cloud: string[];
    ai: string[];
    design: string[];
    tools: string[];
  };
}

export const profileData: Profile = {
  name: "Saniya Kapure",
  title: "Computer Science Student · Developer · Designer · Builder",
  subtitle: "Building digital products at the intersection of technology, design & experimentation.",
  roles: ["Developer", "UI/UX Designer", "Builder", "Creative Technologist"],
  location: "Mumbai, India",
  education: {
    degree: "B.Tech Computer Science",
    college: "ITM Skills University",
  },
  bio: {
    intro: "I'm a Computer Science student at ITM Skills University who enjoys building digital products at the intersection of technology, design and experimentation.",
    story: "Curious, technical, and builder-oriented. I focus on crafting scalable full-stack applications, intelligent AI interfaces, and thoughtful user experiences that delight people.",
    interests: [
      "Frontend & Full-Stack Development",
      "UI/UX Design & Prototyping",
      "Artificial Intelligence & Machine Learning",
      "Cloud Infrastructure & Distributed Systems",
      "Product Development & Creative Coding",
      "Community Building & Tech Events",
    ],
    community: "Developer Student Club Co-lead — actively organizing meetups, technical workshops, hackathons, and fostering builder communities across university campuses.",
  },
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5/CSS3", "Web Audio API", "Canvas"],
    fullstack: ["Node.js", "Express", "FastAPI", "Python", "MongoDB", "PostgreSQL", "REST APIs", "WebSockets"],
    cloud: ["AWS (EC2, S3, RDS, Lambda, CloudWatch)", "Docker", "VPC", "IAM", "Vercel"],
    ai: ["AI Applications", "Machine Learning", "Embeddings", "Vector DBs (pgvector)", "AI Workflows"],
    design: ["UI/UX Design", "Figma", "Wireframing", "Interactive Prototyping", "Design Systems"],
    tools: ["Git", "GitHub", "VS Code", "Cursor", "Claude", "Antigravity", "Docker"],
  },
};
