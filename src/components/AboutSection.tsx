
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entries[0].target);
      }
    }, { threshold: 0.1 });

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const achievements = [
    "Lead Web Developer at Seedial Startup",
    "Founding member of Incubitet IIT ISM",
    "Mentor at RoboISM (robotics club)",
    "Member of Mic Drop (public speaking club)",
    "PR team organizer for Srijan (East Asia's largest socio-cultural fest)"
  ];

  return (
    <section id="about" className="section-container">
      <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <span className="section-title-number">01.</span> About Me
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Text Content - 2/3 width on desktop */}
        <div className={`lg:col-span-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          <div className="space-y-6 text-slate">
            <p>
              Hello! I'm Shivam, a full stack web developer with a passion for building digital
              experiences that are both functional and beautiful. My journey in web development 
              started during my time at IIT ISM Dhanbad, where I pursued a B.Tech in Electrical Engineering.
            </p>
            <p>
              Throughout my academic and professional journey, I've had the opportunity to work
              on various projects that have helped me develop a strong foundation in both frontend
              and backend technologies. My focus is on creating responsive, user-friendly applications
              that solve real-world problems.
            </p>
            <p>
              When I'm not coding, you can find me mentoring junior developers, participating in
              robotics club activities, or honing my public speaking skills at Mic Drop club.
            </p>
            <div>
              <h3 className="text-xl font-bold mb-4 text-slate-light">Key Achievements:</h3>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-highlight mr-2">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Education Card - 1/3 width on desktop */}
        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <Card className="bg-navy-light border border-highlight/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-slate-light text-center">Education</h3>
              <div className="space-y-6">
                <div className="relative pl-6 pb-6 border-l border-highlight">
                  <div className="absolute w-3 h-3 bg-highlight rounded-full -left-[6.5px] top-0"></div>
                  <div className="mb-2">
                    <Badge className="bg-highlight text-navy">2016 - 2020</Badge>
                  </div>
                  <h4 className="font-semibold text-lg">B.Tech in Electrical Engineering</h4>
                  <p className="text-slate">IIT ISM Dhanbad</p>
                </div>
                <div className="relative pl-6">
                  <div className="absolute w-3 h-3 bg-highlight rounded-full -left-[6.5px] top-0"></div>
                  <div className="mb-2">
                    <Badge className="bg-highlight text-navy">2014 - 2016</Badge>
                  </div>
                  <h4 className="font-semibold text-lg">Higher Secondary Education</h4>
                  <p className="text-slate">Excellence School</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
