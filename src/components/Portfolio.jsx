import React, { useState, useEffect, useRef, useMemo, memo, lazy, Suspense } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

// Lazy loading heavy components for performance
const TechOrbitSkills = lazy(() => import('./TechOrbitSkills'));
const Certifications = lazy(() => import('./Certifications'));
const ProjectShowcase = lazy(() => import('./ProjectShowcase'));
const PersonalLanding = lazy(() => import('./ui/personal-landing').then(m => ({ default: m.PersonalLanding })));

import { Meteors } from './ui/meteors';
import { Particles } from './ui/particles';
import { MagicCard } from './ui/magic-card';
import { LimelightNav } from './ui/limelight-nav';
import {
    User,
    Layers,
    Code,
    Trophy,
    Send
} from 'lucide-react';

import AetherBackground from './ui/aether-background';

export default function Portfolio() {
    const rootRef = useRef(null);

    return (
        <main ref={rootRef} className="min-h-screen bg-transparent text-white overflow-x-hidden relative selection:bg-purple-500/30 font-sans antialiased z-10">
            <h1 className="sr-only">Harshil Patel - Senior Frontend Engineer & UI/UX Specialist Portfolio</h1>


            <Suspense fallback={<div className="min-h-screen bg-transparent" />}>
                <div id="top">
                    <PersonalLanding />
                </div>
            </Suspense>

            {/* Futuristic Tech Orbit Skills Section */}
            <Suspense fallback={<div className="h-screen bg-transparent" />}>
                <TechOrbitSkills />
            </Suspense>

            {/* Advanced Project Showcase */}
            <Suspense fallback={<div className="h-screen bg-transparent" />}>
                <ProjectShowcase />
            </Suspense>

            {/* Industry Credentials Section */}
            <Suspense fallback={<div className="h-screen bg-transparent" />}>
                <div id="certifications" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
                    <Certifications />
                </div>
            </Suspense>

            {/* Floating Navigation Hub */}
            <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-bottom-10 duration-1000 delay-500">
                <LimelightNav
                    items={[
                        { id: 'identity', icon: <User size={20} />, label: 'Identity', link: '#top' },
                        { id: 'skills', icon: <Layers size={20} />, label: 'Arsenal', link: '#skills' },
                        { id: 'projects', icon: <Code size={20} />, label: 'Repository', link: '#projects' },
                        { id: 'certs', icon: <Trophy size={20} />, label: 'Credentials', link: '#certifications' },
                        { id: 'contact', icon: <Send size={20} />, label: 'Signal', link: '#contact' },
                    ]}
                />
            </div>

            <footer className="py-20 text-center opacity-30 border-t border-white/10" role="contentinfo">
                <p className="text-[10px] font-mono tracking-[2em] uppercase text-white/50">© Harshil Patel • 2026 • Optimized for Modern Web Architecture</p>
            </footer>
        </main>
    );
}
