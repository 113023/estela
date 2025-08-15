import BRAND from "../constants/brand";
import Container from "./Container";
import MobileMenu from "./MobileMenu";

export default function TopBar() {
  return (
    <div className="sticky top-0 z-50">
      <div className="w-full bg-white/70 backdrop-blur border-b border-black/5">
        <Container>
          <div className="h-12 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-[#CDECE3] via-white to-[#E9D5FA] grid place-items-center shadow-sm overflow-hidden">
                <img
                  src="/logo.jpg"
                  alt={BRAND.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-semibold tracking-tight">{BRAND.name}</span>
            </a>
            <div className="hidden md:flex items-center gap-7 text-sm">
              <a href="#work" className="opacity-80 hover:opacity-100">Travailler</a>
              <a href="#opinions" className="opacity-80 hover:opacity-100">Avis</a>
              <a href="#insta" className="opacity-80 hover:opacity-100">Instagram</a>
              <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>
              <a href="#menu" className="inline-flex items-center rounded-xl px-4 py-2 bg-black text-white hover:opacity-90">Menu</a>
            </div>
            <MobileMenu />
          </div>
        </Container>
      </div>
    </div>
  );
}
