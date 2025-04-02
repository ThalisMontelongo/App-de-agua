
import { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

const projects = [
  {
    id: 1,
    title: 'E-commerce para Moda',
    description: 'Loja virtual completa com integração de pagamentos, gestão de estoque e design responsivo.',
    image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&q=80',
    tags: ['E-commerce', 'React', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'Sistema de Gestão Empresarial',
    description: 'Plataforma web para gerenciamento completo de processos internos, finanças e recursos humanos.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    tags: ['SaaS', 'Dashboard', 'React', 'TypeScript']
  },
  {
    id: 3,
    title: 'Aplicativo Web de Saúde',
    description: 'Sistema de agendamento médico e telemedicina com integração a prontuário eletrônico.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80',
    tags: ['Saúde', 'PWA', 'React Native', 'Firebase']
  },
  {
    id: 4,
    title: 'Portal Imobiliário',
    description: 'Sistema para agências imobiliárias com busca avançada, tour 3D e gestão de clientes.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80',
    tags: ['Imobiliário', 'React', 'Next.js', 'Supabase']
  },
  {
    id: 5,
    title: 'Plataforma Educacional',
    description: 'Ambiente virtual de aprendizagem com sistema de cursos online, provas e certificados.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80',
    tags: ['LMS', 'Vue.js', 'Node.js', 'PostgreSQL']
  },
  {
    id: 6,
    title: 'Marketplace de Serviços',
    description: 'Plataforma que conecta profissionais e clientes com sistema de pagamento integrado.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    tags: ['Marketplace', 'React', 'GraphQL', 'Stripe']
  }
];

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  
  const handlePrevClick = () => {
    setActiveIndex(prev => (prev === 0 ? totalPages - 1 : prev - 1));
  };
  
  const handleNextClick = () => {
    setActiveIndex(prev => (prev === totalPages - 1 ? 0 : prev + 1));
  };
  
  const visibleProjects = projects.slice(
    activeIndex * itemsPerPage, 
    activeIndex * itemsPerPage + itemsPerPage
  );
  
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-accent/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Nosso Portfólio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes
          </p>
        </div>
        
        <div className="relative">
          <ScrollArea className="h-[520px] w-full px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {visibleProjects.map(project => (
                <Card key={project.id} className="hover-lift overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="bg-accent/30 text-secondary text-xs px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={handlePrevClick}
              className="p-2 rounded-full bg-secondary text-white hover:bg-secondary/80 transition-colors"
              aria-label="Anterior"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeIndex === i ? 'bg-secondary' : 'bg-gray-300'
                  }`}
                  aria-label={`Página ${i + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNextClick}
              className="p-2 rounded-full bg-secondary text-white hover:bg-secondary/80 transition-colors"
              aria-label="Próximo"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
