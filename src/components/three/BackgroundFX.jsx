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
    vec3 basePos = mix(aSource, aTarget, uTransition);

    float noiseX = sin(uTime * 0.1 + aRandom * 100.0) * 0.4;
    float noiseY = cos(uTime * 0.1 + aRandom * 100.0) * 0.4;
    float noiseZ = sin(uTime * 0.12 + aRandom * 100.0) * 0.4;
    basePos += vec3(noiseX, noiseY, noiseZ);

    if (uTransition > 0.1) {
        float orbitAngle = uTime * 0.1 * uTransition;
        float s = sin(orbitAngle);
        float c = cos(orbitAngle);
        float nx = basePos.x * c - basePos.y * s;
        float ny = basePos.x * s + basePos.y * c;
        basePos.x = nx;
        basePos.y = ny;
    }

    vec3 mousePos = vec3(uMouse.x * 25.0, uMouse.y * 18.0, 0.0);
    float dist = distance(basePos, mousePos);
    
    float spreadRadius = 10.0;
    float push = smoothstep(spreadRadius, 0.0, dist);
    
    vec3 dir = normalize(basePos - mousePos);
    
    vec3 finalPos = basePos + (dir * push * 4.5);

    vOpacity = (smoothstep(55.0, 5.0, length(finalPos)) * 0.8 + 0.3) * (aIsShape > 0.5 ? 1.0 : 0.6);

    vec4 mvPosition = modelViewMatrix * vec4(finalPos, 1.0);
    
    gl_PointSize = aSize * uPixelRatio * (150.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`

const fragmentShader = `
  varying float vOpacity;
  
  void main() {
    float r = distance(gl_PointCoord, vec2(0.5));
    if (r > 0.45) discard;
    
    vec3 color = vec3(0.62, 0.94, 0.0); 
    gl_FragColor = vec4(color, vOpacity);
  }
`

export function BackgroundFX() {
    const meshRef = useRef()
    const { size } = useThree()
    const [iconIndex, setIconIndex] = useState(0)

    const count = 30000
    const shapeCount = 20000
    const pixelRatio = size.width > 0 ? Math.min(window.devicePixelRatio, 2) : 1

    const textPoints = useMemo(() => {
        if (typeof document === 'undefined') return []
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        canvas.width = 800
        canvas.height = 200

        const fontSize = 85
        ctx.fillStyle = 'white'
        ctx.font = `100 ${fontSize}px "Inter", "Space Grotesk", sans-serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'

        const text = "BugThrive Labs"
        const letterSpacing = 12 // px
        let totalWidth = ctx.measureText(text).width + (text.length - 1) * letterSpacing

        let currentX = (canvas.width - totalWidth) / 2 + (ctx.measureText(text[0]).width / 2)
        for (let j = 0; j < text.length; j++) {
            ctx.fillText(text[j], currentX, 100)
            if (j < text.length - 1) {
                currentX += (ctx.measureText(text[j]).width / 2) + (ctx.measureText(text[j + 1]).width / 2) + letterSpacing
            }
        }

        const imageData = ctx.getImageData(0, 0, 800, 200).data
        const pts = []
        for (let y = 0; y < 200; y += 1) {
            for (let x = 0; x < 800; x += 1) {
                const alpha = imageData[(y * 800 + x) * 4 + 3]
                if (alpha > 190) {
                    pts.push({
                        x: (x - 400) * 0.042, // Reduced scale to fit viewport
                        y: (100 - y) * 0.042,
                        z: (Math.random() - 0.5) * 0.05
                    })
                }
            }
        }
        return pts
    }, [])

    const getShape = (index, i, vec, positions) => {
        if (i >= shapeCount) {
            vec.set(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2])
            return
        }

        if (index === 0) {
            if (textPoints.length > 0) {
                const p = textPoints[i % textPoints.length]
                vec.set(p.x, p.y, p.z)
            } else {
                vec.set(0, 0, 0)
            }
        } else if (index === 1) {
            const phi = Math.acos(-1 + (2 * i) / shapeCount)
            const theta = Math.sqrt(shapeCount * Math.PI) * phi
            const r = 10

            vec.set(
                r * Math.cos(theta) * Math.sin(phi),
                r * Math.sin(theta) * Math.sin(phi),
                r * Math.cos(phi)
            )
        } else if (index === 2) {
            const strands = 12
            const strandIndex = i % strands
            const angle = (strandIndex / strands) * Math.PI * 2

            if (i % 3 === 0) {
                const distOnSpoke = Math.random() * 12
                const jitter = (Math.random() - 0.5) * 0.3
                vec.set(
                    Math.cos(angle) * distOnSpoke + jitter,
                    Math.sin(angle) * distOnSpoke + jitter,
                    (Math.random() - 0.5) * 1.5
                )
            } else {
                const ringIndex = Math.floor(Math.random() * 8)
                const ringRadius = (ringIndex + 1) * 1.6
                const randomAngle = Math.random() * Math.PI * 2
                const webAngle = Math.round(randomAngle / (Math.PI / 12)) * (Math.PI / 12)
                vec.set(
                    Math.cos(webAngle) * ringRadius,
                    Math.sin(webAngle) * ringRadius,
                    (Math.random() - 0.5) * 1.0
                )
            }
        }
    }

    const [positions, sources, targets, sizes, randoms, isShape] = useMemo(() => {
        const pos = new Float32Array(count * 3)
        const src = new Float32Array(count * 3)
        const tar = new Float32Array(count * 3)
        const sz = new Float32Array(count)
        const rd = new Float32Array(count)
        const ish = new Float32Array(count)

        const workVec = new THREE.Vector3()

        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 60
            const y = (Math.random() - 0.5) * 45
            const z = (Math.random() - 0.5) * 12

            pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z
            src[i * 3] = x; src[i * 3 + 1] = y; src[i * 3 + 2] = z

            getShape(0, i, workVec, pos)
            tar[i * 3] = workVec.x
            tar[i * 3 + 1] = workVec.y
            tar[i * 3 + 2] = workVec.z

            sz[i] = 0.12 + Math.random() * 0.22
            rd[i] = Math.random()
            ish[i] = i < shapeCount ? 1.0 : 0.0
        }
        return [pos, src, tar, sz, rd, ish]
    }, [textPoints])

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
            uniforms.uTransition.value += 0.007
        }

        uniforms.uMouse.value.x = THREE.MathUtils.lerp(uniforms.uMouse.value.x, mouse.x, 0.05)
        uniforms.uMouse.value.y = THREE.MathUtils.lerp(uniforms.uMouse.value.y, mouse.y, 0.05)

        if (meshRef.current) {
            meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mouse.x * 0.12, 0.03)
            meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -mouse.y * 0.12, 0.03)
        }
    })

    useEffect(() => {
        const delay = iconIndex === 0 ? 5000 : 6000

        const timeout = setTimeout(() => {
            if (!meshRef.current) return
            const src = meshRef.current.geometry.attributes.aSource.array
            const tar = meshRef.current.geometry.attributes.aTarget.array
            const workVec = new THREE.Vector3()

            for (let i = 0; i < count * 3; i++) src[i] = tar[i]
            meshRef.current.geometry.attributes.aSource.needsUpdate = true

            const next = (iconIndex + 1) % 3
            for (let i = 0; i < count; i++) {
                getShape(next, i, workVec, positions)
                tar[i * 3] = workVec.x
                tar[i * 3 + 1] = workVec.y
                tar[i * 3 + 2] = workVec.z
            }
            meshRef.current.geometry.attributes.aTarget.needsUpdate = true

            uniforms.uTransition.value = 0
            setIconIndex(next)
        }, delay)

        return () => clearTimeout(timeout)
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
