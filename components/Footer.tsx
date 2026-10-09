import { perfil, contacto, estructuraNav } from "@/lib/data";
import { GithubLogo, Envelope, LinkedinLogo } from "@phosphor-icons/react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="px-6 lg:px-10 pt-16 pb-10"
      style={{
        borderTop: "1px solid var(--color-border)",
        background: "var(--color-background)",
      }}
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          <div className="md:col-span-5">
            <p className="text-[16px] font-semibold tracking-tight mb-2.5">
              {perfil.nombreParaMostrar}
            </p>
            <p className="text-[14px] text-muted max-w-sm leading-relaxed mb-5">
              {perfil.tituloAlternativo}. Construyendo productos digitales
              modernos, centrados en el usuario y hechos con atención al detalle.
            </p>
            <div className="flex items-center gap-2.5">
              <a
                href={`mailto:${contacto.correo}`}
                aria-label="Correo electrónico"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-surface-hover"
              >
                <Envelope size={16} weight="regular" />
              </a>
              {contacto.github && (
                <a
                  href={contacto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-surface-hover"
                >
                  <GithubLogo size={16} weight="regular" />
                </a>
              )}
              {contacto.linkedin && (
                <a
                  href={contacto.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-surface-hover"
                >
                  <LinkedinLogo size={16} weight="regular" />
                </a>
              )}
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="text-[12.5px] uppercase tracking-[0.14em] font-medium text-muted-foreground mb-4">
              Navegación
            </p>
            <ul className="space-y-2.5">
              {estructuraNav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-[14px] text-muted hover:text-foreground transition-colors"
                  >
                    {item.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[12.5px] uppercase tracking-[0.14em] font-medium text-muted-foreground mb-4">
              Contacto directo
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${contacto.correo}`}
                  className="text-[14px] text-muted hover:text-foreground transition-colors break-all"
                >
                  {contacto.correo}
                </a>
              </li>
              {contacto.github && (
                <li>
                  <a
                    href={contacto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-muted hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                </li>
              )}
              {contacto.linkedin && (
                <li>
                  <a
                    href={contacto.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-muted hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
              <li>
                <a
                  href={perfil.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-muted hover:text-foreground transition-colors"
                >
                  Curriculum Vitae
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <p className="text-[12.5px] text-muted">
            © {year} {perfil.nombreCompleto}. Todos los derechos reservados.
          </p>
          <p className="text-[12.5px] text-muted">
            Hecho con Next.js, Tailwind CSS y Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
