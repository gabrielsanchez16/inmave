import { useState } from "react";
import { ChevronDown, Layers, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Productos", href: "#productos", caret: true },
  { label: "Adquiere nuestros productos", href: "#adquiere" },
  { label: "Tienda", href: "#tienda" },
  { label: "Nosotros", href: "#nosotros" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-surface/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-6 lg:px-12">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
            <Layers className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="text-xl font-semibold tracking-wide">INMAVE</span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="flex items-center gap-1.5 text-[15px] text-foreground/90 transition-colors hover:text-primary"
              >
                {l.label}
                {l.caret ? <ChevronDown className="h-4 w-4" /> : null}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#tienda"
          className="hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-soft lg:inline-block"
        >
          Ver Tienda
        </a>

        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-border bg-surface px-6 py-4 lg:hidden">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-foreground/90"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#tienda"
            onClick={() => setOpen(false)}
            className="mt-3 inline-block rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Ver Tienda
          </a>
        </div>
      ) : null}
    </header>
  );
}
