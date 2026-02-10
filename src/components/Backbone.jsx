import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Server, Cpu } from 'lucide-react'

const platformFeatures = [
    {
        title: 'Scaled Environments',
        category: 'Infrastucture',
        icon: <Cpu className="w-6 h-6" />,
        description: 'Auto-scaling lab instances that deploy in seconds, providing isolated network environments for every user.',
        tech: ['Docker', 'Kubernetes', 'Cloud'],
        color: 'from-primary/20'
    },
    {
        title: 'Security Orchestration',
        category: 'Platform Core',
        icon: <Code2 className="w-6 h-6" />,
        description: 'Dynamic threat orchestration engine that modifies target behavior in real-time based on user actions.',
        tech: ['Go', 'GRPC', 'Logic Engine'],
        color: 'from-secondary/20'
    },
    {
        title: 'Vulnerability Sandbox',
        category: 'Safety First',
        icon: <Server className="w-6 h-6" />,
        description: 'Highly secure, multi-layered sandbox technology ensuring zero cross-contamination between labs and host systems.',
        tech: ['Firecracker', 'KVM', 'Isolation'],
        color: 'from-accent/20'
    }
]

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

export function Backbone() {
    return (
        <section id="products" className="relative min-h-screen py-32 px-6 bg-background border-t border-white/5">
            <div className="max-w-7xl mx-auto">
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
                    className="mb-20"
                >
                    <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-[1px] bg-primary"></span>
                        <span className="text-primary font-mono text-xs uppercase tracking-[0.5em] font-bold">
                            // SYSTEM ARCHITECTURE
                        </span>
                    </motion.div>
                    <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="text-5xl md:text-8xl font-bold font-heading tracking-tighter uppercase leading-none">
                        PLATFORM <br /> <span className="text-primary ">INFRASTRUCTURE</span>
                    </motion.h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {platformFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1,
                                delay: index * 0.1,
                                ease: [0.23, 1, 0.32, 1]
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group relative p-8 bg-[#151D29] border border-white/5 transition-all duration-300 hover:border-primary/40"
                        >
                            <div className="relative z-10">
                                <div className="w-12 h-12 border border-primary/20 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300">
                                    {feature.icon}
                                </div>
                                <span className="text-muted text-[10px] uppercase tracking-[0.2em] mb-2 block font-mono font-bold">
                                    {feature.category}
                                </span>
                                <h3 className="text-2xl font-bold mb-4 font-heading uppercase text-white group-hover:text-primary transition-colors">{feature.title}</h3>
                                <p className="text-muted mb-8 line-clamp-3 font-mono opacity-80 text-sm leading-relaxed border-l border-white/10 pl-4">
                                    {feature.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto font-mono">
                                    {feature.tech.map(t => (
                                        <span key={t} className="px-2 py-1 bg-white/5 text-[9px] text-primary border border-white/10 font-bold uppercase tracking-wider">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Platform Engineering Details */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                    className="mt-20 p-8 md:p-12 bg-[#0D1117] relative overflow-hidden border border-white/5"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-6 font-heading uppercase tracking-tight text-white italic">CORE CAPABILITIES</h3>
                            <p className="text-muted mb-8 leading-relaxed font-mono opacity-80 text-sm">
                                <span className="text-primary">{'>'}</span> Our infrastructure is designed for extreme scale and fidelity. Every lab environment is a dedicated virtual machine or container cluster, providing a true-to-life training experience.
                            </p>
                            <ul className="space-y-4 text-[10px] text-primary font-mono uppercase tracking-widest font-bold">
                                <li className="flex items-center gap-3 group cursor-pointer transition-all hover:pl-2">
                                    <span className="text-white opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all">01 _</span>
                                    Real-time behavioral training
                                </li>
                                <li className="flex items-center gap-3 group cursor-pointer transition-all hover:pl-2">
                                    <span className="text-white opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all">02 _</span>
                                    Multi-vector attack orchestration
                                </li>
                                <li className="flex items-center gap-3 group cursor-pointer transition-all hover:pl-2">
                                    <span className="text-white opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all">03 _</span>
                                    Zero-day vulnerability discovery
                                </li>
                            </ul>
                        </div>
                        <div className="relative flex justify-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="w-full h-80 bg-primary/5 border border-primary/10 flex items-center justify-center relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#9FEF00_1px,transparent_1px)] [background-size:15px_15px]"></div>
                                <Cpu className="w-32 h-32 text-primary/40 group-hover:text-primary transition-colors duration-700" />
                                <div className="absolute top-4 right-4 text-[8px] font-mono opacity-30 text-primary uppercase font-bold tracking-widest bg-background px-2 py-1 border border-primary/20">SYSTEM_NOMINAL // 100%</div>
                                <div className="absolute bottom-6 right-6 text-[10px] font-mono opacity-30 text-primary uppercase font-bold tracking-widest">INFRA_ORCHESTRATOR // VERSION_2026</div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

