"use client";

import { motion } from "framer-motion";
import { Check, Crown, Bot } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-yellow-400/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Discord Bot Hosting</h2>
          <p className="text-zinc-400">Reliable hosting for your Discord bots with free and premium options</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Free Plan */}
          <SpotlightCard className="flex flex-col items-center text-center">
            <div className="relative z-10 w-full flex flex-col items-center">
              <div className="h-12 w-12 text-yellow-400 mb-6">
                <Bot size={48} />
              </div>
              <h3 className="text-2xl font-bold text-zinc-50 mb-2">Free Bot Hosting</h3>
              <p className="text-sm text-zinc-400 mb-8 max-w-[250px]">Get started with our free Discord bot hosting - perfect for small to medium bots</p>

              <div className="text-4xl font-bold text-yellow-400 tracking-tight mb-8">FREE</div>

              <div className="grid grid-cols-2 gap-4 w-full mb-8">
                <div className="bg-white/5 rounded-lg p-3 text-sm font-semibold text-zinc-200 flex items-center justify-center gap-2">
                  <span className="text-yellow-400">⚙️</span> 1 CPU Core
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-sm font-semibold text-zinc-200 flex items-center justify-center gap-2">
                  <span className="text-yellow-400">💾</span> 1 GB RAM
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-sm font-semibold text-zinc-200 flex items-center justify-center gap-2">
                  <span className="text-yellow-400">💽</span> 4GB SSD Storage
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-sm font-semibold text-zinc-200 flex items-center justify-center gap-2">
                  <span className="text-yellow-400">🕑</span> 24/7 Uptime
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-400 mb-8">
                <div className="h-2 w-2 rounded-full bg-yellow-400" />
                Free for your first 2 bots. No credit card required.
              </div>

              <button
                className="mt-auto w-full rounded-lg bg-orange-600/90 py-3 text-sm font-bold text-white hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
              >
                🚀 Claim Free Hosting
              </button>
            </div>
          </SpotlightCard>

          {/* Premium Plan */}
          <SpotlightCard className="flex flex-col items-center text-center border-yellow-400/20 shadow-yellow-glow">
            <div className="relative z-10 w-full flex flex-col items-center">
              <div className="h-12 w-12 text-yellow-400 mb-6">
                <Crown size={48} />
              </div>
              <h3 className="text-2xl font-bold text-zinc-50 mb-2">Premium Bot Hosting</h3>
              <p className="text-sm text-zinc-400 mb-8 max-w-[280px]">Advanced hosting for high-traffic Discord bots with priority support</p>

              <div className="flex items-baseline text-yellow-400 mb-8">
                <span className="text-5xl font-bold tracking-tight">$4.99</span>
                <span className="ml-1 text-zinc-400 text-sm">/month</span>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full mb-8">
                <div className="bg-white/5 rounded-lg p-3 text-sm font-semibold text-zinc-200 flex items-center justify-center gap-2">
                  <span className="text-yellow-400">⚙️</span> 2 CPU Cores
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-sm font-semibold text-zinc-200 flex items-center justify-center gap-2">
                  <span className="text-yellow-400">💾</span> 4 GB RAM
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-sm font-semibold text-zinc-200 flex items-center justify-center gap-2">
                  <span className="text-yellow-400">💽</span> 10GB NVMe Storage
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-sm font-semibold text-zinc-200 flex items-center justify-center gap-2">
                  <span className="text-yellow-400">🛡️</span> DDoS Protection
                </div>
              </div>

              <ul className="mb-8 space-y-3 text-left w-full pl-4">
                {[
                  "Unlimited Bot Instances",
                  "Priority Support",
                  "Automatic Backups",
                  "Custom Domain Support"
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-zinc-300 text-sm font-medium">
                    <Check size={16} className="text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className="mt-auto w-full rounded-lg bg-yellow-400 py-3 text-sm font-bold text-zinc-950 hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
              >
                👑 Upgrade to Premium
              </button>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}