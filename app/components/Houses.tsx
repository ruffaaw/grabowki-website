"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  FaArrowDown,
  FaArrowUp,
  FaBed,
  FaDollarSign,
  FaFile,
  FaLeaf,
} from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { mieszkania } from "../data/apartmentsData";
import { useSwipeable } from "react-swipeable";
import { fadeIn } from "../animations/animations";

export default function Houses() {
  const [currentId, setCurrentId] = useState(1);

  const current = mieszkania[currentId];
  const previous =
    mieszkania[(currentId - 1 + mieszkania.length) % mieszkania.length] || null;
  const next =
    mieszkania[(currentId + 1 + mieszkania.length) % mieszkania.length] || null;

  const getStatusText = (status: number) => {
    switch (status) {
      case 0:
        return "Sprzedany";
      case 1:
        return "Dostępny";
      case 2:
        return "Zarezerwowany";
      default:
        return "Nieznany";
    }
  };

  const getNumberApartments = (apartment: string) => {
    return apartment.replace("Mieszkanie ", "");
  };

  const handlers = useSwipeable({
    onSwipedUp: () => {
      if (next) setCurrentId(next.id);
    },
    onSwipedDown: () => {
      if (previous) setCurrentId(previous.id);
    },
    preventScrollOnSwipe: true,
    trackTouch: true,
  });

  return (
    <section
      id="domy"
      className="flex flex-col pb-24 bg-transparent bg-linear-to-b from-[var(--mainBg)] via-[#ffffff] via-50% to-[#24425C] scroll-mt-24 md:scroll-mt-28"
    >
      <div className="flex flex-row items-center gap-5 w-full mb-5">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-2/3 h-[5px] md:h-[8px] bg-[#182B3C] origin-right"
        />
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-5xl md:text-8xl font-semibold text-[#182B3C]"
        >
          LOKALE
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/5 h-[5px] md:h-[8px] bg-[#182B3C] origin-left"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full lg:gap-8">
        <div className="w-full h-full">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative aspect-[4/3] lg:aspect-[16/9] flex-1 w-full"
          >
            <Image
              src="/dronD.png"
              alt="Zdjęcie inwestycji"
              fill
              className="hidden lg:flex object-cover"
              priority={false}
              unoptimized
              quality={100}
            />
            <Image
              src="/dronM.png"
              alt="Zdjęcie inwestycji"
              fill
              className="flex lg:hidden object-cover"
              priority={false}
              unoptimized
              quality={100}
            />

            {mieszkania.map((mieszkanie) => (
              <motion.button
                key={mieszkanie.id}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, ease: "easeOut" }}
                whileHover={{ zIndex: 20 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`hidden lg:flex absolute ${
                  mieszkanie.id === currentId
                    ? "bg-[var(--themeBlueDark)] text-white drop-shadow-[10px_15px_25px_rgba(0,0,0,0.25)]"
                    : mieszkanie.status === 0
                    ? "bg-red-500"
                    : mieszkanie.status === 1
                    ? "bg-green-500"
                    : "bg-yellow-500"
                } ${
                  mieszkanie.id === currentId
                    ? "w-6 h-6 md:w-7 md:h-7 xl:w-8 xl:h-8 z-20 text-base md:text-xl"
                    : "w-4 h-4 md:w-5 md:h-5 md:hover:w-7 md:hover:h-7 xl:w-6 xl:h-6 xl:hover:w-8 xl:hover:h-8 md:hover:text-xl text-xs md:text-base "
                } text-black rounded-full flex items-center justify-center font-bold cursor-pointer transition-all z-10`}
                style={{
                  left: `${mieszkanie.xD}%`,
                  top: `${mieszkanie.yD}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onClick={() => setCurrentId(mieszkanie.id)}
              >
                {getNumberApartments(mieszkanie.nazwa)}
              </motion.button>
            ))}

            {mieszkania.map((mieszkanie) => (
              <motion.button
                key={mieszkanie.id}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, ease: "easeOut" }}
                whileHover={{ zIndex: 20 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`flex lg:hidden absolute ${
                  mieszkanie.id === currentId
                    ? "bg-[var(--themeBlueDark)] text-white drop-shadow-[10px_15px_25px_rgba(0,0,0,0.25)]"
                    : mieszkanie.status === 0
                    ? "bg-red-500"
                    : mieszkanie.status === 1
                    ? "bg-green-500"
                    : "bg-yellow-500"
                } ${
                  mieszkanie.id === currentId
                    ? "w-6 h-6 md:w-7 md:h-7 xl:w-8 xl:h-8 z-20 text-base md:text-xl"
                    : "w-4 h-4 hover:w-6 hover:h-6 hover:text-base md:w-5 md:h-5 md:hover:w-7 md:hover:h-7 md:hover:text-xl xl:w-6 xl:h-6 text-xs md:text-base"
                } text-black rounded-full flex items-center justify-center font-bold cursor-pointer transition-all z-10`}
                style={{
                  left: `${mieszkanie.xM}%`,
                  top: `${mieszkanie.yM}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onClick={() => setCurrentId(mieszkanie.id)}
              >
                {getNumberApartments(mieszkanie.nazwa)}
              </motion.button>
            ))}
          </motion.div>
        </div>
        <div
          {...handlers}
          className="flex flex-col w-full lg:w-2/5 touch-pan-y"
        >
          <div className="max-lg:hidden flex items-center justify-center w-full pb-2">
            <motion.button
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="p-3 bg-[var(--themeBlueDark)] hover:bg-[var(--themeBlueLight)] rounded-full text-white shadow-md cursor-pointer w-fit drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
              onClick={() => previous && setCurrentId(previous.id)}
            >
              <FaArrowUp />
            </motion.button>
          </div>

          {previous && (
            <motion.div
              variants={fadeIn("left", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-row w-[90%] md:w-[97%] bg-transparent bg-linear-to-t to-[#999999] from-[80%] from-[#FFFFFF] py-1 md:py-3 justify-between items-center px-8 space-x-56 z-10 max-md:-mt-12 max-lg:-mt-20 cursor-pointer"
              onClick={() => previous && setCurrentId(previous.id)}
            >
              <p className="text-3xl md:text-5xl font-semibold text-[#182B3C] text-center">
                {previous.nazwa}
              </p>
            </motion.div>
          )}

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-row w-full bg-white py-3 md:py-5 md:justify-between items-center pl-8 pr-8  z-20 drop-shadow-[10px_15px_25px_rgba(0,0,0,0.25)]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-1 md:space-y-4 flex flex-col items-center"
              >
                <p className="text-3xl md:text-5xl font-semibold text-[#182B3C] text-center">
                  {current.nazwa}
                </p>
                <p className="text-2xl md:text-4xl font-semibold text-[#182B3C] text-center">
                  Status:{" "}
                  <span className="text-[var(--themeBlueLight)]">
                    {getStatusText(current.status)}
                  </span>
                </p>
                <div className="flex flex-col items-start">
                  <p className="text-xl md:text-[32px] font-semibold text-[#182B3C] flex items-center gap-3">
                    <FaDollarSign />
                    Cena: {current.cena}
                  </p>
                  <p className="text-xl md:text-[32px] font-semibold text-[#182B3C] flex items-center gap-3 ">
                    <FaHouse />
                    Metraż: {current.metraz}
                  </p>
                  <p className="text-xl md:text-[32px] font-semibold text-[#182B3C] flex items-center gap-3 ">
                    <FaBed />
                    Pokoje: {current.pokoje}
                  </p>
                  <p className="text-xl md:text-[32px] font-semibold text-[#182B3C] flex items-center gap-3 ">
                    <FaLeaf />
                    Ogródek: {current.ogrodek}
                  </p>
                </div>
                <a
                  href={`/Rzuty/${current.nazwa.split(" ")[1]}.jpg`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-[100px] py-2 lg:py-3 bg-[var(--themeBlueDark)] hover:bg-[var(--themeBlueLight)] hover:scale-110 text-white text-2xl md:text-4xl font-semibold w-fit rounded-[5px]"
                >
                  <FaFile />
                  Szczegóły
                </a>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {next && (
            <motion.div
              variants={fadeIn("left", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-row w-[90%] md:w-[97%] bg-transparent bg-linear-to-b to-[#999999] from-[80%] from-[#FFFFFF] py-1 md:py-3 justify-between items-center px-8 space-x-56 z-10 cursor-pointer"
              onClick={() => next && setCurrentId(next.id)}
            >
              <p className="text-3xl md:text-5xl font-semibold text-[#182B3C] text-center">
                {next.nazwa}
              </p>
            </motion.div>
          )}

          <div className="max-lg:hidden flex items-center justify-center w-full pt-2">
            <motion.button
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="p-3 bg-[var(--themeBlueDark)] hover:bg-[var(--themeBlueLight)] rounded-full text-white shadow-md cursor-pointer w-fit drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
              onClick={() => next && setCurrentId(next.id)}
            >
              <FaArrowDown />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
