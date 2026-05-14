"use client";
import { motion, type Variants } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonios } from "@/content/testimonios";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Testimonios() {
  return (
    <section className="py-24 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[#00A8E8] font-semibold">
            Testimonios
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-[#0A4D8C] mt-3 mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-[#6B7280] text-lg">
            Más de 62 reseñas verificadas en Google con 4.8 estrellas promedio.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonios.slice(0, 6).map((t) => (
            <motion.article
              key={t.nombre}
              variants={item}
              whileHover={{ y: -4 }}
              className="relative bg-white rounded-2xl p-7 shadow-[0_4px_24px_-8px_rgba(10,77,140,0.12)] border border-[#E5EBF5] flex flex-col"
            >
              <Quote
                size={36}
                className="text-[#00A8E8]/15 absolute top-5 right-5"
              />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.calificacion }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-[#1A1A2E] leading-relaxed mb-5 flex-1">
                &ldquo;{t.texto}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-5 border-t border-[#F0F4FA]">
                <div>
                  <p className="font-semibold text-[#0A4D8C] text-sm">{t.nombre}</p>
                  <p className="text-xs text-[#6B7280]">{t.fecha}</p>
                </div>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-[#00A8E8] bg-[#00A8E8]/10 px-2.5 py-1 rounded-full">
                  {t.servicio}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
