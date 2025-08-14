import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center p-2 rounded-xl border border-black/10"
        aria-label="Ouvrir le menu"
      >
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
