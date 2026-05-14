"use client";
import { motion } from "framer-motion";
import { Star, Users, Award, Sparkles } from "lucide-react";

const stats = [
  {
    icon: Star,
    value: "4.8",
    suffix: "★",
    label: "Calificación en Google",
  },
  {
    icon: Users,
    value: "62",
    suffix: "+",
    label: "Pacientes satisfechos",
  },
  {
    icon: Award,
    value: "15",
    suffix: "+",
    label: "Años de experiencia",
  },
  {
    icon: Sparkles,
    value: "8",
    suffix: "",
    label: "Especialidades dentales",
  },
];

export default function Estadisticas() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#0A4D8C] via-[#0A4D8C] to-[#1A6DB5] text-white">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => {
            const Ico = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-white/15 backdrop-blur flex items-center justify-center mb-4">
                  <Ico size={24} className="text-[#00A8E8]" />
                </div>
                <p
                  className="text-5xl lg:text-6xl font-semibold tracking-tight"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {s.value}
                  <span className="text-[#00A8E8]">{s.suffix}</span>
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-white/75">
                  {s.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
