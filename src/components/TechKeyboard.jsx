import React, { Suspense, useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import gsap from 'gsap';

const SKILLS_LIST = [
    { id: 1, name: "js", label: "JavaScript", desc: "Yeeting code into the DOM since '95, it's bussin! 💯🚀", color: "#f7df1e" },
    { id: 2, name: "react", label: "React", desc: "Component-based wizardry. Virtual DOM is the real MVP ⚛️✨", color: "#61dafb" },
    { id: 3, name: "nodejs", label: "Node.js", desc: "JavaScript on the server? Deadass the best way to scale! 🔙🔚", color: "#6cc24a" },
    { id: 4, name: "html", label: "HTML5", desc: "The skeleton of the internet. Still bussin since day one 💀📜", color: "#e34c26" },
    { id: 5, name: "css", label: "CSS3", desc: "The ultimate drip. Making things look premium since forever 💅🔥", color: "#264de4" },
    { id: 6, name: "github", label: "GitHub", desc: "Sliding into those pull requests, IYKYK! 🐙🔥", color: "#ffffff" },
    { id: 7, name: "ts", label: "C++", desc: "C on steroids. Performance so fast it's actually scary, no cap! ⚡🔥", color: "#00599c" },
    { id: 8, name: "vue", label: "C Language", desc: "The OG of languages. Manual memory management is just built different 💾💀", color: "#a8b9cc" },
    { id: 9, name: "nextjs", label: "VS Code", desc: "The only editor you need. Extension game is too strong! 💻✨", color: "#007acc" },
    { id: 10, name: "mongodb", label: "Postman", desc: "Testing APIs like a boss. Everything is 200 OK, respectfully 📮✅", color: "#ff6c37" },
    { id: 11, name: "git", label: "Render", desc: "Deployments that just work. The ultimate glow up for your apps ☁️🚀", color: "#46e3b7" },
    { id: 12, name: "docker", label: "Vercel", desc: "Making the web fast AF. Shipping at light speed! 🏎️💨", color: "#ffffff" },
    { id: 13, name: "aws", label: "Figma", desc: "Where the aesthetic starts. Design system is goated 🎨📐", color: "#f24e1e" }
];

const BoxReveal = ({ children, color = "#22d3ee" }) => (
    <div className="relative overflow-hidden w-fit">
        <motion.div
            initial={{ y: 75, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.div>
        <motion.div
            initial={{ left: 0 }}
            whileInView={{ left: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
            style={{
                position: "absolute",
                top: 2,
                bottom: 2,
                left: 0,
                right: 0,
                background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                zIndex: 20
            }}
        />
    </div>
);

const NeuralBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        const particleCount = 20;

        const resize = () => {
            if (canvas && canvas.parentElement) {
                canvas.width = window.innerWidth;
                canvas.height = canvas.parentElement.offsetHeight;
            }
        };

        class Particle {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = (Math.random() - 0.5) * 0.3;
                this.size = Math.random() * 2 + 1;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(34, 211, 238, 0.2)';
                ctx.fill();
            }
        }

        const init = () => {
            particles = Array.from({ length: particleCount }, () => new Particle());
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p, i) => {
                p.update();
                p.draw();
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 250) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(34, 211, 238, ${0.05 * (1 - dist / 250)})`;
                        ctx.stroke();
                    }
                }
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        init();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-60 pointer-events-none" />;
};

const TechKeyboard = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });
    const [splineApp, setSplineApp] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activeSkill, setActiveSkill] = useState(null);

    const onLoad = async (app) => {
        setSplineApp(app);

        const kbd = app.findObjectByName('keyboard');
        if (kbd) {
            kbd.visible = false;
            gsap.set(kbd.scale, { x: 0.01, y: 0.01, z: 0.01 });
            gsap.set(kbd.position, { x: 0, y: -20, z: 0 });
            gsap.set(kbd.rotation, { x: 0, y: Math.PI / 12, z: 0 });

            setTimeout(() => {
                kbd.visible = true;
                gsap.to(kbd.scale, {
                    x: 0.33, y: 0.33, z: 0.33,
                    duration: 1.5,
                    ease: "elastic.out(1, 0.6)"
                });
                setIsLoading(false);
            }, 800);
        }

        app.setVariable('heading', 'Neural Link');
        app.setVariable('desc', 'Ready to synchronize. Hover keys to explore.');

        const allObjects = app.getAllObjects();
        allObjects.forEach((obj) => {
            if (obj.name.includes('keycap') || SKILLS_LIST.some(s => s.name === obj.name)) {
                obj.visible = true;
                gsap.from(obj.position, {
                    y: obj.position.y + 100,
                    duration: 0.8,
                    delay: Math.random() * 0.5 + 0.5,
                    ease: "bounce.out"
                });
            }
        });

        app.addEventListener('mouseHover', (e) => {
            const skill = SKILLS_LIST.find(s => s.name === e.target.name);
            if (skill && e.target.name) {
                setActiveSkill(skill);
                app.setVariable('heading', skill.label.toUpperCase());
                app.setVariable('desc', skill.desc);
                gsap.to(e.target.scale, { x: 1.1, y: 1.1, z: 1.1, duration: 0.2 });

                const kbd = app.findObjectByName('keyboard');
                if (kbd) gsap.to(kbd.position, { y: -18, duration: 0.4 });
            } else if (!e.target.name || e.target.name === 'base' || e.target.name === 'keyboard') {
                setActiveSkill(null);
                app.setVariable('heading', 'NEURAL LINK');
                app.setVariable('desc', 'Ready to synchronize. Hover keys to explore.');

                const kbd = app.findObjectByName('keyboard');
                if (kbd) gsap.to(kbd.position, { y: -20, duration: 0.6 });

                SKILLS_LIST.forEach(s => {
                    const obj = app.findObjectByName(s.name);
                    if (obj) gsap.to(obj.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
                });
            }
        });
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!splineApp) return;
            const randomSkill = SKILLS_LIST[Math.floor(Math.random() * SKILLS_LIST.length)];
            const keycap = splineApp.findObjectByName(randomSkill.name);
            if (keycap) {
                splineApp.setVariable('heading', 'SIGNAL DETECTED');
                gsap.to(keycap.position, {
                    y: -10,
                    duration: 0.1,
                    onComplete: () => gsap.to(keycap.position, { y: 0, duration: 0.2 })
                });
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [splineApp]);

    return (
        <section id="skills" className="w-full min-h-[140dvh] relative bg-[#010101] pt-40 pb-60 flex flex-col items-center overflow-hidden">
            <div className="absolute inset-0 bg-[#000000]" />
            <NeuralBackground />
            <div className="absolute inset-0 neural-grid opacity-30 pointer-events-none" />

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-cyan-600/5 blur-[100px] rounded-full pointer-events-none animate-pulse-slow" />

            <div className="sticky top-24 z-30 mb-52 flex flex-col items-center text-center px-6">
                <BoxReveal color="#22d3ee">
                    <h2 className="text-7xl md:text-9xl font-black italic tracking-tighter bg-[linear-gradient(to_bottom,#fff_20%,#3b82f6_50%,#fff_80%)] bg-[length:100%_200%] animate-[shine_3s_linear_infinite] bg-clip-text text-transparent uppercase drop-shadow-[0_0_20px_rgba(34,211,238,0.3)] filter brightness-125 px-10">
                        SKILLS
                    </h2>
                </BoxReveal>
                <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: "auto" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex items-center gap-4 mt-8 opacity-40 overflow-hidden"
                >
                    <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-cyan-500"></div>
                    <p className="text-cyan-500 font-mono text-[10px] md:text-sm tracking-[1.5em] uppercase whitespace-nowrap">
                        Exploring_Neural_Sync
                    </p>
                    <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-cyan-500"></div>
                </motion.div>
            </div>

            <div className="relative z-10 w-full flex flex-col items-center" ref={containerRef}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-screen max-w-[100vw] aspect-video md:aspect-[21/9] bg-transparent cursor-move will-change-transform"
                >
                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center flex-col gap-6 z-50 bg-[#010101]">
                            <div className="w-16 h-16 border-2 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin" />
                            <p className="text-cyan-500 font-mono text-xs tracking-widest animate-pulse uppercase">INIT_NEURAL_LINK...</p>
                        </div>
                    )}

                    <Suspense fallback={null}>
                        {isInView && (
                            <Spline
                                scene="/assets/skills-keyboard.spline"
                                onLoad={onLoad}
                            />
                        )}
                    </Suspense>

                    <AnimatePresence mode="wait">
                        {activeSkill && (
                            <motion.div
                                key={activeSkill.id}
                                initial={{ opacity: 0, scale: 0.8, x: '-50%', y: 20 }}
                                animate={{ opacity: 1, scale: 1, x: '-50%', y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, x: '-50%', y: -20 }}
                                className="absolute top-10 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
                            >
                                <div className="relative group">
                                    <div className="absolute inset-0 blur-3xl opacity-20 transition-colors duration-500" style={{ backgroundColor: activeSkill.color }} />
                                    <div className="relative bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center gap-6 min-w-[320px] shadow-2xl overflow-hidden">
                                        <div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl font-bold bg-white/5 border border-white/5 relative overflow-hidden" style={{ color: activeSkill.color }}>
                                            <div className="absolute inset-0 bg-current opacity-10 animate-pulse" />
                                            {activeSkill.label[0]}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-white font-black tracking-widest text-lg uppercase mb-1">{activeSkill.label}</h3>
                                            <p className="text-white/60 font-mono text-[10px] leading-relaxed max-w-[200px]">{activeSkill.desc}</p>
                                        </div>
                                        <div className="absolute right-0 top-0 bottom-0 w-1 bg-current opacity-20" style={{ color: activeSkill.color }} />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-mono text-white/20 tracking-widest uppercase pointer-events-none">
                        Use Mouse to Drag • Hover Keys to Explore
                    </div>
                </motion.div>
            </div>

            <div className="mt-20 opacity-20 pointer-events-none">
                <div className="w-60 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-4" />
                <p className="text-[9px] font-mono tracking-[2em] text-white uppercase text-center">
                    Hardware Interface v2.0-WebGL
                </p>
            </div>
        </section>
    );
};

export default TechKeyboard;
