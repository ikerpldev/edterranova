"use client";
import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CTACitas() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#1B6E90] via-[#2B8FAD] to-[#3DBFAA] text-white">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 30%, white 1.5px, transparent 1.5px)",
          backgroundSize: "60px 60px",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-5"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          ¿Listo para tu mejor sonrisa?
        </h2>
        <p className="text-lg text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
          Agenda una consulta sin costo. Nuestros especialistas te asesorarán
          sin compromiso para diseñar el plan perfecto para ti.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contacto" variant="secondary" size="lg">
            <Calendar size={18} />
            Agendar Cita Gratis
          </Button>
          <Button
            href="tel:+523312345678"
            variant="outline-white"
            size="lg"
            external
          >
            <Phone size={18} />
            Llamar Ahora
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
