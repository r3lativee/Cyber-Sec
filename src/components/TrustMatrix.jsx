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
                        <span className="text-secondary font-heading text-xs uppercase tracking-[0.5em] mb-4 block font-bold">
                            // ADVANCED LEARNING PLATFORM
                        </span>
                        <h2 className="text-4xl md:text-7xl font-black font-heading tracking-tighter uppercase leading-none">
                            Why Choose <br /> <span className="text-gradient">BugThrive Labs?</span>
                        </h2>
                    </div>
                    <p className="text-muted max-w-sm mb-2 text-sm md:text-base leading-relaxed font-light border-l border-primary/20 pl-6">
                        Experience the most comprehensive cybersecurity training platform with real-world scenarios designed to challenge your skills.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {chooseLabs.map((lab, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-2xl glass border border-white/[0.03] hover:border-primary/30 transition-all duration-500 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-background transition-all duration-500">
                                        <div className="w-5 h-5 bg-current rounded-sm"></div>
                                    </div>
                                    <span className="text-[10px] font-bold text-primary px-3 py-1 bg-primary/5 rounded-full border border-primary/10 uppercase tracking-widest">{lab.meta}</span>
                                </div>
                                <h3 className="text-2xl font-bold font-heading mb-4 text-white uppercase tracking-tight group-hover:text-primary transition-colors">{lab.title}</h3>
                                <p className="text-muted font-light leading-relaxed text-sm mb-8">
                                    {lab.description}
                                </p>
                            </div>
                            <div className="w-full h-[1px] bg-white/5 group-hover:bg-primary/20 transition-colors"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
