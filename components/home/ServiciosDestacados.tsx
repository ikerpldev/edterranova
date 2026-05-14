"use client";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicios } from "@/content/servicios";
import Icon from "@/components/ui/Icon";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ServiciosDestacados() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[#00A8E8] font-semibold">
            Tratamientos
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-[#0A4D8C] mt-3 mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Nuestras Especialidades
          </h2>
          <p className="text-[#6B7280] text-lg leading-relaxed">
            Un equipo multidisciplinario para cuidar cada detalle de tu salud
            bucal, desde la primera revisión hasta la sonrisa de tus sueños.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {servicios.map((s) => (
            <motion.div key={s.slug} variants={item}>
              <Link
                href={`/servicios/${s.slug}`}
                className="group block h-full rounded-2xl bg-[#F8FAFF] border border-[#E5EBF5] p-7 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-[#00A8E8]"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${s.color}22, ${s.color}55)`,
                  }}
                >
                  <Icon name={s.icon} size={28} className="text-[#0A4D8C]" />
                </div>
                <h3
                  className="text-xl text-[#0A4D8C] font-semibold mb-3 leading-tight"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {s.nombre}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-5">
                  {s.descripcionCorta}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#00A8E8] group-hover:gap-2 transition-all">
                  Ver más
                  <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
