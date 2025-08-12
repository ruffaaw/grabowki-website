"use client";
import { useEffect, useState } from "react";
import { useDrag } from "@use-gesture/react";
import clsx from "clsx";
import { FaBriefcase, FaBus, FaLeaf, FaRoad } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";

const icons = [
  {
    Icon: FaShop,
    label: "Sklepy w pobliżu",
    description: (
      <span>
        {" "}
        W najbliższym otoczeniu osiedla znajduje się wiele sklepów spożywczych,
        punktów usługowych i&nbsp;lokali gastronomicznych, co umożliwia szybkie
        i&nbsp;wygodne załatwienie codziennych spraw. Dostępność aptek, piekarni
        i&nbsp;supermarketów sprawia, że mieszkańcy nie muszą tracić czasu na
        dojazdy, a&nbsp;większość potrzeb można zrealizować w&nbsp;zasięgu kilku
        minut spacerem.
      </span>
    ),
  },
  {
    Icon: FaRoad,
    label: "Dobre drogi",
    description: (
      <span>
        {" "}
        Osiedle położone jest w&nbsp;bliskim sąsiedztwie głównych arterii
        komunikacyjnych, co zapewnia szybki wyjazd w&nbsp;różnych kierunkach
        miasta. Nowoczesna infrastruktura drogowa oraz rozbudowana sieć ścieżek
        rowerowych umożliwia wygodne poruszanie się nie tylko autem, ale także
        rowerem czy hulajnogą elektryczną.
      </span>
    ),
  },
  {
    Icon: FaBus,
    label: "Szybki dojazd w każde miejsce",
    description: (
      <span>
        Nasze osiedle charakteryzuje się doskonałym skomunikowaniem z&nbsp;całym
        miastem dzięki rozbudowanej sieci transportu publicznego.
        W&nbsp;najbliższej okolicy znajdują się przystanki autobusowe
        i&nbsp;tramwajowe, z&nbsp;których można szybko i&nbsp;wygodnie dostać
        się zarówno do centrum, jak i&nbsp;do innych dzielnic. Regularnie
        kursujące linie pozwalają planować podróże bez stresu i&nbsp;ograniczeń,
        a&nbsp;dobrze skoordynowane rozkłady jazdy minimalizują czas
        oczekiwania.
      </span>
    ),
  },
  {
    Icon: FaLeaf,
    label: "Przestrzeń zielona",
    description: (
      <span>
        Liczne parki, skwery oraz tereny rekreacyjne wokół osiedla sprzyjają
        codziennej aktywności fizycznej i&nbsp;wypoczynkowi. Zielone otoczenie
        pozwala na relaks z&nbsp;rodziną, jogging czy spacery z&nbsp;psem
        w&nbsp;ciszy i&nbsp;z&nbsp;dala od miejskiego zgiełku, co pozytywnie
        wpływa na samopoczucie mieszkańców.
      </span>
    ),
  },
  {
    Icon: FaBriefcase,
    label: "Blisko pracy",
    description: (
      <span>
        {" "}
        Dogodne położenie osiedla w&nbsp;pobliżu parków biznesowych
        i&nbsp;głównych centrów biurowych umożliwia szybki i&nbsp;bezproblemowy
        dojazd do pracy. Oszczędność czasu na codziennych dojazdach przekłada
        się na większy komfort życia oraz więcej czasu dla rodziny i&nbsp;na
        odpoczynek po godzinach.
      </span>
    ),
  },
];

export default function Profits() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);
  const [autoSlideTrigger, setAutoSlideTrigger] = useState(0);

  const handleChangeIndex = (newIndex: number) => {
    setCurrentIndex(newIndex);
    setAutoSlideTrigger((t) => t + 1);
  };

  const bind = useDrag(
    ({ movement: [mx, my], last }) => {
      const move = isMobile ? mx : my;
      if (Math.abs(move) > (isMobile ? 20 : 50) && last) {
        if (move > 0) {
          handleChangeIndex((currentIndex - 1 + icons.length) % icons.length);
        } else {
          handleChangeIndex((currentIndex + 1) % icons.length);
        }
      }
    },
    {
      axis: isMobile ? "x" : "y",
    }
  );

  const getIconAt = (offset: number) => {
    const index = (currentIndex + offset + icons.length) % icons.length;
    return icons[index];
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % icons.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [autoSlideTrigger]);

  return (
    <section
      id="profity"
      className="flex flex-col max-md:px-6 md:pr-12 max-md:pb-24 md:py-24 bg-transparent bg-linear-to-b to-[#D5EBF9] from-[#E8E8E8] md:border-t-[1px] md:border-[#182B3C] scroll-mt-20"
    >
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-md:h-[70vh]">
        <div
          {...bind()}
          className="flex flex-row md:flex-col items-start cursor-grab select-none active:cursor-grabbing"
          style={{ touchAction: "none" }}
        >
          {[-2, -1, 0, 1, 2].map((offset, i) => {
            const { Icon } = getIconAt(offset);
            const sizeClass = clsx(
              offset === -2 &&
                "bg-transparent bg-gradient-to-r md:bg-gradient-to-b from-[#649BC7] to-[#314C61] p-2 md:p-5 flex items-center justify-center w-12 h-12 md:w-24 md:h-24 max-md:-mr-4 md:-mb-10 z-0 md:rounded-r-sm rounded-b-[5px]",
              offset === -1 &&
                "bg-transparent bg-gradient-to-r md:bg-gradient-to-b from-[#649BC7] to-[#314C61] p-3 md:p-5 flex items-center justify-center w-20 h-20 md:w-40 md:h-40 md:-mb-8 z-10 md:rounded-r-sm rounded-b-[5px]",
              offset === 0 &&
                "bg-transparent bg-gradient-to-b md:bg-gradient-to-r from-[#5F93BD] to-[#000000] to-15% p-5 flex items-center justify-center w-28 h-28 md:w-48 md:h-40 z-20 md:rounded-r-sm rounded-b-[5px]",
              offset === 1 &&
                "bg-transparent bg-gradient-to-r md:bg-gradient-to-b to-[#649BC7] from-[#314C61] p-3 md:p-5 flex items-center justify-center w-20 h-20 md:w-40 md:h-40 md:-mt-8 z-10 md:rounded-r-sm rounded-b-[5px]",
              offset === 2 &&
                "bg-transparent bg-gradient-to-r md:bg-gradient-to-b to-[#649BC7] from-[#314C61] p-2 md:p-5 flex items-center justify-center w-12 h-12 md:w-24 md:h-24 max-md:-ml-4 md:-mt-10 z-0 md:rounded-r-sm rounded-b-[5px]"
            );

            return (
              <div
                key={i}
                className={`flex items-center drop-shadow-[15px_10px_25px_rgba(0,0,0,0.25)] justify-center ${sizeClass}`}
                onClick={() => {
                  const newIndex =
                    (currentIndex + offset + icons.length) % icons.length;
                  handleChangeIndex(newIndex);
                }}
              >
                <Icon className="text-white w-full h-full" />
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center justify-start w-full h-full text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-semibold bg-gradient-to-r from-[#182B3C] to-[#4174A2] bg-clip-text text-transparent w-fit">
            {getIconAt(0).label}
          </h2>
          <p className="text-2xl md:text-3xl font-medium text-[#182B3C] md:border-b-4 md:border-r-4 md:border-[#649BC7] py-6 pr-4">
            {getIconAt(0).description}
          </p>
        </div>
      </div>
    </section>
  );
}
