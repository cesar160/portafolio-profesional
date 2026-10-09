"use client";

import { motion, useReducedMotion } from "motion/react";
import { contacto, perfil } from "@/lib/data";
import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  ArrowUpRight,
  PaperPlaneTilt,
} from "@phosphor-icons/react";

export default function Contact() {
  const reduce = useReducedMotion();

  return (
    <section
      id="contacto"
      className="py-24 sm:py-32 px-6 lg:px-10"
      style={{
        borderTop: "1px solid var(--color-border)",
        background: "var(--color-surface)",
      }}
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in srgb, var(--color-accent) 8%, transparent), transparent)",
            border: "1px solid var(--color-border)",
          }}
        >
          <div
            className="absolute -bottom-32 -right-20 w-80 h-80 rounded-full pointer-events-none opacity-50 dark:opacity-30"
            style={{
              background:
                "radial-gradient(circle, var(--color-accent), transparent 65%)",
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-5">
                Hablemos sobre tu próximo proyecto
              </h2>
              <p className="text-[15.5px] leading-relaxed text-muted max-w-lg">
                Si tienes una idea, una oportunidad de colaboración o simplemente
                quieres saludar, mi bandeja de entrada siempre está abierta.
              </p>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <a
                href={`mailto:${contacto.correo}`}
                className="group flex items-center justify-between w-full rounded-2xl border border-border p-5 transition-all hover:scale-[1.01] active:scale-[0.995]"
                style={{ background: "var(--color-card)" }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{
                      background:
                        "color-mix(in srgb, var(--color-accent) 12%, transparent)",
                      color: "var(--color-accent)",
                    }}
                  >
                    <Envelope size={20} weight="regular" />
                  </div>
                  <div>
                    <p className="text-[12px] font-medium text-muted-foreground mb-0.5">
                      Correo electrónico
                    </p>
                    <p className="text-[14.5px] font-medium">
                      {contacto.correo}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  weight="regular"
                  className="shrink-0 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"
                />
              </a>

              {contacto.github && (
                <a
                  href={contacto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between w-full rounded-2xl border border-border p-5 transition-all hover:scale-[1.01] active:scale-[0.995]"
                  style={{ background: "var(--color-card)" }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{
                        background: "var(--color-surface-hover)",
                      }}
                    >
                      <GithubLogo size={20} weight="regular" />
                    </div>
                    <div>
                      <p className="text-[12px] font-medium text-muted-foreground mb-0.5">
                        GitHub
                      </p>
                      <p className="text-[14.5px] font-medium">
                        {contacto.github.replace("https://", "")}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    weight="regular"
                    className="shrink-0 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"
                  />
                </a>
              )}

              {contacto.linkedin && (
                <a
                  href={contacto.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between w-full rounded-2xl border border-border p-5 transition-all hover:scale-[1.01] active:scale-[0.995]"
                  style={{ background: "var(--color-card)" }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{
                        background: "color-mix(in srgb, #0A66C2 18%, transparent)",
                        color: "#0A66C2",
                      }}
                    >
                      <LinkedinLogo size={20} weight="regular" />
                    </div>
                    <div>
                      <p className="text-[12px] font-medium text-muted-foreground mb-0.5">
                        LinkedIn
                      </p>
                      <p className="text-[14.5px] font-medium">
                        {contacto.linkedin.replace("https://", "")}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    weight="regular"
                    className="shrink-0 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"
                  />
                </a>
              )}

              <a
                href={perfil.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full rounded-2xl p-5 transition-all hover:scale-[1.01] active:scale-[0.995]"
                style={{
                  background: "var(--color-accent)",
                  color: "var(--color-accent-foreground)",
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: "rgba(255,255,255,0.2)" }}
                  >
                    <PaperPlaneTilt size={20} weight="regular" />
                  </div>
                  <div>
                    <p
                      className="text-[12px] font-medium mb-0.5"
                      style={{ color: "color-mix(in srgb, white 75%, transparent)" }}
                    >
                      Curriculum Vitae
                    </p>
                    <p className="text-[14.5px] font-medium">
                      Ver CV completo en Google Drive
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  weight="regular"
                  className="shrink-0 opacity-70 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
