"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import Button from "@/components/ui/Button";

export default function MapaUbicacion() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[#00A8E8] font-semibold">
            Visítanos
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-[#0A4D8C] mt-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Encuéntranos en Guadalajara
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#F8FAFF] rounded-2xl p-8 lg:p-10 flex flex-col gap-7"
          >
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0A4D8C] flex items-center justify-center flex-shrink-0">
                <MapPin size={22} className="text-white" />
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-[#6B7280] font-semibold mb-1">
                  Dirección
                </p>
                <p className="text-[#1A1A2E] leading-relaxed">
                  Av. Terranova 123,
                  <br />
                  Col. Providencia, 44660
                  <br />
                  Guadalajara, Jalisco, México
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00A8E8] flex items-center justify-center flex-shrink-0">
                <Phone size={22} className="text-white" />
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-[#6B7280] font-semibold mb-1">
                  Teléfono
                </p>
                <a
                  href="tel:+523312345678"
                  className="text-[#1A1A2E] hover:text-[#0A4D8C] transition-colors block"
                >
                  +52 33 1234-5678
                </a>
                <a
                  href="https://wa.me/523312345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#25D366] hover:text-[#1FB955] font-medium"
                >
                  WhatsApp directo
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1A6DB5] flex items-center justify-center flex-shrink-0">
                <Clock size={22} className="text-white" />
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-[#6B7280] font-semibold mb-1">
                  Horarios
                </p>
                <p className="text-[#1A1A2E]">
                  Lunes a Viernes: 9:00 – 19:00
                  <br />
                  Sábados: 9:00 – 14:00
                  <br />
                  Domingos: cerrado
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                href="https://maps.google.com/?q=Especialidades+Dentales+Terranova+Guadalajara"
                variant="primary"
                external
              >
                <Navigation size={16} />
                Cómo llegar
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-[#E5EBF5] shadow-lg min-h-[420px]"
          >
            <iframe
              src="https://maps.google.com/maps?q=Especialidades+Dentales+Terranova+Guadalajara&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[420px]"
              title="Mapa de Especialidades Dentales Terranova"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
