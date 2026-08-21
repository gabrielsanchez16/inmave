import surgeon from "@/assets/about-surgeon.jpg";

const values = [
  {
    emoji: "🤝",
    title: "Confianza",
    text: "Relaciones a largo plazo con nuestros clientes",
  },
  {
    emoji: "⭐",
    title: "Excelencia",
    text: "Productos con los más altos estándares internacionales",
  },
];

const badges = [
  "Certificación ISO",
  "Registro Sanitario",
  "Soporte Nacional",
  "Garantía Extendida",
];

export function About() {
  return (
    <section id="nosotros" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1600px] gap-14 px-6 lg:grid-cols-2 lg:px-12">
        <div>
          <span className="section-label">Sobre nosotros</span>
          <h2 className="mt-8 font-display text-[clamp(2.1rem,4vw,3.4rem)] font-semibold leading-[1.12] tracking-tight">
            Bienvenido a <span className="text-primary">INMAVE</span> — tu aliado
            en insumos médicos de confianza.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Somos una empresa colombiana con más de 12 años de trayectoria en la
            distribución y comercialización de equipos e insumos para el sector
            salud. Trabajamos con los mejores fabricantes internacionales para
            garantizar calidad, seguridad y eficiencia en cada producto que
            ofrecemos.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Nuestro equipo de especialistas atiende clínicas, hospitales, centros
            estéticos y farmacias en todo el territorio nacional, brindando
            asesoría técnica y soporte post-venta.
          </p>

          <ul className="mt-10 flex flex-wrap gap-3">
            {badges.map((b) => (
              <li
                key={b}
                className="rounded-full border border-primary/40 px-5 py-2.5 text-sm text-primary"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <img
            src={surgeon}
            alt="Cirujano en quirófano con iluminación cenital"
            width={1000}
            height={700}
            loading="lazy"
            className="aspect-[10/7] w-full rounded-2xl object-cover"
          />
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <span className="text-2xl">{v.emoji}</span>
                <h3 className="mt-5 text-lg font-medium">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
