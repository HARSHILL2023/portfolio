import React from 'react';
import { motion } from 'framer-motion';

const journeyData = [
  {
    title: "Foundational Programming",
    description: "Established core computational logic and memory management through intensive study of C and C++.",
    period: "Phase I",
    isCurrent: false
  },
  {
    title: "Web Architecture",
    description: "Transitioned to modern web development, mastering the full ecosystem including React, Node.js, and TypeScript.",
    period: "Phase II",
    isCurrent: false
  },
  {
    title: "Systems & Scalability",
    description: "Developed and deployed enterprise-grade full-stack applications with robust API architectures and database management.",
    period: "Phase III",
    isCurrent: false
  },
  {
    title: "Artificial Intelligence & LLMs",
    description: "Exploring the frontier of machine learning and dedicated to building specialized Large Language Model architectures.",
    period: "Phase IV",
    isCurrent: true
  },
  {
    title: "Full Stack AI Engineer",
    description: "Targeting the synthesis of high-performance software engineering with advanced intelligent systems.",
    period: "Future",
    isCurrent: false
  }
];

const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative mb-16 md:mb-24 flex flex-col md:flex-row items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      {/* Spacer for desktop layout */}
      <div className="hidden md:block w-5/12" />

      {/* Central Indicator */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 z-10">
        <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 transition-all duration-500
          ${item.isCurrent
            ? 'bg-purple-500 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.6)] scale-125'
            : 'bg-zinc-900 border-zinc-700'}`}
        />
        {item.isCurrent && (
          <div className="absolute inset-0 rounded-full bg-purple-500/30 animate-ping -z-10" />
        )}
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className={`w-full md:w-5/12 pl-12 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}
      >
        <span className={`text-[10px] uppercase tracking-[0.2em] font-bold mb-2 block
          ${item.isCurrent ? 'text-purple-400' : 'text-zinc-500'}`}>
          {item.period} {item.isCurrent && "— Active"}
        </span>
        <h3 className={`text-xl md:text-2xl font-semibold mb-3 tracking-tight
          ${item.isCurrent ? 'text-white' : 'text-zinc-200'}`}>
          {item.title}
        </h3>
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-sm md:max-w-none ml-auto mr-auto md:ml-0 md:mr-0">
          {item.description}
        </p>
      </motion.div>
    </div>
  );
};

export default function MyJourney() {
  return (
    <section id="journey" className="px-6 py-24 md:py-32 max-w-6xl mx-auto overflow-visible relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-3xl overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.12)] border border-white/10"
        style={{
          background: 'rgba(10, 8, 20, 0.08)',
          backdropFilter: 'blur(20px) saturate(160%)',
          WebkitBackdropFilter: 'blur(20px) saturate(160%)',
        }}
      >
        {/* Main Section Inner Card */}
        <div className="p-8 md:p-16 lg:p-20 relative z-10">
          <header className="mb-20 md:mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-zinc-800" />
              <span className="text-xs uppercase tracking-[0.4em] text-zinc-500 font-bold whitespace-nowrap">
                Evolutionary Path
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter max-w-3xl leading-[1.05]">
              Architecting professional solutions through <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 font-black">continuous growth</span>.
            </h1>
          </header>

          <div className="relative">
            {/* Elegant Vertical Line */}
            <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-zinc-900/0 via-zinc-700/40 to-zinc-900/0" />

            <div className="flex flex-col">
              {journeyData.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>

          <footer className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-blue-500/30 animate-pulse" />
              <p className="text-zinc-500 text-[10px] tracking-widest uppercase font-bold">
                Integration State: Active Development
              </p>
            </div>
            <div className="flex gap-2 text-[10px] font-mono text-zinc-600">
              <span>2023</span>
              <span className="text-zinc-800">•</span>
              <span>2024</span>
              <span className="text-zinc-800">•</span>
              <span>2025</span>
              <span className="text-zinc-800">•</span>
              <span className="text-blue-500 font-bold underline underline-offset-4">2026</span>
            </div>
          </footer>
        </div>

        {/* Subtle accent light inside card */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
      </motion.div>
    </section>
  );
}
