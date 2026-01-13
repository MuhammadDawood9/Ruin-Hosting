import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-zinc-950 pt-24 pb-12">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* CTA Section */}
                <div className="mb-24 text-center">
                    <h2 className="text-2xl font-bold text-white mb-6">Need a ready-to-use Discord bot? Try our free ModBot!</h2>
                    <button className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-8 py-3 text-sm font-bold text-white hover:bg-orange-600 transition-colors">
                        <span className="text-lg">🤖</span> Add Free ModBot to Your Server
                    </button>
                    <p className="mt-4 text-xs text-zinc-500">
                        Features: Auto-moderation, Leveling, Ticket System, Welcome Messages, and more
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">Ruin Hosting</h3>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                            Premium hosting solutions for games, websites, and applications.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Services</h3>
                        <ul className="space-y-3 text-sm text-zinc-400">
                            <li><Link href="#" className="hover:text-yellow-400 transition-colors">Game Servers</Link></li>
                            <li><Link href="#" className="hover:text-yellow-400 transition-colors">Web Hosting</Link></li>
                            <li><Link href="#" className="hover:text-yellow-400 transition-colors">Discord Bots</Link></li>
                            <li><Link href="#" className="hover:text-yellow-400 transition-colors">VPS Hosting</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Company</h3>
                        <ul className="space-y-3 text-sm text-zinc-400">
                            <li><Link href="#" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-yellow-400 transition-colors">Support</Link></li>
                            <li><Link href="#" className="hover:text-yellow-400 transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Legal</h3>
                        <ul className="space-y-3 text-sm text-zinc-400">
                            <li><Link href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-yellow-400 transition-colors">Refund Policy</Link></li>
                            <li><Link href="#" className="hover:text-yellow-400 transition-colors">Service Status</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
                    <p>&copy; 2025-2026 RuinHosting. All rights reserved.</p>
                    <p>* Free hosting includes Discord bot hosting and basic web hosting plans</p>
                </div>
            </div>
        </footer>
    );
}
