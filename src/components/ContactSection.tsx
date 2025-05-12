
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    const element = document.getElementById("contact");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { ...errors };
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitting(false);
      }, 1500);
    }
  };

  const contacts = [
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 8355941784",
      href: "tel:+918355941784",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "dubeyshivam.2020@gmail.com",
      href: "mailto:dubeyshivam.2020@gmail.com",
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "github.com/shivamdubey",
      href: "https://github.com/shivamdubey",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/shivamdubey",
      href: "https://linkedin.com/in/shivamdubey",
    },
  ];

  return (
    <section id="contact" className="section-container">
      <h2 className={`section-title ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <span className="section-title-number">05.</span> Contact Me
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className={`space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
          <p className="text-slate text-lg">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-4 mt-8">
            {contacts.map((contact, index) => (
              <Card
                key={index}
                className="bg-navy-light border border-highlight/20 hover:border-highlight/50 transition-all duration-300"
              >
                <CardContent className="p-4 flex items-center">
                  <div className="p-3 rounded-full bg-highlight/10 text-highlight mr-4">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-slate text-sm">{contact.label}</p>
                    <a
                      href={contact.href}
                      className="text-slate-light hover:text-highlight transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contact.value}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "400ms" }}>
          <Card className="bg-navy-light border border-highlight/20">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`bg-navy border-highlight/20 focus:border-highlight ${
                      errors.name ? "border-destructive" : ""
                    }`}
                  />
                  {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-navy border-highlight/20 focus:border-highlight ${
                      errors.email ? "border-destructive" : ""
                    }`}
                  />
                  {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`bg-navy border-highlight/20 focus:border-highlight ${
                      errors.subject ? "border-destructive" : ""
                    }`}
                  />
                  {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`bg-navy border-highlight/20 focus:border-highlight resize-none ${
                      errors.message ? "border-destructive" : ""
                    }`}
                  />
                  {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-highlight text-navy hover:bg-highlight/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
