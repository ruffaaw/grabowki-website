export default function HomeSection() {
  return (
    <main className="relative h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/background_image.png')" }}
      />

      <div className="relative z-10 flex flex-col items-start justify-end h-full text-start px-12 py-10">
        <h1 className="text-white text-9xl font-normal drop-shadow-[10px_15px_25px_rgba(0,0,0,0.25)]">
          OSIEDLE
        </h1>
        <h1 className="text-white text-[300px] font-normal drop-shadow-[10px_15px_25px_rgba(0,0,0,0.25)] -mt-24 -mb-24">
          GRABÓWKI
        </h1>
        <a
          href="/oferta"
          className="bg-[var(--themeBlueDark)] text-white text-[40px] px-10 py-3 hover:bg-gray-200 transition drop-shadow-[10px_15px_25px_rgba(0,0,0,0.25)]"
        >
          Zobacz ofertę
        </a>
      </div>
    </main>
  );
}
