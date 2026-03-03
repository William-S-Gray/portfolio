export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: "web" | "ai" | "backend" | "research";
  githubUrl?: string;
  liveUrl?: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "AI-Powered Chat Platform",
    description: "Real-time chat application with AI-driven response suggestions and sentiment analysis.",
    techStack: ["React", "Node.js", "OpenAI", "Socket.io"],
    category: "ai",
    githubUrl: "#",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    id: "2",
    title: "E-Commerce Dashboard",
    description: "Full-stack dashboard with analytics, inventory management, and real-time sales tracking.",
    techStack: ["React", "TypeScript", "Spring Boot", "PostgreSQL"],
    category: "web",
    githubUrl: "#",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: "3",
    title: "RESTful API Gateway",
    description: "Scalable microservices API gateway with rate limiting, auth, and monitoring.",
    techStack: ["Node.js", "Express", "Redis", "Docker"],
    category: "backend",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
  {
    id: "4",
    title: "ML Image Classifier",
    description: "Deep learning image classification model with a clean web interface for predictions.",
    techStack: ["Python", "TensorFlow", "React", "Flask"],
    category: "ai",
    githubUrl: "#",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
  },
  {
    id: "5",
    title: "Task Management App",
    description: "Kanban-style project management tool with real-time collaboration and notifications.",
    techStack: ["React", "MongoDB", "Node.js", "WebSockets"],
    category: "web",
    githubUrl: "#",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
  },
  {
    id: "6",
    title: "NLP Research Paper Analyzer",
    description: "Automated research paper summarization and citation network visualization tool.",
    techStack: ["Python", "NLTK", "React", "D3.js"],
    category: "research",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=600&h=400&fit=crop",
  },
];
