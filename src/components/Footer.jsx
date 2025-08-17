import Container from "./Container";
import BRAND from "../constants/brand";
import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/10 bg-white/70 backdrop-blur">
      <Container>
        <div className="py-10 grid md:grid-cols-3 gap-6 items-start">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-[#CDECE3] to-[#E9D5FA] grid place-items-center shadow-sm">
                <Leaf className="h-5 w-5" />
              </div>
              <span className="font-semibold tracking-tight">{BRAND.name}</span>
            </div>
            <p className="text-black/70 text-sm mt-3 max-w-sm">
              Maison holistique — beauté & bien-être : soins visage, massages, épilation au fil & regard.
            </p>
          </div>

          <div className="text-sm">
            <h4 className="font-semibold mb-2">Contact</h4>
            <ul className="space-y-1 text-black/70">
              <li>
                Instagram:{" "}
                <a className="underline" href={BRAND.igUrl} target="_blank" rel="noreferrer">
                  {BRAND.ig}
                </a>
              </li>
              <li>Tél: {BRAND.phone}</li>
              <li className="mt-2">Adresse : {BRAND.address}</li>
            </ul>
          </div>

          <div className="text-sm md:text-right">
            <h4 className="font-semibold mb-2">Infos</h4>
            <ul className="space-y-1 text-black/70">
              <li>Lun &amp; Sam : 10:00 – 16:30</li>
              <li>Mar, Jeu &amp; Ven : 10:00 – 18:30</li>
              <li>Fermé : Mer &amp; Dim</li>
            </ul>
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
