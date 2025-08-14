import Container from "./Container";

export default function MenuSection() {
  const cards = [
    { title: "Café de spécialité", img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop", points: ["Espresso, Flat White, V60", "Laits végétaux", "Torréfaction locale"] },
    { title: "Brunch & crêpes", img: "https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=1600&auto=format&fit=crop", points: ["Sucré & salé maison", "Options veggie", "Service continu"] },
    { title: "Snacks & thés", img: "https://images.unsplash.com/photo-1541599188778-cdc73298e8f8?q=80&w=1600&auto=format&fit=crop", points: ["Thés, chai latte", "Cookies, banana bread", "Sirops artisanaux"] },
  ];

  return (
    <section id="menu" className="py-16">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Un menu qui aide à rester inspiré</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <article key={i} className="overflow-hidden rounded-[1.75rem] ring-1 ring-black/5 shadow-sm bg-white">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover" loading="lazy"/>
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
