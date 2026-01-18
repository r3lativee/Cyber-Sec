import React from 'react'
import { motion } from 'framer-motion'
import { Send, Github, Linkedin, Twitter, Download } from 'lucide-react'

export function Contact() {
    return (
        <section id="contact" className="relative min-h-screen py-32 px-6 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center h-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                    <span className="text-accent-neon font-heading text-sm uppercase tracking-[0.5em] mb-8 block">
                        Let's build the future
                    </span>
                    <h2 className="text-6xl md:text-9xl font-bold font-heading mb-12">
                        STAY IN <span className="text-gradient italic">TOUCH</span>
                    </h2>

                    <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                        <a
                            href="mailto:contact@example.com"
                            className="group relative px-12 py-5 bg-white text-black font-bold rounded-full text-lg overflow-hidden transition-all hover:pr-16"
                        >
                            <span className="relative z-10">Start a Project</span>
                            <Send className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:block transition-all w-5 h-5" />
                        </a>

                        <button className="flex items-center gap-3 text-muted hover:text-white transition-colors group">
                            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                            <span className="font-heading uppercase tracking-widest text-sm">Download Portfolio</span>
                        </button>
                    </div>

                    <div className="mt-24 flex gap-8">
                        {[Github, Linkedin, Twitter].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors text-muted hover:text-accent-neon"
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Footer-like note */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full px-6 flex flex-col md:flex-row justify-between max-w-7xl text-[10px] text-muted/50 uppercase tracking-[0.3em] font-heading">
                <span>© 2026 Designed & Built by You</span>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </div>
            </div>

            {/* Background Graphic */}
            <div className="absolute top-[60%] left-[-10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-accent-neon/20 to-transparent rotate-12 pointer-events-none"></div>
            <div className="absolute top-[65%] left-[-10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-accent-secondary/10 to-transparent -rotate-6 pointer-events-none"></div>
        </section>
    )
}
