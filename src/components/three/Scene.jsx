import React, { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const vertexShader = `
  varying vec2 vUv;
  varying float vLife;
  uniform float uTime;
  uniform vec2 uMouse;
  attribute float aLife;
  attribute float aSize;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  float snoise(vec3 v) {
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute( permute( permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
    float n_ = 0.142857142857;
    vec3  ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                  dot(p2,x2), dot(p3,x3) ) );
  }

  void main() {
    vUv = uv;
    vLife = aLife;
    
    vec3 pos = position;
    
    // Smooth floating noise
    float noiseX = snoise(vec3(pos.x * 0.1, pos.y * 0.1, uTime * 0.2 + aLife));
    float noiseY = snoise(vec3(pos.y * 0.1, pos.x * 0.1, uTime * 0.2 + aLife));
    
    pos.x += noiseX * 1.5;
    pos.y += noiseY * 1.5;

    // Displacement by mouse
    float mouseDist = distance(pos.xy, uMouse);
    float force = smoothstep(12.0, 0.0, mouseDist);
    vec2 dir = normalize(pos.xy - uMouse);
    pos.xy += dir * force * 4.0;
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = aSize * (400.0 / -mvPosition.z) * (0.8 + noiseX * 0.2);
    gl_Position = projectionMatrix * mvPosition;
  }
`

const fragmentShader = `
  varying vec2 vUv;
  varying float vLife;
  uniform vec3 uColor;

  void main() {
    float r = distance(gl_PointCoord, vec2(0.5));
    if (r > 0.5) discard;
    
    float strength = 1.0 - (r * 2.0);
    strength = pow(strength, 3.0);
    
    // Edge softening
    gl_FragColor = vec4(uColor, strength * 0.4);
  }
`

export function Scene() {
    const meshRef = useRef()
    const { viewport } = useThree()

    const count = 10000
    const [positions, lives, sizes] = useMemo(() => {
        const pos = new Float32Array(count * 3)
        const lv = new Float32Array(count)
        const sz = new Float32Array(count)
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 60
            pos[i * 3 + 1] = (Math.random() - 0.5) * 40
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10
            lv[i] = Math.random()
            sz[i] = 0.5 + Math.random() * 2.0
        }
        return [pos, lv, sz]
    }, [])

    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uColor: { value: new THREE.Color("#4FD1FF") }
    }), [])

    useFrame((state) => {
        const { clock, mouse } = state
        uniforms.uTime.value = clock.getElapsedTime()

        // Correct mouse scale for Three.js world coordinates
        const targetX = mouse.x * (viewport.width / 2)
        const targetY = mouse.y * (viewport.height / 2)

        uniforms.uMouse.value.x = THREE.MathUtils.lerp(uniforms.uMouse.value.x, targetX, 0.05)
        uniforms.uMouse.value.y = THREE.MathUtils.lerp(uniforms.uMouse.value.y, targetY, 0.05)

        if (meshRef.current) {
            meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.05
        }
    })

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
                <bufferAttribute attach="attributes-aLife" count={count} array={lives} itemSize={1} />
                <bufferAttribute attach="attributes-aSize" count={count} array={sizes} itemSize={1} />
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
