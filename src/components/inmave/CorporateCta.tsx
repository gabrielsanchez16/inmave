import { ArrowRight, Plus } from "lucide-react";
import lab from "@/assets/prod-lab.jpg";

export function CorporateCta() {
  return (
    <section className="bg-background pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-12">
        <div className="grid gap-12 rounded-3xl border border-border card-gradient p-8 lg:grid-cols-2 lg:items-center lg:p-16">
          <div>
            <span className="section-label">Oferta corporativa</span>
            <h2 className="mt-8 font-display text-[clamp(2rem,3.4vw,3rem)] font-semibold leading-[1.14] tracking-tight">
              Accede a precios preferenciales para{" "}
              <span className="text-primary">instituciones de salud</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Regístrate como cliente corporativo y obtén descuentos exclusivos,
              acceso prioritario a nuevos productos y un asesor dedicado para tu
              institución.
            </p>
            <a
              href="#soporte"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-primary px-7 py-4 font-medium text-primary-foreground transition-colors hover:bg-primary-soft"
            >
              Registrarse Ahora <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={lab}
              alt="Material de laboratorio iluminado con luces de neón"
              width={900}
              height={700}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center gap-4 rounded-xl bg-surface/90 p-4 backdrop-blur-md">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20">
                <Plus className="h-4 w-4 text-primary" />
              </span>
              <div>
                <p className="text-sm font-medium">
                  Descuento del 25% en tu primer pedido
                </p>
                <p className="text-xs text-muted-foreground">
                  Para nuevos clientes corporativos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
