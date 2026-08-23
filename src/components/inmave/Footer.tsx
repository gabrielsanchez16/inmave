import { Layers, Instagram, Facebook, Linkedin, Mail, Phone, MapPin, Clock } from "lucide-react";

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

const productLinks = [
  { label: "Equipos hospitalarios", href: "#productos" },
  { label: "Insumos estéticos", href: "#productos" },
  { label: "Farmacéuticos", href: "#productos" },
  { label: "Insumos médicos", href: "#productos" },
];

const companyLinks = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Tienda", href: "#tienda" },
  { label: "Adquiere productos", href: "#adquiere" },
  { label: "Blog", href: "#" },
];

const contactItems = [
  { icon: Mail, text: "contacto@inmave.com", href: "mailto:contacto@inmave.com" },
  { icon: Phone, text: "+58 212 000 0000", href: "tel:+582120000000" },
  { icon: MapPin, text: "Caracas, Venezuela", href: "#" },
  { icon: Clock, text: "Lun-Vie 8am-6pm", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-surface">
      <div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <Layers className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="text-xl font-semibold tracking-wide">INMAVE</span>
            </a>
            <p className="mt-6 max-w-xs leading-relaxed text-muted-foreground">
              Insumos y equipos médicos de alta calidad para profesionales de la salud en Venezuela.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide">Productos</h3>
            <ul className="mt-6 space-y-4">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide">Empresa</h3>
            <ul className="mt-6 space-y-4">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide">Contacto</h3>
            <ul className="mt-6 space-y-4">
              {contactItems.map((c) => (
                <li key={c.text}>
                  <a
                    href={c.href}
                    className="flex items-start gap-3 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <c.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{c.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-muted-foreground lg:flex-row lg:px-12">
          <p>© 2025 INMAVE. Todos los derechos reservados.</p>
          <p>Distribución autorizada · Registro Sanitario Vigente</p>
        </div>
      </div>
    </footer>
  );
}
