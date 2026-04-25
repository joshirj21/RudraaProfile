// Portfolio data for Rudraa Joshi
// Currently used as static frontend data. Backend integration optional.

export const profile = {
  name: "Rudraa Joshi",
  firstName: "Rudraa",
  lastName: "Joshi",
  role: "UI/UX & Product Designer",
  location: "Bengaluru, India",
  tagline:
    "I design SaaS, AI and enterprise products — turning complex workflows into calm, considered interfaces.",
  intro:
    "I'm a product designer with a background in industrial design, now shaping the next generation of SaaS, AI and dashboard experiences. I care about systems thinking, usability, and the quiet details that make a product feel inevitable.",
  email: "rudraajoshi17@gmail.com",
  phone: "+91 93733 53964",
  linkedin: "https://linkedin.com/in/rudraa-joshi-566076210",
  resumeUrl:
    "https://customer-assets.emergentagent.com/job_90f60345-f2a9-405e-a3d6-b34eb2ee9b49/artifacts/s9wboczu_Resume_rudraa_joshi.pdf",
  available: true,
};

export const navLinks = [
  { label: "Index", href: "#index" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Journal", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    id: "wellington-hub",
    index: "01",
    title: "Wellington Hub",
    subtitle: "Enterprise HRMS Redesign",
    summary:
      "Redesigning enterprise fleet operations for 1,200+ drivers across North America. A dual-workforce HRMS unified into a calm, task-oriented platform.",
    role: "UI/UX Designer",
    duration: "3 Months · Ongoing",
    company: "Wellington Motor Freight",
    industry: "Logistics & Transportation",
    year: "2026",
    tags: ["Enterprise", "Design System", "Dashboard", "B2B"],
    cover: "https://images.pexels.com/photos/28962928/pexels-photo-28962928.jpeg",
    accent: "#B5462E",
    type: "case-study",
    href: "/work/wellington-hub",
    metrics: [
      { value: "60%", label: "Faster Onboarding" },
      { value: "83%", label: "Fewer Errors" },
      { value: "$12K+", label: "Annual Savings" },
      { value: "94%", label: "Completion Rate" },
    ],
  },
  {
    id: "smartizen",
    index: "02",
    title: "Smartizen",
    subtitle: "Early Childhood Education Platform",
    summary:
      "A dual-sided mobile ecosystem connecting parents, facilitators and admins — reducing facilitator admin time by 70% and increasing parent engagement by 85%.",
    role: "UI/UX Designer",
    duration: "2 Months",
    company: "Whole-brain & French programs",
    industry: "EdTech",
    year: "2025",
    tags: ["Mobile", "iOS & Android", "Multi-role", "EdTech"],
    cover: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    accent: "#8B6F47",
    type: "external",
    href: "https://joshirj21.github.io/smarten/",
    metrics: [
      { value: "70%", label: "Less Admin Time" },
      { value: "85%", label: "Engagement Up" },
      { value: "3 taps", label: "To Log Activity" },
      { value: "92%", label: "Parent CSAT" },
    ],
  },
  {
    id: "tap-trading",
    index: "03",
    title: "Tap Trading",
    subtitle: "Real-time Trading Interface",
    summary:
      "A focused trading app with balance, wager and live order flows — designed for fast decisions and zero misclicks.",
    role: "Product Designer",
    duration: "6 Weeks",
    company: "Independent",
    industry: "Fintech",
    year: "2025",
    tags: ["Fintech", "Mobile", "Real-time"],
    cover: "https://images.unsplash.com/photo-1589183440456-34d255090e7b",
    accent: "#5B4B3A",
    type: "coming-soon",
    href: "#",
  },
  {
    id: "icon-set",
    index: "04",
    title: "Icon Set",
    subtitle: "Custom Scalable UI Iconography",
    summary:
      "A pixel-snapped icon system designed for product UI — built for clarity at 16px, 20px and 24px with consistent stroke weight.",
    role: "Designer",
    duration: "4 Weeks",
    company: "Independent",
    industry: "Design System",
    year: "2024",
    tags: ["Iconography", "Design System"],
    cover: "https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg",
    accent: "#7A5C3F",
    type: "coming-soon",
    href: "#",
  },
  {
    id: "hrms-components",
    index: "05",
    title: "HRMS Components",
    subtitle: "Information-dense Component Library",
    summary:
      "A foundational component library for HR software — focused on accessibility of information and clean data hierarchy.",
    role: "UI Designer",
    duration: "Ongoing",
    company: "Mindmesh Systems",
    industry: "SaaS",
    year: "2026",
    tags: ["SaaS", "Components", "HR"],
    cover: "https://images.pexels.com/photos/12738974/pexels-photo-12738974.jpeg",
    accent: "#6B5743",
    type: "coming-soon",
    href: "#",
  },
];

export const experiences = [
  {
    company: "Mindmesh Systems",
    role: "UI/UX Designer",
    period: "Feb 2026 — Present",
    description:
      "Designing chatbot interfaces and improving product UI based on user research and engineering constraints.",
  },
  {
    company: "OWIS",
    role: "Teaching Assistant — UI/UX",
    period: "Jul 2025 — Present",
    description:
      "Teaching UI/UX fundamentals and mentoring students through Figma workflows and product critiques.",
  },
  {
    company: "Q.study.ai",
    role: "Product Designer",
    period: "Aug — Sep 2025",
    description:
      "Designed website UI and surfaced UX issues during QA, improving conversion-critical flows.",
  },
  {
    company: "Dravina.ai",
    role: "Product Designer",
    period: "Aug 2025",
    description:
      "Helped organize and build a UI component library to ground future product work in a shared system.",
  },
  {
    company: "DQ Labs",
    role: "Assistant Designer",
    period: "Jun — Aug 2025",
    description:
      "Worked on graphic design deliverables and digital assets for product and marketing surfaces.",
  },
  {
    company: "KPT Industries",
    role: "Product Design Intern",
    period: "Jun — Jul 2024",
    description:
      "Worked on the ergonomic redesign of power tools — bridging physical and interaction design thinking.",
  },
];

export const skills = {
  expertise: [
    "UI/UX Design",
    "Dashboard Design",
    "Web Interface Design",
    "Product Thinking",
    "Design Systems",
    "Information Architecture",
    "Progressive Disclosure",
    "Status-Driven Design",
  ],
  tools: [
    "Figma",
    "Photoshop",
    "Illustrator",
    "Adobe XD",
    "Canva",
    "Rhinoceros",
    "KeyShot",
  ],
  soft: [
    "Problem Solving",
    "Collaboration",
    "User-Centric Thinking",
    "Adaptability",
    "Analytical Thinking",
    "Communication",
  ],
};

export const education = [
  {
    school: "RV University",
    location: "Bengaluru",
    degree: "Bachelor of Product Design",
    period: "2021 — 2025",
  },
  {
    school: "Mt. Mathubai Garware Kanya Mahavidyalaya",
    location: "",
    degree: "B.A. Foundation Year",
    period: "2020 — 2021",
  },
  {
    school: "T.G. Arwade Jr. College",
    location: "Sangli",
    degree: "Higher Secondary",
    period: "2018 — 2020",
  },
];

export const philosophy = [
  {
    n: "01",
    title: "Systems before screens.",
    body:
      "Great UI is downstream of great architecture. I start by mapping the model, the roles, and the data — then design the surface.",
  },
  {
    n: "02",
    title: "Calm over clever.",
    body:
      "Enterprise users don't need delight; they need predictability. I design for the moments friction hurts most.",
  },
  {
    n: "03",
    title: "Measure the outcome.",
    body:
      "Every design decision should tie back to a number — completion rate, error rate, time saved, dollars saved.",
  },
];
