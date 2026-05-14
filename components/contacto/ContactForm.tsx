"use client";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Loader, CircleCheck, TriangleAlert } from "lucide-react";
import { servicios } from "@/content/servicios";

type Status = "idle" | "loading" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "TU_ACCESS_KEY_AQUI";
    formData.append("access_key", accessKey);
    formData.append(
      "subject",
      "Nuevo contacto desde el sitio · Especialidades Dentales Terranova",
    );

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("ok");
        formEl.reset();
      } else {
        setStatus("error");
        setErrorMessage(
          data.message ||
            "No pudimos enviar tu mensaje. Inténtalo de nuevo en un momento.",
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage("Hubo un error de conexión. Revisa tu internet e inténtalo otra vez.");
    }
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl border border-[#E5EBF5] p-6 lg:p-8 shadow-sm space-y-5"
    >
      <div>
        <h3
          className="text-2xl text-[#1B6E90] font-semibold mb-1"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Escríbenos
        </h3>
        <p className="text-sm text-[#6B7280]">
          Responderemos en el mismo día hábil.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Nombre completo" name="nombre" required />
        <Field label="Teléfono" name="telefono" type="tel" required />
      </div>
      <Field label="Email" name="email" type="email" required />

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-[#1B2D3A]">
          Servicio de interés
        </label>
        <select
          name="servicio"
          required
          defaultValue=""
          className="w-full px-4 py-3 rounded-lg border border-[#E5EBF5] bg-white text-[#1B2D3A] focus:outline-none focus:ring-2 focus:ring-[#3DBFAA] focus:border-transparent transition"
        >
          <option value="" disabled>
            Selecciona una especialidad…
          </option>
          {servicios.map((s) => (
            <option key={s.slug} value={s.nombre}>
              {s.nombre}
            </option>
          ))}
          <option value="Otra / No estoy seguro">Otra / No estoy seguro</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-[#1B2D3A]">Mensaje</label>
        <textarea
          name="mensaje"
          required
          rows={4}
          placeholder="Cuéntanos brevemente cómo podemos ayudarte..."
          className="w-full px-4 py-3 rounded-lg border border-[#E5EBF5] bg-white text-[#1B2D3A] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#3DBFAA] focus:border-transparent transition resize-none"
        />
      </div>

      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1B6E90] hover:bg-[#2B8FAD] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-full shadow-lg transition-all"
      >
        {status === "loading" ? (
          <>
            <Loader size={18} className="animate-spin" />
            Enviando…
          </>
        ) : (
          <>
            <Send size={16} />
            Enviar mensaje
          </>
        )}
      </button>

      {status === "ok" && (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm">
          <CircleCheck size={20} className="flex-shrink-0 mt-0.5" />
          <p>
            ¡Gracias! Recibimos tu mensaje. Nos pondremos en contacto contigo
            muy pronto.
          </p>
        </div>
      )}
      {status === "error" && (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm">
          <TriangleAlert size={20} className="flex-shrink-0 mt-0.5" />
          <p>{errorMessage}</p>
        </div>
      )}
    </motion.form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-[#1B2D3A]">
        {label}
        {required && <span className="text-[#3DBFAA]"> *</span>}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-3 rounded-lg border border-[#E5EBF5] bg-white text-[#1B2D3A] focus:outline-none focus:ring-2 focus:ring-[#3DBFAA] focus:border-transparent transition"
      />
    </div>
  );
}
