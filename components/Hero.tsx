"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden pt-24 pb-12 px-8 md:px-12">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-yellow-400/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-center lg:text-left pl-4 md:pl-0"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Hosting That <br />
            <span className="text-yellow-400">Does Not Break</span> <br />
            The Bank
          </h1>

          <p className="text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Premium web hosting, game servers, and Discord bot hosting at prices that will not empty your wallet. Experience the Ruin difference.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
            <button
              onClick={scrollToPricing}
              className="h-12 px-8 rounded-lg bg-yellow-400 text-zinc-950 font-bold hover:bg-yellow-300 transition-all hover:scale-105 flex items-center gap-2"
            >
              Get Started <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Visual Content - Code Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-lg p-4 shadow-2xl transform hover:rotate-[-1deg] transition-transform duration-500">
            {/* Fake Window Controls */}
            <div className="flex gap-1.5 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>

            {/* Code Content */}
            <pre className="font-mono text-sm text-white">
              <code>
                <span className="text-blue-400">const</span> server = <span className="text-blue-400">new</span> <span className="text-green-400">RuinHost</span>({'{'}{'\n'}
                {'  '}<span className="text-red-400">core</span>: <span className="text-yellow-400">"NVMe"</span>,{'\n'}
                {'  '}<span className="text-red-400">speed</span>: <span className="text-yellow-400">"MAX"</span>{'\n'}
                {'}'});
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}