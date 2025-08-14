import Container from "./Container";
import { Sparkles } from "lucide-react";

export default function ReserveCTA() {
  return (
    <section id="reserve" className="py-16">
      <Container>
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div className="rounded-[2rem] p-8 bg-white ring-1 ring-black/5 shadow-sm">
            <div className="inline-flex items-center gap-2 rounded-full bg-black text-white px-3 py-1 text-xs mb-3">
              <Sparkles className="h-3.5 w-3.5"/>Nouveau
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Réservez votre spot</h2>
            <p className="text-black/70 mb-5 max-w-xl">
              Choisissez l'heure, la durée et précisez vos besoins (prise, silence, banquette).
            </p>
            <form className="grid sm:grid-cols-2 gap-3">
              <input type="date" className="rounded-xl border border-black/10 px-4 py-3 bg-white"/>
              <input type="time" className="rounded-xl border border-black/10 px-4 py-3 bg-white"/>
              <select className="rounded-xl border border-black/10 px-4 py-3 bg-white">
                <option>1 h</option><option>2 h</option><option>3 h</option><option>Journée</option>
              </select>
              <select className="rounded-xl border border-black/10 px-4 py-3 bg-white">
                <option>1 personne</option><option>2 personnes</option><option>Groupe (3–6)</option>
              </select>
              <input placeholder="Besoin particulier" className="sm:col-span-2 rounded-xl border border-black/10 px-4 py-3 bg-white"/>
              <button type="button" className="sm:col-span-2 inline-flex items-center justify-center rounded-xl px-5 py-3 bg-black text-white">
                Envoyer
              </button>
            </form>
          </div>

          <div className="rounded-[2rem] overflow-hidden ring-1 ring-black/5 bg-gradient-to-tr from-[#CDECE3] to-[#E9D5FA]">
            <img src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1600&auto=format&fit=crop"
                 alt="Espace de travail" className="w-full h-full object-cover"/>
          </div>
        </div>
      </Container>
    </section>
  );
}
