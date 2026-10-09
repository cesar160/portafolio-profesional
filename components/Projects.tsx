"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Image from "next/image";
import { proyectos, type Proyecto } from "@/lib/data";
import {
  CaretLeft,
  CaretRight,
  CheckCircle,
  Sparkle,
  Briefcase,
} from "@phosphor-icons/react";

function ProjectCard({ proyecto, index }: { proyecto: Proyecto; index: number }) {
  const reduce = useReducedMotion();
  const [imgIdx, setImgIdx] = useState(0);
  const hasImages = proyecto.imagenes && proyecto.imagenes.length > 0;
  const reverse = index % 2 === 1;

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasImages) return;
    setImgIdx((i) => (i + 1) % proyecto.imagenes.length);
  };
  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasImages) return;
    setImgIdx(
      (i) => (i - 1 + proyecto.imagenes.length) % proyecto.imagenes.length
    );
  };

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
    >
      <div
        className={`lg:col-span-7 ${reverse ? "lg:order-2" : "lg:order-1"}`}
      >
        <div
          className="relative rounded-2xl overflow-hidden border border-border aspect-[16/10]"
          style={{ background: "var(--color-surface)" }}
        >
          {hasImages ? (
            <>
              <AnimatePresence mode="wait">
                <motion.div
                  key={imgIdx}
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={proyecto.imagenes[imgIdx]}
                    alt={`${proyecto.nombre} - captura ${imgIdx + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>
              {proyecto.imagenes.length > 1 && (
                <>
                  <button
                    onClick={prevImg}
                    aria-label="Imagen anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md transition-transform active:scale-95"
                    style={{
                      background: "rgba(0,0,0,0.45)",
                      color: "white",
                    }}
                  >
                    <CaretLeft size={18} weight="bold" />
                  </button>
                  <button
                    onClick={nextImg}
                    aria-label="Imagen siguiente"
                    className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md transition-transform active:scale-95"
                    style={{
                      background: "rgba(0,0,0,0.45)",
                      color: "white",
                    }}
                  >
                    <CaretRight size={18} weight="bold" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                    {proyecto.imagenes.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          setImgIdx(i);
                        }}
                        aria-label={`Ir a imagen ${i + 1}`}
                        className="h-1.5 rounded-full transition-all"
                        style={{
                          width: i === imgIdx ? "22px" : "7px",
                          background:
                            i === imgIdx
                              ? "white"
                              : "rgba(255,255,255,0.45)",
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div
              className="w-full h-full flex items-center justify-center p-10"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in srgb, var(--color-accent) 25%, transparent), color-mix(in srgb, var(--color-accent) 8%, transparent))",
              }}
            >
              <div className="text-center">
                <div
                  className="inline-flex h-16 w-16 items-center justify-center rounded-2xl mb-4"
                  style={{
                    background:
                      "color-mix(in srgb, var(--color-accent) 90%, black)",
                    color: "white",
                  }}
                >
                  <Sparkle size={28} weight="regular" />
                </div>
                <p className="text-[15px] font-medium mb-1">
                  Proyecto en desarrollo
                </p>
                <p className="text-[13px] text-muted-foreground">
                  Capturas disponibles próximamente
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : "lg:order-2"}`}>
        <div
          className="text-[11.5px] uppercase tracking-[0.18em] font-medium mb-3"
          style={{ color: "var(--color-accent)" }}
        >
          {proyecto.categoria}
        </div>
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
          {proyecto.nombre}
        </h3>
        <p className="text-[15px] leading-relaxed text-muted mb-6">
          {proyecto.resumen}
        </p>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2.5">
            <Briefcase
              size={15}
              weight="regular"
              style={{ color: "var(--color-muted)" }}
            />
            <span className="text-[13px] font-medium">Mi rol</span>
          </div>
          <p className="text-[14px] text-muted-foreground pl-7">
            {proyecto.rol}
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-[13px] font-semibold mb-3">
            Lo que aporté al proyecto
          </h4>
          <ul className="space-y-2.5">
            {proyecto.contribuciones.map((c) => (
              <li key={c} className="flex gap-2.5 text-[14px] text-muted">
                <CheckCircle
                  size={16}
                  weight="regular"
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--color-accent)" }}
                />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-[13px] font-semibold mb-3">
            Funcionalidades clave
          </h4>
          <div className="flex flex-wrap gap-2">
            {proyecto.funcionalidades.map((f) => (
              <span
                key={f}
                className="text-[12px] font-medium px-2.5 py-1.5 rounded-lg"
                style={{
                  background: "var(--color-surface-hover)",
                  color: "var(--color-foreground)",
                }}
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[13px] font-semibold mb-3">Tecnologías</h4>
          <div className="flex flex-wrap gap-2">
            {proyecto.tecnologias.map((t) => (
              <span
                key={t}
                className="text-[12px] font-medium px-3 py-1.5 rounded-full border border-border"
                style={{ color: "var(--color-muted-foreground)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const reduce = useReducedMotion();

  return (
    <section
      id="proyectos"
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
          className="max-w-3xl mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-5">
            Proyectos destacados
          </h2>
          <p className="text-[15.5px] leading-relaxed text-muted">
            Una selección de proyectos académicos y colaborativos en los que he
            participado, cubriendo distintas industrias y tipos de producto.
          </p>
        </motion.div>

        <div className="space-y-24 lg:space-y-32">
          {proyectos.map((p, i) => (
            <React.Fragment key={p.id}>
              <ProjectCard proyecto={p} index={i} />
              {i < proyectos.length - 1 && (
                <div
                  className="w-full"
                  style={{ borderTop: "1px solid var(--color-border)" }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
