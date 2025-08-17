import Container from "./Container";
import BRAND from "../constants/brand";

export default function WhereToFindUs() {
  return (
    <section id="location" className="py-16 bg-white">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Où me trouver ?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Photo de la devanture / intérieur */}
          <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
            <img
              src="devanture.jpg"
              alt="Entrée de Estëla Maison Holistique à Portet-sur-Garonne"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Carte + liens */}
          <div className="flex flex-col h-[400px]">
            <div className="flex-1 rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="Localisation — Google Maps"
                src={`https://www.google.com/maps?q=${encodeURIComponent(BRAND.address)}&output=embed`}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
            <div className="mt-3 flex gap-3 text-sm">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(BRAND.address)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl px-3 py-2 border border-black/10 hover:bg-black/5"
              >
                Ouvrir dans Google Maps
              </a>
              <a
                href={`https://maps.apple.com/?q=${encodeURIComponent(BRAND.address)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl px-3 py-2 border border-black/10 hover:bg-black/5"
              >
                Ouvrir dans Apple Plans
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
