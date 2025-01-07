import { Code, Cpu, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Clean Code',
    description: 'Write beautiful, maintainable, and efficient code that scales.'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Secure by Default',
    description: 'Built-in security features to protect your applications.'
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Lightning Fast',
    description: 'Optimized performance for the best user experience.'
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: 'Smart Processing',
    description: 'Advanced algorithms for intelligent data processing.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the tools and features that will transform your development process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-6 rounded-xl hover-lift animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-secondary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;