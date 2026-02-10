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
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-[1px] bg-primary"></span>
                            <span className="text-primary font-mono text-xs uppercase tracking-[0.4em] font-bold">
                                // LIVE PENETRATION LABS
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-bold font-heading mb-12 tracking-tighter leading-[0.85] uppercase">
                            IMMERSE <br /> <span className="text-primary italic">IN REAL</span> <br /> SCENARIOS
                        </h2>

                        <div className="relative bg-[#151D29] border border-white/5 p-8 md:p-12 mb-12 overflow-hidden group">
                            {/* Technical Grid Overlay */}
                            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#9FEF00_1px,transparent_1px)] [background-size:20px_20px]"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8 font-mono">
                                    <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 text-[10px] font-bold uppercase tracking-widest border border-yellow-500/20">Difficult: Medium</span>
                                    <span className="text-muted text-[10px] font-bold uppercase tracking-widest">ETA: 60 MIN</span>
                                    <span className="ml-auto flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                        <span className="text-primary text-[10px] font-bold uppercase tracking-widest">SERVER ONLINE</span>
                                    </span>
                                </div>
                                <h3 className="text-4xl font-bold font-heading text-white mb-6 uppercase tracking-tight group-hover:text-primary transition-colors">ECHODESK // <span className="text-muted opacity-50">INTERNAL ASSISTANT</span></h3>
                                <p className="text-muted text-base leading-relaxed font-mono opacity-80 mb-10 max-w-2xl">
                                    <span className="text-primary mr-2">{">"}</span> EchoDesk is our internal assistant for all HR and IT queries. Can you dig through the noise and find what the HR Manager is trying to hide? Use the portal to get familiar with our internal systems and identify misconfigured API endpoints.
                                </p>
                                <div className="flex flex-wrap gap-4 font-mono">
                                    <button className="px-8 py-4 bg-primary text-background font-bold uppercase tracking-widest text-xs transition-all hover:brightness-110">
                                        SPAWN MACHINE
                                    </button>
                                    <button className="px-8 py-4 border border-white/10 text-white font-bold uppercase tracking-widest text-xs transition-all hover:bg-white/5">
                                        DOWNLOAD VPN
                                    </button>
                                </div>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-primary/20 transition-all duration-500 group-hover:border-primary"></div>
                        </div>
                    </motion.div>
                </div>

                {/* Lab Series Gallery */}
                <div className="mt-20">
                    <div className="flex justify-between items-end mb-16 px-4">
                        <div>
                            <h3 className="text-3xl font-bold font-heading uppercase tracking-tighter text-white">SYSTEMS CATALOG</h3>
                            <p className="text-primary text-[10px] font-mono mt-3 uppercase tracking-widest font-bold">
                                AVAILABLE SCENARIOS :: DB_QUERY_READY // TOTAL: 156
                            </p>
                        </div>
                        <div className="h-[1px] flex-1 border-b border-dashed border-white/10 mx-10 mb-3 hidden md:block"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {labProtocols.map((protocol, index) => (
                            <motion.div
                                key={protocol.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="group relative bg-[#0D1117] border border-white/5 p-4 transition-all duration-300 hover:border-primary"
                            >
                                <div className="aspect-video mb-6 overflow-hidden relative">
                                    <img
                                        src={protocol.url}
                                        alt={protocol.title}
                                        className="w-full h-full object-cover grayscale opacity-40 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between text-[8px] font-mono text-muted uppercase tracking-widest">
                                        <span>IP: 10.10.{10 + index}.{Math.floor(Math.random() * 254)}</span>
                                        <span className="text-primary">ACTIVE</span>
                                    </div>
                                    <h4 className="text-xl font-bold font-heading uppercase tracking-tight text-white group-hover:text-primary transition-colors">{protocol.title}</h4>
                                    <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                                        <span className="text-[10px] font-mono text-muted uppercase">Lab Series // 2026</span>
                                        <span className="text-primary font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">_ENTER</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
