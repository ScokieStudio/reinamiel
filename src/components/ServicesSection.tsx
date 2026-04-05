import { Sparkles, Scissors, Hand, Heart, Flower2, Omega, Brush, BrushIcon, Syringe, Waves, HandHelping } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: Waves,
    title: "Spa Manos y Pies",
    description: "Tratamientos de manicura y pedicura con productos premium para el cuidado integral.",
  },
  {
    icon: HandHelping,
    title: "Depilación Láser y Española",
    description: "Técnicas avanzadas de depilación para una piel suave y duradera.",
  },
  {
    icon: Heart,
    title: "Masajes",
    description: "Sesiones de relajación profunda y masajes terapéuticos personalizados.",
  },
  {
    icon: Brush,
    title: "Estética Corporal",
    description: "Tratamientos corporales para modelar, tonificar y revitalizar tu piel.",
  },
  {
    icon: Syringe,
    title: "Tratamientos Faciales",
    description: "Limpieza profunda, hidratación y rejuvenecimiento facial con tecnología de punta.",
  },
  {
    icon: Omega,
    title: "Tratamientos de Cupping",
    description: "Nuestro servicio de Cupping Electrónico de última generación utiliza ventosas de alta tecnología para una succión precisa y uniforme.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 md:py-24 bg-pearl">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <p className="font-body text-lg tracking-wide-elegant uppercase text-primary mb-4">
            Nuestros Servicios
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Cuidado que se nota
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-background p-10 md:p-12 group hover:bg-primary transition-colors duration-500 ${index === services.length - 1 && services.length % 3 === 2
                ? "md:col-span-2 lg:col-span-1"
                : ""
                }`}
            >
              <service.icon
                strokeWidth={1}
                size={32}
                className="text-white transition-colors duration-500 mb-6"
              />
              <h3 className="font-heading text-xl md:text-2xl font-normal text-foreground group-hover:text-primary-foreground transition-colors duration-500 mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-500 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
