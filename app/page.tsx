import AboutInvestment from "./components/AboutInvestment";
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
      </main>
      <footer className=""></footer>
    </div>
  );
}
