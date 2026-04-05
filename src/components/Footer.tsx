import { MapPin, Clock, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-primary text-white">
      <div className="container mx-auto px-6 py-12 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-light mb-6">
              Kendra Beauty Care
            </h3>
            <p className="font-body text-sm text-primary-foreground/99 font-light leading-relaxed">
              Cuidado personal, cosmética y bienestar.
              <br />
              Tu espacio de paz y belleza en Lanús.
            </p>
          </div>

          <div className="space-y-5">
            <h4 className="font-body text-xs tracking-elegant uppercase mb-2">Contacto</h4>
            <div className="flex items-start gap-3">
              <MapPin strokeWidth={1} size={18} className="mt-0.5 shrink-0" />
              <p className="font-body text-sm text-primary-foreground/99 font-light">
                2 de Mayo 3059, B1826EHJ Lanús,<br />Provincia de Buenos Aires
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Clock strokeWidth={1} size={18} className="shrink-0" />
              <p className="font-body text-sm text-primary-foreground/99 font-light">
                Lunes a Sábado: 09:00 – 19:00 hs
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Mail strokeWidth={1} size={18} className="shrink-0" />
              <a href="mailto:kendeabeautycare@gmail.com" className="font-body text-sm text-primary-foreground/99 font-light hover:text-primary-foreground transition-colors">
                kendeabeautycare@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Instagram strokeWidth={1} size={18} className="shrink-0" />
              <a href="https://instagram.com/kendraa_beauty" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-primary-foreground/99 font-light hover:text-primary-foreground transition-colors">
                @kendraa_beauty
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-elegant uppercase mb-6">Ubicación</h4>
            <div className="rounded-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3279.876293475007!2d-58.3974!3d-34.7083!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccd00408779c3%3A0x937924a029e371a4!2sKendra%20Beauty%20%26%20Care!5e0!3m2!1ses-419!2sar!4v1775407675944!5m2!1ses-419!2sar"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Kendra Beauty Care"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/99 font-light tracking-wide">
            © {new Date().getFullYear()} Kendra Beauty Care. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
