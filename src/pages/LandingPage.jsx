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
      author: "Naïs Burle",
      rating: 5,
      text: "Très bonne ambiance, très chaleureux, on peux même avoir des boissons sans lactose, étant intolérante, c'est un plaisir les options avoine ! 😁",
      date: "Mars 2025",
    },
    {
      author: "Elisa Moret",
      rating: 5,
      text: "Je viens souvent prendre mon café ici pour travailler! C’était assez calme, et les boissons sont très bonnes je recommande!",
      date: "Mars 2025",
    },
    {
      author: "Chloé Rodriguez",
      rating: 5,
      text: "Très bon café / salon de thé. Ils proposent différentes formes de petits déjeuner (express, complet, jus pressé) . Il y a également tout un tas de viennoiseries et pâtisseries maison, c'est délicieux !L'ambiance y est très agréable (calme et fraîcheur). Le personnel y est vraiment adorable.",
      date: "Janvier 2025",
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
