"use client";

import { motion, useReducedMotion } from "motion/react";
import { perfil } from "@/lib/data";
import { User, Target, Sparkle } from "@phosphor-icons/react";

export default function About() {
  const reduce = useReducedMotion();

  const items = [
    {
      icon: User,
      titulo: "Quién soy",
      texto:
        "Estudiante de Ingeniería en Tecnología e Innovación Digital en la Universidad Politécnica de Chiapas. Transformo ideas en soluciones digitales que combinan diseño pensado para las personas y código sólido.",
    },
    {
      icon: Target,
      titulo: "Qué hago",
      texto:
        "Trabajo en el diseño de interfaces, la construcción de frontends modernos y la integración con servicios backend. Disfruto desde el primer boceto en Figma hasta el último detalle del deploy.",
    },
    {
      icon: Sparkle,
      titulo: "Qué me motiva",
      texto:
        "Crear productos digitales útiles, accesibles y bien hechos. Me interesan proyectos que aporten valor real, ya sea en sectores como la salud, la agricultura o los servicios cotidianos.",
    },
  ];

  return (
    <section
      id="sobre-mi"
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
          className="max-w-3xl mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-5">
            Sobre mí
          </h2>
          <p className="text-[15.5px] leading-relaxed text-muted">
            {perfil.sobreMi}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.titulo}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-2xl border border-border p-7 transition-colors hover:bg-surface-hover group"
              style={{ background: "var(--color-card)" }}
            >
              <div
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl mb-5 transition-transform group-hover:scale-105"
                style={{
                  background:
                    "color-mix(in srgb, var(--color-accent) 12%, transparent)",
                  color: "var(--color-accent)",
                }}
              >
                <item.icon size={22} weight="regular" />
              </div>
              <h3 className="text-[17px] font-semibold tracking-tight mb-2.5">
                {item.titulo}
              </h3>
              <p className="text-[14.5px] leading-relaxed text-muted">
                {item.texto}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex flex-wrap gap-2"
        >
          {perfil.intereses.map((tag) => (
            <span
              key={tag}
              className="text-[12.5px] font-medium px-3.5 py-1.5 rounded-full border border-border"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
