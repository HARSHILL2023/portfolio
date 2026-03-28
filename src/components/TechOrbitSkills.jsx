import React, { useState } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

const SKILLS = [
    // Core Frontend - Inner Orbit (Fast)
    { id: 'react', name: 'React', level: 95, color: '#61DAFB', orbit: 1, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { id: 'js', name: 'JavaScript', level: 95, color: '#F7DF1E', glow: '#F7DF1E', orbit: 1, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { id: 'ts', name: 'Tailwind CSS', level: 95, color: '#06B6D4', glow: '#06B6D4', orbit: 1, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { id: 'html', name: 'HTML5', level: 90, color: '#E34F26', glow: '#E34F26', orbit: 1, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },

    // Core Backend / Utils - Middle Orbit (Medium Speed, Reverse)
    { id: 'node', name: 'Node.js', level: 85, color: '#339933', glow: '#339933', orbit: 2, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { id: 'css', name: 'CSS3', level: 90, color: '#1572B6', glow: '#1572B6', orbit: 2, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { id: 'cpp', name: 'C++', level: 80, color: '#00599C', glow: '#00599C', orbit: 2, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
    { id: 'c', name: 'C Language', level: 75, color: '#A8B9CC', glow: '#A8B9CC', orbit: 2, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },

    // Deployment & Tools - Outer Orbit (Slow)
    { id: 'github', name: 'GitHub', level: 90, color: '#FFFFFF', glow: '#ffffff', orbit: 3, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
    { id: 'vercel', name: 'Vercel', level: 90, color: '#FFFFFF', glow: '#ffffff', orbit: 3, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
    { id: 'netlify', name: 'Netlify', level: 90, color: '#00C7B7', glow: '#00C7B7', orbit: 3, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg' },
    { id: 'render', name: 'Render', level: 80, color: '#46E3B7', glow: '#46E3B7', orbit: 3, icon: 'https://images.opencollective.com/render/7183e8b/logo/256.png' },
];

const RADIUS = { 1: 140, 2: 240, 3: 350 };
const SPEEDS = { 1: 0.25, 2: -0.15, 3: 0.1 };

const OrbitItem = ({ skill, index, totalInOrbit, radius, speed, isSystemPaused, hoveredSkill, setHoveredSkill }) => {
    const angleOffset = (index / totalInOrbit) * 360;
    const [angle, setAngle] = useState(angleOffset);

    // If the system is paused, stop animating
    useAnimationFrame((t, delta) => {
        if (!isSystemPaused) {
            setAngle((prev) => (prev + speed * (delta / 16)) % 360);
        }
    });

    const x = radius * Math.cos((angle * Math.PI) / 180);
    const y = radius * Math.sin((angle * Math.PI) / 180);

    const isHovered = hoveredSkill === skill.id;
    const isDimmed = hoveredSkill !== null && hoveredSkill !== skill.id;

    return (
        <motion.div
            className="absolute top-1/2 left-1/2 z-20 cursor-pointer"
            style={{ x, y, marginLeft: '-32px', marginTop: '-32px' }}
            animate={{
                scale: isHovered ? 1.4 : (isDimmed ? 0.6 : 1),
                opacity: isDimmed ? 0.2 : 1,
                zIndex: isHovered ? 50 : 20
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onMouseEnter={() => setHoveredSkill(skill.id)}
            onMouseLeave={() => setHoveredSkill(null)}
        >
            <div className="relative group w-16 h-16">
                {/* Skill Orb */}
                <div
                    className="w-full h-full rounded-full flex items-center justify-center font-bold text-xs shadow-xl border border-white/5 backdrop-blur-sm transition-all duration-300 relative z-20"
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.01)',
                        backdropFilter: 'blur(2px)',
                        boxShadow: isHovered ? `0 0 30px ${skill.glow || skill.color}80` : `0 0 10px ${skill.glow || skill.color}15`,
                        borderColor: isHovered ? (skill.glow || skill.color) : 'rgba(255,255,255,0.05)'
                    }}
                >
                    <SkillIcon src={skill.icon} name={skill.name} />
                </div>

                {/* Hover Display Card - positioned below orb */}
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-[#000000]/30 backdrop-blur-md border border-white/5 rounded-xl p-3 shadow-2xl pointer-events-none z-30"
                    >
                        {/* Glow effect matching skill color */}
                        <div
                            className="absolute inset-0 rounded-xl opacity-20 blur-md"
                            style={{ backgroundColor: skill.color }}
                        />

                        <div className="relative z-10 mb-2 text-center border-b border-white/10 pb-2">
                            <h4 className="font-bold text-sm tracking-[0.2em] uppercase text-white drop-shadow-md" style={{ textShadow: `0 0 10px ${skill.color}50` }}>{skill.name}</h4>
                        </div>

                        <div className="relative z-10 flex justify-between items-center text-[9px] text-white/50 mb-1.5 uppercase tracking-widest font-mono">
                            <span>Proficiency</span>
                            <span className="text-white font-bold">{skill.level}%</span>
                        </div>
                        <div className="relative z-10 h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                style={{ backgroundColor: skill.color }}
                                className="h-full rounded-full shadow-[0_0_10px_currentColor] brightness-125"
                            />
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

const SkillIcon = ({ src, name }) => {
    const [error, setError] = useState(false);

    if (error || !src) {
        return <span className="text-white font-bold text-[10px] tracking-wider">{name.substring(0, 3).toUpperCase()}</span>;
    }

    return (
        <img
            src={src}
            alt={name}
            onError={() => setError(true)}
            className="w-8 h-8 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
            style={name === 'GitHub' || name === 'Vercel' ? { filter: 'invert(1)' } : {}}
            loading="lazy"
        />
    );
};

export default function TechOrbitSkills() {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const isPaused = hoveredSkill !== null;

    return (
        <section id="skills" className="py-24 md:py-32 relative flex flex-col items-center justify-center min-h-screen bg-transparent z-10 selection:bg-purple-500/30 px-4 md:px-8">
            {/* Liquid Glass Wrapper for the Entire Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="max-w-[1200px] w-full mx-auto relative rounded-[40px] overflow-hidden"
                style={{
                    boxShadow: '0 0 60px rgba(130, 0, 219, 0.2), 0 0 120px rgba(99,102,241,0.1)'
                }}
            >
                {/* Glowing conic border only (transparent center) */}
                <div className="absolute inset-0 pointer-events-none rounded-[40px] p-[2px] z-20" 
                     style={{ 
                         WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', 
                         WebkitMaskComposite: 'xor', 
                         maskComposite: 'exclude' 
                     }}>
                    <motion.div
                        className="w-[250%] h-[250%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"
                        style={{
                            background: 'conic-gradient(from 0deg, transparent 0%, #a855f7 40%, transparent 60%, #22d3ee 80%, transparent 100%)',
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    />
                </div>

                {/* Main Glass Panel */}
                <div className="relative z-10 w-full rounded-[38px] bg-transparent flex flex-col items-center py-20 shadow-none">

                    {/* Ambient Internal Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-600/10 blur-[120px] pointer-events-none" />
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16 relative z-30"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm mb-8 shadow-none">
                            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                            <span className="text-purple-300 text-[10px] font-mono tracking-[0.2em] uppercase">SYSTEM ARSENAL</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase mb-4">
                            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Core</span>
                        </h2>
                        <p className="text-white/60 font-mono text-[10px] uppercase tracking-[0.3em] max-w-lg mx-auto leading-relaxed">
                            A centralized hub of technical proficiencies, actively rotating in a high-efficiency environment.
                        </p>
                    </motion.div>

                    {/* Orbit Container using translate + scale for perfect responsiveness without causing layout overflow */}
                    <div className="relative w-full overflow-hidden flex justify-center items-center h-[450px] sm:h-[600px] md:h-[800px] z-10">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.45] sm:scale-75 md:scale-100 flex items-center justify-center transition-transform duration-700 ease-out">
                            <div className="relative w-[800px] h-[800px] flex items-center justify-center">

                                {/* Background Ambient Glow */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none" />

                                {/* Visible Bright Rings */}
                                {[1, 2, 3].map(orbit => (
                                    <div
                                        key={`ring-${orbit}`}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-500"
                                        style={{
                                            width: RADIUS[orbit] * 2,
                                            height: RADIUS[orbit] * 2,
                                            border: orbit % 2 === 0 ? '2px dashed' : '2px solid',
                                            borderColor: isPaused ? 'rgba(168,85,247,0.3)' : 'rgba(168,85,247,0.7)',
                                            boxShadow: isPaused ? 'none' : '0 0 30px rgba(168,85,247,0.2), inset 0 0 20px rgba(168,85,247,0.1)',
                                            opacity: 1
                                        }}
                                    />
                                ))}



                                {/* Orbiting Planets (Skills) */}
                                {SKILLS.map((skill) => {
                                    const orbitSkills = SKILLS.filter(s => s.orbit === skill.orbit);
                                    const index = orbitSkills.findIndex(s => s.id === skill.id);

                                    return (
                                        <OrbitItem
                                            key={skill.id}
                                            skill={skill}
                                            index={index}
                                            totalInOrbit={orbitSkills.length}
                                            radius={RADIUS[skill.orbit]}
                                            speed={SPEEDS[skill.orbit]}
                                            isSystemPaused={isPaused}
                                            hoveredSkill={hoveredSkill}
                                            setHoveredSkill={setHoveredSkill}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                </div> {/* End of Main Glass Panel */}
            </motion.div>
        </section>
    );
}
