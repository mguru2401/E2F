import { Users, Bus, Heart, CheckCircle2 } from 'lucide-react';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import AnimatedCard from '../AnimatedCard';
import { services } from '../../data/services';

const iconMap = {
  users: Users,
  bus: Bus,
  heart: Heart,
};

export default function Services() {
  return (
    <Section id="services" background="gradient">
      <SectionTitle
        title="Our Core Services"
        subtitle="Integrated workforce solutions designed to support every aspect of your employee journey"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];

          return (
            <AnimatedCard key={service.id} delay={index * 100}>
              <div className="h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2">
                <div className="relative h-48 bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-500 transform group-hover:scale-110" />
                  <Icon size={80} className="text-white relative z-10 transform group-hover:scale-110 transition-transform duration-500" />
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-navy-900 group-hover:text-teal-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm font-semibold text-teal-600">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 size={18} className="text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedCard>
          );
        })}
      </div>
    </Section>
  );
}
