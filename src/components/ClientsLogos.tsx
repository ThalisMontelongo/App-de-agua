
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ClientsLogos = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in animation
      gsap.from('.client-section-title', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      });

      // Infinite marquee animation
      const logos = document.querySelectorAll('.logo-item');
      gsap.to(logos, {
        xPercent: -100,
        ease: 'none',
        duration: 15,
        repeat: -1,
        scrollTrigger: {
          trigger: logosRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5
        }
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-primary border-t border-b border-gray-800">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-xl font-mono mb-8 text-white client-section-title">
          Empresas que confiam em nosso código
        </h3>
        
        <div className="overflow-hidden">
          <div 
            ref={logosRef}
            className="flex items-center gap-16 min-w-max"
          >
            {/* First set of logos */}
            <div className="flex items-center gap-16 logo-item">
              <div className="w-32 h-12 bg-gray-800 flex items-center justify-center rounded">
                <span className="text-secondary font-bold">EdTech</span>
              </div>
              <div className="w-32 h-12 bg-gray-800 flex items-center justify-center rounded">
                <span className="text-secondary font-bold">DataBites</span>
              </div>
              <div className="w-32 h-12 bg-gray-800 flex items-center justify-center rounded">
                <span className="text-secondary font-bold">eTeknup</span>
              </div>
              <div className="w-32 h-12 bg-gray-800 flex items-center justify-center rounded">
                <span className="text-secondary font-bold">E-Done</span>
              </div>
              <div className="w-32 h-12 bg-gray-800 flex items-center justify-center rounded">
                <span className="text-secondary font-bold">softdef</span>
              </div>
              <div className="w-32 h-12 bg-gray-800 flex items-center justify-center rounded">
                <span className="text-secondary font-bold">TechStar</span>
              </div>
              <div className="w-32 h-12 bg-gray-800 flex items-center justify-center rounded">
                <span className="text-secondary font-bold">Dataflow</span>
              </div>
            </div>
            
            {/* Duplicate for seamless looping */}
            <div className="flex items-center gap-16 logo-item">
              <div className="w-32 h-12 bg-gray-800 flex items-center justify-center rounded">
                <span className="text-secondary font-bold">EdTech</span>
              </div>
              <div className="w-32 h-12 bg-gray-800 flex items-center justify-center rounded">
                <span className="text-secondary font-bold">DataBites</span>
              </div>
              <div className="w-32 h-12 bg-gray-800 flex items-center justify-center rounded">
                <span className="text-secondary font-bold">eTeknup</span>
              </div>
              <div className="w-32 h-12 bg-gray-800 flex items-center justify-center rounded">
                <span className="text-secondary font-bold">E-Done</span>
              </div>
              <div className="w-32 h-12 bg-gray-800 flex items-center justify-center rounded">
                <span className="text-secondary font-bold">softdef</span>
              </div>
              <div className="w-32 h-12 bg-gray-800 flex items-center justify-center rounded">
                <span className="text-secondary font-bold">TechStar</span>
              </div>
              <div className="w-32 h-12 bg-gray-800 flex items-center justify-center rounded">
                <span className="text-secondary font-bold">Dataflow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsLogos;
