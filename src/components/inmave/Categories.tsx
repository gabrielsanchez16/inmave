import { ArrowRight } from "lucide-react";
import hospitalario from "@/assets/cat-hospitalario.jpg";
import estetico from "@/assets/cat-estetico.jpg";
import farmaceutico from "@/assets/cat-farmaceutico.jpg";
import insumos from "@/assets/cat-insumos.jpg";

const categories = [
  {
    tag: "Hospitalario",
    title: ["Equipos e Insumos", "Médicos & Hospitalarios"],
    text: "Equipamiento de alta precisión para entornos clínicos y hospitalarios. Monitores, camas, ventiladores y todo lo necesario para una atención de excelencia.",
    image: hospitalario,
    alt: "Sala hospitalaria con monitores y equipos médicos",
  },
  {
    tag: "Estético",
    title: ["Equipos e Insumos", "Estéticos"],
    text: "Tecnología de vanguardia para procedimientos estéticos y de bienestar. Dispositivos láser, de radiofrecuencia y más para tu clínica.",
    image: estetico,
    alt: "Dispositivo estético profesional",
  },
  {
    tag: "Farmacéutico",
    title: ["Insumos", "Farmacéuticos"],
    text: "Productos farmacéuticos certificados y de alta calidad. Soluciones, reactivos y medicamentos con trazabilidad garantizada.",
    image: farmaceutico,
    alt: "Viales y ampollas farmacéuticas",
  },
  {
    tag: "Insumos",
    title: ["Insumos", "Médicos"],
    text: "Guantes, jeringas, gasas, catéteres y todo el material fungible que tu práctica médica necesita. Stock permanente y entrega garantizada.",
    image: insumos,
    alt: "Equipo quirúrgico en sala de operaciones",
  },
];

export function Categories() {
  return (
    <section id="productos" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-12">
        <div className="text-center">
          <span className="section-label">Nuestros productos</span>
          <h2 className="mx-auto mt-8 max-w-4xl font-display text-[clamp(2.2rem,4.6vw,4rem)] font-semibold leading-[1.12] tracking-tight">
            Catálogo Completo de{" "}
            <span className="text-primary">Insumos y Equipos</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {categories.map((c) => (
            <article
              key={c.tag}
              className="overflow-hidden rounded-2xl border border-border card-gradient"
            >
              <div className="relative">
                <img
                  src={c.image}
                  alt={c.alt}
                  width={900}
                  height={600}
                  loading="lazy"
                  className="h-[300px] w-full object-cover lg:h-[420px]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--card),transparent_55%)]" />
              </div>
              <div className="p-8">
                <span className="inline-block rounded-full border border-primary/40 px-3.5 py-1 text-xs text-primary">
                  {c.tag}
                </span>
                <h3 className="mt-6 font-display text-2xl font-medium leading-snug">
                  {c.title[0]}
                  <br />
                  {c.title[1]}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {c.text}
                </p>
                <a
                  href="#tienda"
                  className="mt-6 inline-flex items-center gap-2 text-primary transition-colors hover:text-primary-soft"
                >
                  Ver productos <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
