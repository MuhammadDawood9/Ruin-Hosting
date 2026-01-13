"use client";

import { motion } from "framer-motion";
import { Server, Wrench, Shield } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

const services = [
    {
        title: "Bot Hosting",
        description: "Host any Discord.js, Python, or Java bots with easy setup",
        icon: Server,
    },
    {
        title: "Bot Development",
        description: "Custom Discord bot development and consulting services",
        icon: Wrench,
    },
    {
        title: "Moderation Bots",
        description: "Pre-built moderation, music, and utility bots ready to use",
        icon: Shield,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 px-6">
            <div className="container mx-auto max-w-5xl">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Discord Services</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <SpotlightCard key={index} className="text-center group hover:border-yellow-400/50 transition-colors">
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-zinc-950 transition-all duration-300">
                                    <service.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-zinc-50 mb-3">{service.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
