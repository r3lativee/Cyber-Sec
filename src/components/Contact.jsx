import React from 'react'
import { motion } from 'framer-motion'
import { Send, Github, Linkedin, Twitter, Download } from 'lucide-react'
import { Canvas } from '@react-three/fiber'
import { Scene } from './three/Scene'
import { Suspense } from 'react'

const footerLinks = {
    Platform: ['Products', 'Labs', 'Leaderboard', 'Pricing'],
    Resources: ['Blog', 'Documentation', 'Help Center'],
    Company: ['About', 'Contact', 'Careers', 'Privacy']
}

export function Contact() {
    return (
        <section id="contact" className="relative bg-background overflow-hidden flex flex-col pt-32">
            <div className="max-w-7xl mx-auto px-6 w-full text-center mb-32 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-primary font-heading text-xs uppercase tracking-[0.5em] mb-8 block font-bold">
                        // JOIN THE LABS
                    </span>
                    <h2 className="text-5xl md:text-8xl font-black font-heading mb-12 tracking-tighter uppercase leading-none">
                        Ready to Start <br /> <span className="text-gradient">Learning?</span>
                    </h2>
                    <p className="text-muted text-lg font-light max-w-2xl mx-auto mb-16 leading-relaxed">
                        Join thousands of security professionals who trust BugThrive Labs to advance their cybersecurity skills through hands-on experience and real-world scenarios.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <button className="px-10 py-5 bg-primary text-background font-heading font-bold uppercase tracking-widest text-xs rounded-lg hover:shadow-[0_0_25px_rgba(0,255,156,0.5)] transition-all">
                            Get Started Free
                        </button>
                        <button className="px-10 py-5 border border-white/10 glass text-white font-heading font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-white/5 transition-all">
                            View Pricing
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Comprehensive Footer */}
            <footer className="relative border-t border-white/5 pt-24 pb-12 bg-[#05080b]/50 backdrop-blur-3xl z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
                        <div className="lg:col-span-2">
                            <a href="#" className="text-2xl font-black font-heading tracking-[0.1em] mb-10 block">
                                <span className="text-white">BUGTHRIVE</span>
                                <span className="text-primary opacity-80 uppercase ml-2 tracking-widest text-xl">Labs</span>
                            </a>
                            <p className="text-muted font-light leading-relaxed max-w-sm mb-10 text-sm">
                                The premier platform for cybersecurity training and bug bounty programs. Empowering the next generation of security researchers.
                            </p>
                            <div className="flex gap-6">
                                <Linkedin className="w-5 h-5 text-muted hover:text-primary cursor-pointer transition-colors" />
                                <Twitter className="w-5 h-5 text-muted hover:text-primary cursor-pointer transition-colors" />
                                <Github className="w-5 h-5 text-muted hover:text-primary cursor-pointer transition-colors" />
                            </div>
                        </div>

                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title} className="flex flex-col">
                                <h4 className="text-xs font-bold font-heading uppercase tracking-[0.4em] text-white mb-10">{title}</h4>
                                <ul className="space-y-5">
                                    {links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="text-muted hover:text-primary transition-colors text-xs font-light uppercase tracking-widest">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <p className="text-muted text-[10px] uppercase tracking-[0.4em] font-medium text-center md:text-left">
                            © 2026 BugThrive. All rights reserved. | <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(0,255,156,0.5)]"></div>
                            <span className="text-[10px] text-muted uppercase tracking-[0.3em] font-black">All Systems Operational</span>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}
