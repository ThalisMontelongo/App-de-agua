import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const stats = [
    { value: 500, suffix: '+', label: 'Happy Clients' },
    { value: 65, suffix: '+', label: 'Team Members' },
    { value: 20, suffix: 'K+', label: 'Projects Done' },
    { value: 80, suffix: '%', label: 'Success Rate' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16 animate-on-scroll">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">
            Creating the Future of
            <span className="block text-secondary">Technology</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Elevate Your Business with Innovation and Excellence
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white hover:bg-primary-muted transition-all hover-lift"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card p-6 rounded-xl text-center animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span
                ref={el => counterRefs.current[index] = el}
                className="block text-3xl sm:text-4xl font-bold text-primary mb-2"
              >
                {stat.value}{stat.suffix}
              </span>
              <span className="text-sm sm:text-base text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;