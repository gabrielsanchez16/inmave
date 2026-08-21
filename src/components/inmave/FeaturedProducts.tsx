import { ArrowRight } from "lucide-react";
import monitor from "@/assets/prod-monitor.jpg";
import estetico from "@/assets/cat-estetico.jpg";
import farmaceutico from "@/assets/cat-farmaceutico.jpg";
import lab from "@/assets/prod-lab.jpg";

const products = [
  {
    tag: "Hospitalario",
    name: "Monitor de Signos Vitales",
    price: "$1.450",
    image: monitor,
    alt: "Mesa quirúrgica bajo lámparas de quirófano",
  },
  {
    tag: "Estético",
    name: "Equipo de Radiofrecuencia",
    price: "$2.800",
    image: estetico,
    alt: "Dispositivo estético de radiofrecuencia",
  },
  {
    tag: "Farmacéutico",
    name: "Kit de Insumos Farmacéuticos",
    price: "$320",
    image: farmaceutico,
    alt: "Viales farmacéuticos de vidrio",
  },
  {
    tag: "Médico",
    name: "Set de Insumos Quirúrgicos",
    price: "$180",
    image: lab,
    alt: "Material de laboratorio iluminado con neón",
  },
];

export function FeaturedProducts() {
  return (
    <section id="tienda" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="section-label">Tienda</span>
            <h2 className="mt-6 font-display text-[clamp(2rem,3.6vw,3.2rem)] font-semibold tracking-tight">
              Productos Destacados
            </h2>
          </div>
          <a
            href="#productos"
            className="inline-flex items-center gap-2 text-primary transition-colors hover:text-primary-soft"
          >
            Ver catálogo completo <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.name}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <img
                src={p.image}
                alt={p.alt}
                width={900}
                height={700}
                loading="lazy"
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.12em] text-primary">
                  {p.tag}
                </p>
                <h3 className="mt-3 text-lg font-medium">{p.name}</h3>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-lg">{p.price}</span>
                  <button
                    type="button"
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-soft"
                  >
                    Cotizar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
