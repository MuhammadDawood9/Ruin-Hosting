"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Stat({ value, label, suffix, decimals }: { value: number; label: string, suffix?: string, decimals?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: 2,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = value.toFixed(decimals ? 1 : 0);
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, decimals]);

  return (
    <div className="text-center">
      <p className="text-4xl font-bold text-yellow-400">
        <span ref={ref}>0</span>{suffix}
      </p>
      <p className="text-zinc-400">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-12 px-6 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 rounded-2xl border border-white/10 bg-zinc-900/50 p-8 backdrop-blur-md shadow-2xl">
          <Stat value={99.9} label="Uptime" suffix="%" decimals />
          <Stat value={10000} label="Servers" suffix="+" />
          <Stat value={24} label="Support" suffix="/7" />
        </div>
      </div>
    </section>
  );
}
