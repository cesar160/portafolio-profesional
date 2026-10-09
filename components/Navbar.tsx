"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { List, X, FileText } from "@phosphor-icons/react";
import { estructuraNav, perfil } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        boxShadow: scrolled
          ? "0 1px 0 0 rgba(0,0,0,0.06)"
          : "0 0 0 0 rgba(0,0,0,0)",
      }}
      transition={reduce ? { duration: 0 } : { duration: 0.3 }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 dark:bg-background/60"
      style={{
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a
          href="#inicio"
          className="font-semibold text-[15px] tracking-tight hover:opacity-70 transition-opacity"
        >
          César Yair
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {estructuraNav.slice(1).map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-[13.5px] text-muted hover:text-foreground transition-colors"
              >
                {item.titulo}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={perfil.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-full border border-border px-4 text-[13px] font-medium transition-colors hover:bg-surface-hover"
          >
            <FileText size={14} weight="regular" />
            Curriculum
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-surface-hover transition-colors"
        >
          {open ? <X size={20} /> : <List size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={reduce ? { duration: 0 } : { duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {estructuraNav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-[15px] text-muted hover:text-foreground transition-colors"
                >
                  {item.titulo}
                </a>
              ))}
              <a
                href={perfil.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex h-10 items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground text-[14px] font-medium transition-colors hover:bg-accent-hover"
              >
                <FileText size={15} weight="regular" />
                Descargar CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
