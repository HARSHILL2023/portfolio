import React from 'react';
import { Gamepad2, ArrowUpRight, Play } from 'lucide-react';

export default function GamesSection() {
  const games = [
    {
      id: 'g1',
      title: 'MEMORY FLIP CHALLENGE',
      description: 'A cognitive enhancement game focused on card matching, pattern recognition, and memory retention.',
      mechanics: 'Flip two cards to find matching pairs with minimum moves.',
      link: 'https://github.com/HARSHILL2023/game/tree/main/memroy%20flip%20card%20game',
      image: '/assets/games/memory.png',
      bgColor: 'bg-[#8B5CF6]',
      textColor: 'text-white',
      tags: ['CANVAS', 'STATE', 'JAVASCRIPT']
    },
    {
      id: 'g2',
      title: 'TACTILE TYPING TEST',
      description: 'A high-precision utility measuring keystroke velocity, WPM accuracy, and real-time typing dynamics.',
      mechanics: 'Type displayed text strings with live speed feedback.',
      link: 'https://github.com/HARSHILL2023/game/tree/main/typingtest',
      image: '/assets/games/typing.png',
      bgColor: 'bg-[#2EC4B6]',
      textColor: 'text-black',
      tags: ['REACT', 'TIMERS', 'WPM']
    },
    {
      id: 'g3',
      title: 'WHACK-A-MOLE REFLEX',
      description: 'A reaction-speed training game centered on rapid target acquisition and millisecond precision.',
      mechanics: 'Click emerging targets before they retreat back into holes.',
      link: 'https://github.com/HARSHILL2023/game/tree/main/whack%20a%20mole',
      image: '/assets/games/whack.png',
      bgColor: 'bg-[#FF5733]',
      textColor: 'text-black',
      tags: ['CANVAS', 'REFLEX', 'DOM']
    },
    {
      id: 'g4',
      title: 'CLICK COUNTER PRO',
      description: 'Peak tapping frequency benchmark measuring input responsiveness under pressure.',
      mechanics: 'Tap as fast as possible within a 10-second window.',
      link: 'https://github.com/HARSHILL2023/game/tree/main/clickcounter',
      image: '/assets/games/click.png',
      bgColor: 'bg-[#FFC72C]',
      textColor: 'text-black',
      tags: ['BENCHMARK', 'CPS', 'STATE']
    },
    {
      id: 'g5',
      title: 'COLOR PICKER LOGIC',
      description: 'Vision coordination study focused on rapid hex-code identification and visual color matching.',
      mechanics: 'Identify the exact target color among options.',
      link: 'https://github.com/HARSHILL2023/game/tree/main/colorpicker',
      image: '/assets/games/color.png',
      bgColor: 'bg-[#00C9A7]',
      textColor: 'text-black',
      tags: ['COLOR THEORY', 'HEX', 'UI']
    },
    {
      id: 'g6',
      title: 'REACTIVE TODO LAB',
      description: 'Logic-driven task management engine developed to study state persistence and CRUD efficiency.',
      mechanics: 'Manage complex objective lists with persistent storage.',
      link: 'https://github.com/HARSHILL2023/game/tree/main/todoo',
      image: '/assets/games/todo.png',
      bgColor: 'bg-white dark:bg-[#161616]',
      textColor: 'text-black dark:text-[#F7F4EB]',
      tags: ['CRUD', 'STORAGE', 'DOM']
    }
  ];

  return (
    <section id="games" className="py-20 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 pb-4 border-b-2 border-black dark:border-[#3A3A3A]">
          <div className="flex items-center gap-4">
            <h2 className="font-bebas text-5xl sm:text-6xl text-black dark:text-[#F7F4EB] tracking-wider uppercase flex items-center gap-3">
              <Gamepad2 size={44} className="text-[#FF5733]" />
              GAME DEV
            </h2>
            <div className="hidden sm:block w-24 h-1 bg-black dark:bg-[#3A3A3A]"></div>
          </div>
          <span className="font-mono text-xs font-bold tracking-widest text-black/60 dark:text-[#A1A1A1] uppercase">
            TOTAL GAMES - 0{games.length}
          </span>
        </div>

        {/* Game Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <div
              key={game.id}
              className={`${game.bgColor} ${game.textColor} border-[3px] border-black dark:border-[#3A3A3A] shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#3A3A3A] p-6 flex flex-col justify-between group`}
            >
              <div>
                {/* Top Image Frame */}
                <div className="w-full aspect-[16/10] bg-white dark:bg-[#111111] border-2 border-black dark:border-[#3A3A3A] overflow-hidden mb-4 relative">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                </div>

                {/* Title */}
                <h3 className="font-bebas text-3xl tracking-wide mb-2">
                  {game.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-medium leading-relaxed mb-4 opacity-90">
                  {game.description}
                </p>

                {/* Mechanics Box */}
                <div className="p-3 bg-white/20 dark:bg-black/30 border border-black/30 dark:border-[#3A3A3A] mb-4">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider block mb-1 flex items-center gap-1">
                    <Play size={10} /> MECHANICS:
                  </span>
                  <p className="text-xs font-mono italic opacity-90">
                    {game.mechanics}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {game.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-white dark:bg-[#0D0D0D] border border-black dark:border-[#3A3A3A] font-mono text-[10px] font-bold text-black dark:text-[#F7F4EB]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-4 border-t-2 border-black dark:border-[#3A3A3A] flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase">
                  SOURCE CODE
                </span>

                <a
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn p-2 bg-white text-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  title="View Game Code"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
