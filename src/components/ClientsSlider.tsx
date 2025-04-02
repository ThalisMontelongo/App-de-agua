
import { Card } from '@/components/ui/card';

const clients = [
  {
    id: 1,
    name: 'TechSolutions',
    logo: 'https://placehold.co/200x80?text=TechSolutions'
  },
  {
    id: 2,
    name: 'FashionModa',
    logo: 'https://placehold.co/200x80?text=FashionModa'
  },
  {
    id: 3,
    name: 'MediSaúde',
    logo: 'https://placehold.co/200x80?text=MediSaúde'
  },
  {
    id: 4,
    name: 'ImobSmart',
    logo: 'https://placehold.co/200x80?text=ImobSmart'
  },
  {
    id: 5,
    name: 'EduLearn',
    logo: 'https://placehold.co/200x80?text=EduLearn'
  },
  {
    id: 6,
    name: 'ServicesHub',
    logo: 'https://placehold.co/200x80?text=ServicesHub'
  },
  {
    id: 7,
    name: 'FinTech',
    logo: 'https://placehold.co/200x80?text=FinTech'
  },
  {
    id: 8,
    name: 'CloudStorage',
    logo: 'https://placehold.co/200x80?text=CloudStorage'
  }
];

const ClientsSlider = () => {
  return (
    <section id="clients" className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Clientes que Confiam em Nosso Trabalho
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empresas de diversos segmentos que confiam em nossas soluções digitais
          </p>
        </div>
        
        <div className="relative w-full">
          {/* Primeiro grupo de logos com animação para a esquerda */}
          <div className="flex space-x-8 animate-slide">
            {clients.map((client) => (
              <div key={client.id} className="flex-shrink-0">
                <Card className="w-[200px] h-[100px] flex items-center justify-center p-4 hover-lift">
                  <img 
                    src={client.logo} 
                    alt={`Logo da ${client.name}`} 
                    className="max-w-full max-h-full object-contain"
                  />
                </Card>
              </div>
            ))}
            {/* Duplicação para loop contínuo */}
            {clients.map((client) => (
              <div key={`duplicate-${client.id}`} className="flex-shrink-0">
                <Card className="w-[200px] h-[100px] flex items-center justify-center p-4 hover-lift">
                  <img 
                    src={client.logo} 
                    alt={`Logo da ${client.name}`} 
                    className="max-w-full max-h-full object-contain"
                  />
                </Card>
              </div>
            ))}
          </div>
          
          {/* Gradientes para fade-out nas laterais */}
          <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSlider;
