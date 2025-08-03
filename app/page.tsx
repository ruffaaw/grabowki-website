import AboutInvestment from "./components/AboutInvestment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import Houses from "./components/Houses";
import Profits from "./components/Profits";
import "./globals.css";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <main className="">
        <Header />
        <HomeSection />
        <AboutInvestment />
        <Profits />
        <Houses />
        <Gallery />
        <Contact />
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}
