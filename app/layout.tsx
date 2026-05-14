import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import { getDentistSchema } from "@/lib/schema";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Especialidades Dentales Terranova | Guadalajara",
  description:
    "Clínica dental de especialidades en Guadalajara. Ortodoncia, Endodoncia, Implantología y más. Más de 62 pacientes satisfechos. Agenda tu cita hoy.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = JSON.stringify(getDentistSchema()).replace(/</g, "\\u003c");
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Script
          id="ld-dentist"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {schema}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
