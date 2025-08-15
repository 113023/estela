import Container from "./Container";
import BRAND from "../constants/brand";
import MapEmbed from "./MapEmbed"; // <-- ajoute ça
import { Coffee } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/10 bg-white/70 backdrop-blur">
      <Container>
        <div className="py-10 grid md:grid-cols-3 gap-6 items-start">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-[#CDECE3] to-[#E9D5FA] grid place-items-center shadow-sm">
                <Coffee className="h-5 w-5" />
              </div>
              <span className="font-semibold tracking-tight">{BRAND.name}</span>
            </div>
            <p className="text-black/70 text-sm mt-3 max-w-sm">
              Café de quartier et lieu de concentration. Accessible à tous, propice à la créativité.
            </p>
          </div>

          <div className="text-sm">
            <h4 className="font-semibold mb-2">Infos</h4>
            <ul className="space-y-1 text-black/70">
              <li>8h–19h • 7j/7</li>
              <li>Centre-ville • Tram Hôtel de Ville</li>
              <li>Wi-Fi haut débit • Prises à chaque table</li>
            </ul>
          </div>

          <div className="text-sm">
            <h4 className="font-semibold mb-2">Contact</h4>
            <ul className="space-y-1 text-black/70">
              <li>Instagram: <a className="underline" href={BRAND.igUrl} target="_blank" rel="noreferrer">{BRAND.ig}</a></li>
              <li>Email: bonjour@raslatasse.cafe</li>
              <li>Tél: 06 00 00 00 00</li>
            </ul>
          </div>
        </div>

        {/* Carte (span pleine largeur sous les infos) */}
        <div className="pb-8">
          <MapEmbed query="Ras la Tasse, 3 Rue du Puits Vert, 31000 Toulouse, France" height={280} />
          <div className="mt-3 flex gap-3 text-sm">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Ras la Tasse, 3 Rue du Puits Vert, 31000 Toulouse, France")}`}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center rounded-xl px-3 py-2 border border-black/10 hover:bg-black/5"
            >
              Ouvrir dans Google Maps
            </a>
            <a
              href={`https://maps.apple.com/?q=${encodeURIComponent("Ras la Tasse, 3 Rue du Puits Vert, 31000 Toulouse, France")}`}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center rounded-xl px-3 py-2 border border-black/10 hover:bg-black/5"
            >
              Ouvrir dans Apple Plans
            </a>
          </div>
        </div>

        <div className="pb-8 -mt-2 text-xs text-black/60 flex items-center justify-between">
          <span>© {new Date().getFullYear()} {BRAND.name}. Tous droits réservés.</span>
          <a href="#home" className="underline">Haut de page</a>
        </div>
      </Container>
    </footer>
  );
}
