import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ServiciosGrid from "@/components/servicios/ServiciosGrid";
import CTACitas from "@/components/home/CTACitas";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Servicios y Especialidades Dentales",
  description:
    "Conoce las 8 especialidades dentales que ofrecemos en Guadalajara: Ortodoncia, Endodoncia, Implantología, Estética, Odontopediatría, Periodoncia, Cirugía Oral y Blanqueamiento.",
  path: "/servicios",
});

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        title="Nuestros Servicios"
        subtitle="8 especialidades dentales para resolver cualquier necesidad bajo el mismo techo, con tecnología de punta y trato cercano."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1600&q=80"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiciosGrid />
        </div>
      </section>
      <CTACitas />
    </>
  );
}
