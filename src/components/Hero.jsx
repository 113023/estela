import Container from "./Container";
import BRAND from "../constants/brand";
import {MapPin, Instagram, Sparkles, Leaf, Scissors} from "lucide-react";

export default function Hero() {
  return (
    <header id="home" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 -right-32 h-96 w-96 rounded-full blur-3xl opacity-40 -z-10"
        style={{ background: "radial-gradient(closest-side, #CDECE3, transparent)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-40 -z-10"
        style={{ background: "radial-gradient(closest-side, #E9D5FA, transparent)" }}
      />

      <Container>
        <div className="grid lg:grid-cols-12 gap-10 items-center py-12 sm:py-16">
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left relative z-10">
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs shadow-sm border border-black/5">
                <Sparkles className="h-3.5 w-3.5" />
                Massages intuitifs
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs shadow-sm border border-black/5">
                <Leaf className="h-3.5 w-3.5" />
                Soins visage naturels
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs shadow-sm border border-black/5">
                <Scissors className="h-3.5 w-3.5" />
                Épilation au fil & regard
              </span>
            </div>

            <h1
              className="font-extrabold leading-tight tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}
            >
              Estëla Maison Holistique — beauté & bien-être
            </h1>

            <p
              className="text-black/70 max-w-xl mx-auto lg:mx-0"
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.125rem)" }}
            >
              Lieu intimiste et chaleureux pour des soins sur-mesure : libérer les tensions, révéler l’éclat naturel du visage et apaiser l’esprit par le son.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <a
                href="https://www.planity.com/estela-beaute-31120-portet-sur-garonne"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-black text-white text-sm md:text-base"
              >
                Prendre RDV
              </a>
              <a
                href="#prestations"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-black/10 text-sm md:text-base"
              >
                Voir les prestations
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-2 text-sm text-black/70">
              <div className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                12 Rue Principale, Portet-sur-Garonne
              </div>
              <a
                href={BRAND.igUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-black/10 px-4 py-2 text-sm hover:bg-black/5"
              >
                <Instagram className="h-4 w-4" />
                Voir Instagram
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[#CDECE3] via-white to-[#E9D5FA] blur-2xl opacity-70" />
              <img
                src="bougie.jpg"
                alt="Estëla Maison Holistique — massages, soins visage naturels, sonothérapie"
                className="w-full h-72 sm:h-96 lg:h-[32rem] rounded-[2rem] shadow-2xl ring-1 ring-black/5 object-cover object-center"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
