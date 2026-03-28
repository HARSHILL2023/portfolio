import React, { useState, useEffect, useRef, useMemo, memo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';

const SKILLS = [
  // Inner Circle: Core
  { name: 'JavaScript', category: 'Core', radius: 100, angle: 45, icon: '⚡', level: 90, desc: 'Advanced ES6+, Async/Await, Web APIs', color: '#f7df1e' },
  { name: 'HTML5', category: 'Core', radius: 100, angle: 165, icon: '🌐', level: 95, desc: 'Semantic HTML, Accessibility, SEO', color: '#e34f26' },
  { name: 'CSS3', category: 'Core', radius: 100, angle: 285, icon: '🎨', level: 92, desc: 'Flexbox, Grid, Animations, Responsive Design', color: '#264de4' },

  // Middle Circle: Backend & DB
  { name: 'Node.js', category: 'Backend', radius: 180, angle: 0, icon: '🟢', level: 85, desc: 'Express, REST APIs, Authentication', color: '#339933' },
  { name: 'MongoDB', category: 'Backend', radius: 180, angle: 90, icon: '🍃', level: 80, desc: 'NoSQL Design, Mongoose, Aggregations', color: '#47a248' },
  { name: 'React', category: 'Backend', radius: 180, angle: 210, icon: '⚛️', level: 94, desc: 'Hooks, State Management, Performance', color: '#61dafb' },
  { name: 'Appwrite', category: 'Backend', radius: 180, angle: 300, icon: '🔥', level: 82, desc: 'BaaS, Database, Auth, Storage', color: '#f02e65' },

  // Outer Circle: Tools & Others
  { name: 'GitHub', category: 'Tools', radius: 260, angle: 30, icon: '🐙', level: 88, desc: 'Version Control, Actions, Collaboration', color: '#ffffff' },
  { name: 'Vercel', category: 'Tools', radius: 260, angle: 80, icon: '▲', level: 90, desc: 'Deployment, Analytics, Edge Functions', color: '#ffffff' },
  { name: 'Render', category: 'Tools', radius: 260, angle: 130, icon: '☁️', level: 85, desc: 'Cloud Hosting, Static Sites, Web Services', color: '#46e3b7' },
  { name: 'Figma', category: 'Tools', radius: 260, angle: 180, icon: '📐', level: 80, desc: 'UI/UX Design, Prototyping, Design Systems', color: '#f24e1e' },
  { name: 'C', category: 'Tools', radius: 260, angle: 230, icon: '🧩', level: 75, desc: 'Data Structures, Memory Management', color: '#a8b9cc' },
  { name: 'C++', category: 'Tools', radius: 260, angle: 280, icon: '🚀', level: 78, desc: 'OOP, STL, Competitive Programming', color: '#00599c' },
  { name: 'Tailwind', category: 'Tools', radius: 260, angle: 330, icon: '🌊', level: 95, desc: 'Utility-first CSS, Custom Configuration', color: '#38b2ac' },
];

const SkillNode = memo(({ skill, isHighlighted, onClick }) => {
  const x = skill.radius * Math.cos((skill.angle * Math.PI) / 180);
  const y = skill.radius * Math.sin((skill.angle * Math.PI) / 180);

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="cursor-pointer group"
      onClick={() => onClick(skill)}
    >
      {/* Animated Connection Line to Center */}
      <motion.line
        x1="0" y1="0"
        x2={x} y2={y}
        stroke={skill.color}
        strokeWidth="1"
        strokeDasharray="4 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: isHighlighted ? 1 : 0.3,
          opacity: isHighlighted ? 0.8 : 0.2
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Node Outer Ring */}
      <motion.circle
        cx={x} cy={y}
        r="24"
        fill="transparent"
        stroke={skill.color}
        strokeWidth="1"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHighlighted ? [0.2, 0.5, 0.2] : 0.1,
          scale: isHighlighted ? [1, 1.2, 1] : 1
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Node Core */}
      <motion.circle
        cx={x} cy={y}
        r="12"
        fill={skill.color}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHighlighted ? 1 : 0.4,
          filter: isHighlighted ? `drop-shadow(0 0 12px ${skill.color})` : 'none'
        }}
        className="transition-all duration-300"
      />

      {/* Icon/Emoji */}
      <text
        x={x} y={y}
        textAnchor="middle"
        dominantBaseline="central"
        style={{ fontSize: '10px', userSelect: 'none' }}
      >
        {skill.icon}
      </text>

      {/* Label (Only when highlighted or hover) */}
      <motion.text
        x={x} y={y + 30}
        textAnchor="middle"
        className="fill-white font-mono text-[10px] tracking-widest font-bold uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHighlighted ? 1 : 0 }}
      >
        {skill.name}
      </motion.text>
    </motion.g>
  );
});

export default function RadarSkills() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [radarRotation, setRadarRotation] = useState(0);
  const containerRef = useRef(null);
  const [isRadarView, setIsRadarView] = useState(true);

  // Radar Sweep Animation Logic
  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setRadarRotation(prev => (prev + 1) % 360);
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Parallax Tilt Effect
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      id="skills"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-transparent flex flex-col items-center justify-center relative overflow-hidden py-24 px-6 z-10"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.15)_0%,_transparent_70%)] opacity-30 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-20"
      >
        <span className="inline-block px-4 py-1 rounded-full border border-cyan-500/30 text-cyan-400 text-[10px] font-mono tracking-[0.3em] uppercase mb-4">
          Tactical Analysis
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic">
          Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Arsenal</span>
        </h2>
      </motion.div>

      {/* Radar Toggle */}
      <div className="absolute top-10 right-10 z-50 flex gap-4">
        <button
          onClick={() => setIsRadarView(!isRadarView)}
          className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-mono text-cyan-400 uppercase tracking-widest hover:border-cyan-400/50 transition-all"
        >
          {isRadarView ? 'Switch to Grid' : 'Switch to Radar'}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {isRadarView ? (
          <motion.div
            key="radar"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{ rotateX: mouseY, rotateY: mouseX }}
            className="relative w-full max-w-[800px] aspect-square flex items-center justify-center will-change-transform"
          >
            <svg
              viewBox="-400 -400 800 800"
              className="w-full h-full drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              {/* Radar Circles */}
              {[100, 180, 260].map((radius, i) => (
                <circle
                  key={i}
                  cx="0" cy="0"
                  r={radius}
                  className="fill-none stroke-white/10 stroke-[1]"
                />
              ))}

              {/* Radar Crosshair Lines */}
              <line x1="-300" y1="0" x2="300" y2="0" className="stroke-white/5 stroke-[1]" />
              <line x1="0" y1="-300" x2="0" y2="300" className="stroke-white/5 stroke-[1]" />

              {/* Compass Degrees */}
              {[0, 90, 180, 270].map(angle => {
                const x = 320 * Math.cos((angle * Math.PI) / 180);
                const y = 320 * Math.sin((angle * Math.PI) / 180);
                return (
                  <text
                    key={angle}
                    x={x} y={y}
                    className="fill-white/20 font-mono text-[8px]"
                    textAnchor="middle"
                  >
                    {angle}°
                  </text>
                );
              })}

              {/* Radar scanner ray removed per user request */}

              {/* Skill Nodes */}
              {SKILLS.map((skill, index) => {
                const diff = (skill.angle - radarRotation + 360) % 360;
                const isHighlighted = diff < 45 || diff > 315;
                return (
                  <SkillNode
                    key={index}
                    skill={skill}
                    isHighlighted={isHighlighted}
                    onClick={setActiveSkill}
                  />
                );
              })}

              {/* Radar Center Glow */}
              <circle cx="0" cy="0" r="2" className="fill-cyan-400 blur-[2px]" />
              <circle cx="0" cy="0" r="1" className="fill-white" />
            </svg>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full max-w-7xl"
          >
            {SKILLS.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setActiveSkill(skill)}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all cursor-pointer overflow-hidden backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform">{skill.icon}</div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-2 font-mono">{skill.name}</h3>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4, 5].map((step) => (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 + step * 0.1 }}
                        className={`w-3 h-1 rounded-full transition-all duration-700 ${skill.level / 20 >= step
                            ? 'bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]'
                            : 'bg-white/5 border border-white/10'
                          }`}
                      />
                    ))}
                  </div>
                  <span className="text-[9px] font-mono text-cyan-500 group-hover:text-cyan-400 transition-colors font-black tracking-tighter brightness-125">
                    PWR_{skill.level}%
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Glassmorphism Detail Card */}
      <AnimatePresence>
        {activeSkill && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 pointer-events-none"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto" onClick={() => setActiveSkill(null)} />
            <div className="relative w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/20 p-8 rounded-2xl shadow-xl pointer-events-auto shadow-[0_0_50px_rgba(168,85,247,0.2)]">
              <button
                onClick={() => setActiveSkill(null)}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              >
                ✕
              </button>

              <div className="flex items-center gap-6 mb-8 uppercase italic font-bold">
                <div className="text-6xl bg-white/5 p-4 rounded-2xl ring-1 ring-white/10">
                  {activeSkill.icon}
                </div>
                <div>
                  <p className="text-[10px] font-mono text-purple-400 tracking-[0.4em] mb-1">{activeSkill.category}</p>
                  <h3 className="text-4xl text-white tracking-tight">{activeSkill.name}</h3>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-[10px] font-mono text-white/50 mb-2 tracking-widest uppercase">
                    <span>Combat Proficiency</span>
                    <span>{activeSkill.level}%</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden ring-1 ring-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${activeSkill.level}%` }}
                      className="h-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                    />
                  </div>
                </div>

                <p className="text-white/70 leading-relaxed text-sm font-medium italic italic">
                  "{activeSkill.desc}"
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/60 font-mono uppercase tracking-widest">
                    Operational_Ready
                  </span>
                  <span className="px-3 py-1 rounded-full bg-purple-400/10 border border-purple-400/20 text-[10px] text-purple-400 font-mono uppercase tracking-widest">
                    Main_Stack
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="mt-24 text-center pointer-events-none opacity-20">
        <p className="font-mono text-[8px] tracking-[2em] uppercase text-white">Advanced_Sensors_Active • v2.0</p>
      </footer>
    </section>
  );
}
