import Container from "./Container";
import FeatureCard from "./FeatureCard";
import { Laptop, Wifi, GraduationCap, Users, Leaf } from "lucide-react";
import BRAND from "../constants/brand";

export default function WorkSection() {
  const features = [
    { icon: <Laptop className="h-5 w-5" />, title: "Tables équipées", desc: "Prises, USB-C et assises confort pour rester focus longtemps." },
    { icon: <Wifi className="h-5 w-5" />, title: "Wi-Fi fibre", desc: "Stable pour visios, livraisons et sessions de code." },
    { icon: <GraduationCap className="h-5 w-5" />, title: "Étudiants bienvenus", desc: "Réductions en semaine sur boissons non alcoolisées." },
    { icon: <Users className="h-5 w-5" />, title: "Espaces groupe", desc: "Banquettes et grandes tablées pour révisions et co-working." },
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
            <FeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </Container>
    </section>
  );
}
