import React, { useState } from 'react';
import { Github, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const projects = [
    {
      id: 'p1',
      title: 'Tic Tech Toe Ecommerce',
      description: 'A robust full-stack e-commerce marketplace featuring secure checkout, real-time product management, and a unified shopping dashboard.',
      category: 'FULL STACK',
      badgeColor: 'bg-[#FF5733]',
      link: 'https://tic-tech-toe-ecommerce-website.vercel.app/',
      github: 'https://github.com/HARSHILL2023/tic_tech_toe-ecommerce-website-',
      image: '/assets/hackathons/tic-tech-toe.png',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind']
    },
    {
      id: 'p2',
      title: 'AI Onboarding Engine',
      description: 'An AI-powered talent acquisition ecosystem automating skill gap analysis and learning roadmap generation through LLMs.',
      category: 'FULL STACK',
      badgeColor: 'bg-[#FF5733]',
      link: 'https://art-park-code-forge-hackathon-virid.vercel.app',
      github: 'https://github.com/HARSHILL2023/ArtPark_CodeForge_Hackathon',
      image: '/assets/hackathons/art-park.png',
      tech: ['React', 'GPT-4o', 'Node.js', 'MongoDB', 'React Flow']
    },
    {
      id: 'p3',
      title: 'FleetFlow Logistics',
      description: 'A logistics platform integrating real-time fleet synchronization, driver telemetry, and scalable backend operations.',
      category: 'FULL STACK',
      badgeColor: 'bg-[#2EC4B6]',
      link: '',
      github: 'https://github.com/HARSHILL2023/odoo_x_gujarat-vidyapith',
      image: '/assets/hackathons/fleet-flow.png',
      tech: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'JWT']
    }
  ];

  const categories = ['ALL', 'FULL STACK'];

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b-2 border-black dark:border-[#3A3A3A]">
          <div className="flex items-center gap-4">
            <h2 className="font-bebas text-5xl sm:text-6xl text-black dark:text-[#F7F4EB] tracking-wider uppercase">
              SELECTED WORK
            </h2>
            <div className="hidden sm:block w-24 h-1 bg-black dark:bg-[#3A3A3A]"></div>
          </div>
          <span className="font-mono text-xs font-bold tracking-widest text-black/60 dark:text-[#A1A1A1] uppercase">
            REAL PROJECTS ({projects.length.toString().padStart(2, '0')})
          </span>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`brutal-btn px-5 py-2 font-mono text-xs font-bold tracking-wider uppercase transition-colors ${
                activeCategory === cat
                  ? 'bg-[#FF5733] text-black shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#3A3A3A]'
                  : 'bg-white dark:bg-[#161616] text-black dark:text-[#F7F4EB] hover:bg-[#2EC4B6] dark:hover:bg-[#2EC4B6]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Rebalanced Projects Grid (3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-[#161616] border-[3px] border-black dark:border-[#3A3A3A] shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#3A3A3A] flex flex-col justify-between p-5 group"
            >
              <div>
                {/* Top Badge & Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-3 py-1 border border-black dark:border-[#3A3A3A] font-mono text-[10px] font-bold text-black uppercase ${project.badgeColor}`}>
                    {project.category}
                  </span>
                  <span className="font-mono text-xs font-bold text-black/50 dark:text-[#A1A1A1]">
                    #{project.id.toUpperCase()}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-bebas text-3xl text-black dark:text-[#F7F4EB] tracking-wide mb-2 group-hover:text-[#FF5733] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-medium text-black/80 dark:text-[#A1A1A1] leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Screenshot Container */}
                <div className="w-full aspect-video bg-[#EAE5D9] dark:bg-[#111111] border-2 border-black dark:border-[#3A3A3A] overflow-hidden mb-4 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 bg-[#F7F4EB] dark:bg-[#0D0D0D] border border-black dark:border-[#3A3A3A] font-mono text-[10px] font-bold text-black dark:text-[#F7F4EB]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Links */}
              <div className="pt-4 border-t-2 border-black dark:border-[#2A2A2A] flex items-center justify-between gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-bold text-black dark:text-[#F7F4EB] hover:text-[#FF5733] flex items-center gap-1.5"
                  >
                    <Github size={15} />
                    GITHUB
                  </a>
                )}

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-btn px-4 py-1.5 bg-[#2EC4B6] text-black font-mono text-xs font-bold flex items-center gap-1 uppercase ml-auto"
                  >
                    DEMO
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span className="font-mono text-[10px] font-bold text-black/50 dark:text-[#A1A1A1] uppercase ml-auto border border-black/20 dark:border-[#3A3A3A] px-2 py-1">
                    SOURCE CODE
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
