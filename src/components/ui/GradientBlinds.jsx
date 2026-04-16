import React, { useRef, useEffect, useCallback } from 'react';

/**
 * GradientBlinds — A high-performance WebGL animated background using OGL.
 * Renders gradient "blind" strips with a mouse-tracking spotlight effect.
 */
const GradientBlinds = ({
    gradientColors = ['#8B5CF6', '#EC4899', '#3B82F6'],
    angle = 15,
    noise = 0.2,
    blindCount = 10,
    blindMinWidth = 80,
    spotlightRadius = 0.4,
    spotlightSoftness = 1.2,
    spotlightOpacity = 0.8,
    mouseDampening = 0.2,
    distortAmount = 0.2,
    shineDirection = 'left',
    mixBlendMode = 'lighten',
}) => {
    const containerRef = useRef(null);
    const animFrameRef = useRef(null);
    const rendererRef = useRef(null);

    // Convert hex to vec3 for GLSL
    const hexToVec3 = useCallback((hex) => {
        const r = parseInt(hex.slice(1, 3), 16) / 255;
        const g = parseInt(hex.slice(3, 5), 16) / 255;
        const b = parseInt(hex.slice(5, 7), 16) / 255;
        return [r, g, b];
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let gl, program, mesh, mouse, time;
        let isDestroyed = false;

        const initOGL = async () => {
            try {
                const { Renderer, Program, Mesh, Triangle } = await import('ogl');

                if (isDestroyed) return;

                // Create renderer
                gl = new Renderer({
                    canvas: undefined,
                    dpr: Math.min(window.devicePixelRatio, 2),
                    alpha: true,
                    antialias: false,
                    premultipliedAlpha: true,
                });

                rendererRef.current = gl;
                const glCanvas = gl.gl.canvas;
                glCanvas.style.width = '100%';
                glCanvas.style.height = '100%';
                glCanvas.style.position = 'absolute';
                glCanvas.style.top = '0';
                glCanvas.style.left = '0';
                if (mixBlendMode) {
                    glCanvas.style.mixBlendMode = mixBlendMode;
                }
                container.appendChild(glCanvas);

                const colors = gradientColors.map(hexToVec3);

                // Vertex shader
                const vertex = /* glsl */ `
                    attribute vec2 position;
                    attribute vec2 uv;
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        gl_Position = vec4(position, 0.0, 1.0);
                    }
                `;

                // Fragment shader — creates animated gradient blinds with spotlight
                const fragment = /* glsl */ `
                    precision highp float;
                    varying vec2 vUv;
                    
                    uniform float uTime;
                    uniform vec2 uMouse;
                    uniform vec2 uResolution;
                    uniform vec3 uColor0;
                    uniform vec3 uColor1;
                    uniform vec3 uColor2;
                    uniform float uAngle;
                    uniform float uNoise;
                    uniform float uBlindCount;
                    uniform float uSpotlightRadius;
                    uniform float uSpotlightSoftness;
                    uniform float uSpotlightOpacity;
                    uniform float uDistort;

                    // Simple pseudo-random
                    float hash(vec2 p) {
                        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
                    }

                    // Value noise
                    float vnoise(vec2 p) {
                        vec2 i = floor(p);
                        vec2 f = fract(p);
                        f = f * f * (3.0 - 2.0 * f);
                        float a = hash(i);
                        float b = hash(i + vec2(1.0, 0.0));
                        float c = hash(i + vec2(0.0, 1.0));
                        float d = hash(i + vec2(1.0, 1.0));
                        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
                    }

                    void main() {
                        vec2 uv = vUv;
                        float aspect = uResolution.x / uResolution.y;
                        
                        // Angle rotation for blinds
                        float rad = uAngle * 3.14159 / 180.0;
                        float s = sin(rad);
                        float c = cos(rad);
                        vec2 rotUv = vec2(
                            uv.x * c - uv.y * s,
                            uv.x * s + uv.y * c
                        );
                        
                        // Add noise distortion
                        float n = vnoise(uv * 4.0 + uTime * 0.15) * uNoise;
                        float distort = vnoise(uv * 2.0 + uTime * 0.1) * uDistort;
                        
                        // Create blind strips
                        float blindPos = fract((rotUv.x + n + distort) * uBlindCount);
                        float blind = smoothstep(0.0, 0.02, blindPos) * smoothstep(1.0, 0.98, blindPos);
                        
                        // Animated gradient across blinds
                        float gradT = rotUv.x + sin(uTime * 0.3) * 0.2 + n * 0.5;
                        gradT = clamp(gradT, 0.0, 1.0);
                        
                        vec3 color;
                        if (gradT < 0.5) {
                            color = mix(uColor0, uColor1, gradT * 2.0);
                        } else {
                            color = mix(uColor1, uColor2, (gradT - 0.5) * 2.0);
                        }
                        
                        // Spotlight effect following the mouse
                        vec2 mousePos = uMouse;
                        float dist = distance(uv, mousePos);
                        float spotlight = 1.0 - smoothstep(uSpotlightRadius - uSpotlightSoftness * 0.1, uSpotlightRadius + uSpotlightSoftness * 0.1, dist);
                        spotlight *= uSpotlightOpacity;
                        
                        // Combine
                        float alpha = blind * (0.3 + spotlight * 0.7);
                        color += spotlight * 0.15;
                        
                        // Subtle shimmer
                        float shimmer = vnoise(uv * 10.0 + uTime * 0.5) * 0.08;
                        color += shimmer;
                        
                        gl_FragColor = vec4(color, alpha);
                    }
                `;

                const geometry = new Triangle(gl.gl);

                program = new Program(gl.gl, {
                    vertex,
                    fragment,
                    uniforms: {
                        uTime: { value: 0 },
                        uMouse: { value: [0.5, 0.5] },
                        uResolution: { value: [container.offsetWidth, container.offsetHeight] },
                        uColor0: { value: colors[0] || [0.545, 0.361, 0.965] },
                        uColor1: { value: colors[1] || [0.925, 0.286, 0.6] },
                        uColor2: { value: colors[2] || [0.231, 0.510, 0.965] },
                        uAngle: { value: angle },
                        uNoise: { value: noise },
                        uBlindCount: { value: blindCount },
                        uSpotlightRadius: { value: spotlightRadius },
                        uSpotlightSoftness: { value: spotlightSoftness },
                        uSpotlightOpacity: { value: spotlightOpacity },
                        uDistort: { value: distortAmount },
                    },
                    transparent: true,
                    depthTest: false,
                    depthWrite: false,
                });

                mesh = new Mesh(gl.gl, { geometry, program });

                // Mouse tracking
                mouse = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };
                time = 0;

                const onMouseMove = (e) => {
                    const rect = container.getBoundingClientRect();
                    mouse.targetX = (e.clientX - rect.left) / rect.width;
                    mouse.targetY = 1.0 - (e.clientY - rect.top) / rect.height;
                };

                container.addEventListener('mousemove', onMouseMove, { passive: true });

                const onResize = () => {
                    if (isDestroyed) return;
                    const w = container.offsetWidth;
                    const h = container.offsetHeight;
                    gl.setSize(w, h);
                    program.uniforms.uResolution.value = [w, h];
                };

                window.addEventListener('resize', onResize, { passive: true });
                onResize();

                // Animation loop
                const animate = () => {
                    if (isDestroyed) return;
                    animFrameRef.current = requestAnimationFrame(animate);

                    time += 0.016;
                    mouse.x += (mouse.targetX - mouse.x) * mouseDampening;
                    mouse.y += (mouse.targetY - mouse.y) * mouseDampening;

                    program.uniforms.uTime.value = time;
                    program.uniforms.uMouse.value = [mouse.x, mouse.y];

                    gl.render({ scene: mesh });
                };

                animate();

                // Store cleanup refs
                container._oglCleanup = () => {
                    container.removeEventListener('mousemove', onMouseMove);
                    window.removeEventListener('resize', onResize);
                };
            } catch (err) {
                // OGL import failed — fall back silently (CSS gradient fallback visible)
                console.warn('GradientBlinds: WebGL init failed, using CSS fallback.', err);
            }
        };

        initOGL();

        return () => {
            isDestroyed = true;
            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
            if (container._oglCleanup) container._oglCleanup();
            if (rendererRef.current) {
                const canvas = rendererRef.current.gl.canvas;
                if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
            }
        };
    }, [
        angle, noise, blindCount, spotlightRadius, spotlightSoftness,
        spotlightOpacity, mouseDampening, distortAmount, mixBlendMode,
        gradientColors, hexToVec3,
    ]);

    return (
        <div
            ref={containerRef}
            style={{
                position: 'absolute',
                inset: 0,
                overflow: 'hidden',
                background: `linear-gradient(135deg, ${gradientColors[0]}22, ${gradientColors[1]}11, ${gradientColors[2]}22)`,
            }}
        />
    );
};

export default GradientBlinds;
