import Container from "./Container";
import FeatureCard from "./FeatureCard";
import { Sparkles, Leaf, Waves, Heart, BadgeCheck, Calendar } from "lucide-react";
import BRAND from "../constants/brand";

export default function WorkSection() {
  const features = [
    { icon: <Sparkles className="h-5 w-5" />, title: "Soins sur-mesure", desc: "Protocoles personnalisés selon tes besoins du moment." },
    { icon: <Leaf className="h-5 w-5" />, title: "Naturel & doux", desc: "Produits clean, gestes respectueux de la peau." },
    { icon: <Waves className="h-5 w-5" />, title: "Ambiance apaisante", desc: "Espace intimiste, musique douce, respiration guidée." },
    { icon: <BadgeCheck className="h-5 w-5" />, title: "Professionnelle certifiée", desc: "Hygiène rigoureuse, expertise visage & bien-être." },
  ];

  return (
    <section id="work" className="py-16" style={{background: `linear-gradient(180deg, ${BRAND.colors.bg}, #ffffff)`}}>
      <Container>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold">Pensé pour ton bien-être</h2>
          <div className="hidden md:flex items-center gap-2 text-sm text-black/70"><Heart className="h-4 w-4"/>Prendre soin de soi</div>
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
