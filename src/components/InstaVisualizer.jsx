import { useEffect, useState } from "react";
import Container from "./Container";
import { Instagram } from "lucide-react";

export default function InstaVisualizer({ username, profileUrl }) {
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
    <section id="insta" className="py-16 bg-gradient-to-b from-white to-[#F6F5F4]">
      <Container>
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Sur Instagram</h2>
            <p className="text-black/70 text-sm">Ambiances & coulisses — suivez {username}</p>
          </div>
          <a href={profileUrl} target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 rounded-xl border border-black/10 px-4 py-2 text-sm hover:bg-black/5">
            <Instagram className="h-4 w-4"/>
            Ouvrir le profil
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {placeholders.map((src, i) => (
            <a key={i} href={profileUrl} target="_blank" rel="noreferrer"
               className="group relative block overflow-hidden rounded-2xl ring-1 ring-black/5">
              <img src={src} alt="Post Instagram"
                   className={`h-36 md:h-44 w-full object-cover transition duration-300 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`} loading="lazy"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition"/>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
