export default function MapEmbed({
    query = "Ras la Tasse, 3 Rue du Puits Vert, 31000 Toulouse, France", // remplace par ton adresse précise
    height = 260,
  }) {
    const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
    return (
      <div className="w-full overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-sm">
        <iframe
          title="Localisation — Google Maps"
          src={src}
          width="100%"
          height={height}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block"
        />
      </div>
    );
  }
  