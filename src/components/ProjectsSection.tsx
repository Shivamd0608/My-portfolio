
import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
};

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Decentralized Marketplace",
      description: "A blockchain-based marketplace for digital assets using Ethereum and IPFS",
      longDescription: "This decentralized application (dApp) provides a secure platform for buying, selling, and trading digital assets. Built on Ethereum blockchain with smart contracts managing transactions, it uses IPFS for decentralized storage of digital assets.",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2832&auto=format&fit=crop",
      techStack: ["React.js", "Solidity", "Web3.js", "IPFS", "Hardhat"],
      category: "Blockchain",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Smart contract-based secure transactions",
        "User-owned digital asset management",
        "Decentralized file storage with IPFS",
        "MetaMask wallet integration",
        "Real-time bidding system"
      ]
    },
    {
      id: 2,
      title: "Task Management System",
      description: "A full-stack task management platform with team collaboration features",
      longDescription: "This comprehensive task management system helps teams organize work efficiently. It features real-time updates, task assignments, deadline tracking, and detailed analytics to improve productivity.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2944&auto=format&fit=crop",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
      category: "Web Application",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Real-time collaboration with Socket.io",
        "Task assignment and tracking",
        "File attachments and sharing",
        "Calendar integration",
        "Performance analytics dashboard"
      ]
    },
    {
      id: 3,
      title: "E-Learning Platform",
      description: "An interactive platform for online learning with video courses and quizzes",
      longDescription: "A comprehensive online learning system that provides interactive courses, assessments, and progress tracking. The platform supports video lectures, downloadable resources, and community discussions.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=3174&auto=format&fit=crop",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS S3"],
      category: "Web Application",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Video streaming with adaptive quality",
        "Interactive quizzes and assessments",
        "Progress tracking and certificates",
        "Student-teacher communication channels",
        "Content recommendation system"
      ]
    },
    {
      id: 4,
      title: "Crypto Price Tracker",
      description: "Real-time cryptocurrency price tracking with historical data visualization",
      longDescription: "A real-time cryptocurrency monitoring tool that displays current prices, historical trends, and market information. The application includes interactive charts, price alerts, and portfolio tracking functionality.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=3087&auto=format&fit=crop",
      techStack: ["React.js", "Chart.js", "CoinGecko API", "Node.js"],
      category: "Finance",
      githubUrl: "https://github.com",
      features: [
        "Real-time price updates via WebSockets",
        "Interactive historical price charts",
        "Portfolio value tracking",
        "Price alerts and notifications",
        "Cryptocurrency news integration"
      ]
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Unified dashboard for managing multiple social media accounts",
      longDescription: "An all-in-one dashboard for managing and analyzing multiple social media accounts. Schedule posts, track engagement metrics, and generate comprehensive performance reports across platforms.",
      image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=3174&auto=format&fit=crop",
      techStack: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB"],
      category: "Marketing",
      liveUrl: "https://example.com",
      features: [
        "Content scheduling across platforms",
        "Unified analytics dashboard",
        "Engagement tracking and reporting",
        "Audience insights and demographics",
        "Social listening tools"
      ]
    },
    {
      id: 6,
      title: "IoT Home Automation",
      description: "Smart home system with IoT devices and mobile app control",
      longDescription: "A comprehensive smart home solution that integrates various IoT devices for home automation. Control lighting, temperature, security systems, and appliances through a mobile app or voice commands.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=3270&auto=format&fit=crop",
      techStack: ["React Native", "Node.js", "MQTT", "MongoDB", "Raspberry Pi"],
      category: "IoT",
      githubUrl: "https://github.com",
      features: [
        "Remote device control via mobile app",
        "Automated routines and scenes",
        "Energy usage monitoring",
        "Voice control integration",
        "Security camera feeds and alerts"
      ]
    }
  ];

  const categories = ["All", ...new Set(projects.map((project) => project.category))];
  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="section-container">
      <h2 className={`section-title ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <span className="section-title-number">03.</span> My Projects
      </h2>

      {/* Category Filters */}
      <div className={`mb-10 flex flex-wrap gap-2 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
        {categories.map((category) => (
          <Badge
            key={category}
            className={`cursor-pointer text-sm py-2 px-4 ${
              filter === category
                ? "bg-highlight text-navy"
                : "bg-navy-light hover:bg-navy-light/80"
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <Card
            key={project.id}
            className={`bg-navy-light border border-highlight/20 overflow-hidden ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            } card-hover`}
            style={{ animationDelay: `${300 + index * 100}ms` }}
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <CardHeader className="pb-2">
              <h3 className="text-xl font-semibold text-slate-light">{project.title}</h3>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-slate mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.techStack.slice(0, 3).map((tech) => (
                  <Badge key={tech} className="bg-highlight/10 text-highlight">
                    {tech}
                  </Badge>
                ))}
                {project.techStack.length > 3 && (
                  <Badge className="bg-highlight/10 text-highlight">
                    +{project.techStack.length - 3}
                  </Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button
                variant="ghost"
                className="text-highlight hover:bg-highlight/10 hover:text-highlight"
                onClick={() => setSelectedProject(project)}
              >
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-3xl bg-navy border border-highlight/20">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-slate-light">
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription className="text-slate">
                {selectedProject.longDescription}
              </DialogDescription>
            </DialogHeader>

            <div className="h-64 overflow-hidden rounded-md my-4">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-light mb-2">Key Features:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-light mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <Badge key={tech} className="bg-highlight/10 text-highlight">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                {selectedProject.liveUrl && (
                  <Button className="bg-highlight text-navy hover:bg-highlight/90" asChild>
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {selectedProject.githubUrl && (
                  <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight/10" asChild>
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
