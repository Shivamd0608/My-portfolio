
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type Skill = {
  name: string;
  proficiency: number;
  category: string;
  description: string;
};

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<string>("All");

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

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const skills: Skill[] = [
    {
      name: "React.js",
      proficiency: 90,
      category: "Frontend",
      description: "Building interactive UIs with React and related ecosystem (Redux, hooks, etc.)"
    },
    {
      name: "Node.js",
      proficiency: 85,
      category: "Backend",
      description: "Server-side JavaScript runtime for building scalable network applications"
    },
    {
      name: "Express.js",
      proficiency: 85,
      category: "Backend",
      description: "Fast, unopinionated, minimalist web framework for Node.js"
    },
    {
      name: "MongoDB",
      proficiency: 80,
      category: "Database",
      description: "NoSQL database for modern applications with flexible schema design"
    },
    {
      name: "MySQL",
      proficiency: 75,
      category: "Database",
      description: "Open-source relational database management system"
    },
    {
      name: "Solidity",
      proficiency: 70,
      category: "Blockchain",
      description: "Object-oriented programming language for writing smart contracts"
    },
    {
      name: "Rust",
      proficiency: 65,
      category: "Programming",
      description: "Systems programming language focused on safety and performance"
    },
    {
      name: "HTML/CSS",
      proficiency: 95,
      category: "Frontend",
      description: "Building and styling the structure of web pages"
    },
    {
      name: "TypeScript",
      proficiency: 85,
      category: "Programming",
      description: "JavaScript with syntax for types, enhancing code quality and understandability"
    },
    {
      name: "Git/GitHub",
      proficiency: 90,
      category: "Tools",
      description: "Version control and collaboration platform for software development"
    },
    {
      name: "Docker",
      proficiency: 75,
      category: "DevOps",
      description: "Platform for developing, shipping, and running applications in containers"
    },
    {
      name: "AWS",
      proficiency: 70,
      category: "DevOps",
      description: "Cloud computing platform offering over 200 fully-featured services"
    }
  ];

  const categories = ["All", ...new Set(skills.map((skill) => skill.category))];
  const filteredSkills = filter === "All" ? skills : skills.filter((skill) => skill.category === filter);

  return (
    <section id="skills" className="section-container">
      <h2 className={`section-title ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <span className="section-title-number">02.</span> Skills & Expertise
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

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, index) => (
          <TooltipProvider key={skill.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Card
                  className={`bg-navy-light border border-highlight/20 overflow-hidden hover:border-highlight/50 transition-all duration-300 ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  } card-hover`}
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-slate-light">{skill.name}</h3>
                      <Badge className="bg-highlight/20 text-highlight">
                        {skill.category}
                      </Badge>
                    </div>
                    <div className="w-full animated-skill-bar mb-2">
                      <div
                        className="h-full bg-highlight"
                        style={{ width: `${skill.proficiency}%`, transition: "width 1s ease-in-out" }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-slate">
                      <span>Proficiency</span>
                      <span>{skill.proficiency}%</span>
                    </div>
                  </CardContent>
                </Card>
              </TooltipTrigger>
              <TooltipContent className="bg-navy-light border-highlight/30 p-3 max-w-xs">
                <p>{skill.description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
