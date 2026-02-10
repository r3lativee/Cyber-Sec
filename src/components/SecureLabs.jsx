import React from 'react'
import { motion } from 'framer-motion'

const labProtocols = [
    { id: 1, url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2000', title: 'Network Scanners' },
    { id: 2, url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000', title: 'Exploit DB' },
    { id: 3, url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070', title: 'Traffic Analysis' },
    { id: 4, url: 'https://images.unsplash.com/photo-1510511459019-5dee995d3042?q=80&w=2070', title: 'Security Audits' },
]

export function SecureLabs() {
    return (
        <section id="labs" className="relative min-h-screen py-32 bg-background overflow-hidden border-t border-white/5 px-6">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-start min-h-[50vh] mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        <span className="text-secondary font-heading text-xs uppercase tracking-[0.4em] mb-6 block font-bold">
                            // FEATURED LABS
                        </span>
                        <h2 className="text-5xl md:text-8xl font-black font-heading mb-8 tracking-tighter leading-[0.85] uppercase">
                            Secure <br /> <span className="text-gradient">Training</span> <br /> Environments
                        </h2>
                        <div className="p-8 md:p-12 rounded-2xl glass border border-primary/20 bg-primary/5 mb-12 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px]"></div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="px-3 py-1 rounded bg-yellow-500/20 text-yellow-500 text-[10px] font-bold uppercase tracking-widest">Medium</span>
                                <span className="text-muted text-[10px] font-bold uppercase tracking-widest">30 min</span>
                                <span className="text-primary text-[10px] font-bold uppercase tracking-widest ml-auto">1 completed</span>
                            </div>
                            <h3 className="text-3xl font-bold font-heading text-white mb-6 uppercase tracking-tight group-hover:text-primary transition-colors">EchoDesk</h3>
                            <p className="text-muted text-base leading-relaxed font-light mb-10 max-w-2xl">
                                EchoDesk is our new shiny internal assistant for all HR and IT queries. It helps employees track their support tickets and access company policies. Use the portal to get familiar with our internal systems. We believe in radical transparency but surely some things should remain private? Can you dig through the noise and find what the HR Manager is trying to hide?
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-4 bg-primary text-background font-heading font-bold uppercase tracking-widest text-[10px] rounded hover:shadow-[0_0_25px_rgba(0,255,156,0.4)] transition-all">
                                    Start Lab
                                </button>
                                <button className="px-8 py-4 border border-white/10 glass text-white font-heading font-bold uppercase tracking-widest text-[10px] rounded hover:bg-white/5 transition-all">
                                    View All Labs
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Lab Series Gallery */}
                <div className="mt-20">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h3 className="text-3xl font-bold font-heading uppercase tracking-tighter text-white">Advanced Lab Scenarios</h3>
                            <p className="text-muted text-xs mt-3 uppercase tracking-widest flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Choose from 150+ real-world simulations
                            </p>
                        </div>
                        <div className="h-[1px] flex-1 bg-white/5 mx-10 mb-3 hidden md:block"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {labProtocols.map((protocol, index) => (
                            <motion.div
                                key={protocol.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/5 glass hover:border-primary/40 transition-all duration-500"
                            >
                                <img
                                    src={protocol.url}
                                    alt={protocol.title}
                                    className="w-full h-full object-cover grayscale opacity-30 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent flex flex-col justify-end p-8">
                                    <div className="w-10 h-[1px] bg-primary mb-4"></div>
                                    <h4 className="text-2xl font-heading font-bold uppercase tracking-tight leading-none mb-2 text-white">{protocol.title}</h4>
                                    <span className="text-primary text-[9px] uppercase tracking-[0.3em] font-medium font-bold">Lab Scenario // 2026</span>
                                </div>
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
