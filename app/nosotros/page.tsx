import type { Metadata } from "next";
import Image from "next/image";
import { Award, HeartHandshake, Microscope } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";
import CTACitas from "@/components/home/CTACitas";
import { equipo } from "@/content/equipo";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Sobre Nosotros · Nuestro Equipo de Especialistas",
  description:
    "Conoce al equipo multidisciplinario de Especialidades Dentales Terranova en Guadalajara. Más de 15 años cuidando sonrisas con especialistas certificados.",
  path: "/nosotros",
});

const pilares = [
  {
    icon: Microscope,
    titulo: "Tecnología de punta",
    texto:
      "Tomógrafos 3D, microscopio dental, escáner intraoral y diseño de sonrisa digital para diagnósticos precisos y resultados predecibles.",
  },
  {
    icon: Award,
    titulo: "Especialistas certificados",
    texto:
      "Cada tratamiento lo realiza el especialista del área, con posgrado y cédula profesional. No somos generalistas: somos un equipo de expertos.",
  },
  {
    icon: HeartHandshake,
    titulo: "Trato humano",
    texto:
      "Sabemos que ir al dentista no siempre es fácil. Por eso explicamos todo con claridad, sin prisas y sin sorpresas en el presupuesto.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        title="Nuestro Equipo de Especialistas"
        subtitle="15 años combinando experiencia clínica, tecnología y un trato cercano para devolverte la confianza de sonreír."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Nosotros" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=1600&q=80"
      />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-[#3DBFAA] font-semibold">
            Nuestra historia
          </span>
          <h2
            className="text-3xl sm:text-4xl text-[#1B6E90] font-semibold mt-3 mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Una clínica pensada para ti
          </h2>
          <div className="space-y-5 text-[#1B2D3A] text-lg leading-relaxed">
            <p>
              Especialidades Dentales Terranova nació con la idea de reunir bajo
              un mismo techo a los mejores especialistas de Guadalajara. Cada
              caso pasa por la mirada del experto correcto: ortodoncista,
              endodoncista, implantólogo o estético, según lo que tu sonrisa
              necesite.
            </p>
            <p>
              Más de 15 años después, atendemos a familias enteras que confían
              en nosotros generación tras generación. Nos respaldan 62 reseñas
              5 estrellas en Google, una calificación promedio de 4.8 y un
              equipo apasionado por hacer las cosas bien.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs tracking-[0.3em] uppercase text-[#3DBFAA] font-semibold">
              Conócenos
            </span>
            <h2
              className="text-3xl sm:text-4xl text-[#1B6E90] font-semibold mt-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Conoce a nuestros especialistas
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {equipo.map((doc) => (
              <article
                key={doc.nombre}
                className="bg-white rounded-2xl border border-[#E5EBF5] p-6 lg:p-8 flex flex-col sm:flex-row gap-6 hover:shadow-xl transition-all"
              >
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex-shrink-0 rounded-full overflow-hidden ring-4 ring-[#3DBFAA]/15">
                  <Image
                    src={doc.imagen}
                    alt={doc.nombre}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-xl text-[#1B6E90] font-semibold mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {doc.nombre}
                  </h3>
                  <p className="text-sm font-medium text-[#3DBFAA] mb-1">
                    {doc.especialidad}
                  </p>
                  <p className="text-xs text-[#6B7280] mb-3 italic">
                    {doc.cedula}
                  </p>
                  <p className="text-sm text-[#1B2D3A] leading-relaxed">
                    {doc.descripcion}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs tracking-[0.3em] uppercase text-[#3DBFAA] font-semibold">
              Nuestra filosofía
            </span>
            <h2
              className="text-3xl sm:text-4xl text-[#1B6E90] font-semibold mt-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Tres pilares que nos distinguen
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {pilares.map((p) => {
              const Ico = p.icon;
              return (
                <div
                  key={p.titulo}
                  className="text-center px-6 py-10 rounded-2xl bg-[#F8FAFF] border border-[#E5EBF5]"
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#1B6E90] to-[#3DBFAA] flex items-center justify-center mb-5">
                    <Ico size={28} className="text-white" />
                  </div>
                  <h3
                    className="text-xl text-[#1B6E90] font-semibold mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {p.titulo}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {p.texto}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button href="/servicios" variant="primary" size="lg">
              Conoce nuestros servicios
            </Button>
          </div>
        </div>
      </section>

      <CTACitas />
    </>
  );
}
