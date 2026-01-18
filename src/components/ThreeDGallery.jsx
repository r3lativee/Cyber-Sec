import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, MeshDistortMaterial, PresentationControls, Float, MeshTransmissionMaterial, Environment, ContactShadows } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

const productRenders = [
    { id: 1, url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999', title: 'Minimalist Watch' },
    { id: 2, url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070', title: 'Acoustic Soul' },
    { id: 3, url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070', title: 'Speedform' },
    { id: 4, url: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070', title: 'Optic Clarity' },
]

function BackgroundShapes() {
    const mesh1 = useRef()
    const mesh2 = useRef()
    const mesh3 = useRef()
    const mesh4 = useRef()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (mesh1.current) {
            mesh1.current.rotation.x = t * 0.1
            mesh1.current.rotation.y = t * 0.15
            mesh1.current.position.y = 2 + Math.sin(t * 0.5) * 0.5
        }
        if (mesh2.current) {
            mesh2.current.rotation.x = t * 0.12
            mesh2.current.rotation.z = t * 0.1
            mesh2.current.position.y = -2 + Math.cos(t * 0.5) * 0.5
        }
        if (mesh3.current) {
            mesh3.current.rotation.y = t * 0.2
            mesh3.current.position.x = -6 + Math.sin(t * 0.3) * 0.5
        }
        if (mesh4.current) {
            mesh4.current.rotation.z = t * 0.15
            mesh4.current.position.x = 6 + Math.cos(t * 0.4) * 0.5
        }
    })

    return (
        <group>
            {/* Transparent Glass Shapes */}
            <mesh ref={mesh1} position={[-5, 2, -5]}>
                <torusKnotGeometry args={[1, 0.3, 128, 32]} />
                <MeshTransmissionMaterial
                    thickness={0.5}
                    roughness={0.1}
                    transmission={1}
                    ior={1.2}
                    color="#4FD1FF"
                />
            </mesh>
            <mesh ref={mesh3} position={[-7, -3, -8]}>
                <octahedronGeometry args={[1.5, 0]} />
                <MeshTransmissionMaterial
                    thickness={1}
                    roughness={0}
                    transmission={1}
                    ior={1.5}
                    color="#ffffff"
                />
            </mesh>

            {/* Metal Shapes */}
            <mesh ref={mesh2} position={[5, -2, -5]}>
                <icosahedronGeometry args={[2, 0]} />
                <meshStandardMaterial
                    color="#ffffff"
                    metalness={1}
                    roughness={0.1}
                />
            </mesh>
            <mesh ref={mesh4} position={[7, 3, -6]}>
                <tetrahedronGeometry args={[2, 0]} />
                <meshStandardMaterial
                    color="#ffffff"
                    metalness={1}
                    roughness={0.05}
                />
            </mesh>
        </group>
    )
}

function MainModel() {
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh scale={1.2}>
                <torusGeometry args={[1, 0.4, 64, 128]} />
                <MeshTransmissionMaterial
                    backside
                    samples={16}
                    thickness={0.5}
                    chromaticAberration={0.05}
                    anisotropy={0.3}
                    distortion={0.3}
                    distortionScale={0.3}
                    temporalDistortion={0.1}
                    color="#4FD1FF"
                />
            </mesh>
        </Float>
    )
}

export function ThreeDGallery() {
    return (
        <section id="work" className="relative min-h-screen py-32 bg-[#050505] overflow-hidden">
            {/* Full-section Background Canvas */}
            <div className="absolute inset-0 z-0 opacity-60">
                <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 45 }}>
                    <Suspense fallback={null}>
                        <BackgroundShapes />
                        <Environment preset="studio" />
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={2} color="#4FD1FF" />
                        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#7C7CFF" />
                    </Suspense>
                </Canvas>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent-neon font-heading text-sm uppercase tracking-[0.3em] mb-6 block font-bold">
                            02 // 3D Product Design
                        </span>
                        <h2 className="text-6xl md:text-9xl font-black font-heading mb-8 tracking-tighter leading-[0.85]">
                            BEYOND <br /> THE <span className="text-gradient">SCREEN</span>
                        </h2>
                        <p className="text-muted text-lg md:text-xl max-w-md mb-12 leading-relaxed">
                            Transforming concepts into high-fidelity three-dimensional realities.
                            Specializing in procedural materials, complex lighting, and interactive WebGL experiences.
                        </p>
                        <div className="flex gap-4">
                            <button className="group relative px-10 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:pr-14">
                                <span className="relative z-10 font-heading text-xs uppercase tracking-widest">View All Renders</span>
                                <div className="absolute inset-y-0 right-[-20px] group-hover:right-4 transition-all duration-300 flex items-center font-bold">
                                    →
                                </div>
                            </button>
                        </div>
                    </motion.div>

                    <div className="h-[500px] w-full relative">
                        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
                            <Suspense fallback={null}>
                                <Environment preset="studio" />
                                <PresentationControls
                                    global={false}
                                    config={{ mass: 2, tension: 500 }}
                                    snap={{ mass: 4, tension: 1500 }}
                                    rotation={[0, 0.3, 0]}
                                    polar={[-Math.PI / 3, Math.PI / 3]}
                                    azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
                                >
                                    <MainModel />
                                </PresentationControls>
                                <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2} far={4} />
                                <ambientLight intensity={1} />
                                <spotLight position={[10, 20, 10]} angle={0.15} penumbra={1} intensity={3} castShadow />
                                <spotLight position={[-10, 20, -10]} angle={0.15} penumbra={1} intensity={2} color="#7C7CFF" />
                                <pointLight position={[0, 0, 5]} intensity={1} />
                            </Suspense>
                        </Canvas>
                    </div>
                </div>

                {/* Render Gallery */}
                <div className="mt-40">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h3 className="text-3xl font-bold font-heading uppercase tracking-tighter">Rendered Prototypes</h3>
                            <p className="text-muted text-sm mt-3 uppercase tracking-widest">Static high-fidelity visualizations</p>
                        </div>
                        <div className="h-[1px] flex-1 bg-white/10 mx-10 mb-3 hidden md:block"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {productRenders.map((render, index) => (
                            <motion.div
                                key={render.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="group relative aspect-square overflow-hidden rounded-[2rem] glass-dark border border-white/5"
                            >
                                <img
                                    src={render.url}
                                    alt={render.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <h4 className="text-2xl font-heading font-black uppercase tracking-tight leading-none mb-2">{render.title}</h4>
                                    <span className="text-accent-neon text-[10px] uppercase tracking-[0.3em] font-bold">Studio Render // 2026</span>
                                </div>
                                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] transition-opacity duration-500"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
