import React, { useState, useEffect, useRef, useMemo, memo, lazy, Suspense } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

// Lazy loading heavy components for performance
const TechOrbitSkills = lazy(() => import('./TechOrbitSkills'));
const Certifications = lazy(() => import('./Certifications'));
const ProjectShowcase = lazy(() => import('./ProjectShowcase'));
const FigmaShowcase = lazy(() => import('./FigmaShowcase'));
const HackathonSection = lazy(() => import('./HackathonSection'));
const AchievementsSection = lazy(() => import('./AchievementsSection'));
const ContactSection = lazy(() => import('./ContactSection'));
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
    Send,
    FileText,
    Figma,
    Terminal,
    Award
} from 'lucide-react';
import { Magnet } from './ui/Magnet';

export default function Portfolio() {
    const rootRef = useRef(null);
    const [activeSection, setActiveSection] = useState('home');

    // Persistent map tracking each section's current visibility ratio
    const sectionVisibility = useRef(new Map());

    const navItems = useMemo(() => [
        { id: 'home', icon: <User size={20} />, label: 'Identity', link: '#home' },
        { id: 'skills', icon: <Layers size={20} />, label: 'Arsenal', link: '#skills' },
        { id: 'projects', icon: <Code size={20} />, label: 'Repository', link: '#projects' },
        { id: 'figma', icon: <Figma size={20} />, label: 'Studio', link: '#figma' },
        { id: 'hackathon', icon: <Terminal size={20} />, label: 'Arena', link: '#hackathon' },
        { id: 'achievements', icon: <Award size={20} />, label: 'Milestones', link: '#achievements' },
        { id: 'certificates', icon: <Trophy size={20} />, label: 'Credentials', link: '#certificates' },
        { id: 'contact', icon: <Send size={20} />, label: 'Signal', link: '#contact' },
    ], []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => ({
                id: item.id,
                el: document.getElementById(item.id)
            })).filter(item => item.el);

            // The trigger point is roughly 1/3 down the viewport
            const triggerPoint = window.innerHeight / 3;
            const scrollPosition = window.scrollY + triggerPoint;
            
            // 1. Absolute Top Fallback
            if (window.scrollY < 50) {
                setActiveSection('home');
                return;
            }

            // 2. Absolute Bottom Fallback
            const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 150);
            if (isAtBottom) {
                setActiveSection('contact');
                return;
            }

            // 3. Main Scroll Detection
            let currentActiveId = null;
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                // Check if the trigger point has passed the start of this section
                if (scrollPosition >= section.el.offsetTop) {
                    currentActiveId = section.id;
                    break;
                }
            }

            if (currentActiveId) {
                setActiveSection(prev => (currentActiveId !== prev ? currentActiveId : prev));
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Small delay to ensure lazy components have initialized their heights
        const timer = setTimeout(handleScroll, 100);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, [navItems]);

    const activeIndex = useMemo(() =>
        navItems.findIndex(item => item.id === activeSection),
        [activeSection, navItems]);

    return (
        <main ref={rootRef} className="min-h-screen bg-transparent text-white overflow-x-hidden relative selection:bg-purple-500/30 font-sans antialiased z-10">
            <h1 className="sr-only">Harshil Patel - Senior Full Stack Developer & UI/UX Specialist Portfolio</h1>


            <Suspense fallback={<div className="h-24 bg-transparent" />}>
                <section id="home">
                    <PersonalLanding />
                </section>
            </Suspense>

            {/* Futuristic Tech Orbit Skills Section */}
            <Suspense fallback={<div className="h-24 bg-transparent" />}>
                <section id="skills">
                    <TechOrbitSkills />
                </section>
            </Suspense>

            {/* Advanced Project Showcase */}
            <Suspense fallback={<div className="h-24 bg-transparent" />}>
                <section id="projects">
                    <ProjectShowcase />
                </section>
            </Suspense>

            {/* Figma Designs */}
            <Suspense fallback={<div className="h-24 bg-transparent" />}>
                <section id="figma">
                    <FigmaShowcase />
                </section>
            </Suspense>

            {/* Hackathons */}
            <Suspense fallback={<div className="h-24 bg-transparent" />}>
                <section id="hackathon">
                    <HackathonSection />
                </section>
            </Suspense>

            {/* Achievements */}
            <Suspense fallback={<div className="h-24 bg-transparent" />}>
                <section id="achievements">
                    <AchievementsSection />
                </section>
            </Suspense>

            {/* Industry Credentials Section */}
            <Suspense fallback={<div className="h-24 bg-transparent" />}>
                <section id="certificates">
                    <Certifications />
                </section>
            </Suspense>

            {/* Contact Section */}
            <Suspense fallback={<div className="h-24 bg-transparent" />}>
                <section id="contact">
                    <ContactSection />
                </section>
            </Suspense>



            {/* Fixed Top Right Magnetic Resume */}
            <div className="fixed top-6 right-6 md:top-8 md:right-8 z-[110]">
                <Magnet padding={80} disabled={false} magnetStrength={3}>
                    <a
                        href="https://drive.google.com/file/d/1ukf2AUQCVaa8u2A6N83Sxwj42iTkTygx/view?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center gap-2 rounded-full px-5 py-2 md:px-6 md:py-2.5 text-[10px] md:text-xs font-bold tracking-[0.1em] text-white transition-all overflow-hidden"
                        style={{
                            background: 'rgba(168, 85, 247, 0.12)',
                            border: '1px solid rgba(168, 85, 247, 0.4)',
                            boxShadow: '0 0 20px rgba(168, 85, 247, 0.25)',
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        <span className="relative z-10 flex items-center gap-2 drop-shadow-md uppercase">
                            <FileText size={14} className="text-purple-300 group-hover:text-white transition-colors" />
                            Resume
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-indigo-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
                    </a>
                </Magnet>
            </div>

            {/* Floating Navigation Hub */}
            <div className="fixed bottom-12 left-0 right-0 z-[100] flex justify-center pointer-events-none">
                <div className="pointer-events-auto" style={{ animation: 'slideUpFadeIn 0.8s ease-out 0.5s both' }}>
                    <LimelightNav
                        items={navItems}
                        activeIndex={activeIndex}
                        onTabChange={(index) => {
                            const targetId = navItems[index].id;
                            setActiveSection(targetId);
                            const element = document.getElementById(targetId);
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    />
                </div>
            </div>



            <footer className="py-20 text-center opacity-30 border-t border-white/10" role="contentinfo">
                <p className="text-[10px] font-mono tracking-[2em] uppercase text-white/50">© Harshil Patel • 2026 • Optimized for Modern Web Architecture</p>
            </footer>
        </main>
    );
}

