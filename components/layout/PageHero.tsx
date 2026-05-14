"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

interface Props {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  imageUrl?: string;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs = [],
  imageUrl,
}: Props) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      {imageUrl ? (
        <>
          <div className="absolute inset-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A4D8C]/90 via-[#0A4D8C]/85 to-[#00A8E8]/70" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A4D8C] via-[#1A6DB5] to-[#00A8E8]" />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        {breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-white/80 mb-5"
            aria-label="Breadcrumbs"
          >
            {breadcrumbs.map((c, i) => {
              const isLast = i === breadcrumbs.length - 1;
              return (
                <span key={c.label} className="inline-flex items-center gap-2">
                  {c.href && !isLast ? (
                    <Link
                      href={c.href}
                      className="hover:text-white transition-colors"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-white">{c.label}</span>
                  )}
                  {!isLast && <ChevronRight size={14} className="opacity-60" />}
                </span>
              );
            })}
          </motion.nav>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-lg text-white/90 max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
