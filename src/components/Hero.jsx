import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Terminal, Code2, BookOpen } from 'lucide-react';

export default function Hero() {
  const RESUME_URL = "https://drive.google.com/file/d/1fY528YIw2HERsLX2stcFgaSFXrPOv8q_/view?usp=sharing";

  const socialLinks = [
    { name: 'GITHUB', url: 'https://github.com/HARSHILL2023' },
    { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/harshil-patel-b00063395/' },
    { name: 'LEETCODE', url: 'https://leetcode.com/u/harshilPatel2301/' },
    { name: 'TWITTER', url: 'https://x.com/HarshilPat74943' },
    { name: 'YOUTUBE', url: 'https://youtube.com/@harshilpatel-20?si=L9HrbJJDXA0dCqUG' },
  ];

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
    }
  };

  return (
    <section id="home" className="min-h-[calc(100vh-80px)] pt-28 pb-16 sm:py-20 lg:py-24 px-6 flex items-center relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Headline & Student Intro */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow Label */}
          <motion.span
            variants={itemVariants}
            className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-black dark:text-[#F7F4EB] font-bold tracking-widest leading-none mb-1"
          >
            HEY, I'M
          </motion.span>
          
          {/* Dominant Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-bebas text-7xl sm:text-[9.5rem] md:text-[10.5rem] lg:text-[11.25rem] xl:text-[12.25rem] text-[#FF5733] leading-[0.82] tracking-tight mb-3 uppercase drop-shadow-sm select-none"
          >
            HARSHIL PATEL
          </motion.h1>
          
          {/* Authentic Student Role */}
          <motion.h2
            variants={itemVariants}
            className="font-mono text-base sm:text-lg md:text-xl font-black tracking-wider text-black dark:text-[#F7F4EB] mb-6 uppercase inline-block border-b-[3px] border-black dark:border-[#3A3A3A] pb-1.5"
          >
            3rd Semester B.Tech CSE Student &amp; Full Stack Developer
          </motion.h2>

          {/* Authentic Student-Focused Description */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-base sm:text-lg font-medium text-black/85 dark:text-[#A1A1A1] max-w-xl leading-relaxed mb-8"
          >
            Passionate about building fast, interactive web applications and exploring AI-driven software. Currently crafting MERN stack projects, learning modern web architectures, and solving real-world coding challenges.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4.5 mb-10"
          >
            <a
              href="#projects"
              className="h-13 sm:h-14 px-6 sm:px-8 bg-[#FF5733] text-black font-mono text-xs sm:text-sm font-bold tracking-wider uppercase border-[3px] border-black dark:border-[#3A3A3A] shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#3A3A3A] inline-flex items-center justify-center gap-2.5 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_#000] dark:hover:shadow-[7px_7px_0px_0px_#3A3A3A]"
            >
              VIEW PROJECTS
              <ArrowUpRight size={19} />
            </a>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="h-13 sm:h-14 px-6 sm:px-8 bg-[#2EC4B6] text-black font-mono text-xs sm:text-sm font-bold tracking-wider uppercase border-[3px] border-black dark:border-[#3A3A3A] shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#3A3A3A] inline-flex items-center justify-center gap-2.5 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_#000] dark:hover:shadow-[7px_7px_0px_0px_#3A3A3A]"
            >
              DOWNLOAD RESUME
              <Download size={19} />
            </a>
          </motion.div>

          {/* Social Link Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 sm:gap-3.5 pt-1"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9.5 px-4 sm:px-4.5 inline-flex items-center justify-center bg-white dark:bg-[#161616] border-2 border-black dark:border-[#3A3A3A] shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#3A3A3A] font-mono text-xs font-bold tracking-wider text-black dark:text-[#F7F4EB] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FF5733] hover:text-white"
              >
                {link.name} ↗
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Interactive Brutalist Code Terminal Frame */}
        <motion.div
          className="lg:col-span-5 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md sm:max-w-lg bg-white dark:bg-[#161616] border-[3px] border-black dark:border-[#3A3A3A] shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#3A3A3A] p-4 sm:p-5">
            
            {/* Terminal Window Header Bar */}
            <div className="flex items-center justify-between border-b-2 border-black dark:border-[#2A2A2A] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 bg-[#FF5733] border border-black dark:border-[#3A3A3A] rounded-full inline-block"></span>
                <span className="w-3.5 h-3.5 bg-[#FFC72C] border border-black dark:border-[#3A3A3A] rounded-full inline-block"></span>
                <span className="w-3.5 h-3.5 bg-[#2EC4B6] border border-black dark:border-[#3A3A3A] rounded-full inline-block"></span>
              </div>
              <span className="font-mono text-xs font-bold tracking-widest text-black dark:text-[#F7F4EB] uppercase flex items-center gap-1.5">
                <Terminal size={14} className="text-[#FF5733]" />
                HARSHIL_PATEL.DEV
              </span>
            </div>

            {/* Terminal Code Matrix Content */}
            <div className="w-full aspect-square bg-[#0D0D0D] border-2 border-black dark:border-[#2A2A2A] p-5 font-mono text-xs text-white/90 flex flex-col justify-between relative overflow-hidden">
              {/* Code Snippet Box */}
              <div className="space-y-2">
                <div className="text-emerald-400 font-bold flex items-center gap-2 border-b border-white/10 pb-2">
                  <Code2 size={14} />
                  <span>student_profile.config.ts</span>
                </div>

                <div className="pt-2 text-white/80 space-y-1">
                  <p><span className="text-purple-400">const</span> developer = &#123;</p>
                  <p className="pl-4"><span className="text-[#2EC4B6]">name</span>: <span className="text-[#FFC72C]">'Harshil Patel'</span>,</p>
                  <p className="pl-4"><span className="text-[#2EC4B6]">degree</span>: <span className="text-[#FFC72C]">'B.Tech CSE (Sem 3)'</span>,</p>
                  <p className="pl-4"><span className="text-[#2EC4B6]">stack</span>: [<span className="text-[#FFC72C]">'React'</span>, <span className="text-[#FFC72C]">'Node'</span>, <span className="text-[#FFC72C]">'MongoDB'</span>],</p>
                  <p className="pl-4"><span className="text-[#2EC4B6]">learning</span>: [<span className="text-[#FFC72C]">'AI'</span>, <span className="text-[#FFC72C]">'Machine Learning'</span>],</p>
                  <p className="pl-4"><span className="text-[#2EC4B6]">status</span>: <span className="text-[#FF5733]">'Building Projects 🚀'</span></p>
                  <p>&#125;;</p>
                </div>
              </div>

              {/* Learning Badge Widget */}
              <div className="bg-[#1E1E1E] border border-white/20 p-3 rounded-none">
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className="text-[#2EC4B6] font-bold uppercase flex items-center gap-1">
                    <BookOpen size={12} /> CURRENT FOCUS
                  </span>
                  <span className="text-[#FF5733] font-bold">SEM 03</span>
                </div>
                <p className="text-[11px] text-white/70 font-sans">
                  Deep diving into MERN stack web architectures &amp; AI integration algorithms.
                </p>
              </div>

              {/* Command Prompt Line */}
              <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-emerald-400 text-[11px]">
                <span className="animate-pulse">❯</span>
                <span>npm run dev:portfolio</span>
                <span className="w-2 h-4 bg-emerald-400 animate-pulse ml-auto"></span>
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="mt-4 pt-3 border-t-2 border-black dark:border-[#2A2A2A] flex items-center justify-between font-mono text-xs font-bold text-black dark:text-[#F7F4EB]">
              <span className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
                <span className="w-2.5 h-2.5 bg-emerald-500 border border-black dark:border-[#3A3A3A] rounded-full animate-ping"></span>
                OPEN FOR COLLABORATION
              </span>
              <span className="bg-[#2EC4B6] text-black px-2.5 py-0.5 border border-black dark:border-[#3A3A3A] text-[10px] uppercase">
                INDIA
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
