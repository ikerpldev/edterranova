"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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
        <Link href="/" className="flex items-center group">
          <div
            className={`transition-all duration-300 rounded-xl overflow-hidden ${
              scrolled
                ? "bg-white h-14 w-auto px-1"
                : "bg-white/90 backdrop-blur h-14 w-auto px-1 shadow-lg"
            }`}
          >
            <Image
              src="/logo.jpg"
              alt="Especialidades Dentales Terranova"
              width={120}
              height={56}
              className="h-full w-auto object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-[#3DBFAA] ${
                scrolled ? "text-[#1B2D3A]" : "text-white"
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
            scrolled ? "text-[#1B6E90]" : "text-white"
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
              <div className="flex items-center justify-between mb-6">
                <Image
                  src="/logo.jpg"
                  alt="Especialidades Dentales Terranova"
                  width={110}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 text-[#1B6E90]"
                  aria-label="Cerrar menú"
                >
                  <X size={26} />
                </button>
              </div>
              <nav className="flex flex-col gap-5 mt-2">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-semibold text-[#1B2D3A] hover:text-[#3DBFAA]"
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
