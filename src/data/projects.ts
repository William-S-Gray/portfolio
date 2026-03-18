export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: "healthcare" | "management" | "marketplace" | "entertainment" | "ai" | "retail" | "security";
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  icon?: string;
}

export const projects: Project[] = [
  {
    id: "pathoguide",
    title: "PathoGuide",
    description: "A professional clinical decision support system designed to optimize antibiotic prescribing based on real-time local resistance data from Mutare. Revolutionizing antimicrobial stewardship.",
    techStack: ["React", "TypeScript", "Node.js", "Data Analytics"],
    category: "healthcare",
    liveUrl: "https://pathoguide-frontend.onrender.com/",
    image: "/home/william/.gemini/antigravity/brain/46946cd2-596a-4e50-a9b0-5f2d0675a034/pathoguide_thumbnail_1773257383409.png",
  },
  {
    id: "campusiq",
    title: "CampusIQ",
    description: "A modern, all-in-one school management platform that streamlines administration, empowers teachers, and engages students with real-time academic tracking and analytics.",
    techStack: ["React", "Spring Boot", "PostgreSQL", "JWT"],
    category: "management",
    liveUrl: "https://edunext-app-f.onrender.com",
    image: "/home/william/.gemini/antigravity/brain/46946cd2-596a-4e50-a9b0-5f2d0675a034/campusiq_thumbnail_1773257412867.png",
  },
  {
    id: "meal-pass",
    title: "Meal Pass",
    description: "Take control of your nutrition with this intelligent meal management system. Track individual meals, manage dietary goals, and streamline dining with QR-code integration.",
    techStack: ["React", "Vite", "PWA", "Firebase"],
    category: "management",
    liveUrl: "https://meal-pass-frontend.onrender.com",
    image: "/home/william/.gemini/antigravity/brain/46946cd2-596a-4e50-a9b0-5f2d0675a034/mealpass_thumbnail_1773257462085.png",
  },
  {
    id: "davison-motors",
    title: "Davison Motors",
    description: "A premium automotive management platform offering an elite experience for luxury car dealerships. Manage inventory and showcase high-end vehicles with unparalleled elegance.",
    techStack: ["React", "Three.js", "Express", "MongoDB"],
    category: "management",
    liveUrl: "https://frontend-nz41.onrender.com",
    image: "/home/william/.gemini/antigravity/brain/46946cd2-596a-4e50-a9b0-5f2d0675a034/davison_motors_thumbnail_1773257479751.png",
  },
  {
    id: "echostream",
    title: "EchoStream",
    description: "Experience music like never before with EchoStream. A futuristic music management system featuring dynamic visualizers, glassmorphism UI, and personalized audio discovery.",
    techStack: ["React", "Web Audio API", "Framer Motion", "Supabase"],
    category: "entertainment",
    image: "/home/william/.gemini/antigravity/brain/46946cd2-596a-4e50-a9b0-5f2d0675a034/echostream_thumbnail_1773257507942.png",
  },
  {
    id: "mediflow",
    title: "MediFlow",
    description: "Optimizing hospital operations with MediFlow. A high-tech management system for real-time patient tracking, staff coordination, and medical inventory control.",
    techStack: ["React", "Next.js", "TypeScript", "Redis"],
    category: "healthcare",
    image: "/home/william/.gemini/antigravity/brain/46946cd2-596a-4e50-a9b0-5f2d0675a034/mediflow_thumbnail_1773257613808.png",
  },
  {
    id: "pharmtrack",
    title: "PharmTrack",
    description: "Real-time medicine availability at your fingertips. PharmTrack connects patients with pharmacies, offering stock management, reorder alerts, and seamless online ordering.",
    techStack: ["React Native", "Node.js", "Google Maps API", "Socket.io"],
    category: "healthcare",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?w=800&q=80",
  },
  {
    id: "agriconnect",
    title: "AgriConnect Marketplace",
    description: "Empowering local farmers by eliminating middle-men. AgriConnect allows farmers to list harvests and buyers to purchase directly, ensuring fair prices and fresh produce.",
    techStack: ["React", "Express", "Stripe", "PostGIS"],
    category: "marketplace",
    image: "https://images.unsplash.com/photo-1500937386664-56d1df932742?w=800&q=80",
  },
  {
    id: "meditriage-ai",
    title: "MediTriage AI",
    description: "Advanced multi-channel AI triage platform. Access expert medical guidance via smartphone, WhatsApp, or USSD code, ensuring timely care for everyone, everywhere.",
    techStack: ["Python", "OpenAI", "React", "Twilio"],
    category: "healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-217359f41f4d?w=800&q=80",
  },
  {
    id: "smartmart-pos",
    title: "SmartMart POS",
    description: "A comprehensive Point-of-Sale system built to automate supermarket daily operations. Features real-time inventory management, barcode scanning, sales analytics, and seamless checkout workflows for modern retail businesses.",
    techStack: ["Vite", "React", "TypeScript", "shadcn-ui", "Tailwind CSS"],
    category: "retail",
    image: "/home/william/.gemini/antigravity/brain/403ab572-c989-4b02-8867-a03178bd6032/smartmart_pos_thumbnail_1773730700923.png",
  },
  {
    id: "tune-wise",
    title: "Tune-Wise",
    description: "An interactive music education platform designed to teach students music theory, ear training, and instrument practice. Features piano keyboards, progress tracking, gamified lessons, and real-time audio feedback.",
    techStack: ["React", "TypeScript", "Web Audio API", "Vite"],
    category: "entertainment",
    image: "/home/william/.gemini/antigravity/brain/403ab572-c989-4b02-8867-a03178bd6032/tunewise_thumbnail_1773730748404.png",
  },
  {
    id: "aegis",
    title: "Aegis – Vehicle Access Management",
    description: "An AI-powered intelligent vehicle access management system combining license plate recognition with role-based access control and real-time alerts. Supports IP cameras and mobile phones with a modern neumorphic UI.",
    techStack: ["React", "TypeScript", "Python", "OpenCV", "AI/ML"],
    category: "security",
    image: "/home/william/.gemini/antigravity/brain/403ab572-c989-4b02-8867-a03178bd6032/aegis_thumbnail_1773730808653.png",
  },
];
