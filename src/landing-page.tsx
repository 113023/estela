import React, { useEffect, useState } from "react";
import { Coffee, Wifi, Laptop, Clock, MapPin, GraduationCap, Instagram, Users, Leaf, Sparkles } from "lucide-react";

const BRAND = {
  name: "Ras La Tasse",
  ig: "@raslatasseoff",
  igUrl: "https://www.instagram.com/raslatasseoff/",
  colors: {
    bg: "#F6F5F4",
    ink: "#1F2937",
    accent: "#7CD1C0",
    blush: "#EBDCF3",
    card: "#FFFFFF",
  },
};

function Container({ children }: { children?: any }) {
  return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

function TopBar() {
  return (
    <div className="sticky top-0 z-50">
      <div className="w-full bg-white/70 backdrop-blur border-b border-black/5">
        <Container>
          <div className="h-12 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-[#CDECE3] via-white to-[#E9D5FA] grid place-items-center shadow-sm">
                <Coffee className="h-5 w-5" />
              </div>
              <span className="font-semibold tracking-tight">{BRAND.name}</span>
            </a>
            <div className="hidden md:flex items-center gap-7 text-sm">
              <a href="#work" className="opacity-80 hover:opacity-100">Travailler</a>
              <a href="#menu" className="opacity-80 hover:opacity-100">Menu</a>
              <a href="#insta" className="opacity-80 hover:opacity-100">Instagram</a>
              <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>
              <a href="#reserve" className="inline-flex items-center rounded-xl px-4 py-2 bg-black text-white hover:opacity-90">Réserver</a>
            </div>
            <MobileMenu />
          </div>
        </Container>
      </div>
    </div>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)} className="inline-flex items-center justify-center p-2 rounded-xl border border-black/10">
        <div className="space-y-1.5">
          <div className="h-0.5 w-6 bg-black" />
          <div className="h-0.5 w-6 bg-black" />
          <div className="h-0.5 w-6 bg-black" />
        </div>
      </button>
      {open && (
        <div className="absolute inset-x-0 top-12 mx-4 rounded-2xl border border-black/10 bg-white shadow-xl">
          <nav className="grid gap-1 p-2 text-sm">
            <a onClick={() => setOpen(false)} href="#work" className="rounded-xl px-3 py-2 hover:bg-black/5">Travailler</a>
            <a onClick={() => setOpen(false)} href="#menu" className="rounded-xl px-3 py-2 hover:bg-black/5">Menu</a>
            <a onClick={() => setOpen(false)} href="#insta" className="rounded-xl px-3 py-2 hover:bg-black/5">Instagram</a>
            <a onClick={() => setOpen(false)} href="#contact" className="rounded-xl px-3 py-2 hover:bg-black/5">Contact</a>
            <a onClick={() => setOpen(false)} href="#reserve" className="rounded-xl px-3 py-2 bg-black text-white">Réserver</a>
          </nav>
        </div>
      )}
    </div>
  );
}

function Hero() {
  return (
    <header id="home" className="relative overflow-hidden">
      <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full blur-3xl opacity-40" style={{background:"radial-gradient(closest-side, #CDECE3, transparent)"}}/>
      <div className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-40" style={{background:"radial-gradient(closest-side, #E9D5FA, transparent)"}}/>
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 items-center py-16">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs shadow-sm border border-black/5">
              <Wifi className="h-3.5 w-3.5" />
              <span>Wi‑Fi fibre • Prises à chaque table • Ambiance calme</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Café studio pour étudier, créer et travailler
            </h1>
            <p className="text-base md:text-lg text-black/70 max-w-xl">
              Tables spacieuses, banquettes confort et boissons de spécialité. Ouvert à tous: étudiants, freelances, télétravailleurs.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#reserve" className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-black text-white text-sm md:text-base">Réserver</a>
              <a href="#work" className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-black/10 text-sm md:text-base">Voir les espaces</a>
            </div>
            <div className="flex gap-6 pt-2 text-sm text-black/70">
              <div className="inline-flex items-center gap-2"><Clock className="h-4 w-4"/>8h–19h</div>
              <div className="inline-flex items-center gap-2"><MapPin className="h-4 w-4"/>Centre‑ville</div>
              <a className="inline-flex items-center gap-2 underline" href={BRAND.igUrl} target="_blank" rel="noreferrer"><Instagram className="h-4 w-4"/>{BRAND.ig}</a>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[#CDECE3] via-white to-[#E9D5FA] blur-2xl opacity-70"/>
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-black/5">
                <img src="https://images.unsplash.com/photo-1551524164-687a55dd1126?q=80&w=1600&auto=format&fit=crop" alt="Café lumineux avec personnes qui travaillent" className="h-full w-full object-cover" loading="eager"/>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

function FeatureCard({ icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:shadow-md">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-[#CDECE3] to-[#E9D5FA] mb-3">
        {icon}
      </div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-black/70 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function WorkSection() {
  const features = [
    { icon: <Laptop className="h-5 w-5" />, title: "Tables équipées", desc: "Prises, USB‑C et assises confort pour rester focus longtemps." },
    { icon: <Wifi className="h-5 w-5" />, title: "Wi‑Fi fibre", desc: "Stable pour visios, livraisons et sessions de code." },
    { icon: <GraduationCap className="h-5 w-5" />, title: "Étudiants bienvenus", desc: "Réductions en semaine sur boissons non alcoolisées." },
    { icon: <Users className="h-5 w-5" />, title: "Espaces groupe", desc: "Banquettes et grandes tablées pour révisions et co‑working." },
  ];
  return (
    <section id="work" className="py-16" style={{background: `linear-gradient(180deg, ${BRAND.colors.bg}, #ffffff)`}}>
      <Container>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold">Pensé pour travailler</h2>
          <div className="hidden md:flex items-center gap-2 text-sm text-black/70"><Leaf className="h-4 w-4"/>Ambiance douce</div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div key={i}>
              <FeatureCard icon={f.icon} title={f.title} desc={f.desc} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function MenuSection() {
  const cards = [
    { title: "Café de spécialité", img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop", points: ["Espresso, Flat White, V60", "Laits végétaux", "Torréfaction locale"] },
    { title: "Brunch & crêpes", img: "https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=1600&auto=format&fit=crop", points: ["Sucré & salé maison", "Options veggie", "Service continu"] },
    { title: "Snacks & thés", img: "https://images.unsplash.com/photo-1541599188778-cdc73298e8f8?q=80&w=1600&auto=format&fit=crop", points: ["Thés, chai latte", "Cookies, banana bread", "Sirops artisanaux"] },
  ];
  return (
    <section id="menu" className="py-16">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Un menu qui aide à rester inspiré</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <article key={i} className="overflow-hidden rounded-[1.75rem] ring-1 ring-black/5 shadow-sm bg-white">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover" loading="lazy"/>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
                <ul className="text-sm text-black/70 space-y-1.5 list-disc pl-5">
                  {c.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function InstaVisualizer({ username, profileUrl }: { username: string; profileUrl: string }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(t);
  }, []);
  const placeholders = [
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1495774856032-8b90bbb32b7f?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506784881475-0e408bbca849?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1600&auto=format&fit=crop",
  ];
  return (
    <section id="insta" className="py-16" style={{background: `linear-gradient(180deg, #ffffff, ${BRAND.colors.bg})`}}>
      <Container>
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Sur Instagram</h2>
            <p className="text-black/70 text-sm">Ambiances & coulisses — suivez {username}</p>
          </div>
          <a href={profileUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-black/10 px-4 py-2 text-sm hover:bg-black/5">
            <Instagram className="h-4 w-4"/>
            Ouvrir le profil
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {placeholders.map((src, i) => (
            <a key={i} href={profileUrl} target="_blank" rel="noreferrer" className="group relative block overflow-hidden rounded-2xl ring-1 ring-black/5">
              <img src={src} alt="Post Instagram" className="h-36 md:h-44 w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition"/>
            </a>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-dashed border-black/10 p-4 text-sm text-black/70">
          Intégrer un flux réel via SnapWidget/LightWidget ou l'API Meta (token requis). Ce composant accepte des URLs d'images réelles.
        </div>
      </Container>
    </section>
  );
}

function ReserveCTA() {
  return (
    <section id="reserve" className="py-16">
      <Container>
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div className="rounded-[2rem] p-8 bg-white ring-1 ring-black/5 shadow-sm">
            <div className="inline-flex items-center gap-2 rounded-full bg-black text-white px-3 py-1 text-xs mb-3"><Sparkles className="h-3.5 w-3.5"/>Nouveau</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Réservez votre spot</h2>
            <p className="text-black/70 mb-5 max-w-xl">Choisissez l'heure, la durée et précisez vos besoins (prise, silence, banquette).</p>
            <form className="grid sm:grid-cols-2 gap-3">
              <input type="date" className="rounded-xl border border-black/10 px-4 py-3 bg-white"/>
              <input type="time" className="rounded-xl border border-black/10 px-4 py-3 bg-white"/>
              <select className="rounded-xl border border-black/10 px-4 py-3 bg-white">
                <option>1 h</option>
                <option>2 h</option>
                <option>3 h</option>
                <option>Journée</option>
              </select>
              <select className="rounded-xl border border-black/10 px-4 py-3 bg-white">
                <option>1 personne</option>
                <option>2 personnes</option>
                <option>Groupe (3–6)</option>
              </select>
              <input placeholder="Besoin particulier" className="sm:col-span-2 rounded-xl border border-black/10 px-4 py-3 bg-white"/>
              <button type="button" className="sm:col-span-2 inline-flex items-center justify-center rounded-xl px-5 py-3 bg-black text-white">Envoyer</button>
            </form>
          </div>
          <div className="rounded-[2rem] overflow-hidden ring-1 ring-black/5 bg-gradient-to-tr from-[#CDECE3] to-[#E9D5FA]">
            <img src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1600&auto=format&fit=crop" alt="Espace de travail" className="w-full h-full object-cover"/>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
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
            <p className="text-black/70 text-sm mt-3 max-w-sm">Café de quartier et lieu de concentration. Accessible à tous, propice à la créativité.</p>
          </div>
          <div className="text-sm">
            <h4 className="font-semibold mb-2">Infos</h4>
            <ul className="space-y-1 text-black/70">
              <li>8h–19h • 7j/7</li>
              <li>Centre‑ville • Tram Hôtel de Ville</li>
              <li>Wi‑Fi haut débit • Prises à chaque table</li>
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
        <div className="pb-8 -mt-2 text-xs text-black/60 flex items-center justify-between">
          <span>© {new Date().getFullYear()} {BRAND.name}. Tous droits réservés.</span>
          <a href="#home" className="underline">Haut de page</a>
        </div>
      </Container>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen font-[Inter,system-ui] antialiased text-[#1F2937]" style={{background: `linear-gradient(180deg, ${BRAND.colors.bg}, #FFFFFF)`}}>
      <TopBar />
      <Hero />
      <WorkSection />
      <MenuSection />
      <InstaVisualizer username={BRAND.ig} profileUrl={BRAND.igUrl} />
      <ReserveCTA />
      <Footer />
    </div>
  );
}