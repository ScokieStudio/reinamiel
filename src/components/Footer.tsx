import { MapPin, Clock, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-card-foreground text-white">
      <div className="container mx-auto py-12 md:py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-6">
          <div>
            <h3 className="font-body text-xl md:text-2xl font-light mb-6">
              Reina Miel Centro de Estética
            </h3>
            <p className="font-body text-base text-background font-light leading-relaxed">
              Cuidado personal, cosmética y bienestar.
              <br />
              Tu espacio de paz y belleza en el corazón de Avellaneda.
            </p>
            <br />
            <br />
            <div className="space-y-5">
              <div className="flex items-start gap-2">
                <MapPin strokeWidth={1} size={18} className="mt-0.5 shrink-0" />
                <p className="font-body text-base text-primary-foreground/99 font-light">
                  Av. Manuel Belgrano 711, B1870ARF Avellaneda, <br />Provincia de Buenos Aires, Argentina
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Clock strokeWidth={1} size={18} className="shrink-0" />
                <p className="font-body text-sm text-primary-foreground/99 font-light">
                  Lunes a Viernes: 09:00 – 19:00 hs <br />
                  Sábados: 09:00 – 13:00 hs
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail strokeWidth={1} size={18} className="shrink-0" />
                <a href="mailto:reinamiel@gmail.com" className="font-body text-sm text-primary-foreground/99 font-light hover:text-primary-foreground transition-colors">
                  reinamiel@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram strokeWidth={1} size={18} className="shrink-0" />
                <a href="https://www.instagram.com/reinamielavellaneda/" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-primary-foreground/99 font-light hover:text-primary-foreground transition-colors">
                  @reinamielavellaneda/
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-elegant uppercase mb-2">Ubicación</h4>
            <div className="rounded-sm overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.607825274727!2d-58.371364542648614!3d-34.66460590335456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3334e116b0f63%3A0x552a3143ec1152b7!2sReina%20Miel!5e0!3m2!1ses-419!2sus!4v1777389762615!5m2!1ses-419!2sus"
                width="700"
                height="450"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/40 pt-4 text-center">
          <p className="font-body text-xs text-primary-foreground/99 font-light tracking-wide">
            © {new Date().getFullYear()} Reina Miel Centro de Estética. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;