"use client";
import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/animations";

export default function AboutInvestment() {
  return (
    <section
      id="o-inwestycji"
      className="flex flex-col  py-16 bg-transparent bg-gradient-to-b from-[#D5EBF9] to-[#E8E8E8] scroll-mt-14 drop-shadow-[15px_10px_25px_rgba(0,0,0,0.25)]"
    >
      <motion.h1
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-[40px] mb-5 font-medium text-black px-6 md:px-12"
      >
        O INWESTYCJI
      </motion.h1>
      <div className="flex flex-col space-y-16">
        <div className="flex flex-col md:flex-row items-start justify-between space-y-8 md:space-x-8 md:px-12">
          <div className="flex-1 flex flex-col space-y-5 max-md:px-6">
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-[40px] md:text-[40px] font-semibold bg-gradient-to-r from-[#24425c] to-[#4d7a9d] bg-clip-text text-transparent w-fit"
            >
              GRABÓWKI TWÓJ NOWY LEPSZY ADRES
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-2xl md:text-3xl font-semibold text-[#1A2F42] text-left"
            >
              Zamknięta przestrzeń zapewnia mieszkańcom komfort
              i&nbsp;prywatność, a&nbsp;oświetlone drogi wewnętrzne
              i&nbsp;miejsca postojowe gwarantują bezpieczne powroty do domu
              o&nbsp;każdej porze dnia i&nbsp;nocy. Osiedle zaprojektowano
              z&nbsp;myślą o&nbsp;wygodzie codziennego życia – szerokie alejki
              spacerowe, starannie zagospodarowana zieleń i&nbsp;estetyczne
              elementy małej architektury tworzą przyjazną, harmonijną
              przestrzeń.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative aspect-[4/3] flex-1 w-full md:max-w-[550px] max-h-[450px]"
          >
            <Image
              src="/image4.png"
              alt="Zdjęcie inwestycji"
              fill
              className="object-cover drop-shadow-[15px_10px_25px_rgba(0,0,0,0.25)]"
              priority={false}
            />
          </motion.div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-start justify-between md:space-x-8 md:px-12">
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative aspect-[4/3] flex-1 w-full md:max-w-[550px] max-h-[450px] max-md:mt-8"
          >
            <Image
              src="/image3.png"
              alt="Zdjęcie inwestycji"
              fill
              className="object-cover drop-shadow-[15px_10px_25px_rgba(0,0,0,0.25)]"
              priority={false}
            />
          </motion.div>
          <div className="flex-1 flex flex-col space-y-5 max-md:px-6">
            <motion.h2
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-[40px] md:text-[48px] font-semibold bg-gradient-to-r from-[#24425c] to-[#4d7a9d] bg-clip-text text-transparent w-fit"
            >
              NOWE TECHNOLOGIE <br />
              I&nbsp;EKOLOGICZNE ROZWIĄZANIA
            </motion.h2>
            <motion.p
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-2xl md:text-3xl font-semibold text-[#1A2F42] text-left"
            >
              Inwestycja została zaprojektowana z&nbsp;myślą o&nbsp;komforcie
              i&nbsp;zdrowiu mieszkańców. Każde mieszkanie oferuje dobrze
              doświetlone wnętrza oraz przestrzeń do relaksu – zarówno wewnątrz,
              jak i&nbsp;na zewnątrz. Przydomowe ogródki pozwalają cieszyć się
              własnym zielonym zakątkiem, idealnym do odpoczynku.
            </motion.p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between max-md:space-y-8 md:space-x-8 md:px-12">
          <div className="flex-1 flex flex-col space-y-5 max-md:px-6">
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-[40px] md:text-[48px] font-semibold bg-gradient-to-r from-[#24425c] to-[#4d7a9d] bg-clip-text text-transparent w-fit"
            >
              IDEALNE MIEJSCE DLA CIEBIE{" "}
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-2xl md:text-3xl font-semibold text-[#1A2F42] text-left"
            >
              Znajdziesz tu malownicze tereny zielone, idealne na codzienne
              spacery, jogging czy rodzinne pikniki na świeżym powietrzu.
              Okolica sprzyja rekreacji i&nbsp;aktywnemu trybowi życia, oferując
              liczne ścieżki spacerowe, rowerowe oraz kameralne parki pełne
              zieleni i&nbsp;spokoju. To miejsce, w&nbsp;którym można na chwilę
              zwolnić tempo i&nbsp;odpocząć od miejskiego zgiełku, ciesząc się
              bliskością natury i&nbsp;świeżym powietrzem.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative aspect-[4/3] flex-1 w-full md:max-w-[550px] max-h-[450px] "
          >
            <Image
              src="/image2.png"
              alt="Zdjęcie inwestycji"
              fill
              className="object-cover drop-shadow-[15px_10px_25px_rgba(0,0,0,0.25)]"
              priority={false}
            />
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-start space-y-7 px-6 md:px-12"
        >
          <h2 className="text-[40px] md:text-[48px] font-semibold text-[var(--themeBlueDark)] w-fit">
            Twój nowy dom na osiedlu Grabówki – połączenie spokoju
            i&nbsp;nowoczesnego komfortu na wyciągnięcie ręki.
          </h2>
          <a
            href="#kontakt"
            className="bg-[var(--themeBlueDark)] text-white text-2xl md:text-3xl lg:text-[32px] px-8 md:px-24 py-3 font-semibold hover:bg-[var(--themeBlueLight)] hover:scale-110 transition drop-shadow-[10px_15px_25px_rgba(0,0,0,0.25)] flex items-center gap-4 w-fit"
          >
            <FaEnvelope className="text-3xl" />
            Skontaktuj się z&nbsp;nami
          </a>
        </motion.div>
      </div>
    </section>
  );
}
