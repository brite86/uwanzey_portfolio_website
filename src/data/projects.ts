export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  status: 'Live' | 'In Progress' | 'Completed';
}

export const projects: Project[] = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing products, orders, and analytics with real-time data visualization and responsive design.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    status: "Live"
  },
  {
    title: "Task Management App",
    description: "A modern project management tool with drag-and-drop functionality, team collaboration features, and progress tracking.",
    technologies: ["React", "JavaScript", "CSS3", "Local Storage"],
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    status: "Live"
  },
  {
    title: "Weather Forecast App",
    description: "An elegant weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    technologies: ["React", "Weather API", "Geolocation", "Responsive Design"],
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    status: "Live"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing frontend development skills with smooth animations and modern design principles.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    status: "Live"
  },
  {
    title: "Support Ticket System",
    description: "A comprehensive technical support platform with ticket management, knowledge base, and customer communication tools.",
    technologies: ["React", "Node.js", "Database", "REST API"],
    image: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubUrl: "https://github.com",
    status: "In Progress"
  },
  {
    title: "Real-time Chat App",
    description: "A modern messaging application with real-time communication, group chats, file sharing, and emoji support.",
    technologies: ["React", "WebSocket", "CSS3", "Real-time"],
    image: "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    status: "Completed"
  }
];