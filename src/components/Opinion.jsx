import { Star } from "lucide-react";

export default function Opinion({ reviews = [] }) {
  return (
    <section id="opinions" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Ils ont adorés</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 shadow-lg rounded-xl p-6 flex flex-col"
            >
              {/* Nom + étoiles */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">{review.author}</h3>
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Texte */}
              <p className="text-gray-600 flex-1">{review.text}</p>

              {/* Date */}
              <span className="text-sm text-gray-400 mt-4">
                {review.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
