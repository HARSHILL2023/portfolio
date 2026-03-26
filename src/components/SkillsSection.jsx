import React, { memo } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', icon: '🌐', color: 'from-orange-400 to-red-500' },
  { name: 'CSS3', icon: '🎨', color: 'from-blue-400 to-indigo-500' },
  { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-orange-500' },
  { name: 'MongoDB', icon: '🍃', color: 'from-green-400 to-emerald-600' },
  { name: 'Render', icon: '☁️', color: 'from-purple-400 to-blue-500' },
  { name: 'Figma', icon: '📐', color: 'from-pink-500 to-purple-600' },
  { name: 'C', icon: '🧩', color: 'from-blue-500 to-cyan-500' },
  { name: 'C++', icon: '🚀', color: 'from-indigo-500 to-blue-600' },
  { name: 'GitHub', icon: '🐙', color: 'from-gray-600 to-black' },
  { name: 'Vercel', icon: '▲', color: 'from-black to-gray-800' },
];

const SkillCard = memo(({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ 
      duration: 0.5, 
      delay: index * 0.05,
      ease: [0.23, 1, 0.32, 1] 
    }}
    whileHover={{ y: -10, scale: 1.05 }}
    className="group relative"
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-2xl`} />
    
    <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-white/20 transition-all duration-300">
      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-3xl shadow-lg ring-1 ring-white/20 group-hover:ring-white/40 transition-all`}>
        {skill.icon}
      </div>
      <span className="text-sm font-bold tracking-wider text-gray-300 group-hover:text-white transition-colors uppercase">
        {skill.name}
      </span>
    </div>
  </motion.div>
));

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 md:py-40 px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-[0.2em] uppercase mb-6">
            Technical Stack
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Toolkit</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/2 right-0 translate-y-1/2 w-64 h-64 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
