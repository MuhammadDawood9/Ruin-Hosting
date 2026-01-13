import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 selection:bg-yellow-400/30">
      <Navbar />
      <Hero />
      <Stats />
      <Pricing />
      <Services />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}