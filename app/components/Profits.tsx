"use client";
import { useState } from "react";
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

  const bind = useDrag(({ movement: [, my], last }) => {
    if (Math.abs(my) > 50 && last) {
      if (my > 0) {
        setCurrentIndex((prev) => (prev - 1 + icons.length) % icons.length);
      } else {
        setCurrentIndex((prev) => (prev + 1) % icons.length);
      }
    }
  });

  const getIconAt = (offset: number) => {
    const index = (currentIndex + offset + icons.length) % icons.length;
    return icons[index];
  };

  return (
    <section
      id="profity"
      className="flex flex-col pr-12 py-24 bg-transparent bg-linear-to-b to-[#D5EBF9] from-[#E8E8E8] border-t-[1px] border-[#182B3C]"
    >
      <div className="flex flex-row items-center gap-12">
        <div
          {...bind()}
          className="flex flex-col items-start cursor-grab select-none active:cursor-grabbing"
          style={{ touchAction: "none" }}
        >
          {[-2, -1, 0, 1, 2].map((offset, i) => {
            const { Icon } = getIconAt(offset);
            const sizeClass = clsx(
              offset === -2 &&
                "bg-transparent bg-gradient-to-b from-[#649BC7] to-[#314C61] p-5 flex items-center justify-center w-24 h-24 -mb-10 z-0",
              offset === -1 &&
                "bg-transparent bg-gradient-to-b from-[#649BC7] to-[#314C61] p-5 flex items-center justify-center w-40 h-40 -mb-8 z-10",
              offset === 0 &&
                "bg-transparent bg-gradient-to-r from-[#5F93BD] to-[#000000] to-15% p-5 flex items-center justify-center w-48 h-40 z-20",
              offset === 1 &&
                "bg-transparent bg-gradient-to-b to-[#649BC7] from-[#314C61] p-5 flex items-center justify-center w-40 h-40 -mt-8 z-10",
              offset === 2 &&
                "bg-transparent bg-gradient-to-b to-[#649BC7] from-[#314C61] p-5 flex items-center justify-center w-24 h-24 -mt-10 z-0"
            );

            return (
              <div
                key={offset}
                className={`p-5 flex items-center justify-center ${sizeClass}`}
              >
                <Icon className="text-white w-full h-full" />
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full">
          <h2 className="text-6xl font-semibold bg-gradient-to-r from-[#182B3C] to-[#4174A2] bg-clip-text text-transparent w-fit">
            {getIconAt(0).label}
          </h2>
          <p className="text-3xl font-medium text-[#182B3C] border-b-4 border-r-4 border-[#649BC7] py-6 pr-4">
            {getIconAt(0).description}
          </p>
        </div>
      </div>
    </section>
  );
}
