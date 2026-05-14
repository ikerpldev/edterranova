import type { Metadata } from "next";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import ContactForm from "@/components/contacto/ContactForm";
import CalEmbed from "@/components/citas/CalEmbed";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Contacto y Agenda tu Cita",
  description:
    "Agenda tu cita en Especialidades Dentales Terranova Guadalajara. Llámanos, escríbenos o agenda en línea con Cal.com.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <>
      <PageHero
        title="Hablemos de tu sonrisa"
        subtitle="Estamos a un mensaje de distancia. Agenda una consulta, pregunta por un tratamiento o resuelve cualquier duda."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Contacto" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <ContactForm />

          <div className="space-y-6">
            <div>
              <h2
                className="text-2xl text-[#1B6E90] font-semibold mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                O agenda directamente
              </h2>
              <p className="text-sm text-[#6B7280] mb-5">
                Reserva en línea el día y hora que más te acomode con nuestro
                sistema de citas.
              </p>
              <CalEmbed />
            </div>

            <div className="rounded-2xl border border-[#E5EBF5] bg-[#F8FAFF] p-6 grid sm:grid-cols-2 gap-5">
              <ContactItem
                icon={<MapPin size={18} />}
                label="Dirección"
                value="Av. Terranova 123, Col. Providencia, Guadalajara"
              />
              <ContactItem
                icon={<Phone size={18} />}
                label="Teléfono"
                value="+52 33 1234-5678"
                href="tel:+523312345678"
              />
              <ContactItem
                icon={<Clock size={18} />}
                label="Horarios"
                value="Lun–Vie 9:00–19:00 · Sáb 9:00–14:00"
              />
              <ContactItem
                icon={<Mail size={18} />}
                label="Email"
                value="contacto@terranovadental.com"
                href="mailto:contacto@terranovadental.com"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#1B6E90] text-white flex items-center justify-center">
        {icon}
      </span>
      <div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#6B7280] font-semibold">
          {label}
        </p>
        <p className="text-sm text-[#1B2D3A] mt-0.5">{value}</p>
      </div>
    </div>
  );
  if (href) {
    return (
      <a href={href} className="hover:opacity-80 transition-opacity">
        {content}
      </a>
    );
  }
  return content;
}
