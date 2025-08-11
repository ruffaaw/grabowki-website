"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const galleryImages = [
  { url: "/image2.png", title: "Obraz 2" },
  { url: "/image3.png", title: "Obraz 3" },
  { url: "/image4.png", title: "Obraz 4" },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const visibleImages = [
    galleryImages[
      (currentIndex - 1 + galleryImages.length) % galleryImages.length
    ],
    galleryImages[currentIndex],
    galleryImages[(currentIndex + 1) % galleryImages.length],
  ];

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      nextImage(false);
    }, 10000);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
    startAutoSlide();
  };

  const nextImage = (manual = true) => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    if (manual) startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section
      id="galeria"
      className="flex flex-col pb-24 bg-transparent bg-linear-to-b from-[#24425C] from-[38%] to-[var(--mainBg)] to-[74%] scroll-mt-24 md:scroll-mt-28"
    >
      <div className="flex flex-row items-center gap-5 w-full">
        <div className="w-full md:w-1/5 h-[5px] md:h-[8px] bg-white" />
        <h1 className="text-5xl md:text-8xl font-semibold text-white">
          Galeria
        </h1>
        <div className="w-full md:w-4/5 h-[5px] md:h-[8px] bg-white" />
      </div>
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center gap-4 pt-10">
        <div className="relative w-full h-[30vh] sm:h-[50vh] md:h-[70vh] lg:h-[70vh] xl:h-[80vh] flex items-center justify-center overflow-visible">
          <button
            onClick={prevImage}
            className="absolute left-0 z-20 text-white bg-black/40 hover:bg-white hover:text-black rounded-full w-14 h-14 flex items-center justify-center cursor-pointer"
          >
            <FaChevronLeft size={32} />
          </button>

          <div className="relative flex w-full h-full justify-center items-center gap-4 drop-shadow-[15px_10px_25px_rgba(0,0,0,0.25)]">
            {visibleImages.map((img, i) => {
              const position =
                i === 0
                  ? "-translate-x-1/6 scale-90 z-0"
                  : i === 2
                  ? "translate-x-1/6 scale-90  z-0"
                  : "scale-100 z-10";

              return (
                <motion.div
                  key={img.url}
                  className={`absolute transition-all duration-500 ease-out ${position} rounded-lg aspect-[16/9] w-full `}
                >
                  <Image
                    src={img.url}
                    alt={img.title}
                    fill
                    className="object-contain "
                    unoptimized
                  />
                </motion.div>
              );
            })}
          </div>

          <button
            onClick={() => nextImage()}
            className="absolute right-0 z-10 text-white bg-black/40 hover:bg-white hover:text-black rounded-full w-14 h-14 flex items-center justify-center cursor-pointer"
          >
            <FaChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
