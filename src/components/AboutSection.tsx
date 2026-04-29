import aboutImage from "@/assets/about-salon.jpg";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-pearl rounded-sm" />
              <img
                src={aboutImage}
                alt="Interior del centro Reina Miel Centro de Estética"
                className="relative w-full max-w-md h-[650px] object-cover rounded-sm"
                loading="lazy"
                width={800}
                height={900}
              />
            </div>
          </div>

          <div>
            <p className="font-body text-lg tracking-wide-elegant uppercase text-primary-foreground mb-4">
              Sobre Nosotros
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-8">
              La experiencia <span className="font-playwrite-hu text-xl md:text-2xl lg:text-3xl text-foreground">Reina Miel</span>
            </h2>
            <div className="space-y-5 font-body text-base md:text-lg lg:text-xl text-muted-foreground font-light leading-relaxed">
              <p>
                En Reina Miel creemos que cada persona merece un momento de pausa.
                <br />Nuestro espacio en Avellaneda fue diseñado para envolverte en calma desde el primer instante.<br />
              </p>
              <p>
                Trabajamos con productos de primera línea y protocolos personalizados, porque entendemos que tu piel es única.
                <br />Nuestro equipo de profesionales se capacita constantemente para ofrecerte lo último en tendencias y tecnología estética.<br />
              </p>
              <p>
                Más que un centro de estética, somos tu refugio de bienestar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
