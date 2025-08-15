import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function HeroCarousel({ images = [] }) {
  const slides = images.length
    ? images
    : ["/ras/image1.jpg", "/ras/image2.jpg"];

  return (
    <div className="relative">
      {/* halo déco */}
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[#CDECE3] via-white to-[#E9D5FA] blur-2xl opacity-70" />

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop
        className="rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5 w-full"
      >
        {slides.map((src, i) => (
          <SwiperSlide key={i}>
            {/* wrapper ratio + hauteur max pour ne pas bloquer le scroll */}
            <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/3] w-full max-h-[70vh]">
              <img
                src={src}
                alt={`Hero ${i + 1}`}
                className="w-full h-full object-cover"
                loading="eager"
                onError={(e) => { e.currentTarget.src = 'data:image/svg+xml;charset=UTF-8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22600%22><rect width=%22800%22 height=%22600%22 fill=%22%23eee%22/></svg>'; }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
