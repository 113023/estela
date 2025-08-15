import { useEffect, useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center p-2 rounded-xl border border-black/10"
        aria-label="Ouvrir le menu"
        aria-expanded={open}
      >
        <div className="space-y-1.5">
          <div className="h-0.5 w-6 bg-black" />
          <div className="h-0.5 w-6 bg-black" />
          <div className="h-0.5 w-6 bg-black" />
        </div>
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-0 right-0 top-[56px] sm:top-[64px] px-4">
            <nav className="rounded-2xl border border-black/10 bg-white shadow-xl grid gap-1 p-2 text-sm">
              <a onClick={() => setOpen(false)} href="#work" className="rounded-xl px-3 py-2 hover:bg-black/5">Travailler</a>
              <a onClick={() => setOpen(false)} href="#insta" className="rounded-xl px-3 py-2 hover:bg-black/5">Instagram</a>
              <a onClick={() => setOpen(false)} href="#contact" className="rounded-xl px-3 py-2 hover:bg-black/5">Contact</a>
              <a onClick={() => setOpen(false)} href="#opinions" className="rounded-xl px-3 py-2 hover:bg-black/5">Avis</a>
              <a onClick={() => setOpen(false)} href="#menu" className="rounded-xl px-3 py-2 bg-black text-white">Menu</a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
