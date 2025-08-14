import TopBar from "../components/TopBar";
import Hero from "../components/Hero";
import WorkSection from "../components/WorkSection";
import MenuSection from "../components/MenuSection";
import InstaVisualizer from "../components/InstaVisualizer";
import ReserveCTA from "../components/ReserveCTA";
import Footer from "../components/Footer";
import BRAND from "../constants/brand";

export default function LandingPage() {
  return (
    <div className="min-h-screen font-[Inter,system-ui] antialiased text-[#1F2937]"
         style={{background: `linear-gradient(180deg, ${BRAND.colors.bg}, #FFFFFF)`}}>
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
