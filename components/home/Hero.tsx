"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=2000&q=85"
        alt="Clínica dental moderna en Guadalajara"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B6E90]/85 via-[#1B6E90]/70 to-[#3DBFAA]/55" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur border border-white/25 text-sm font-medium mb-8"
        >
          <Star size={14} className="fill-yellow-300 text-yellow-300" />
          <span>Más de 62 pacientes satisfechos</span>
          <span className="opacity-80">·</span>
          <span className="font-semibold">4.8 en Google</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Tu Sonrisa en Manos de Especialistas en Guadalajara
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          8 especialidades dentales bajo un mismo techo. Tecnología de vanguardia,
          trato humano y resultados que se notan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/contacto" variant="secondary" size="lg">
            Agendar Cita
            <ArrowRight size={18} />
          </Button>
          <Button href="/servicios" variant="outline-white" size="lg">
            Ver Servicios
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center text-white/70"
      >
        <span className="text-xs tracking-[0.3em] uppercase mb-2">Conócenos</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-white/60"
        />
      </motion.div>
    </section>
  );
}
