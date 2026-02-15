import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Resources', href: '#resources' },
    { name: 'Blog', href: '#blog' },
]

export default function GlobalNav() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled || isMenuOpen ? 'py-4 bg-[#0D1117] border-b border-primary/10' : 'py-6 md:py-8 bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <a href="#" className="group flex items-center gap-2 md:gap-4 relative z-[130]">
                        <img
                            src="/assets/images/Full-word_11zon.png"
                            alt="Cyber-Sec Academy"
                            className="h-8 md:h-12 lg:h-16 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all"
                        />
                        <div className="h-4 md:h-8 w-[1px] bg-white/10 hidden sm:block" />
                        <span className="text-[8px] md:text-[14px] font-mono font-bold tracking-[0.2em] md:tracking-[0.4em] text-white/70 group-hover:text-white transition-all uppercase whitespace-nowrap">
                            Labs
                        </span>
                    </a>

                    <div className="hidden md:flex gap-6 lg:gap-10 items-center font-mono">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[10px] lg:text-[11px] uppercase tracking-widest text-muted hover:text-primary transition-all font-bold relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                        <div className="flex items-center gap-4 lg:gap-6 ml-4 lg:ml-6 border-l border-white/10 pl-4 lg:pl-6">
                            <button className="text-[10px] lg:text-[11px] uppercase tracking-widest text-muted hover:text-white transition-all font-bold">
                                Login
                            </button>
                            <button className="px-4 lg:px-6 py-2 bg-primary text-background text-[10px] lg:text-[11px] uppercase tracking-widest font-bold transition-all hover:brightness-110 active:scale-95">
                                Get Started
                            </button>
                        </div>
                    </div>

                    <button
                        className="md:hidden text-white relative z-[130] p-2 -mr-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <div className="fixed inset-0 z-[110] md:hidden">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute inset-0 bg-[#000000] z-0"
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="absolute inset-y-0 right-0 w-[85%] max-w-sm bg-[#0D1117] border-l border-white/10 p-12 flex flex-col z-10 shadow-2xl shadow-black"
                        >
                            <div className="flex flex-col h-full relative z-20">
                                <div className="mb-12">
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] font-mono">
                                        // NAVIGATION_SYSTEM
                                    </span>
                                </div>

                                <nav className="flex flex-col gap-8">
                                    {navLinks.map((link, i) => (
                                        <motion.a
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-xl font-bold font-heading uppercase tracking-widest text-white hover:text-primary transition-colors flex items-center gap-4"
                                        >
                                            <span className="text-[10px] text-primary font-mono">0{i + 1}</span>
                                            {link.name}
                                        </motion.a>
                                    ))}
                                </nav>

                                <div className="mt-auto pt-8 border-t border-white/5 flex flex-col gap-4">
                                    <button className="w-full py-4 text-xs font-bold uppercase tracking-widest text-white border border-white/10 hover:bg-white/5 transition-all font-mono">
                                        Login
                                    </button>
                                    <button className="w-full py-4 text-xs font-bold uppercase tracking-widest text-background bg-primary hover:brightness-110 transition-all font-mono">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}
