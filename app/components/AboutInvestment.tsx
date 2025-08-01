import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";

export default function AboutInvestment() {
  return (
    <section
      id="o-inwestycji"
      className="flex flex-col px-12 py-16 bg-transparent bg-gradient-to-b from-[#D5EBF9] to-[#E8E8E8]"
    >
      <h1 className="text-[40px] mb-5 font-medium text-black">O INWESTYCJI</h1>
      <div className="flex flex-col space-y-16">
        <div className="flex flex-row items-start justify-between space-x-8">
          <div className="flex-1 flex flex-col space-y-5">
            <h2 className="text-[48px] font-semibold bg-gradient-to-r from-[#24425c] to-[#4d7a9d] bg-clip-text text-transparent w-fit">
              GRABÓWKI TWÓJ NOWY LEPSZY ADRES
            </h2>
            <p className="text-3xl font-semibold text-[#1A2F42] text-left">
              Zamknięta przestrzeń zapewnia mieszkańcom komfort
              i&nbsp;prywatność, a&nbsp;oświetlone drogi wewnętrzne
              i&nbsp;miejsca postojowe gwarantują bezpieczne powroty do domu
              o&nbsp;każdej porze dnia i&nbsp;nocy. Osiedle zaprojektowano
              z&nbsp;myślą o&nbsp;wygodzie codziennego życia – szerokie alejki
              spacerowe, starannie zagospodarowana zieleń i&nbsp;estetyczne
              elementy małej architektury tworzą przyjazną, harmonijną
              przestrzeń.
            </p>
          </div>

          <div className="relative aspect-[4/3] flex-1 max-w-[550px] max-h-[450px] ">
            <Image
              src="/image4.png"
              alt="Zdjęcie inwestycji"
              fill
              className="object-cover drop-shadow-[15px_10px_25px_rgba(0,0,0,0.25)]"
              priority={false}
            />
          </div>
        </div>

        <div className="flex flex-row items-start justify-between space-x-8">
          <div className="relative aspect-[4/3] flex-1 max-w-[550px] max-h-[450px] ">
            <Image
              src="/image3.png"
              alt="Zdjęcie inwestycji"
              fill
              className="object-cover drop-shadow-[15px_10px_25px_rgba(0,0,0,0.25)]"
              priority={false}
            />
          </div>
          <div className="flex-1 flex flex-col space-y-5">
            <h2 className="text-[48px] font-semibold bg-gradient-to-r from-[#24425c] to-[#4d7a9d] bg-clip-text text-transparent w-fit">
              NOWE TECHNOLOGIE <br />
              I&nbsp;EKOLOGICZNE ROZWIĄZANIA
            </h2>
            <p className="text-3xl font-semibold text-[#1A2F42] text-left">
              Inwestycja została zaprojektowana z&nbsp;myślą o&nbsp;komforcie
              i&nbsp;zdrowiu mieszkańców. Każde mieszkanie oferuje dobrze
              doświetlone wnętrza oraz przestrzeń do relaksu – zarówno wewnątrz,
              jak i&nbsp;na zewnątrz. Przydomowe ogródki pozwalają cieszyć się
              własnym zielonym zakątkiem, idealnym do odpoczynku .
            </p>
          </div>
        </div>

        <div className="flex flex-row items-start justify-between space-x-8">
          <div className="flex-1 flex flex-col space-y-5">
            <h2 className="text-[48px] font-semibold bg-gradient-to-r from-[#24425c] to-[#4d7a9d] bg-clip-text text-transparent w-fit">
              IDEALNE MIEJSCE DLA CIEBIE{" "}
            </h2>
            <p className="text-3xl font-semibold text-[#1A2F42] text-left">
              Znajdziesz tu malownicze tereny zielone, idealne na codzienne
              spacery, jogging czy rodzinne pikniki na świeżym powietrzu.
              Okolica sprzyja rekreacji i&nbsp;aktywnemu trybowi życia, oferując
              liczne ścieżki spacerowe, rowerowe oraz kameralne parki pełne
              zieleni i&nbsp;spokoju. To miejsce, w&nbsp;którym można na chwilę
              zwolnić tempo i&nbsp;odpocząć od miejskiego zgiełku, ciesząc się
              bliskością natury i&nbsp;świeżym powietrzem.
            </p>
          </div>

          <div className="relative aspect-[4/3] flex-1 max-w-[550px] max-h-[450px] ">
            <Image
              src="/image2.png"
              alt="Zdjęcie inwestycji"
              fill
              className="object-cover drop-shadow-[15px_10px_25px_rgba(0,0,0,0.25)]"
              priority={false}
            />
          </div>
        </div>
        <div className="flex flex-col items-start space-y-7">
          <h2 className="text-[48px] font-semibold text-[var(--themeBlueDark)] w-fit">
            Twój nowy dom na osiedlu Grabówki – połączenie spokoju
            i&nbsp;nowoczesnego komfortu na wyciągnięcie ręki.
          </h2>
          <a
            href="#kontakt"
            className="bg-[var(--themeBlueDark)] text-white text-[32px] px-24 py-3 font-semibold hover:bg-gray-200 transition drop-shadow-[10px_15px_25px_rgba(0,0,0,0.25)] flex items-center gap-4 w-fit"
          >
            <FaEnvelope />
            Skontaktuj się z nami
          </a>
        </div>
      </div>
    </section>
  );
}
