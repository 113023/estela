import Container from "./Container";

export default function MenuSection() {
  const cards = [
    {
      title: "Massage visage",
      img: "visage.jpg",
      points: [
        "L’Alba — profond, détente des muscles & acupressions",
        "Müse — drainage, modelage, réflexologie faciale",
        "Le Lumineux — découverte & douceur",
      ],
    },
    {
      title: "Épilation au fil",
      img: "epilation.webp",
      points: [
        "Sourcils (ligne précise)",
        "Lèvre supérieure",
        "Méthode écologique, repousse plus lente",
      ],
    },
    {
      title: "Massage corps & Drainage",
      img: "corps.webp",
      points: [
        "Leïlanï — pochons chauds aromatiques",
        "Moäna — drainant doux (corps & visage)",
        "Shirotchampi — crânien apaisant",
      ],
    },
    {
      title: "Regard (cils & sourcils)",
      img: "cil.webp",
      points: [
        "Lashlift + coloration (avec ou sans soin vitamines)",
        "Browlift (épilation au fil incluse)",
        "Coloration cils",
      ],
    },
  ];

  return (
    <section id="menu" className="py-16">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Prestations</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <article key={i} className="overflow-hidden rounded-[1.75rem] ring-1 ring-black/5 shadow-sm bg-white">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover" loading="lazy" />
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
