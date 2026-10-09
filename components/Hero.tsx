"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { ArrowRight, FileText, MapPin } from "@phosphor-icons/react";
import { perfil } from "@/lib/data";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-center pt-24 pb-20 px-6 lg:px-10 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.04] dark:opacity-[0.07]"
          style={{ background: "radial-gradient(circle, var(--color-accent), transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 mb-7">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: "var(--color-accent)" }}
              />
              <span className="text-[12px] font-medium text-muted-foreground flex items-center gap-1.5">
                <MapPin size={12} weight="regular" />
                {perfil.ubicacion}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-semibold tracking-tighter leading-[1.05] mb-5">
              Hola, soy{" "}
              <span style={{ color: "var(--color-accent)" }}>
                {perfil.nombreParaMostrar}
              </span>
              .
            </h1>

            <p className="text-xl sm:text-2xl font-medium tracking-tight mb-5 text-foreground/90">
              {perfil.tituloAlternativo}
            </p>

            <p className="text-[15.5px] leading-relaxed max-w-[560px] text-muted mb-9">
              {perfil.presentacionCorta}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#proyectos"
                className="inline-flex h-11 items-center gap-2 rounded-full px-6 text-[14.5px] font-medium transition-all active:scale-[0.98]"
                style={{
                  background: "var(--color-accent)",
                  color: "var(--color-accent-foreground)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-accent-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--color-accent)";
                }}
              >
                Ver proyectos
                <ArrowRight size={16} weight="regular" />
              </a>
              <a
                href={perfil.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-6 text-[14.5px] font-medium transition-colors hover:bg-surface-hover active:scale-[0.98]"
              >
                <FileText size={16} weight="regular" />
                Ver curriculum
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] max-w-[420px] mx-auto">
              <div
                className="absolute inset-0 rounded-[2rem] opacity-[0.08]"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-accent), transparent 60%)",
                }}
              />
              <div
                className="absolute inset-0 rounded-[2rem] border border-border overflow-hidden"
                style={{ background: "var(--color-surface)" }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center p-8">
                  <div
                    className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-6 shrink-0"
                    style={{
                      boxShadow:
                        "0 12px 40px color-mix(in srgb, var(--color-accent) 30%, transparent)",
                      outline: "2px solid color-mix(in srgb, var(--color-accent) 40%, transparent)",
                      outlineOffset: "3px",
                    }}
                  >
                    <Image
                      src="/projects/foto perfil.jpg"
                      alt={`Foto de perfil de ${perfil.nombreCompleto}`}
                      fill
                      priority
                      sizes="(max-width: 640px) 128px, 160px"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-lg tracking-tight mb-1">
                      {perfil.nombreCompleto}
                    </p>
                    <p className="text-sm text-muted">
                      {perfil.tituloProfesional}
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-border w-full">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {perfil.intereses.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
