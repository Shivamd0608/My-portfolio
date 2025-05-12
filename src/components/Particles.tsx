
import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
};

const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    let particles: Particle[] = [];
    const particleCount = Math.min(100, Math.floor(window.innerWidth / 10));
    const connectionDistance = 150;

    // Create particles
    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: "#64ffda",
        });
      }
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Boundary check
        if (particle.x > canvas.width) particle.x = 0;
        else if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        else if (particle.y < 0) particle.y = canvas.height;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 0.6;
        ctx.fill();

        // Connect particles
        connectParticles(index);
      });
    };

    // Connect nearby particles with lines
    const connectParticles = (currentIndex: number) => {
      for (let i = currentIndex + 1; i < particles.length; i++) {
        const dx = particles[currentIndex].x - particles[i].x;
        const dy = particles[currentIndex].y - particles[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          ctx.beginPath();
          ctx.strokeStyle = particles[currentIndex].color;
          ctx.globalAlpha = 1 - distance / connectionDistance;
          ctx.lineWidth = 0.3;
          ctx.moveTo(particles[currentIndex].x, particles[currentIndex].y);
          ctx.lineTo(particles[i].x, particles[i].y);
          ctx.stroke();
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" />;
};

export default Particles;
