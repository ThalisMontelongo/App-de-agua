
import { useState } from 'react';
import { Send, Phone } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formState);
    // Adicione aqui a lógica de envio do formulário
    // Por exemplo, envio para uma API, email, etc.
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-accent/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pronto para começar seu projeto? Entre em contato hoje para uma consulta gratuita
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6 animate-on-scroll">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                  value={formState.name}
                  onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                    value={formState.phone}
                    onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-primary mb-2">
                  Serviço de Interesse
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-secondary transition-all bg-white"
                  value={formState.service}
                  onChange={(e) => setFormState(prev => ({ ...prev, service: e.target.value }))}
                  required
                >
                  <option value="">Selecione um serviço</option>
                  <option value="website">Website</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="webapp">Aplicativo Web</option>
                  <option value="system">Sistema Web</option>
                  <option value="maintenance">Manutenção</option>
                  <option value="other">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                  value={formState.message}
                  onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-full bg-secondary text-white hover:bg-secondary/80 transition-all hover-lift inline-flex items-center justify-center"
              >
                Enviar Mensagem
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Segunda a Sexta</span>
                  <span>9:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado</span>
                  <span>10:00 - 15:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo</span>
                  <span>Fechado</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Informações de Contato</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-secondary">
                    <Send size={18} />
                  </div>
                  <div>
                    <p className="font-medium">E-mail</p>
                    <a href="mailto:contato@webdevsolutions.com.br" className="text-secondary hover:underline">
                      contato@webdevsolutions.com.br
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-secondary">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-medium">Telefone</p>
                    <a href="tel:+551199998888" className="text-secondary hover:underline">
                      (11) 9999-8888
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
