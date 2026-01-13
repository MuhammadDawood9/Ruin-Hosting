"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-6 left-0 right-0 z-50 mx-auto w-full max-w-7xl px-8 transition-all duration-300`}
    >
      <div
        className={`relative flex items-center justify-between border px-8 py-3 transition-all duration-300 ${scrolled
          ? 'rounded-2xl border-white/10 bg-zinc-950/70 backdrop-blur-md'
          : 'rounded-full border-transparent bg-transparent backdrop-blur-none'
          }`}
      >
        {/* Brand */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          Ruin<span className="text-yellow-400">Hosting</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
        </div>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="hidden md:inline-flex h-9 items-center justify-center rounded-full bg-yellow-400 px-5 text-sm font-semibold text-zinc-950 shadow-sm shadow-yellow-400/20 transition-all hover:scale-105 hover:bg-yellow-300 hover:shadow-md hover:shadow-yellow-400/40"
          >
            Client Area
          </Link>

          <button
            className="md:hidden text-zinc-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          className="md:hidden mt-2 rounded-xl border border-white/10 bg-zinc-950/80 p-6 backdrop-blur-md"
        >
          <div className="flex flex-col gap-6 text-sm font-medium text-zinc-400">
            <Link href="#features" className="hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Features</Link>
            <Link href="#pricing" className="hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            <Link
              href="#"
              className="mt-4 inline-flex h-9 items-center justify-center rounded-full bg-yellow-400 px-5 text-sm font-semibold text-zinc-950 transition-transform hover:scale-105 hover:bg-yellow-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Client Area
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}