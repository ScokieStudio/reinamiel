import heroImage from "@/assets/hero-spa.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kendra Beauty Care Spa"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <p className="animate-fade-in-up font-body text-lg tracking-wide-elegant uppercase text-muted-foreground mb-6">
            Beauty &amp; Wellness
          </p>
          <h1 className="animate-fade-in-up-delay-1 font-heading text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] text-foreground mb-6">
            Realza tu belleza natural con{" "}
            <span className="italic text-primary">Kendra</span>
          </h1>
          <p className="animate-fade-in-up-delay-2 font-body text-base md:text-lg text-muted-foreground font-light leading-relaxed mb-10 max-w-lg">
            Cuidado personal, cosmética y bienestar en el corazón de Lanús.
          </p>
          <button
            onClick={() => scrollTo("reserva")}
            className="animate-fade-in-up-delay-3 bg-primary text-primary-foreground px-10 py-4 text-xs tracking-elegant uppercase font-body hover:bg-greige-dark transition-colors duration-300 rounded-lg"
          >
            Agendar mi turno
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
