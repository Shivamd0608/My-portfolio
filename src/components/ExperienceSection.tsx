
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Experience = {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  type: "professional" | "leadership";
  logo: string;
};

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "professional" | "leadership">("all");

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

    const element = document.getElementById("experience");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const experiences: Experience[] = [
    {
      id: 1,
      title: "Lead Web Developer",
      company: "Seedial Startup",
      location: "Remote",
      period: "June 2020 - Present",
      description: [
        "Lead the development of the company's main web application using React and Node.js",
        "Implemented responsive UI designs and improved site performance by 40%",
        "Coordinated with cross-functional teams to define and implement new features",
        "Mentored junior developers and established coding standards",
        "Integrated payment gateways and third-party APIs"
      ],
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "CI/CD"],
      type: "professional",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=3270&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Founding Member",
      company: "Incubitet IIT ISM",
      location: "IIT ISM Dhanbad",
      period: "Aug 2018 - May 2020",
      description: [
        "Co-founded and established the college's first technical entrepreneurship incubator",
        "Organized workshops and bootcamps on web development and entrepreneurship",
        "Mentored 10+ student startups from ideation to prototype development",
        "Built and maintained the organization's website and technical infrastructure",
        "Collaborated with industry partners for sponsorships and mentorship"
      ],
      skills: ["Leadership", "Web Development", "Mentorship", "Event Management"],
      type: "leadership",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=3270&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Mentor",
      company: "RoboISM (Robotics Club)",
      location: "IIT ISM Dhanbad",
      period: "Sep 2017 - May 2020",
      description: [
        "Mentored junior members in robotics fundamentals and programming",
        "Led a team of 5 members to win the national robotics competition",
        "Conducted workshops on Arduino programming and sensor integration",
        "Developed web interface for robot control using JavaScript and WebSockets"
      ],
      skills: ["Robotics", "Arduino", "Team Leadership", "JavaScript"],
      type: "leadership",
      logo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=3270&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Web Development Intern",
      company: "TechInnovate Solutions",
      location: "Bangalore (Remote)",
      period: "May 2019 - July 2019",
      description: [
        "Developed and maintained client websites using HTML, CSS, JavaScript, and PHP",
        "Collaborated with design team to implement responsive UI components",
        "Optimized website performance and implemented SEO best practices",
        "Created documentation for website maintenance and content updates"
      ],
      skills: ["HTML/CSS", "JavaScript", "PHP", "WordPress", "SEO"],
      type: "professional",
      logo: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=3270&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "PR Team Organizer",
      company: "Srijan Cultural Festival",
      location: "IIT ISM Dhanbad",
      period: "Dec 2018 - Feb 2019",
      description: [
        "Managed a team of 15 members for publicity and public relations",
        "Developed and executed social media marketing strategies resulting in 40% increase in festival attendance",
        "Coordinated with sponsors and partners for event promotion",
        "Created digital marketing materials and website content"
      ],
      skills: ["Team Management", "Marketing", "Social Media", "Content Creation"],
      type: "leadership",
      logo: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=3270&auto=format&fit=crop"
    }
  ];

  const filteredExperiences = activeTab === "all" 
    ? experiences 
    : experiences.filter(exp => exp.type === activeTab);

  return (
    <section id="experience" className="section-container">
      <h2 className={`section-title ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <span className="section-title-number">04.</span> Experience
      </h2>

      {/* Experience Type Tabs */}
      <div className={`flex border-b border-highlight/20 mb-10 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 font-medium text-sm transition-colors duration-300 ${
            activeTab === "all"
              ? "border-b-2 border-highlight text-highlight"
              : "text-slate hover:text-slate-light"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveTab("professional")}
          className={`px-4 py-2 font-medium text-sm transition-colors duration-300 ${
            activeTab === "professional"
              ? "border-b-2 border-highlight text-highlight"
              : "text-slate hover:text-slate-light"
          }`}
        >
          Professional
        </button>
        <button
          onClick={() => setActiveTab("leadership")}
          className={`px-4 py-2 font-medium text-sm transition-colors duration-300 ${
            activeTab === "leadership"
              ? "border-b-2 border-highlight text-highlight"
              : "text-slate hover:text-slate-light"
          }`}
        >
          Leadership
        </button>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8">
        {filteredExperiences.map((exp, index) => (
          <Card
            key={exp.id}
            className={`bg-navy-light border border-highlight/20 overflow-hidden ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${300 + index * 150}ms` }}
          >
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 bg-navy-dark p-6 flex justify-center items-center">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-20 h-20 object-cover rounded-full"
                  />
                </div>
                <div className="md:w-3/4 p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-light">
                        {exp.title}
                      </h3>
                      <p className="text-highlight">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <Badge className="bg-highlight/20 text-highlight">
                        {exp.period}
                      </Badge>
                      <p className="text-slate text-sm mt-1">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-highlight mr-2">▹</span>
                        <span className="text-slate">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="border-highlight/30 text-slate-light">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
