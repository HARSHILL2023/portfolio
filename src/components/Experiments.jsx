import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Experiments() {
  const experiments = [
    {
      title: 'MemoFlip Challenge',
      description: 'Cognitive enhancement game focused on memory card matching and pattern recognition.',
      tech: ['JAVASCRIPT', 'DOM', 'CSS3'],
      link: 'https://github.com/HARSHILL2023/game/tree/main/memroy%20flip%20card%20game',
      image: '/assets/games/memory.png'
    },
    {
      title: 'Typing Velocity Test',
      description: 'High-precision utility measuring keystroke velocity, WPM accuracy, and latency.',
      tech: ['REACT', 'HOOKS', 'STATE'],
      link: 'https://github.com/HARSHILL2023/game/tree/main/typingtest',
      image: '/assets/games/typing.png'
    },
    {
      title: 'Whack-A-Mole Reflex',
      description: 'Reaction-speed training game centered on rapid target acquisition and timing.',
      tech: ['CANVAS', 'TIMERS', 'DOM'],
      link: 'https://github.com/HARSHILL2023/game/tree/main/whack%20a%20mole',
      image: '/assets/games/whack.png'
    }
  ];

  return (
    <section id="experiments" className="py-12 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-bebas text-4xl sm:text-5xl text-black dark:text-[#F7F4EB] tracking-wider uppercase">
            OTHER EXPERIMENTS
          </h2>
          <div className="flex-1 h-1 bg-black dark:bg-[#3A3A3A]"></div>
        </div>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiments.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#161616] border-[3px] border-black dark:border-[#3A3A3A] shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#3A3A3A] p-4 flex gap-4 items-center group hover:bg-[#F7F4EB] dark:hover:bg-[#1E1E1E] transition-colors"
            >
              {/* Thumbnail Image Box */}
              <div className="w-20 h-20 bg-[#EAE5D9] dark:bg-[#111111] border-2 border-black dark:border-[#3A3A3A] overflow-hidden flex-shrink-0 relative">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400&auto=format&fit=crop";
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <h3 className="font-bebas text-xl text-black dark:text-[#F7F4EB] truncate group-hover:text-[#FF5733] transition-colors">
                    {exp.title}
                  </h3>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 bg-[#2EC4B6] border border-black dark:border-[#3A3A3A] hover:bg-[#FF5733] hover:text-white transition-colors text-black"
                    title="View Source Code"
                  >
                    <ArrowUpRight size={14} />
                  </a>
                </div>

                <p className="text-xs text-black/70 dark:text-[#A1A1A1] font-medium line-clamp-2 mb-2">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-1.5 py-0.5 bg-white dark:bg-[#0D0D0D] border border-black dark:border-[#3A3A3A] font-mono text-[9px] font-bold text-black dark:text-[#F7F4EB]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
