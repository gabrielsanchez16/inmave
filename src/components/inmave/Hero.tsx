import { ArrowRight } from "lucide-react";
import heroVial from "@/assets/hero-vial.jpg";

const stats = [
  { value: "500+", label: "Productos" },
  { value: "12+", label: "Años de experiencia" },
  { value: "1.200+", label: "Clientes" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-surface pt-[76px]">
      <img
        src={heroVial}
        alt="Vial farmacéutico de precisión con polvo liofilizado"
        width={1408}
        height={1200}
        className="absolute inset-y-0 right-0 hidden h-full w-[62%] object-cover lg:block"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--surface)_28%,transparent_72%)] hidden lg:block" />
      <div className="absolute inset-0 hero-glow" />

      <div className="relative mx-auto max-w-[1240px] px-6 pb-16 pt-16 lg:px-12 lg:pb-24 lg:pt-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-medium text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Insumos Médicos Certificados
        </span>

        <h1 className="mt-8 max-w-[620px] font-display text-[clamp(2.75rem,6.2vw,5.2rem)] font-semibold leading-[1.05] tracking-tight">
          <span className="text-primary">Soluciones</span>
          <br />
          Médicas de
          <br />
          Alta Precisión
        </h1>

        <p className="mt-8 max-w-[620px] text-lg leading-relaxed text-muted-foreground">
          Proveemos equipos e insumos médicos, hospitalarios, estéticos y
          farmacéuticos con los más altos estándares de calidad para
          profesionales de la salud.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#productos"
            className="inline-flex items-center gap-3 rounded-xl bg-primary px-7 py-4 font-medium text-primary-foreground transition-colors hover:bg-primary-soft"
          >
            Explorar Productos <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#nosotros"
            className="inline-flex items-center rounded-xl bg-secondary px-7 py-4 font-medium text-foreground transition-colors hover:bg-accent"
          >
            Conoce INMAVE
          </a>
        </div>

        <dl className="mt-16 flex flex-wrap gap-x-12 gap-y-6">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-3xl font-semibold">{s.value}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 hidden flex-col items-center gap-3 lg:flex">
          <span className="h-12 w-px bg-border" />
          <span className="text-[11px] tracking-[0.25em] text-muted-foreground">
            SCROLL
          </span>
        </div>
      </div>
    </section>
  );
}
