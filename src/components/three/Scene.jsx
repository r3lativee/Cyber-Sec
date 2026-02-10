import React, { useRef, useMemo, useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const vertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uTransition;
  uniform float uPixelRatio;

  attribute float aSize;
  attribute vec3 aSource;
  attribute vec3 aTarget;
  attribute float aRandom;
  attribute float aIsShape;

  varying float vOpacity;

  void main() {
    // 1. Determine base position
    vec3 basePos = mix(aSource, aTarget, uTransition);

    // 2. Slow Organic Noise
    float noiseX = sin(uTime * 0.1 + aRandom * 100.0) * 0.4;
    float noiseY = cos(uTime * 0.1 + aRandom * 100.0) * 0.4;
    float noiseZ = sin(uTime * 0.12 + aRandom * 100.0) * 0.4;
    basePos += vec3(noiseX, noiseY, noiseZ);

    // 2.1 LOCAL CIRCULAR ORBIT (Active when shape is formed)
    // We rotate the basePos around the Z-axis slowly
    if (uTransition > 0.1) {
        float orbitAngle = uTime * 0.1 * uTransition;
        float s = sin(orbitAngle);
        float c = cos(orbitAngle);
        float nx = basePos.x * c - basePos.y * s;
        float ny = basePos.x * s + basePos.y * c;
        basePos.x = nx;
        basePos.y = ny;
    }

    // 3. INTERACTION: Smooth Surface Spread (Repulsion)
    // Project mouse to world center plane
    vec3 mousePos = vec3(uMouse.x * 25.0, uMouse.y * 18.0, 0.0);
    float dist = distance(basePos, mousePos);
    
    // Spread Radius
    float spreadRadius = 7.0;
    float push = smoothstep(spreadRadius, 0.0, dist);
    
    // Direction points AWAY from the mouse center
    vec3 dir = normalize(basePos - mousePos);
    
    // Reduced power and more "flat" spread feel
    vec3 finalPos = basePos + (dir * push * 3.5);

    // Fade edges (High visibility for a brighter center)
    vOpacity = (smoothstep(55.0, 5.0, length(finalPos)) * 0.8 + 0.3) * (aIsShape > 0.5 ? 1.0 : 0.6);

    vec4 mvPosition = modelViewMatrix * vec4(finalPos, 1.0);
    
    // Increased particle size
    gl_PointSize = aSize * uPixelRatio * (150.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`

const fragmentShader = `
  varying float vOpacity;
  
  void main() {
    float r = distance(gl_PointCoord, vec2(0.5));
    if (r > 0.45) discard; // Sharper edges
    
    // Brighter Hacker Green with a touch of white for luminance
    vec3 color = vec3(0.1, 1.0, 0.7); 
    gl_FragColor = vec4(color, vOpacity);
  }
`

export function Scene() {
    const meshRef = useRef()
    const { size } = useThree()
    const [iconIndex, setIconIndex] = useState(0)

    const count = 30000 // Increased density for more "glow"
    const shapeCount = 10000 // More particles in the shapes
    const pixelRatio = size.width > 0 ? Math.min(window.devicePixelRatio, 2) : 1

    const [positions, sources, targets, sizes, randoms, isShape] = useMemo(() => {
        const pos = new Float32Array(count * 3)
        const src = new Float32Array(count * 3)
        const tar = new Float32Array(count * 3)
        const sz = new Float32Array(count)
        const rd = new Float32Array(count)
        const ish = new Float32Array(count)

        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 60
            const y = (Math.random() - 0.5) * 45
            const z = (Math.random() - 0.5) * 12

            pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z
            src[i * 3] = x; src[i * 3 + 1] = y; src[i * 3 + 2] = z
            tar[i * 3] = x; tar[i * 3 + 1] = y; tar[i * 3 + 2] = z

            sz[i] = 0.1 + Math.random() * 0.2 // Smaller, sharper nodes
            rd[i] = Math.random()
            ish[i] = i < shapeCount ? 1.0 : 0.0
        }
        return [pos, src, tar, sz, rd, ish]
    }, [])

    // Cyber Research Shape Generators
    const getShape = (index, i, vec) => {
        if (i >= shapeCount) {
            vec.set(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2])
            return
        }

        if (index === 0) {
            // 1. Digital Core (Dodecahedron-like nodes)
            const phi = Math.acos(-1 + (2 * i) / shapeCount)
            const theta = Math.sqrt(shapeCount * Math.PI) * phi
            const r = 9
            vec.set(
                r * Math.cos(theta) * Math.sin(phi),
                r * Math.sin(theta) * Math.sin(phi),
                r * Math.cos(phi)
            )
        } else if (index === 1) {
            // 2. Data Streams (Vertical tubes/lines)
            const column = i % 8
            const r = 2 + Math.random() * 0.5
            const theta = (column / 8) * Math.PI * 2
            const y = ((i / shapeCount) - 0.5) * 25
            vec.set(Math.cos(theta) * r, y, Math.sin(theta) * r)
        } else if (index === 2) {
            // 3. Network Mesh (Flat technical plane)
            const row = Math.floor(i / 70)
            const col = i % 70
            vec.set((col - 35) * 0.4, (row - 35) * 0.4, 0)
        }
    }

    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uTransition: { value: 0 },
        uPixelRatio: { value: pixelRatio }
    }), [])

    useFrame((state) => {
        const { clock, mouse } = state
        uniforms.uTime.value = clock.getElapsedTime()

        if (uniforms.uTransition.value < 1) {
            uniforms.uTransition.value += 0.005 // Faster transition
        }

        uniforms.uMouse.value.x = THREE.MathUtils.lerp(uniforms.uMouse.value.x, mouse.x, 0.05)
        uniforms.uMouse.value.y = THREE.MathUtils.lerp(uniforms.uMouse.value.y, mouse.y, 0.05)

        if (meshRef.current) {
            meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mouse.x * 0.1, 0.03)
            meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -mouse.y * 0.1, 0.03)
        }
    })

    useEffect(() => {
        const interval = setInterval(() => {
            if (!meshRef.current) return
            const src = meshRef.current.geometry.attributes.aSource.array
            const tar = meshRef.current.geometry.attributes.aTarget.array
            const workVec = new THREE.Vector3()

            for (let i = 0; i < count * 3; i++) src[i] = tar[i]
            meshRef.current.geometry.attributes.aSource.needsUpdate = true

            const next = (iconIndex + 1) % 3
            for (let i = 0; i < count; i++) {
                getShape(next, i, workVec)
                tar[i * 3] = workVec.x
                tar[i * 3 + 1] = workVec.y
                tar[i * 3 + 2] = workVec.z
            }
            meshRef.current.geometry.attributes.aTarget.needsUpdate = true

            uniforms.uTransition.value = 0
            setIconIndex(next)
        }, 8000) // 8 second interval
        return () => clearInterval(interval)
    }, [iconIndex])

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
                <bufferAttribute attach="attributes-aSource" count={count} array={sources} itemSize={3} />
                <bufferAttribute attach="attributes-aTarget" count={count} array={targets} itemSize={3} />
                <bufferAttribute attach="attributes-aSize" count={count} array={sizes} itemSize={1} />
                <bufferAttribute attach="attributes-aRandom" count={count} array={randoms} itemSize={1} />
                <bufferAttribute attach="attributes-aIsShape" count={count} array={isShape} itemSize={1} />
            </bufferGeometry>
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    )
}
