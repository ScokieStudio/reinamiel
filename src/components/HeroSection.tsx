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
          alt="Reina Miel Centro de Estetica Spa"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/70 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <p className="animate-fade-in-up font-body text-xl md:text-2xl lg:text-3xl tracking-wide-elegant uppercase text-foreground mb-6">
            Beauty &amp; Wellness
          </p>
          <h1 className="animate-fade-in-up-delay-1 font-heading text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] text-foreground mb-6">
            Realza tu belleza natural con{" "}
            <br />
            <span className="font-playwrite-hu leading-[0.4] text-3xl md:text-5xl lg:text-6xl">Reina Miel</span>
          </h1>
          <p className="animate-fade-in-up-delay-2 font-heading text-base md:text-2xl lg:text-3xl text-foreground font-semibold mb-10">
            Cuidado personal, cosmética y bienestar
            <br />
            en el corazón de Avellaneda.
          </p>
          <button
            onClick={() => scrollTo("reserva")}
            className="animate-fade-in-up-delay-3 bg-primary-foreground/80 text-background px-10 py-4 text-xs tracking-elegant uppercase font-body hover:bg-primary-foreground transition-colors duration-300 rounded-lg"
          >
            Agendar mi turno
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
