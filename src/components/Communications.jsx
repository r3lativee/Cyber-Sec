import React from 'react'
import { motion } from 'framer-motion'
import { Send, Github, Linkedin, Twitter, Download } from 'lucide-react'

const footerLinks = {
    Platform: ['Products', 'Labs', 'Leaderboard', 'Pricing'],
    Resources: ['Blog', 'Documentation', 'Help Center'],
    Company: ['About', 'Contact', 'Careers', 'Privacy']
}

const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 100,
            duration: 0.8
        }
    },
}

export function Communications() {
    return (
        <section id="contact" className="relative bg-background overflow-hidden flex flex-col pt-24 md:pt-32">
            <div className="max-w-7xl mx-auto px-6 w-full text-center mb-24 md:mb-32 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        show: {
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                >
                    <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex items-center justify-center gap-3 mb-8">
                        <span className="w-8 h-[1px] bg-primary"></span>
                        <span className="text-primary font-mono text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold">
                            // ENTER THE ACADEMY
                        </span>
                        <span className="w-8 h-[1px] bg-primary"></span>
                    </motion.div>
                    <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="text-4xl sm:text-6xl md:text-8xl font-bold font-heading mb-10 md:mb-12 tracking-tighter uppercase leading-[1.1] md:leading-none italic">
                        READY TO <br /> <span className="text-primary not-italic">START HACKING?</span>
                    </motion.h2>
                    <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-muted text-sm md:text-lg font-mono max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed opacity-80">
                        <span className="text-primary mr-2">{">"}</span> Join thousands of security professionals who trust Cyber-Sec Academy to advance their skills through hands-on experience and real-world scenarios.
                    </motion.p>
                    <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 font-mono">
                        <button className="px-10 py-5 bg-primary text-background font-bold uppercase tracking-widest text-xs md:text-sm transition-all hover:brightness-110 w-full sm:w-auto text-center">
                            SIGN UP NOW
                        </button>
                        <button className="px-10 py-5 border border-white/10 text-white font-bold uppercase tracking-widest text-xs md:text-sm transition-all hover:bg-white/5 w-full sm:w-auto text-center">
                            PLATFORM DEMO
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            <footer className="relative border-t border-white/5 pt-24 pb-12 bg-[#0D1117] z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24 font-mono"
                    >
                        <div className="lg:col-span-2">
                            <a href="#" className="mb-6 md:mb-10 block group">
                                <img
                                    src="/assets/images/Full-word_11zon.png"
                                    alt="Cyber-Sec Academy"
                                    className="h-10 md:h-12 lg:h-16 w-auto object-contain opacity-70 group-hover:opacity-100 transition-all"
                                />
                            </a>
                            <p className="text-muted leading-relaxed max-w-sm mb-8 md:mb-10 text-[10px] md:text-xs opacity-70 font-mono">
                                <span className="text-primary opacity-40">{">> "}</span> The premier platform for cybersecurity training. Empowering the next generation of security researchers through hands-on practice.
                            </p>
                            <div className="flex gap-6 mb-8 lg:mb-0">
                                <Twitter className="w-4 h-4 text-muted hover:text-primary cursor-pointer transition-colors" />
                                <Linkedin className="w-4 h-4 text-muted hover:text-primary cursor-pointer transition-colors" />
                                <Github className="w-4 h-4 text-muted hover:text-primary cursor-pointer transition-colors" />
                            </div>
                        </div>

                        {Object.entries(footerLinks).map(([title, links], groupIdx) => (
                            <div key={title} className="flex flex-col">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white mb-6 md:mb-10 opacity-40">{title}</h4>
                                <ul className="space-y-3 md:space-y-4">
                                    {links.map((link, i) => (
                                        <li key={link}>
                                            <a href="#" className="text-muted hover:text-primary transition-colors text-[10px] md:text-[11px] uppercase tracking-widest font-bold">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 font-mono"
                    >
                        <p className="text-muted text-[10px] uppercase tracking-[0.2em] opacity-50">
                            © 2026 CYBER-SEC ACADEMY. ALL RIGHTS RESERVED. // <a href="#" className="hover:text-primary transition-colors">PRIVACY_POLICY</a> // <a href="#" className="hover:text-primary transition-colors">TERMS_OF_SERVICE</a>
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary animate-pulse shadow-[0_0_10px_rgba(159,239,0,0.5)]"></div>
                            <span className="text-[10px] text-primary uppercase tracking-[0.2em] font-bold">SYSTEMS_OPERATIONAL</span>
                        </div>
                    </motion.div>
                </div>
            </footer>
        </section>
    )
}


