import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/inmave/Navbar";
import { Hero } from "@/components/inmave/Hero";
import { About } from "@/components/inmave/About";
import { Categories } from "@/components/inmave/Categories";
import { BuyOptions } from "@/components/inmave/BuyOptions";
import { FeaturedProducts } from "@/components/inmave/FeaturedProducts";
import { Faq } from "@/components/inmave/Faq";
import { CorporateCta } from "@/components/inmave/CorporateCta";
import { Footer } from "@/components/inmave/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "INMAVE | Insumos y Equipos Médicos Certificados" },
      {
        name: "description",
        content:
          "INMAVE distribuye equipos e insumos médicos, hospitalarios, estéticos y farmacéuticos certificados en toda Colombia, con asesoría técnica y soporte post-venta.",
      },
      {
        property: "og:title",
        content: "INMAVE | Insumos y Equipos Médicos Certificados",
      },
      {
        property: "og:description",
        content:
          "Equipos e insumos médicos de alta precisión para clínicas, hospitales, centros estéticos y farmacias.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Categories />
        <BuyOptions />
        <FeaturedProducts />
        <Faq />
        <CorporateCta />
      </main>
      <Footer />
    </div>
  );
}
