import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function InputPointer() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const [isPointer, setIsPointer] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY })
            const target = e.target
            setIsPointer(window.getComputedStyle(target).cursor === 'pointer')
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div className="hidden lg:block">
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary pointer-events-none z-[1000] mix-blend-difference"
                animate={{
                    x: mousePos.x - 16,
                    y: mousePos.y - 16,
                    scale: isPointer ? 1.5 : 1,
                    backgroundColor: isPointer ? 'rgba(0, 229, 255, 0.2)' : 'rgba(0, 229, 255, 0)',
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.5 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-1 h-1 bg-primary rounded-full pointer-events-none z-[1000]"
                animate={{
                    x: mousePos.x - 2,
                    y: mousePos.y - 2,
                }}
                transition={{ type: 'spring', damping: 30, stiffness: 500, mass: 0.1 }}
            />
        </div>
    )
}
