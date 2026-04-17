"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const DefaultCursorSVG = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={40}
            viewBox="0 0 24 24"
            fill="none"
            className="drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
        >
            <path
                d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"
                fill="white"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export function SmoothCursor() {
    const [isMobile, setIsMobile] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    // Very fast, responsive springs to minimize perceived lag
    const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);
    
    const [isPointer, setIsPointer] = useState(false);
    const scale = useSpring(1, { damping: 20, stiffness: 400 });

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        
        if (window.innerWidth <= 768) {
            return () => window.removeEventListener("resize", checkMobile);
        }

        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            
            const target = e.target;
            const isClickable = target.closest('a, button, input, [role="button"], .cursor-pointer') || 
                               window.getComputedStyle(target).cursor === 'pointer';
            
            if (isClickable !== isPointer) {
                setIsPointer(isClickable);
                scale.set(isClickable ? 1.5 : 1);
            }
        };

        const handleMouseDown = () => scale.set(0.8);
        const handleMouseUp = () => scale.set(isPointer ? 1.5 : 1);

        // Hide cursor globally - ONLY on desktop
        const style = document.createElement("style");
        style.id = "smooth-cursor-hide";
        style.innerHTML = `
            @media (min-width: 769px) {
                * { cursor: none !important; }
                a, button, [role="button"], input { cursor: none !important; }
            }
        `;
        document.head.appendChild(style);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("resize", checkMobile);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            const styleNode = document.getElementById("smooth-cursor-hide");
            if (styleNode) document.head.removeChild(styleNode);
        };
    }, [isPointer, mouseX, mouseY, scale]);

    if (isMobile) return null;

    return (
        <motion.div
            style={{
                position: "fixed",
                left: cursorX,
                top: cursorY,
                translateX: 4, // Slight offset to align the SVG tip (3,3) better
                translateY: 4,
                zIndex: 99999,
                pointerEvents: "none",
                willChange: "transform",
                scale: scale,
            }}
        >
            <div className={`transition-transform duration-300 ${isPointer ? 'rotate-12' : 'rotate-0'}`}>
                <DefaultCursorSVG />
                {isPointer && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute -inset-2 bg-cyan-500/20 blur-xl rounded-full -z-10"
                    />
                )}
            </div>
        </motion.div>
    );
}
