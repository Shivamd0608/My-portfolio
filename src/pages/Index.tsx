
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  useEffect(() => {
    // Update the page title
    document.title = "Shivam Arvind Dubey | IITian & Full Stack Developer";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Portfolio of Shivam Arvind Dubey - IITian & Full Stack Web Developer specializing in React.js, Node.js, and Web3 technologies.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
