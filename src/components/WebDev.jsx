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

export function WebDev() {
    return (
        <section id="products" className="relative min-h-screen py-32 px-6 bg-background border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <span className="text-primary font-heading text-xs uppercase tracking-[0.5em] mb-4 block font-bold">
                        // NEXT-GEN TRAINING CORE
                    </span>
                    <h2 className="text-4xl md:text-8xl font-black font-heading tracking-tighter uppercase leading-none">
                        Platform <br /> <span className="text-gradient">Infrastructure</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {platformFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-3xl bg-white/[0.01] border border-white/[0.05] hover:border-primary/30 transition-all duration-500 overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-500">
                                    {feature.icon}
                                </div>
                                <span className="text-muted text-[10px] uppercase tracking-[0.2em] mb-2 block font-heading font-bold">
                                    {feature.category}
                                </span>
                                <h3 className="text-2xl font-bold mb-4 font-heading uppercase text-white group-hover:text-primary transition-colors">{feature.title}</h3>
                                <p className="text-muted mb-8 line-clamp-3 font-light text-sm leading-relaxed">
                                    {feature.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {feature.tech.map(t => (
                                        <span key={t} className="px-3 py-1 rounded-md bg-primary/5 text-[9px] text-primary border border-primary/10 font-bold uppercase tracking-wider">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Platform Engineering Details */}
                <div className="mt-20 p-12 rounded-[2.5rem] glass relative overflow-hidden border border-white/[0.03]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-black mb-6 font-heading uppercase tracking-tight text-white">Advanced Learning Platform</h3>
                            <p className="text-muted mb-8 leading-relaxed font-light">
                                Our infrastructure is designed for extreme scale and fidelity. Every lab environment is a dedicated virtual machine or container cluster, providing a true-to-life training experience without compromises.
                            </p>
                            <ul className="space-y-4 text-xs text-primary/70 uppercase tracking-widest font-black">
                                <li className="flex items-center gap-3 hover:translate-x-2 transition-transform cursor-pointer">
                                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,255,156,0.6)]"></div>
                                    Real-time behavioral training
                                </li>
                                <li className="flex items-center gap-3 hover:translate-x-2 transition-transform cursor-pointer">
                                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,255,156,0.6)]"></div>
                                    Multi-vector attack orchestration
                                </li>
                                <li className="flex items-center gap-3 hover:translate-x-2 transition-transform cursor-pointer">
                                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,255,156,0.6)]"></div>
                                    Zero-day vulnerability discovery
                                </li>
                            </ul>
                        </div>
                        <div className="relative flex justify-center">
                            <div className="w-full h-80 bg-primary/5 rounded-3xl border border-primary/10 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,156,0.1)_0%,transparent_70%)] opacity-50"></div>
                                <Cpu className="w-32 h-32 text-primary animate-pulse relative z-10" />
                                <div className="absolute bottom-6 right-6 text-[10px] font-mono opacity-30 text-primary uppercase font-bold tracking-widest">INFRA_ORCHESTRATOR // VERSION_2026</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
