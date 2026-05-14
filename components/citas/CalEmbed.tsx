"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    Cal?: (...args: unknown[]) => void;
  }
}

export default function CalEmbed() {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://app.cal.com/embed/embed.js"]',
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (typeof window !== "undefined" && window.Cal) {
        window.Cal("init", { origin: "https://app.cal.com" });
      }
    };
  }, []);

  return (
    <div
      data-cal-link="terranovadental/consulta"
      data-cal-config='{"layout":"month_view"}'
      className="w-full min-h-[600px] rounded-xl overflow-hidden border border-gray-200 bg-white"
    />
  );
}
