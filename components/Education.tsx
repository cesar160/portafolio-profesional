"use client";

import { motion, useReducedMotion } from "motion/react";
import { educacion, experiencia, perfil } from "@/lib/data";
import { GraduationCap, BookOpen, FileText } from "@phosphor-icons/react";

export default function Education() {
  const reduce = useReducedMotion();

  return (
    <section
      id="formacion"
      className="py-24 sm:py-32 px-6 lg:px-10"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-5">
            Formación y experiencia
          </h2>
          <p className="text-[15.5px] leading-relaxed text-muted">
            Trayectoria académica y experiencia acumulada en proyectos de
            desarrollo y diseño.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-2xl border border-border p-7 lg:p-9"
            style={{ background: "var(--color-card)" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                style={{
                  background:
                    "color-mix(in srgb, var(--color-accent) 12%, transparent)",
                  color: "var(--color-accent)",
                }}
              >
                <GraduationCap size={22} weight="regular" />
              </div>
              <h3 className="text-[18px] font-semibold tracking-tight">
                Educación
              </h3>
            </div>
            <div className="space-y-5">
              {educacion.map((e) => (
                <div
                  key={e.institucion}
                  className="rounded-xl p-5"
                  style={{ background: "var(--color-surface-hover)" }}
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <p className="text-[16px] font-semibold tracking-tight mb-1">
                        {e.carrera}
                      </p>
                      <p className="text-[14px] text-muted-foreground">
                        {e.institucion}
                      </p>
                    </div>
                    <span
                      className="text-[12px] font-medium px-2.5 py-1 rounded-full shrink-0"
                      style={{
                        background:
                          "color-mix(in srgb, var(--color-accent) 14%, transparent)",
                        color: "var(--color-accent)",
                      }}
                    >
                      {e.estado}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 pt-6 border-t border-border">
              <a
                href={perfil.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-[14px] font-medium border border-border transition-colors hover:bg-surface-hover"
              >
                <FileText size={15} weight="regular" />
                Ver curriculum completo
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-5 rounded-2xl p-7 lg:p-9 text-white overflow-hidden relative"
            style={{
              background:
                "linear-gradient(135deg, var(--color-accent), color-mix(in srgb, var(--color-accent) 60%, black))",
            }}
          >
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%)",
              }}
            />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  <BookOpen size={22} weight="regular" />
                </div>
                <h3 className="text-[18px] font-semibold tracking-tight">
                  Experiencia práctica
                </h3>
              </div>
              <p className="text-[14.5px] leading-relaxed mb-6 opacity-95">
                {experiencia.resumen}
              </p>
              <ul className="space-y-3">
                {[
                  "Diseño UX/UI y prototipado en Figma",
                  "Desarrollo frontend con React y Next.js",
                  "Integración de APIs REST con backends en Kotlin",
                  "Modelado y consulta de bases de datos en PostgreSQL",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-[14px] opacity-95"
                  >
                    <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
