"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Smile, Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/galeria", label: "Galería" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              scrolled ? "bg-[#0A4D8C]" : "bg-white/15 backdrop-blur"
            }`}
          >
            <Smile
              size={22}
              strokeWidth={2}
              className={scrolled ? "text-white" : "text-white"}
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className={`font-[var(--font-heading)] text-xl font-semibold ${
                scrolled ? "text-[#0A4D8C]" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Terranova
            </span>
            <span
              className={`text-[10px] tracking-[0.18em] uppercase ${
                scrolled ? "text-[#6B7280]" : "text-white/80"
              }`}
            >
              Especialidades Dentales
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-[#00A8E8] ${
                scrolled ? "text-[#1A1A2E]" : "text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Button href="/contacto" variant="primary" size="sm">
            Agendar Cita
          </Button>
        </nav>

        <button
          onClick={() => setOpen(true)}
          className={`lg:hidden p-2 rounded-md ${
            scrolled ? "text-[#0A4D8C]" : "text-white"
          }`}
          aria-label="Abrir menú"
        >
          <Menu size={28} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[88vw] bg-white shadow-2xl p-8 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="self-end p-2 text-[#0A4D8C]"
                aria-label="Cerrar menú"
              >
                <X size={26} />
              </button>
              <nav className="flex flex-col gap-5 mt-6">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-semibold text-[#1A1A2E] hover:text-[#00A8E8]"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto">
                <Button
                  href="/contacto"
                  variant="primary"
                  className="w-full justify-center"
                >
                  Agendar Cita
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
