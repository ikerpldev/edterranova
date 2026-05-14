"use client";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { servicios } from "@/content/servicios";
import Icon from "@/components/ui/Icon";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ServiciosGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      {servicios.map((s) => (
        <motion.div key={s.slug} variants={item}>
          <Link
            href={`/servicios/${s.slug}`}
            className="group block h-full rounded-2xl overflow-hidden bg-white border border-[#E5EBF5] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="relative h-52 overflow-hidden">
              <Image
                src={s.imagen}
                alt={s.nombre}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B6E90]/70 via-[#1B6E90]/10 to-transparent" />
              <div
                className="absolute bottom-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur"
                style={{ backgroundColor: `${s.color}E6` }}
              >
                <Icon name={s.icon} size={24} className="text-white" />
              </div>
            </div>
            <div className="p-6">
              <h3
                className="text-xl text-[#1B6E90] font-semibold mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {s.nombre}
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-5">
                {s.descripcionCorta}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#3DBFAA] group-hover:gap-2 transition-all">
                Conocer detalles
                <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
