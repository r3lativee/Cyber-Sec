import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Layout, Database, Server, Smartphone, Cpu } from 'lucide-react'

const projects = [
    {
        title: 'Enterprise ERP System',
        category: 'System Administration',
        icon: <Database className="w-6 h-6" />,
        description: 'Managed large-scale school ERP systems, CBSE portal data handling, and network infrastructure.',
        tech: ['SQL Server', 'ERPNext', 'Linux'],
        color: 'from-blue-500/20'
    },
    {
        title: 'Modern E-Commerce',
        category: 'Web Development',
        icon: <Layout className="w-6 h-6" />,
        description: 'A high-performance React application with Stripe integration and motion-driven UI.',
        tech: ['React', 'Node.js', 'GSAP'],
        color: 'from-purple-500/20'
    },
    {
        title: 'Cross-Platform App',
        category: 'App Development',
        icon: <Smartphone className="w-6 h-6" />,
        description: 'Flutter-based mobile application for real-time inventory tracking and management.',
        tech: ['Flutter', 'Firebase', 'Dart'],
        color: 'from-cyan-500/20'
    }
]

export function WebDev() {
    return (
        <section id="engineering" className="relative min-h-screen py-32 px-6 bg-[#080808]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <span className="text-accent-neon font-heading text-sm uppercase tracking-[0.3em] mb-4 block">
                        04 // Engineering
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold font-heading">
                        FULL-STACK <br /> & <span className="text-gradient">SYSTEMS</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-accent-neon/30 transition-all duration-500 overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] flex items-center justify-center mb-6 text-accent-neon group-hover:bg-accent-neon group-hover:text-black transition-colors duration-500">
                                    {project.icon}
                                </div>
                                <span className="text-muted text-xs uppercase tracking-widest mb-2 block font-heading">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                                <p className="text-muted mb-8 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-3 py-1 rounded-full bg-white/[0.05] text-[10px] text-accent-neon border border-white/[0.05]">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* School IT / ERP Details Block */}
                <div className="mt-20 p-12 rounded-[40px] glass relative overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-6 font-heading">School IT & ERP Management</h3>
                            <p className="text-muted mb-6 leading-relaxed">
                                Expertise in overseeing complex educational technology ecosystems.
                                Handling CBSE portal registrations, ERP administration, and providing
                                seamless technical support to over 2000+ users.
                            </p>
                            <ul className="space-y-4 text-sm text-foreground/80">
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-neon"></div>
                                    Real-time data management & security audits
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-neon"></div>
                                    Infrastructure scaling & network optimization
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-neon"></div>
                                    Staff training and digital literacy workshops
                                </li>
                            </ul>
                        </div>
                        <div className="relative flex justify-center">
                            <div className="w-full h-64 bg-accent-neon/10 rounded-3xl border border-accent-neon/20 flex items-center justify-center">
                                <Cpu className="w-24 h-24 text-accent-neon animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
