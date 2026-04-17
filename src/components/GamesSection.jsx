import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Trophy, Play, Info } from 'lucide-react';

const games = [
    {
        id: 'g1',
        title: 'Memory Flip Challenge',
        description: 'A classic cognitive enhancement game focused on card matching and pattern recognition.',
        gameplay: 'Flip two cards to find matching pairs. Complete the entire board in the fewest moves possible.',
        link: 'https://github.com/HARSHILL2023/game/tree/main/memroy%20flip%20card%20game',
        image: '/assets/games/memory.png'
    },
    {
        id: 'g2',
        title: 'Tactile Typing Test',
        description: 'A high-precision utility designed to measure and improve keystroke velocity and accuracy.',
        gameplay: 'Type the displayed text as fast as you can. Real-time WPM and accuracy tracking provided.',
        link: 'https://github.com/HARSHILL2023/game/tree/main/typingtest',
        image: '/assets/games/typing.png'
    },
    {
        id: 'g3',
        title: 'Whack-A-Mole Reflex',
        description: 'A reaction-speed training game centered on rapid target acquisition and precision timing.',
        gameplay: 'Moles appear randomly from holes. Click/tap them before they disappear to score points.',
        link: 'https://github.com/HARSHILL2023/game/tree/main/whack%20a%20mole',
        image: '/assets/games/whack.png'
    },
    {
        id: 'g4',
        title: 'Click Counter Pro',
        description: 'A performance benchmark tool designed to test peak tapping frequency and input responsiveness.',
        gameplay: 'Register as many clicks as possible within a tactical timeframe to measure speed.',
        link: 'https://github.com/HARSHILL2023/game/tree/main/clickcounter',
        image: '/assets/games/click.png'
    },
    {
        id: 'g5',
        title: 'Color Picker Logic',
        description: 'A vision-based coordination game focused on rapid color identification and hex-code matching.',
        gameplay: 'Identify the correct color based on hexadecimal or visual cues within the interactive UI.',
        link: 'https://github.com/HARSHILL2023/game/tree/main/colorpicker',
        image: '/assets/games/color.png'
    },
    {
        id: 'g6',
        title: 'Reactive Todo Lab',
        description: 'A logic-driven task management engine developed to study state persistence and CRUD operations.',
        gameplay: 'Manage a dynamic list of objectives with millisecond-precision state updates.',
        link: 'https://github.com/HARSHILL2023/game/tree/main/todoo',
        image: '/assets/games/todo.png'
    }
];

export default function GamesSection() {
    return (
        <section id="games" className="py-24 md:py-32 px-6 bg-transparent relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 text-purple-400 text-xs font-mono tracking-[0.2em] uppercase mb-6">
                        Interactive Lab
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
                        Gaming <span className="text-purple-400">Zone</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {games.map((game, idx) => (
                        <motion.div
                            key={game.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative rounded-[2.5rem] bg-[#0a0814]/80 backdrop-blur-xl border border-white/10 p-2 overflow-hidden hover:border-purple-500/40 transition-all duration-500 shadow-2xl"
                        >
                            <div className="flex flex-col md:flex-row gap-6 p-6">
                                {/* Game Visual Container */}
                                <div className="w-full md:w-48 h-48 rounded-3xl overflow-hidden border border-white/5 bg-white/5 relative flex-shrink-0 group-hover:border-purple-500/20 transition-all">
                                    <img 
                                        src={game.image} 
                                        alt={game.title} 
                                        loading="lazy"
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Gamepad2 size={32} className="text-purple-400/50 group-hover:scale-125 transition-transform" />
                                    </div>
                                </div>

                                <div className="flex-1 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-white uppercase tracking-tight group-hover:text-purple-400 transition-colors">
                                            {game.title}
                                        </h3>
                                        <Trophy size={16} className="text-purple-400/40" />
                                    </div>
                                    
                                    <p className="text-sm text-white/70 leading-relaxed font-light">
                                        {game.description}
                                    </p>

                                    <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/5">
                                        <h4 className="text-[10px] font-mono uppercase text-purple-400/80 tracking-widest mb-2 flex items-center gap-2">
                                            <Play size={10} /> Mechanics
                                        </h4>
                                        <p className="text-[11px] text-white/60 leading-relaxed italic">
                                            {game.gameplay}
                                        </p>
                                    </div>

                                    <div className="pt-4 flex items-center gap-6">
                                        <a 
                                            href={game.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white flex items-center gap-2 transition-colors"
                                        >
                                            <Info size={12} /> View Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Decorative Corner Glow */}
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
