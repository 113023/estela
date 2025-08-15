import Container from "./Container";
import BRAND from "../constants/brand";
import { Wifi, Clock, MapPin, Instagram } from "lucide-react";

export default function Hero() {
  return (
    <header id="home" className="relative overflow-hidden">
      {/* halos */}
      <div
        className="absolute -top-40 -right-32 h-96 w-96 rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(closest-side, #CDECE3, transparent)" }}
      />
      <div
        className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(closest-side, #E9D5FA, transparent)" }}
      />

      <Container>
        <div className="grid lg:grid-cols-12 gap-10 items-center py-12 sm:py-16">
          {/* Colonne texte */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs shadow-sm border border-black/5">
              <Wifi className="h-3.5 w-3.5" />
              <span>Wi-Fi fibre • Prises à chaque table • Ambiance calme</span>
            </div>
            <h1
              className="font-extrabold leading-tight tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}
            >
              Coffee Shop pour étudier, créer & travailler
            </h1>
            <p
              className="text-black/70 max-w-xl mx-auto lg:mx-0"
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.125rem)" }}
            >
              Tables spacieuses, banquettes confort et boissons de spécialité. Ouvert à tous : étudiants,
              freelances, télétravailleurs.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-black text-white text-sm md:text-base"
              >
                Menu
              </a>
              <a
                href="#opinions"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-black/10 text-sm md:text-base"
              >
                Voir les avis
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-2 text-sm text-black/70">
              <div className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" />8h–19h
              </div>
              <div className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />Centre-ville
              </div>
              <a
                className="inline-flex items-center gap-2 underline"
                href={BRAND.igUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="h-4 w-4" />
                {BRAND.ig}
              </a>
            </div>
          </div>

          {/* Colonne image */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[#CDECE3] via-white to-[#E9D5FA] blur-2xl opacity-70" />
              <img
                src="get.jpg"
                alt="Intérieur du coffee shop"
                className="w-full h-auto rounded-[2rem] shadow-2xl ring-1 ring-black/5 object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
