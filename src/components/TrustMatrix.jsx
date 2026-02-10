import React from 'react'
import { motion } from 'framer-motion'

const chooseLabs = [
    {
        title: 'Web Security Labs',
        description: 'Master OWASP Top 10 vulnerabilities, SQL injection, XSS, and advanced web application security testing techniques.',
        meta: '50+ Scenarios'
    },
    {
        title: 'Network Penetration',
        description: 'Practice network enumeration, exploitation, and post-exploitation techniques in realistic enterprise environments.',
        meta: '30+ Networks'
    },
    {
        title: 'Mobile Security',
        description: 'Learn iOS and Android security testing, reverse engineering, and mobile application vulnerability assessment.',
        meta: '25+ Apps'
    },
    {
        title: 'Malware Analysis',
        description: 'Analyze malware samples, understand attack vectors, and develop detection and mitigation strategies.',
        meta: '20+ Samples'
    },
    {
        title: 'Social Engineering',
        description: 'Practice phishing, pretexting, and other social engineering techniques in controlled environments.',
        meta: '15+ Scenarios'
    },
    {
        title: 'Cloud Security',
        description: 'Master AWS, Azure, and GCP security configurations, IAM policies, and cloud infrastructure testing.',
        meta: '40+ Configs'
    }
]

export function TrustMatrix() {
    return (
        <section id="solutions" className="relative py-32 bg-background border-t border-white/5 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-primary"></span>
                            <span className="text-primary font-mono text-xs uppercase tracking-[0.5em] font-bold">
                                // ELITE TRAINING MODULES
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter uppercase leading-none">
                            WHY JOIN <br /> <span className="text-primary italic">CYBER-SEC ACADEMY?</span>
                        </h2>
                    </div>
                    <p className="text-muted max-w-sm mb-2 text-sm md:text-base leading-relaxed font-mono opacity-80 border-l border-white/10 pl-6">
                        <span className="text-primary">{'>'}</span> Experience the most comprehensive cybersecurity training platform with real-world scenarios designed to challenge your skills.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {chooseLabs.map((lab, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="group p-8 bg-[#151D29] border border-white/5 transition-all duration-300 hover:border-primary/50"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="text-primary group-hover:scale-110 transition-transform duration-500">
                                    <div className="w-8 h-8 border border-current flex items-center justify-center">
                                        <div className="w-4 h-4 bg-primary rotate-45"></div>
                                    </div>
                                </div>
                                <span className="text-[10px] font-mono font-bold text-primary px-2 py-1 bg-primary/5 border border-primary/20 uppercase tracking-widest">{lab.meta}</span>
                            </div>

                            <h3 className="text-2xl font-bold font-heading mb-4 text-white uppercase tracking-tight group-hover:text-primary transition-all underline decoration-transparent group-hover:decoration-primary/30 underline-offset-8 decoration-2">{lab.title}</h3>
                            <p className="text-muted font-mono text-sm leading-relaxed mb-8 opacity-70">
                                {lab.description}
                            </p>

                            <div className="flex items-center gap-2 text-primary font-mono text-[10px] uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                <span>VIEW_SYLLABUS</span>
                                <span className="w-12 h-[1px] bg-primary"></span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
