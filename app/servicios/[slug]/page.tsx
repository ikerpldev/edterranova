import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Check, ArrowRight, Phone, Calendar } from "lucide-react";
import { servicios, getServicio } from "@/content/servicios";
import { generatePageMetadata } from "@/lib/seo";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";
import Button from "@/components/ui/Button";
import FaqAccordion from "@/components/servicios/FaqAccordion";
import Icon from "@/components/ui/Icon";
import PageHero from "@/components/layout/PageHero";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return servicios.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const servicio = getServicio(slug);
  if (!servicio) {
    return generatePageMetadata({
      title: "Servicio no encontrado",
      description: "El servicio solicitado no existe.",
      path: `/servicios/${slug}`,
    });
  }
  return generatePageMetadata({
    title: `${servicio.nombre} en Guadalajara`,
    description: servicio.descripcionCorta,
    path: `/servicios/${servicio.slug}`,
  });
}

export default async function ServicioPage({ params }: PageProps) {
  const { slug } = await params;
  const servicio = getServicio(slug);
  if (!servicio) notFound();

  const related = servicios.filter((s) => s.slug !== servicio.slug).slice(0, 3);

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://edterranova.vercel.app";
  const faqLd = JSON.stringify(getFAQSchema(servicio.faq)).replace(
    /</g,
    "\\u003c",
  );
  const breadcrumbLd = JSON.stringify(
    getBreadcrumbSchema([
      { name: "Inicio", url: baseUrl },
      { name: "Servicios", url: `${baseUrl}/servicios` },
      { name: servicio.nombre, url: `${baseUrl}/servicios/${servicio.slug}` },
    ]),
  ).replace(/</g, "\\u003c");

  return (
    <>
      <Script
        id={`ld-faq-${servicio.slug}`}
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {faqLd}
      </Script>
      <Script
        id={`ld-breadcrumb-${servicio.slug}`}
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {breadcrumbLd}
      </Script>

      <PageHero
        title={servicio.nombre}
        subtitle={servicio.descripcionCorta}
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios" },
          { label: servicio.nombre },
        ]}
        imageUrl={servicio.imagen}
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${servicio.color}33, ${servicio.color}77)`,
                  }}
                >
                  <Icon
                    name={servicio.icon}
                    size={24}
                    className="text-[#1B6E90]"
                  />
                </div>
                <span className="text-xs tracking-[0.25em] uppercase text-[#3DBFAA] font-semibold">
                  Especialidad
                </span>
              </div>
              <h2
                className="text-3xl text-[#1B6E90] font-semibold mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Sobre este tratamiento
              </h2>
              <div className="space-y-4 text-[#1B2D3A] leading-relaxed">
                {servicio.descripcionLarga.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div>
              <h2
                className="text-3xl text-[#1B6E90] font-semibold mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Lo que recibes con nosotros
              </h2>
              <ul className="space-y-3">
                {servicio.beneficios.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 bg-[#F8FAFF] rounded-xl p-4"
                  >
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#3DBFAA] text-white flex items-center justify-center">
                      <Check size={15} strokeWidth={3} />
                    </span>
                    <span className="text-[#1B2D3A] pt-0.5">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2
                className="text-3xl text-[#1B6E90] font-semibold mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Preguntas frecuentes
              </h2>
              <FaqAccordion faqs={servicio.faq} />
            </div>
          </div>

          <aside className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-[#E5EBF5] sticky top-28">
              <div className="relative h-56">
                <Image
                  src={servicio.imagen}
                  alt={servicio.nombre}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B6E90]/80 via-transparent to-transparent" />
              </div>
              <div className="p-6 bg-white">
                <h3
                  className="text-xl text-[#1B6E90] font-semibold mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Agenda una valoración
                </h3>
                <p className="text-sm text-[#6B7280] mb-5">
                  Primera consulta sin costo. Te entregamos diagnóstico y plan
                  de tratamiento personalizado.
                </p>
                <div className="flex flex-col gap-3">
                  <Button
                    href="/contacto"
                    variant="primary"
                    className="w-full justify-center"
                  >
                    <Calendar size={16} />
                    Agendar cita
                  </Button>
                  <Button
                    href="tel:+523312345678"
                    variant="outline"
                    className="w-full justify-center"
                    external
                  >
                    <Phone size={16} />
                    Llamar ahora
                  </Button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <h2
              className="text-2xl sm:text-3xl text-[#1B6E90] font-semibold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Otras especialidades
            </h2>
            <Link
              href="/servicios"
              className="text-sm font-semibold text-[#3DBFAA] inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              Ver todas
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                className="group block rounded-2xl bg-white border border-[#E5EBF5] p-6 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${s.color}22, ${s.color}55)`,
                  }}
                >
                  <Icon name={s.icon} size={22} className="text-[#1B6E90]" />
                </div>
                <h3
                  className="text-lg text-[#1B6E90] font-semibold mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {s.nombre}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {s.descripcionCorta}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
