"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../animations/animations";

export default function HomeSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!imageLoaded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [imageLoaded]);

  return (
    <>
      <AnimatePresence>
        {!imageLoaded && (
          <div className="fixed inset-0 flex items-center justify-center bg-[var(--themeBlueDark)] z-50 origin-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {imageLoaded && (
          <>
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="fixed top-0 left-0 h-full w-1/2 bg-[var(--themeBlueLight)] z-40 origin-left"
            />
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="fixed top-0 right-0 h-full w-1/2 bg-[var(--themeBlueLight)] z-40 origin-right"
            />
          </>
        )}
      </AnimatePresence>

      <section id="home" className="relative h-screen w-full">
        <Image
          src="/background_image.png"
          alt="Zdjęcie w tle"
          fill
          quality={100}
          priority
          className="object-cover object-center"
          unoptimized
          onLoad={() => {
            setTimeout(() => setImageLoaded(true), 500);
          }}
        />
        {imageLoaded && (
          <motion.div
            variants={fadeIn("right", 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative z-10 flex flex-col items-center md:items-start justify-end h-full text-start px-12 py-10"
          >
            <h1 className="max-md:hidden text-white text-8xl lg:text-9xl font-normal drop-shadow-[10px_15px_25px_rgba(0,0,0,0.25)]">
              OSIEDLE
            </h1>
            <h1 className="max-md:hidden text-white text-[160px] lg:text-[250px] xl:text-[300px] font-normal drop-shadow-[10px_15px_25px_rgba(0,0,0,0.25)] -my-12 lg:-mt-16 lg:-mb-18 xl:-mt-24 xl:-mb-24">
              GRABÓWKI
            </h1>
            <a
              href="#domy"
              className="bg-[var(--themeBlueDark)] text-white text-3xl md:text-4xl lg:text-[40px] px-10 py-3 hover:bg-[var(--themeBlueLight)] hover:scale-110 transition drop-shadow-[10px_15px_25px_rgba(0,0,0,0.25)] text-center "
            >
              Zobacz ofertę
            </a>
          </motion.div>
        )}
      </section>
    </>
  );
}
