import Image from "next/image";
import { FaEnvelope, FaMobile, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  return (
    <section
      id="kontakt"
      className="flex flex-col pb-14 md:pb-24 px-5 md:px-[70px] bg-transparent bg-linear-to-b from-[var(--mainBg)] from-[53%] to-[#ffffff] scroll-mt-32 overflow-hidden "
    >
      <div className="flex flex-col md:flex-row items-start justify-between w-full h-full gap-16 md:gap-20">
        <div className="w-full h-full">
          <h1 className="text-4xl md:text-6xl font-semibold text-[var(--themeBlueDark)] ml-3 md:ml-6">
            kontakt
          </h1>
          <div className="relative flex flex-col items-start pt-6 pl-6 md:pt-12 md:pl-12 w-full">
            <div className="absolute top-0 left-0 w-full md:w-3/5 h-[3px] bg-[var(--themeBlueDark)]" />
            <div className="absolute top-0 left-0 h-10/12 md:h-2/5 w-[3px] bg-[var(--themeBlueDark)]" />
            <div className="flex flex-col space-y-7">
              <h2 className="text-4xl md:text-[40px] text-black font-semibold text-left md:text-center">
                Masz pytania? Chętnie na nie odpowiemy!
              </h2>
              <div className="flex flex-col space-y-7 md:ml-7">
                <div className="space-y-2 w-full">
                  <p className="text-xl font-semibold text-black ml-2">
                    Imię i nazwisko
                  </p>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-white rounded-[5px] text-xl placeholder-[#BFBFBF] text-black focus:outline-none focus:ring-0 focus:border-none"
                    placeholder="Wpisz swoje imię i nazwisko"
                  />
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-7 md:gap-10">
                  <div className="space-y-2 w-full">
                    <p className="text-xl font-semibold text-black ml-2">
                      Adres e-mail
                    </p>
                    <input
                      type="email"
                      className="w-full px-3 py-2 bg-white rounded-[5px] text-xl placeholder-[#BFBFBF] text-black focus:outline-none focus:ring-0 focus:border-none"
                      placeholder="Wpisz swój adres e-mail"
                    />
                  </div>
                  <div className="space-y-2 w-full">
                    <p className="text-xl font-semibold text-black ml-2">
                      Telefon
                    </p>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 bg-white rounded-[5px] text-xl placeholder-[#BFBFBF] text-black focus:outline-none focus:ring-0 focus:border-none"
                      placeholder="Wpisz swój numer telefonu"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xl font-semibold text-black ml-2">
                    Treść wiadomości
                  </p>
                  <textarea
                    className="w-full px-3 py-2 bg-white rounded-[5px] text-xl placeholder-[#BFBFBF] text-black focus:outline-none focus:ring-0 focus:border-none"
                    placeholder="Wpisz treść wiadomości"
                    rows={3}
                  />
                </div>
                <div className="md:ml-5">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="privacyPolicy"
                      className="form-checkbox h-5 w-5 text-black rounded focus:ring-black accent-black bg-white cursor-pointer"
                      //   checked={formData.privacyPolicy}
                      //   onChange={handleChange}
                      required
                    />
                    <span className="ml-2 text-black text-xl font-semibold">
                      Zgadzam się z{" "}
                      <a
                        href="https://www.n20.pl/polityka-prywatnosci"
                        className="text-black hover:text-[var(--themeBlackBlue)] underline"
                      >
                        polityką prywatności
                      </a>
                    </span>
                  </label>
                </div>
                <button className="text-2xl font-semibold text-white bg-[var(--themeBlueDark)] rounded-[5px] py-3 cursor-pointer">
                  Wyślij
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between w-full h-full space-y-7 md:mt-[60px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.7441043963518!2d20.02706173499543!3d49.973908505600825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471642330a83b067%3A0x9e1fd6b5ff755710!2s32-020%20Grab%C3%B3wki!5e1!3m2!1spl!2spl!4v1754216196342!5m2!1spl!2spl"
            width="600"
            height="435"
            style={{ border: 0 }}
            className="rounded-[10px] w-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="flex flex-row justify-between items-center w-full max-lg:space-y-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full ">
              <a
                href="https://www.n20.pl/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center"
              >
                <Image
                  src="/n20logoCzarne.png"
                  alt="N20"
                  width={255}
                  height={160}
                />
              </a>
              <div className="flex max-lg:items-center flex-col text-center lg:text-left font-semibold text-black max-w-md">
                <h2 className="text-xl md:text-2xl mb-3">
                  Kontakt biura nieruchomości
                </h2>
                <p className="text-sm md:text-base flex items-center">
                  <FaEnvelope className="text-orange-500 mr-2" />
                  biuro@n20.pl
                </p>
                <p className="text-sm md:text-base flex items-center">
                  <FaPhone className="text-orange-500 mr-2" />
                  +48 12 433 38 78
                </p>
                <p className="text-sm md:text-base flex items-center">
                  <FaMobile className="text-orange-500 mr-2" />
                  +48 790 557 504
                </p>
                <p className="text-sm md:text-base flex items-center">
                  <FaMobile className="text-orange-500 mr-2" />
                  +48 790 557 057
                </p>
                <p className="text-sm md:text-base flex items-center">
                  <FaLocationDot className="text-orange-500 mr-2" />
                  Plac Wolnica 13/21, 31-060 Kraków
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
