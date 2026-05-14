import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";
import { servicios } from "@/content/servicios";

export default function Footer() {
  const featured = servicios.slice(0, 5);

  return (
    <footer className="bg-[#1B2D3A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-5">
            <div className="inline-block bg-white rounded-xl px-3 py-2 shadow-md">
              <Image
                src="/logo.jpg"
                alt="Especialidades Dentales Terranova"
                width={130}
                height={55}
                className="h-14 w-auto object-contain"
              />
            </div>
          </div>
          <p className="text-white/70 italic text-sm leading-relaxed">
            Tu sonrisa es nuestra especialidad. Atención dental de alta gama
            con calidez humana en el corazón de Guadalajara.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href="https://www.facebook.com/edterranovaGDL"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#3DBFAA] flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden="true">
                <path d="M13.5 21v-7.5h2.5l.5-3h-3v-2c0-.83.5-1.5 1.5-1.5h1.5V4h-2.5C12 4 10.5 5.5 10.5 7.5v3h-2v3h2V21h3z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/edterranovaGDL"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#3DBFAA] flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4
            className="text-base font-semibold mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Navegación
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="text-white/70 hover:text-[#3DBFAA] transition-colors">Inicio</Link>
            </li>
            <li>
              <Link href="/servicios" className="text-white/70 hover:text-[#3DBFAA] transition-colors">Servicios</Link>
            </li>
            <li>
              <Link href="/nosotros" className="text-white/70 hover:text-[#3DBFAA] transition-colors">Nosotros</Link>
            </li>
            <li>
              <Link href="/galeria" className="text-white/70 hover:text-[#3DBFAA] transition-colors">Galería</Link>
            </li>
            <li>
              <Link href="/contacto" className="text-white/70 hover:text-[#3DBFAA] transition-colors">Contacto</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4
            className="text-base font-semibold mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Especialidades
          </h4>
          <ul className="space-y-3 text-sm">
            {featured.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/servicios/${s.slug}`}
                  className="text-white/70 hover:text-[#3DBFAA] transition-colors"
                >
                  {s.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4
            className="text-base font-semibold mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Contacto
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3 text-white/70">
              <MapPin size={18} className="flex-shrink-0 mt-0.5 text-[#3DBFAA]" />
              <span>
                Av. Terranova 123, Col. Providencia,
                <br />
                Guadalajara, Jalisco
              </span>
            </li>
            <li className="flex items-start gap-3 text-white/70">
              <Phone size={18} className="flex-shrink-0 mt-0.5 text-[#3DBFAA]" />
              <a
                href="tel:+523312345678"
                className="hover:text-[#3DBFAA] transition-colors"
              >
                +52 33 1234-5678
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/70">
              <Clock size={18} className="flex-shrink-0 mt-0.5 text-[#3DBFAA]" />
              <span>
                Lun–Vie: 9:00–19:00
                <br />
                Sáb: 9:00–14:00
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/50">
          <p>© 2024 Especialidades Dentales Terranova S.C. Todos los derechos reservados.</p>
          <p>Hecho con cuidado en Guadalajara, Jalisco.</p>
        </div>
      </div>
    </footer>
  );
}
