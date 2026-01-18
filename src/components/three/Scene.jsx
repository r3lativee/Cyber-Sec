import React, { useRef, useMemo, useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import * as THREE from 'three'

export function Scene() {
    const meshRef = useRef()
    const { viewport, mouse: r3fMouse } = useThree()
    const [iconIndex, setIconIndex] = useState(0)
    const [transition, setTransition] = useState(0)

    const count = 1800 // Higher count for better volume

    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 60
            const y = (Math.random() - 0.5) * 45
            const z = (Math.random() - 0.5) * 20

            temp.push({
                id: i,
                cloudPos: new THREE.Vector3(x, y, z),
                currentSource: new THREE.Vector3(x, y, z),
                currentTarget: new THREE.Vector3(x, y, z),
                rnd: Math.random(),
                sz: 0.02 + Math.random() * 0.04
            })
        }
        return temp
    }, [])

    const updateTargetVec = (index, i, vec) => {
        const p = particles[i]
        if (index === 0) { // Idle Cloud
            vec.copy(p.cloudPos)
        } else if (index === 1) { // Brackets
            const seg = i % 300
            if (seg < 100) vec.set(-8 + (seg < 50 ? seg * 0.08 : (100 - seg) * 0.08), (seg - 50) * 0.15, 0)
            else if (seg < 200) vec.set((seg - 150) * 0.04, (seg - 150) * 0.2, 0)
            else vec.set(8 - (seg < 250 ? (seg - 200) * 0.08 : (300 - seg) * 0.08), (seg - 250) * 0.15, 0)
        } else if (index === 2) { // 3D Cube
            const side = i % 12
            const t = (Math.random() - 0.5) * 12
            const s = 6
            if (side === 0) vec.set(-s, -s, t)
            else if (side === 1) vec.set(s, -s, t)
            else if (side === 2) vec.set(-s, s, t)
            else if (side === 3) vec.set(s, s, t)
            else if (side === 4) vec.set(t, -s, -s)
            else if (side === 5) vec.set(t, s, -s)
            else if (side === 6) vec.set(t, -s, s)
            else if (side === 7) vec.set(t, s, s)
            else if (side === 8) vec.set(-s, t, -s)
            else if (side === 9) vec.set(s, t, -s)
            else if (side === 10) vec.set(-s, t, s)
            else vec.set(s, t, s)
        } else { // Large Grid
            const st = 6
            vec.set(((i % 12) - 5.5) * st, ((Math.floor(i / 12) % 10) - 4.5) * st, ((Math.floor(i / 120) % 5) - 2) * st)
        }
    }

    const dummy = new THREE.Object3D()
    const workVec = new THREE.Vector3()
    const mouseVec = new THREE.Vector3()

    useFrame((state) => {
        const { clock, mouse } = state
        const time = clock.getElapsedTime()

        // Smooth Transition State
        if (transition < 1) {
            setTransition(prev => Math.min(1, prev + 0.003))
        }

        // INTERACTION FIX: Manual mouse mapping to world units
        // viewport.width/height gives us the world dimensions at the camera focus
        mouseVec.set(mouse.x * (viewport.width / 2), mouse.y * (viewport.height / 2), 0)

        particles.forEach((p, i) => {
            updateTargetVec(iconIndex, i, p.currentTarget)

            // Interpolate Morphs
            workVec.lerpVectors(p.currentSource, p.currentTarget, transition)

            // Subtle Floating
            workVec.x += Math.sin(time * 0.15 + p.rnd * 15) * 0.3
            workVec.y += Math.cos(time * 0.15 + p.rnd * 15) * 0.3

            // MOUSE INTERACTION: Strong break-away effect
            const dist = workVec.distanceTo(mouseVec)
            const threshold = 12 // Increased interaction radius
            if (dist < threshold) {
                const factor = Math.pow(1 - (dist / threshold), 1.5)
                // Move towards original cloud positions (breaking the shape)
                workVec.lerp(p.cloudPos, factor * 0.95)
                // Add a slight tilt/parallax towards mouse
                workVec.add(new THREE.Vector3().subVectors(mouseVec, workVec).multiplyScalar(factor * 0.4))
            }

            dummy.position.copy(workVec)
            dummy.scale.setScalar(p.sz)
            dummy.updateMatrix()
            meshRef.current.setMatrixAt(i, dummy.matrix)
        })

        meshRef.current.instanceMatrix.needsUpdate = true

        // Parallax the whole scene based on mouse
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -mouse.y * 0.2, 0.05)
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mouse.x * 0.2, 0.05)
    })

    useEffect(() => {
        const interval = setInterval(() => {
            particles.forEach((p, i) => {
                updateTargetVec(iconIndex, i, p.currentSource)
            })
            setIconIndex((iconIndex + 1) % 4)
            setTransition(0)
        }, 12000)
        return () => clearInterval(interval)
    }, [iconIndex])

    return (
        <group>
            <Environment preset="studio" />
            <instancedMesh ref={meshRef} args={[null, null, count]}>
                <sphereGeometry args={[1, 6, 6]} />
                <meshPhysicalMaterial
                    color="#ffffff"
                    transparent
                    opacity={0.6}
                    metalness={1}
                    roughness={0}
                    transmission={0.9}
                    thickness={2}
                    envMapIntensity={3}
                />
            </instancedMesh>
            <ambientLight intensity={0.5} />
            <spotLight position={[50, 50, 50]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" />
            <pointLight position={[-30, -30, 20]} intensity={1.5} color="#4FD1FF" />
        </group>
    )
}
