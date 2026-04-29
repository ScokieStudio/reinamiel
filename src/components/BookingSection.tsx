import { Sparkles, Scissors, Hand, Heart, Flower2, Omega, Brush, BrushIcon, Syringe, Waves, HandHelping } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";
import bookingImage from "@/assets/booking-spa.jpg";

const services = [
  "Spa Manos y Pies",
  "Depilación",
  "Masajes",
  "Estética Corporal",
  "Tratamientos Faciales",
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
];

const BookingSection = () => {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", service: "", date: "", time: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service || !form.date || !form.time) {
      toast.error("Por favor completá los campos obligatorios.");
      return;
    }

    // Construct WhatsApp message
    const phoneNumber = "5491124045098"; // Reina Miel's phone number as seen in Footer
    const textLines = [
      "¡Hola! Reina Miel, me gustaría hacer una reserva.",
      "",
      `Nombre: ${form.name}`,
      `Teléfono: ${form.phone}`,
      form.email ? `Email: ${form.email}` : '',
      `Servicio: ${form.service}`,
      `Fecha: ${form.date.split('-').reverse().join('/')}`,
      `Horario: ${form.time}`,
      form.message ? `\n*Mensaje adicional:*\n${form.message}` : ''
    ];
    const text = textLines.filter(line => line !== '').join('\n');

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    toast.success("¡Redirigiendo a WhatsApp!");
    setForm({ name: "", phone: "", email: "", service: "", date: "", time: "", message: "" });
  };

  const inputClasses =
    "w-full border border-border bg-background px-4 py-3.5 text-sm font-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors duration-300 rounded-lg";

  return (
    <section id="reserva" className="py-24 md:py-32 bg-pearl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <p className="font-body text-lg tracking-wide-elegant uppercase text-primary-foreground mb-4">
              Reserva
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
              Reserva tu momento <br />
              <span className="font-playwrite-hu text-xl md:text-2xl lg:text-3xl text-foreground">Reina Miel</span>
            </h2>
            <p className="font-body text-lg md:text-xl lg:text-xl text-muted-foreground font-light mb-10 leading-relaxed">
              Elegí el servicio, la fecha y el horario que más te convenga.
              <br />
              Nos pondremos en contacto para confirmar tu turno.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre Completo *" className={inputClasses} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Teléfono / WhatsApp *" className={inputClasses} />
                <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" className={inputClasses} />
              </div>

              <select name="service" value={form.service} onChange={handleChange} className={inputClasses}>
                <option value="">Seleccionar Servicio *</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input name="date" value={form.date} onChange={handleChange} type="date" className={inputClasses} />
                <select name="time" value={form.time} onChange={handleChange} className={inputClasses}>
                  <option value="">Seleccionar Horario *</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>{t} hs</option>
                  ))}
                </select>
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Mensaje (opcional)"
                rows={4}
                className={inputClasses + " resize-none"}
              />

              <button
                type="submit"
                className="w-full bg-primary-foreground/80   text-background py-4 text-xs tracking-elegant uppercase font-body hover:bg-primary-foreground transition-colors duration-300 rounded-lg flex items-center justify-center gap-2"
              >
                Confirmar Reserva
                <Send size={16} strokeWidth={1.5} className="text-white" />
              </button>
            </form>
          </div>

          <div className="hidden lg:block">
            <img
              src={bookingImage}
              alt="Sala de tratamientos Reina Miel"
              className="w-full h-[725px] object-cover border-[14px] border-white"
              loading="lazy"
              width={800}
              height={1024}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
