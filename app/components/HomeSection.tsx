export default function HomeSection() {
  return (
    <main className="relative h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/background_image.png')" }}
      />

      <div className="relative z-10 flex flex-col items-center md:items-start justify-end h-full text-start px-12 py-10">
        <h1 className="max-md:hidden text-white text-8xl lg:text-9xl font-normal drop-shadow-[10px_15px_25px_rgba(0,0,0,0.25)]">
          OSIEDLE
        </h1>
        <h1 className="max-md:hidden text-white text-[160px] lg:text-[250px] xl:text-[300px] font-normal drop-shadow-[10px_15px_25px_rgba(0,0,0,0.25)] -my-12 lg:-mt-16 lg:-mb-18 xl:-mt-24 xl:-mb-24">
          GRABÓWKI
        </h1>
        <a
          href="#domy"
          className="bg-[var(--themeBlueDark)] text-white text-3xl md:text-4xl lg:text-[40px] px-10 py-3 hover:bg-gray-200 transition drop-shadow-[10px_15px_25px_rgba(0,0,0,0.25)] text-center "
        >
          Zobacz ofertę
        </a>
      </div>
    </main>
  );
}
