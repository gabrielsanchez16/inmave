import { Phone, ShoppingCart, Store } from "lucide-react";
import device from "@/assets/buy-device.jpg";

const options = [
  {
    icon: ShoppingCart,
    title: "Tienda en Línea",
    text: "Explora nuestro catálogo digital y realiza tu pedido de forma rápida y segura desde cualquier dispositivo.",
  },
  {
    icon: Phone,
    title: "Asesor Comercial",
    text: "Contacta a nuestro equipo de ventas para recibir asesoría personalizada y cotizaciones a la medida de tu institución.",
  },
  {
    icon: Store,
    title: "Punto de Distribución",
    text: "Visítanos en nuestras oficinas y recoge tus pedidos de forma directa con atención personalizada.",
  },
];

export function BuyOptions() {
  return (
    <section id="adquiere" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1600px] gap-14 px-6 lg:grid-cols-2 lg:px-12">
        <div>
          <span className="section-label">Adquiere nuestros productos</span>
          <h2 className="mt-8 font-display text-[clamp(2.2rem,4.4vw,3.7rem)] font-semibold leading-[1.12] tracking-tight">
            Tres formas de
            <br />
            <span className="text-primary">comprar con nosotros</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Adaptamos nuestra experiencia de compra a tus necesidades, ya seas un
            profesional independiente, una clínica o un hospital.
          </p>

          <div className="mt-10 space-y-5">
            {options.map((o) => (
              <div
                key={o.title}
                className="flex gap-5 rounded-2xl border border-border card-gradient p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                  <o.icon className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <h3 className="font-medium">{o.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {o.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <img
            src={device}
            alt="Profesional operando un equipo médico de pantalla táctil"
            width={1000}
            height={800}
            loading="lazy"
            className="aspect-[5/4] w-full rounded-2xl object-cover"
          />
          <div className="mt-6 rounded-2xl border border-border card-gradient p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-medium">¿Compras al mayor?</h3>
              <span className="rounded-full bg-primary/15 px-3.5 py-1 text-xs text-primary">
                Corporativo
              </span>
            </div>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Contamos con planes especiales para instituciones de salud.
              Solicita tu convenio empresarial y accede a precios preferenciales.
            </p>
            <a
              href="#soporte"
              className="mt-6 block rounded-xl bg-primary py-4 text-center font-medium text-primary-foreground transition-colors hover:bg-primary-soft"
            >
              Solicitar Cotización
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
