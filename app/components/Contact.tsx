export default function Contact() {
  return (
    <section
      id="kontakt"
      className="flex flex-col pb-24 px-[70px] bg-transparent bg-linear-to-b from-[var(--mainBg)] from-[53%] to-[#ffffff] overflow-hidden"
    >
      <h1 className="text-6xl font-semibold text-[var(--themeBlueDark)] ml-6">
        kontakt
      </h1>
      <div className="relative flex flex-col items-start p-12">
        <div className="absolute top-0 left-0 w-3/5 h-[3px] bg-[var(--themeBlueDark)]" />
        <div className="absolute top-0 left-0 h-2/5 w-[2px] bg-[var(--themeBlueDark)]" />
        <div className="flex flex-col space-y-7">
          <h2 className="text-4xl text-black font-semibold text-center">
            Masz pytania? Chętnie na nie odpowiemy!
          </h2>
          <div className="flex flex-col space-y-7 ml-7">
            <div className="space-y-2">
              <p className="text-xl font-semibold text-black ml-2">
                Imię i nazwisko
              </p>
              <input
                type="text"
                className="w-full px-3 py-2 bg-white rounded-[5px] text-xl placeholder-[#BFBFBF] text-black focus:outline-none focus:ring-0 focus:border-none"
                placeholder="Wpisz swoje imię i nazwisko"
              />
            </div>
            <div className="flex flex-row justify-between gap-10">
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
                <p className="text-xl font-semibold text-black ml-2">Telefon</p>
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
            <div className="ml-5">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="privacyPolicy"
                  className="form-checkbox h-5 w-5 text-black rounded focus:ring-black accent-black bg-white"
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
          </div>
        </div>
      </div>
    </section>
  );
}
