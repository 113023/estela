import TopBar from "../components/TopBar";
import Hero from "../components/Hero";
import WorkSection from "../components/WorkSection";
import MenuSection from "../components/MenuSection";
import WhereToFindUs from "../components/WhereToFindUs";
import Opinion from "../components/Opinion";
import Footer from "../components/Footer";
import BRAND from "../constants/brand";

export default function LandingPage() {

  const avis = [
    {
      author: "Gwen",
      rating: 5,
      text: "Lieux extrêmement chaleureux, un vrai petit cocon pour un instant pour soi. Estëla est une personne très bienveillante, douce et les soins qu'elle propose sont d'une grande qualité. J'ai eu la chance de faire le massage Alba, un véritable voyage sensoriel. J'ai également fait le rehaussement de cil, j'adore ! Une véritable bulle de détente pour se faire du bien.",
      date: "Juillet 2024",
    },
    {
      author: "No Boi",
      rating: 5,
      text: "Waooo!!! Que ce soit les soins visage, le rehaussement, la personne… je recommande tout ici! Le cadre chaleureux, la bienveillance, les attentions constantes… Services Épilation au fil, Embellissement des sourcils, Mise en forme des sourcils, Rehaussement de cils",
      date: "Juin 2025",
    },
    {
      author: "Chloé Rodriguez",
      rating: 5,
      text: "Gros coup de coeur. Estelle m'a réconcilié avec le semi permanent pour commencer. J'ai eu la chance de faire un massage du visage avec le quartz rose pour une détente totale, elle a des mains de fée, douce et pleins de belles énergies. Merci à toi",
      date: "Juin 2023",
    },
  ];
  return (
    <div className="min-h-screen font-[Inter,system-ui] antialiased text-[#1F2937]"
         style={{background: `linear-gradient(180deg, ${BRAND.colors.bg}, #FFFFFF)`}}>
      <TopBar />
      <Hero />
      <WorkSection />
      <MenuSection />
      <WhereToFindUs />
      <Opinion reviews = {avis}/>
      <Footer />
    </div>
  );
}
