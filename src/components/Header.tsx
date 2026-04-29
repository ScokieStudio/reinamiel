import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-3">
          <img src={logo} alt="Reina Miel Centro de Estetica" className="h-12 w-12 rounded-full object-cover" />
          <span className="font-playwrite-hu text-2xl md:text-3xl lg:text-4xl text-foreground">
            Reina Miel
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {[
            ["Inicio", "hero"],
            ["Servicios", "servicios"],
            ["Nosotros", "nosotros"],
            ["Contacto", "contacto"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-body text-sm tracking-elegant uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollTo("reserva")}
            className="hidden md:inline-flex bg-primary-foreground/80 text-background px-6 py-2.5 text-xs tracking-elegant uppercase font-body hover:bg-primary-foreground transition-colors duration-300 rounded-lg"
          >
            Reservar Cita
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X strokeWidth={1.5} size={24} /> : <Menu strokeWidth={1.5} size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border/50 px-6 py-6 space-y-4">
          {[
            ["Inicio", "hero"],
            ["Servicios", "servicios"],
            ["Nosotros", "nosotros"],
            ["Contacto", "contacto"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="block w-full text-left font-body text-sm tracking-elegant uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("reserva")}
            className="w-full bg-primary-foreground/80 text-background px-6 py-3 text-xs tracking-elegant uppercase font-body hover:bg-primary-foreground transition-colors duration-300 rounded-lg"
          >
            Reservar Cita
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
