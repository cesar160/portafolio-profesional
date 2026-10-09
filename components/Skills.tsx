"use client";

import { motion, useReducedMotion } from "motion/react";
import { habilidades } from "@/lib/data";
import {
  Code,
  Layout,
  Database,
  Gauge,
  Plug,
  Wrench,
  Pen,
} from "@phosphor-icons/react";

export default function Skills() {
  const reduce = useReducedMotion();

  const groups = [
    {
      icon: Code,
      titulo: "Lenguajes",
      items: habilidades.lenguajes,
      span: "md:col-span-2",
    },
    {
      icon: Layout,
      titulo: "Frontend",
      items: habilidades.frontend,
      span: "md:col-span-1",
    },
    {
      icon: Gauge,
      titulo: "Estado y formularios",
      items: habilidades.gestionEstado,
      span: "md:col-span-2",
    },
    {
      icon: Plug,
      titulo: "APIs y backend",
      items: habilidades.apisYBackend,
      span: "md:col-span-1",
    },
    {
      icon: Database,
      titulo: "Bases de datos",
      items: habilidades.basesDeDatos,
      span: "md:col-span-1",
    },
    {
      icon: Pen,
      titulo: "UX / UI",
      items: habilidades.uxUi,
      span: "md:col-span-2",
    },
    {
      icon: Wrench,
      titulo: "Herramientas y entorno",
      items: habilidades.herramientas,
      span: "md:col-span-3",
    },
  ];

  return (
    <section
      id="habilidades"
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
            Tecnologías y habilidades
          </h2>
          <p className="text-[15.5px] leading-relaxed text-muted">
            Conjunto de herramientas y tecnologías con las que he trabajado en
            proyectos académicos y colaborativos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.titulo}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`${g.span} rounded-2xl border border-border p-6 lg:p-7`}
              style={{ background: "var(--color-card)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{
                    background:
                      "color-mix(in srgb, var(--color-accent) 12%, transparent)",
                    color: "var(--color-accent)",
                  }}
                >
                  <g.icon size={20} weight="regular" />
                </div>
                <h3 className="text-[16px] font-semibold tracking-tight">
                  {g.titulo}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <span
                    key={t}
                    className="text-[12.5px] font-medium px-3 py-1.5 rounded-lg"
                    style={{
                      background: "var(--color-surface-hover)",
                      color: "var(--color-foreground)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
