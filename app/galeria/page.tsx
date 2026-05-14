import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import CTACitas from "@/components/home/CTACitas";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Galería de Casos y Resultados",
  description:
    "Una muestra del trabajo y las instalaciones de Especialidades Dentales Terranova en Guadalajara. Imágenes ilustrativas.",
  path: "/galeria",
});

const galeria: { src: string; alt: string; h: number }[] = [
  {
    src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=80",
    alt: "Tratamiento dental profesional",
    h: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1581585504056-cda28d77c8b9?w=900&q=80",
    alt: "Sonrisa después de blanqueamiento",
    h: 450,
  },
  {
    src: "https://images.unsplash.com/photo-1588776814546-1ffbb3cd39c5?w=900&q=80",
    alt: "Atención odontopediátrica",
    h: 700,
  },
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80",
    alt: "Consultorio dental moderno",
    h: 500,
  },
  {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=80",
    alt: "Implante dental",
    h: 650,
  },
  {
    src: "https://images.unsplash.com/photo-1606811951341-1395d49d6c25?w=900&q=80",
    alt: "Sonrisa radiante",
    h: 450,
  },
  {
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=900&q=80",
    alt: "Ortodoncia",
    h: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=80",
    alt: "Procedimiento quirúrgico",
    h: 550,
  },
  {
    src: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=900&q=80",
    alt: "Equipo dental",
    h: 700,
  },
  {
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&q=80",
    alt: "Especialista dental",
    h: 500,
  },
  {
    src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=900&q=80",
    alt: "Consulta dental",
    h: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=900&q=80",
    alt: "Doctor revisando radiografía",
    h: 480,
  },
];

export default function GaleriaPage() {
  return (
    <>
      <PageHero
        title="Galería de Casos"
        subtitle="Una muestra del cuidado, las instalaciones y los resultados que entregamos cada día a nuestros pacientes."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Galería" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1600&q=80"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-[#6B7280] italic mb-8 text-center">
            Imágenes ilustrativas — los resultados reales varían según cada
            paciente y se evalúan en consulta de valoración.
          </p>
          <div className="masonry">
            {galeria.map((img) => (
              <div
                key={img.src}
                className="relative overflow-hidden rounded-xl bg-[#F8FAFF] group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={img.h}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A4D8C]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTACitas />
    </>
  );
}
