"use client";

import { motion } from "framer-motion";
import { HardDrive, ShieldCheck, Zap } from "lucide-react";
import React from "react";
import { SpotlightCard } from "./SpotlightCard";

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
  className: string;
}

const features: Feature[] = [
  {
    title: "Lightning Fast",
    description: "NVMe storage and optimized servers for maximum performance",
    icon: HardDrive,
    className: "md:col-span-1",
  },
  {
    title: "DDoS Protection",
    description: "Advanced protection to keep your servers safe from attacks",
    icon: ShieldCheck,
    className: "md:col-span-1",
  },
  {
    title: "24/7 Support",
    description: "Our support team is always available to help you",
    icon: ShieldCheck, // Using ShieldCheck as placeholder, ideally 'Headset' or 'LifeBuoy' if available in lucide-react used, but keeping imports simple for now. Will update to generic.
    className: "md:col-span-1",
  },
  {
    title: "Instant Setup",
    description: "Your server is ready within minutes of ordering",
    icon: Zap,
    className: "md:col-span-1",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Ruin Hosting</h2>
          <p className="text-zinc-400">We provide the best hosting experience with these key features</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <SpotlightCard key={index} className={feature.className}>
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-400">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-zinc-50 mb-2">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}