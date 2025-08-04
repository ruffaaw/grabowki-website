"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaBed, FaDollarSign, FaFile, FaLeaf } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { mieszkania } from "../data/apartmentsData";

export default function Houses() {
  const [currentId, setCurrentId] = useState(1);

  const current = mieszkania[currentId];
  const previous =
    mieszkania[(currentId - 1 + mieszkania.length) % mieszkania.length] || null;
  const next = mieszkania[currentId + 1] || null;

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

  return (
    <section
      id="domy"
      className="flex flex-col pb-24 bg-transparent bg-linear-to-b from-[var(--mainBg)] via-[#ffffff] via-50% to-[#24425C] scroll-mt-32"
    >
      <div className="flex flex-row items-center gap-5 w-full">
        <div className="w-full md:w-2/3 h-[8px] bg-[#182B3C]" />
        <h1 className="text-8xl font-semibold text-[#182B3C]">LOKALE</h1>
        <div className="w-full md:w-1/5 h-[8px] bg-[#182B3C]" />
      </div>
      <div className="md:pl-9 mt-10">
        <div className="relative aspect-[16/9] flex-1 w-full h-screen">
          <Image
            src="/dron111.png"
            alt="Zdjęcie inwestycji"
            fill
            className="object-cover "
            priority={false}
            unoptimized
          />
          {/* <button
            className="absolute top-[20%] left-[30%] w-10 h-10 rounded-full bg-[var(--themeBlueDark)] opacity-60 hover:opacity-100 transition-all"
            onClick={() => setCurrentId(0)}
            title="Mieszkanie 1a"
          /> */}

          {mieszkania.map((mieszkanie) => (
            <button
              key={mieszkanie.id}
              className={`absolute ${
                mieszkanie.status === 0
                  ? "bg-red-500"
                  : mieszkanie.status === 1
                  ? "bg-green-500"
                  : "bg-yellow-500"
              } text-black bg-opacity-75 hover:bg-opacity-100 rounded-full w-4 h-4 md:w-5 md:h-5 xl:w-7 xl:h-7 flex items-center justify-center font-bold text-xs md:text-base cursor-pointer transition-all z-10`}
              style={{
                left: `${mieszkanie.x}%`,
                top: `${mieszkanie.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              onClick={() => setCurrentId(mieszkanie.id)}
            >
              {getNumberApartments(mieszkanie.nazwa)}
            </button>
          ))}
        </div>
      </div>

      {previous && (
        <div className="flex flex-row w-[90%] md:w-[97%] bg-transparent bg-linear-to-t to-[#999999] from-[80%] from-[#FFFFFF] py-5 justify-between items-center px-8 md:px-40 space-x-56 z-10 -mt-28">
          <p className="text-5xl font-semibold text-[#182B3C] text-center">
            {previous.nazwa}
          </p>
        </div>
      )}

      <div className="flex flex-row w-full bg-white py-5 md:justify-between items-center md:px-40 space-x-56 z-20 drop-shadow-[10px_15px_25px_rgba(0,0,0,0.25)]">
        <motion.div
          key={currentId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="space-y-1 md:space-y-4 "
        >
          <p className="text-5xl font-semibold text-[#182B3C] text-center">
            {current.nazwa}
          </p>
          <p className="text-4xl font-semibold text-[#182B3C] text-center">
            Status:{" "}
            <span className="text-[var(--themeBlueLight)]">
              {getStatusText(current.status)}
            </span>
          </p>
          <div className="flex flex-col items-start pl-12">
            <p className="text-[32px] font-semibold text-[#182B3C] flex items-center gap-3">
              <FaDollarSign />
              Cena: {current.cena}
            </p>
            <p className="text-[32px] font-semibold text-[#182B3C] flex items-center gap-3 ">
              <FaHouse />
              Metraż: {current.metraz}
            </p>
            <p className="text-[32px] font-semibold text-[#182B3C] flex items-center gap-3 ">
              <FaBed />
              Pokoje: {current.pokoje}
            </p>
            <p className="text-[32px] font-semibold text-[#182B3C] flex items-center gap-3 ">
              <FaLeaf />
              Ogródek: {current.ogrodek}
            </p>
          </div>
          <a
            href={"/Rzuty/1a.jpg"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-[100px] py-3 bg-[var(--themeBlueDark)] text-white text-4xl font-semibold w-fit rounded-[5px]"
          >
            <FaFile />
            Szczegóły
          </a>
        </motion.div>
        {/* <div className="max-lg:hidden relative w-full p-5 flex items-center justify-center">
          <div className="absolute top-0 left-0 h-[60%] w-[30%] border-t-[3px] border-l-[3px] border-[var(--themeBlueDark)] pointer-events-none" />

          <div className="absolute bottom-0 right-0 h-[60%] w-[30%] border-b-[3px] border-r-[3px] border-[var(--themeBlueDark)] pointer-events-none" />

          <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-2 bg-white font-semibold text-5xl text-black">
            {current.id % 2 ? "piętro" : "parter"}
          </div>

          <div className="flex flex-col items-center aspect-[16/9] border-[3px] border-transparent my-7">
            <div className="relative aspect-[16/9] flex-1 max-w-[400px] h-[236px]">
              <Image
                src="/visualization.png"
                alt="Zdjęcie inwestycji"
                fill
                className="object-contain"
                priority={false}
                unoptimized
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-3 mt-4">
              <div className="w-3.5 h-3.5 rounded-full bg-[var(--themeBlueDark)]" />
              <div className="w-3.5 h-3.5 rounded-full bg-[var(--themeBlueLight)]" />
            </div>
          </div>
        </div> */}
      </div>
      {next && (
        <div className="flex flex-row w-[90%] md:w-[97%] bg-transparent bg-linear-to-t to-[#999999] from-[80%] from-[#FFFFFF] py-5 justify-between items-center px-8 md:px-40 space-x-56 z-10">
          <p className="text-5xl font-semibold text-[#182B3C] text-center">
            {next.nazwa}
          </p>
        </div>
      )}
    </section>
  );
}
