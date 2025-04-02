
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqData = [
  {
    question: "Quais serviços de desenvolvimento web vocês oferecem?",
    answer: "Oferecemos uma gama completa de serviços de desenvolvimento web, incluindo criação de sites institucionais, e-commerce, sistemas web personalizados, aplicativos progressivos (PWA), otimização para mecanismos de busca (SEO) e manutenção contínua."
  },
  {
    question: "Quanto tempo leva para desenvolver um site ou aplicativo?",
    answer: "O tempo de desenvolvimento varia de acordo com a complexidade do projeto. Um site institucional simples pode levar de 2 a 4 semanas, enquanto um e-commerce ou sistema web mais complexo pode levar de 2 a 6 meses. Durante a fase de planejamento, fornecemos um cronograma detalhado para o seu projeto específico."
  },
  {
    question: "Como funciona o processo de desenvolvimento?",
    answer: "Nosso processo segue estas etapas: 1) Briefing e levantamento de requisitos, 2) Planejamento e arquitetura da solução, 3) Design de interface e experiência do usuário, 4) Desenvolvimento e programação, 5) Testes e garantia de qualidade, 6) Lançamento e 7) Suporte contínuo e manutenção."
  },
  {
    question: "Vocês oferecem manutenção após a conclusão do projeto?",
    answer: "Sim, oferecemos planos de manutenção mensal que incluem atualizações de segurança, backup regular, pequenas alterações de conteúdo, monitoramento de desempenho e suporte técnico. Também atendemos demandas pontuais de manutenção para clientes que preferem um modelo sob demanda."
  },
  {
    question: "O site será responsivo para dispositivos móveis?",
    answer: "Sim, todos os nossos projetos são desenvolvidos com design responsivo, garantindo que funcionem perfeitamente em todos os dispositivos: smartphones, tablets, laptops e desktops. Testamos em diversos tamanhos de tela e navegadores para garantir compatibilidade total."
  },
  {
    question: "Posso atualizar o conteúdo do meu site sozinho depois?",
    answer: "Absolutamente. Desenvolvemos com sistemas de gerenciamento de conteúdo (CMS) que permitem que você edite textos, imagens e outros conteúdos facilmente, sem conhecimento técnico. Também fornecemos treinamento para sua equipe utilizar o painel administrativo."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground">
            Respostas para as dúvidas mais comuns sobre nossos serviços
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <Collapsible 
              key={index} 
              open={openItems.includes(index)} 
              onOpenChange={() => toggleItem(index)}
              className="border border-border rounded-lg overflow-hidden"
            >
              <CollapsibleTrigger className="flex justify-between items-center w-full p-5 text-left font-medium hover:bg-accent/10 transition-colors">
                <span>{item.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-primary transition-transform ${openItems.includes(index) ? 'transform rotate-180' : ''}`} 
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-5 pt-0 text-muted-foreground border-t border-border">
                {item.answer}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
