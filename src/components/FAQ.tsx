
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Qual é o prazo médio para desenvolvimento de um site?",
    answer: "O prazo varia de acordo com a complexidade do projeto. Um site institucional simples pode levar de 2 a 4 semanas, enquanto um e-commerce ou sistema web mais complexo pode levar de 2 a 4 meses. Trabalhamos com cronogramas detalhados para que você possa acompanhar cada etapa."
  },
  {
    question: "Vocês oferecem suporte após a entrega do projeto?",
    answer: "Sim, oferecemos planos de suporte e manutenção mensal que incluem atualizações de segurança, backups regulares, pequenas alterações e monitoramento do desempenho. Nosso objetivo é garantir que seu site permaneça funcional e seguro."
  },
  {
    question: "Como funciona o processo de desenvolvimento?",
    answer: "Nosso processo inclui: 1) Briefing e levantamento de requisitos; 2) Proposta comercial e planejamento; 3) Design e aprovação; 4) Desenvolvimento; 5) Testes e ajustes; 6) Treinamento e entrega. Você acompanha todo o processo através de relatórios regulares."
  },
  {
    question: "Quais tecnologias vocês utilizam?",
    answer: "Trabalhamos com as tecnologias mais modernas do mercado como React, Next.js, Vue.js, Node.js, Python/Django, PHP/Laravel, bancos de dados SQL e NoSQL, além de integrações com diversas APIs e serviços. Selecionamos a stack ideal para cada projeto específico."
  },
  {
    question: "O site será responsivo para dispositivos móveis?",
    answer: "Sim, todos os nossos projetos são desenvolvidos com design responsivo, garantindo uma experiência consistente e de qualidade em todos os dispositivos: desktops, tablets e smartphones. Testamos em diversos tamanhos de tela e navegadores."
  }
];

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-title', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      });

      gsap.from('.faq-item', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: accordionRef.current,
          start: 'top 80%'
        }
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary gsap-section relative">
      <div className="circuit-lines"></div>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 faq-title">
          <h2 className="text-3xl sm:text-4xl font-mono mb-4 title-gradient">
            Perguntas <span className="neon-text">Frequentes</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e processos
          </p>
        </div>

        <div ref={accordionRef} className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="faq-item bg-muted border border-gray-800 rounded-lg mb-4 overflow-hidden relative"
              >
                <div className="portfolio-gradient-bg"></div>
                <AccordionTrigger className="px-6 py-4 text-white font-mono hover:text-palette-purple-light data-[state=open]:text-palette-purple-light relative z-10">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-400 relative z-10">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Ainda tem dúvidas? Entre em contato conosco</p>
          <a 
            href="#contact" 
            className="btn-neon px-8 py-3 rounded-lg"
          >
            <span className="flex items-center justify-center gap-2">
              Fale Conosco
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
