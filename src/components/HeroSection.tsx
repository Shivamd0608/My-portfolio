
import Particles from "./Particles";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      <Particles />
      <div className="container max-w-6xl mx-auto px-6 z-10">
        <div className="max-w-3xl">
          <h3 
            className="text-highlight font-mono mb-5 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            Hi, my name is
          </h3>
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
          >
            Shivam Arvind Dubey.
          </h1>
          <h2 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '600ms' }}
          >
            I build exceptional web experiences.
          </h2>
          <p 
            className="text-slate text-lg max-w-xl mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '800ms' }}
          >
            I'm an IITian from IIT ISM Dhanbad and a full stack web developer specializing in 
            building extraordinary digital experiences. Currently, I'm focused on building 
            user-centered products as Lead Web Developer at Seedial Startup.
          </p>
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
            <Button 
              size="lg" 
              className="bg-highlight text-navy hover:bg-highlight/90"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-highlight text-highlight hover:bg-highlight/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-highlight animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={30} />
      </a>
    </section>
  );
};

export default HeroSection;
