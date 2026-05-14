"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WA_LINK =
  "https://wa.me/523312345678?text=Hola%2C%20me%20interesa%20agendar%20una%20cita%20en%20Especialidades%20Dentales%20Terranova";

export default function WhatsAppFAB() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {mounted && (
        <motion.a
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex items-center"
          aria-label="Escríbenos por WhatsApp"
        >
          <span className="hidden md:block opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 mr-3 bg-white text-[#1A1A2E] text-sm font-medium px-3 py-2 rounded-lg shadow-lg pointer-events-none">
            Escríbenos
          </span>
          <span className="wa-pulse w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#1FB955] text-white flex items-center justify-center shadow-xl transition-colors">
            <svg
              viewBox="0 0 32 32"
              fill="currentColor"
              className="w-7 h-7 md:w-8 md:h-8"
              aria-hidden="true"
            >
              <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035 1.18 2.75.788.62-.33 1.0.0-2.434-.94.013-.395-2.292-.585-2.679-.585zM16.207 1.16c-9.05 0-16 7.42-15.99 16.06.005 2.84.755 5.56 2.075 7.95L.025 32l6.92-2.226A15.91 15.91 0 0 0 16.207 32c8.81 0 15.99-7.18 15.99-15.99 0-8.82-7.18-16-15.99-16zm.05 28.83c-2.61 0-5.16-.755-7.36-2.18l-.55-.34-5.36 1.72 1.72-5.225-.34-.55a13.84 13.84 0 0 1-2.18-7.395c0-7.625 6.22-13.835 13.85-13.835 3.7 0 7.18 1.435 9.795 4.06 2.61 2.62 4.06 6.105 4.055 9.78-.005 7.65-6.22 13.965-13.835 13.965z" />
            </svg>
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
