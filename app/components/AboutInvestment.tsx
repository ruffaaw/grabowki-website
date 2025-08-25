"use client";
import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/animations";

export default function AboutInvestment() {
  return (
    <section
      id="o-inwestycji"
      className="flex flex-col  py-16 bg-transparent bg-gradient-to-b from-[#D5EBF9] to-white scroll-mt-14 md:drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
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
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-x-8 md:px-12 ">
          <div className="flex-1 flex flex-col space-y-5 max-md:px-6 ">
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-[40px] md:text-[40px] font-semibold bg-gradient-to-r from-[#24425c] to-[#4d7a9d] bg-clip-text text-transparent w-fit"
            >
              GRABÓWKI TWÓJ NOWY LEPSZY ADRES
            </motion.h2>
            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-xl lg:text-2xl font-medium text-left space-y-2.5 leading-relaxed text-[#1A2F42]"
            >
              <p>
                Nasze osiedle to miejsce, w którym codzienność staje się
                prostsza, a powroty do domu zawsze bezpieczne i pełne spokoju.
              </p>
              <p>
                Starannie zaprojektowana przestrzeń łączy w sobie wygodę,
                prywatność i estetykę, tworząc otoczenie sprzyjające
                odpoczynkowi i budowaniu sąsiedzkich relacji.
              </p>
              <p>
                Każdy detal został przemyślany z myślą o mieszkańcach – od
                infrastruktury po małą architekturę, tak aby każdy dzień tutaj
                był komfortowy i harmonijny.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative aspect-[4/3] w-full md:max-w-[450px] lg:max-w-[600px] xl:max-w-[700px] 2xl:max-w-[800px]"
          >
            <Image
              src="/image4.png"
              alt="Zdjęcie inwestycji"
              fill
              className="object-cover drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
              priority={false}
              unoptimized
            />
          </motion.div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between md:space-x-8 md:px-12">
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative aspect-[4/3] w-full md:max-w-[450px] lg:max-w-[600px] xl:max-w-[700px] 2xl:max-w-[800px] max-md:mt-8"
          >
            <Image
              src="/image3.png"
              alt="Zdjęcie inwestycji"
              fill
              className="object-cover drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
              priority={false}
              unoptimized
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
            <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-xl lg:text-2xl font-medium text-[#1A2F42] text-left space-y-6 leading-relaxed"
            >
              <p>
                Inwestycja powstała z myślą o tym, aby codzienne życie było
                wygodne, zdrowe i pełne naturalnego światła.
              </p>
              <p>
                Każde mieszkanie to przestrzeń, która sprzyja odpoczynkowi –
                zarówno wewnątrz, jak i w otoczeniu zieleni na świeżym
                powietrzu.
              </p>
              <p>
                Stworzyliśmy miejsce, które pozwala łączyć prywatność domowego
                azylu z komfortem życia w nowoczesnym osiedlu.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between max-md:space-y-8 md:space-x-8 md:px-12">
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
            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-xl lg:text-2xl font-medium text-[#1A2F42] text-left space-y-6 leading-relaxed"
            >
              <p>
                Okolica to prawdziwa oaza spokoju – pełna zieleni i świeżego
                powietrza.
              </p>
              <p>
                To idealne miejsce, aby na chwilę zwolnić tempo i cieszyć się
                codziennymi chwilami w otoczeniu natury.
              </p>
              <p>
                Malownicze tereny zachęcają zarówno do relaksu, jak i aktywnego
                trybu życia, tworząc przestrzeń, w której każdy znajdzie coś dla
                siebie.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative aspect-[4/3] w-full md:max-w-[450px] lg:max-w-[600px] xl:max-w-[700px] 2xl:max-w-[800px]"
          >
            <Image
              src="/image2.png"
              alt="Zdjęcie inwestycji"
              fill
              className="object-cover drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
              priority={false}
              unoptimized
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
            className="bg-[var(--themeBlueDark)] text-white text-2xl md:text-3xl lg:text-[32px] px-8 md:px-24 py-3 font-semibold hover:bg-[var(--themeBlueLight)] hover:scale-110 transition drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] flex items-center gap-4 w-fit"
          >
            <FaEnvelope className="text-3xl" />
            Skontaktuj się z&nbsp;nami
          </a>
        </motion.div>
      </div>
    </section>
  );
}
