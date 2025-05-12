
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", url: "#home" },
  { name: "About", url: "#about" },
  { name: "Skills", url: "#skills" },
  { name: "Projects", url: "#projects" },
  { name: "Experience", url: "#experience" },
  { name: "Contact", url: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy/90 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-highlight font-bold text-2xl">
          SD
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              className="nav-link"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-highlight mr-1">0{index + 1}.</span>
              {link.name}
            </a>
          ))}
          <Button className="ml-4 bg-transparent text-highlight border border-highlight hover:bg-highlight/10">
            Resume
          </Button>
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-highlight"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-light fixed top-[62px] right-0 w-full h-[calc(100vh-62px)] flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                className="nav-link text-xl"
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-highlight mr-1">0{index + 1}.</span>
                {link.name}
              </a>
            ))}
            <Button className="mt-4 bg-transparent text-highlight border border-highlight hover:bg-highlight/10">
              Resume
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
