import AboutInvestment from "./components/AboutInvestment";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import Houses from "./components/Houses";
import Profits from "./components/Profits";
import "./globals.css";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Header />
        <HomeSection />
        <AboutInvestment />
        <Profits />
        <Houses />
        <Gallery />
      </main>
      <footer className=""></footer>
    </div>
  );
}
