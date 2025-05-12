
import { Github, Linkedin, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-navy-dark py-8 mt-10">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate">
              © {new Date().getFullYear()} Shivam Arvind Dubey. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/shivamdubey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-highlight transition-colors"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com/in/shivamdubey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-highlight transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a
              href="mailto:dubeyshivam.2020@gmail.com"
              className="text-slate hover:text-highlight transition-colors"
              aria-label="Email"
            >
              <Mail />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-slate text-sm">
          <p>
            Designed & Built with{" "}
            <span className="text-highlight">&#10084;</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
