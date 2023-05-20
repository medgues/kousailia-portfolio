import Image from "next/image";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <main className="background">
      <section className="h-screen overflow-hidden">
        <Hero />
      </section>
      <section className="h-screen flex">
        <About />
      </section>
      <section className="h-[120vh] overflow-x-hidden">
        <Gallery />
      </section>
      <section className="h-auto sm:h-[120vh] ">
        <Contact />
      </section>
      <section className="h-1/2 ">
        <Footer />
      </section>
      <Navigation />
    </main>
  );
}
