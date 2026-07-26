import React from 'react';
import { Trophy, ArrowUpRight, CalendarDays, Users } from 'lucide-react';

export default function HackathonSection() {
  const hackathons = [
    {
      id: 'h1',
      name: 'Tic Tech Toe Hackathon',
      organizer: 'AIC-GU',
      date: '2025',
      role: 'Team Lead & Full Stack Developer',
      result: 'Winner',
      resultColor: 'bg-[#FF5733]',
      description: 'Led the team to build a complete MERN e-commerce marketplace from scratch within 24 hours.',
      achievement: '🏆 1ST PLACE',
      link: 'https://tic-tech-toe-ecommerce-website.vercel.app/',
      image: '/assets/hackathons/tic-tech-toe.png',
      team: '4 Members'
    },
    {
      id: 'h2',
      name: 'ArtPark CodeForge',
      organizer: 'ArtPark Innovation Labs',
      date: '2025',
      role: 'Full Stack Developer & AI Integration Lead',
      result: 'Finalist',
      resultColor: 'bg-[#2EC4B6]',
      description: 'Built an AI-powered talent acquisition engine with LLM integrations, skill analysis, and React Flow visual mapping.',
      achievement: '🎯 TOP FINALIST',
      link: 'https://art-park-code-forge-hackathon-virid.vercel.app',
      image: '/assets/hackathons/art-park.png',
      team: '4 Members'
    },
    {
      id: 'h3',
      name: 'Odoo × Gujarat Vidyapith',
      organizer: 'Gujarat Vidyapith',
      date: '2025',
      role: 'Full Stack Developer',
      result: 'Participant',
      resultColor: 'bg-[#8B5CF6]',
      description: 'Developed FleetFlow — a full-stack logistics management platform with real-time fleet synchronization and driver telemetry.',
      achievement: '🚀 FINALIST BUILT',
      link: 'https://github.com/HARSHILL2023/odoo_x_gujarat-vidyapith',
      image: '/assets/hackathons/fleet-flow.png',
      team: '4 Members'
    }
  ];

  return (
    <section id="hackathons" className="py-20 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 pb-4 border-b-2 border-black dark:border-[#3A3A3A]">
          <div className="flex items-center gap-4">
            <h2 className="font-bebas text-5xl sm:text-6xl text-black dark:text-[#F7F4EB] tracking-wider uppercase flex items-center gap-3">
              <Trophy size={44} className="text-[#FF5733]" />
              HACKATHONS
            </h2>
            <div className="hidden sm:block w-24 h-1 bg-black dark:bg-[#3A3A3A]"></div>
          </div>
          <span className="font-mono text-xs font-bold tracking-widest text-black/60 dark:text-[#A1A1A1] uppercase">
            EVENTS: 0{hackathons.length}
          </span>
        </div>

        {/* Hackathon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hackathons.map((h) => (
            <div
              key={h.id}
              className="bg-white dark:bg-[#161616] border-[3px] border-black dark:border-[#3A3A3A] shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#3A3A3A] p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="w-full aspect-video bg-[#EAE5D9] dark:bg-[#111111] border-2 border-black dark:border-[#3A3A3A] overflow-hidden mb-4">
                  <img
                    src={h.image}
                    alt={h.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                </div>

                {/* Top: Result + Achievement Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 border border-black dark:border-[#3A3A3A] font-mono text-[10px] font-bold text-black uppercase ${h.resultColor}`}>
                    {h.result}
                  </span>
                  <span className="font-mono text-[10px] font-bold text-black dark:text-[#F7F4EB] uppercase tracking-wider">
                    {h.achievement}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-bebas text-3xl text-black dark:text-[#F7F4EB] tracking-wide mb-1 group-hover:text-[#FF5733] transition-colors">
                  {h.name}
                </h3>

                {/* Organizer + Date Row */}
                <div className="flex items-center gap-3 text-black/60 dark:text-[#A1A1A1] font-mono text-xs font-bold mb-3">
                  <span className="flex items-center gap-1 uppercase">
                    <Users size={12} />
                    {h.organizer}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <CalendarDays size={12} />
                    {h.date}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm font-medium text-black/80 dark:text-[#A1A1A1] leading-relaxed mb-3">
                  {h.description}
                </p>

                {/* Role Badge */}
                <div className="inline-block px-3 py-1 bg-[#F7F4EB] dark:bg-[#0D0D0D] border border-black dark:border-[#3A3A3A] font-mono text-[10px] font-bold text-black dark:text-[#F7F4EB] uppercase mb-4">
                  {h.role}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t-2 border-black dark:border-[#2A2A2A] flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-black/60 dark:text-[#A1A1A1] uppercase flex items-center gap-1">
                  <Users size={12} />
                  {h.team}
                </span>

                <a
                  href={h.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn px-3 py-1.5 bg-[#FF5733] text-black font-mono text-xs font-bold flex items-center gap-1 uppercase"
                >
                  VIEW
                  <ArrowUpRight size={14} />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
