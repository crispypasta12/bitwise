import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Roadmap from "@/components/Roadmap";
import Modules from "@/components/Modules";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* Ambient glow blobs */}
      <div className="ambient" aria-hidden="true">
        <div className="ambient-blob"></div>
        <div className="ambient-blob"></div>
      </div>

      <Nav />

      <main id="top">
        <Hero />
        <Overview />
        <Roadmap />
        <Modules />
      </main>

      <Footer />

      {/* Client-side scroll reveal */}
      <ScrollReveal />
    </>
  );
}
