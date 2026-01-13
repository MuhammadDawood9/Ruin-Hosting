"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "./SpotlightCard";

const testimonials = [
    {
        quote: "My Discord bot has been running smoothly for months without any downtime. The setup process was straightforward, and the control panel is intuitive to use.",
        author: "Cosmic",
        role: "Corilla Tag Mod Developer",
        initial: "C",
        color: "bg-orange-500",
    },
    {
        quote: "The free Discord bot hosting saved our community money while providing reliable service. Perfect for our moderation and music bots!",
        author: "Alex",
        role: "Community Manager",
        initial: "A",
        color: "bg-yellow-500",
    },
    {
        quote: "Upgraded to premium for my game server and the performance improvement was noticeable immediately. Worth every penny!",
        author: "Mike",
        role: "Game Server Owner",
        initial: "M",
        color: "bg-orange-400",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 px-6 bg-zinc-900/30">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
                    <p className="text-zinc-400">Do not just take our word for it - hear from our satisfied customers</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, index) => (
                        <SpotlightCard key={index} className="h-full flex flex-col justify-between group hover:border-yellow-400/50 transition-colors">
                            <p className="text-zinc-300 italic mb-8 leading-relaxed">"{t.quote}"</p>
                            <div className="flex items-center gap-4">
                                <div className={`h-12 w-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                                    {t.initial}
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-100 group-hover:text-yellow-400 transition-colors">{t.author}</h4>
                                    <p className="text-xs text-zinc-500 uppercase tracking-wide">{t.role}</p>
                                </div>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
