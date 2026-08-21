import { Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cómo puedo realizar un pedido?",
    a: "Puedes adquirir nuestros productos a través de nuestra tienda en línea o contactando directamente a nuestro equipo de ventas para pedidos corporativos y al mayor.",
  },
  {
    q: "¿Realizan envíos a todo el país?",
    a: "Sí, despachamos a todo el territorio nacional con operadores logísticos aliados y seguimiento de cada envío.",
  },
  {
    q: "¿Los productos cuentan con certificación?",
    a: "Todos nuestros productos cuentan con registro sanitario vigente y certificaciones internacionales de calidad.",
  },
  {
    q: "¿Ofrecen descuentos por volumen?",
    a: "Contamos con planes corporativos y precios preferenciales para instituciones de salud según el volumen de compra.",
  },
  {
    q: "¿Cuál es la política de garantía?",
    a: "Los equipos incluyen garantía de fábrica y soporte técnico post-venta a cargo de nuestro equipo de especialistas.",
  },
];

export function Faq() {
  return (
    <section id="soporte" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
        <div>
          <span className="section-label">Soporte</span>
          <h2 className="mt-8 font-display text-[clamp(2rem,3.6vw,3.2rem)] font-semibold leading-[1.12] tracking-tight">
            ¿Necesitas
            <br />
            <span className="text-primary">ayuda?</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Aquí encontrarás respuestas a las preguntas más frecuentes. Si no
            encuentras lo que buscas, contáctanos directamente.
          </p>
          <a
            href="mailto:contacto@inmave.com"
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-secondary px-6 py-4 font-medium transition-colors hover:bg-accent"
          >
            <Mail className="h-4 w-4" /> Contactar soporte
          </a>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="space-y-4"
        >
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-6"
            >
              <AccordionTrigger className="py-5 text-left text-base hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
