import About from "@/components/shared/About";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import Map from "@/components/shared/Map";
import Menu from "@/components/shared/Menu";
import Reservation from "@/components/shared/Reservation";
import StyleGuide from "@/components/shared/StyleGuide";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      {/* <StyleGuide /> */}
      <Header />
      <Hero />
      <Menu />
      <Reservation />
      <About />
      <Map />
      <Footer />
    </main>
  );
}
