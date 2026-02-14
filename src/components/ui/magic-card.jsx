"use client";

import React, { useCallback, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export function MagicCard({
    children,
    className,
    gradientSize = 300,
    gradientColor = "rgba(34, 211, 238, 0.1)",
    gradientOpacity = 0.8,
    gradientFrom = "rgba(34, 211, 238, 0.4)",
    gradientTo = "rgba(192, 132, 252, 0.4)",
}) {
    const mouseX = useMotionValue(-gradientSize);
    const mouseY = useMotionValue(-gradientSize);

    const reset = useCallback(() => {
        mouseX.set(-gradientSize);
        mouseY.set(-gradientSize);
    }, [gradientSize, mouseX, mouseY]);

    const handlePointerMove = useCallback(
        (e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            mouseX.set(e.clientX - rect.left);
            mouseY.set(e.clientY - rect.top);
        },
        [mouseX, mouseY]
    );

    useEffect(() => {
        reset();
    }, [reset]);

    useEffect(() => {
        const handleGlobalPointerOut = (e) => {
            if (!e.relatedTarget) {
                reset();
            }
        };

        const handleVisibility = () => {
            if (document.visibilityState !== "visible") {
                reset();
            }
        };

        window.addEventListener("pointerout", handleGlobalPointerOut);
        window.addEventListener("blur", reset);
        document.addEventListener("visibilitychange", handleVisibility);

        return () => {
            window.removeEventListener("pointerout", handleGlobalPointerOut);
            window.removeEventListener("blur", reset);
            document.removeEventListener("visibilitychange", handleVisibility);
        };
    }, [reset]);

    return (
        <div
            className={cn("group relative rounded-[2rem] overflow-hidden", className)}
            onPointerMove={handlePointerMove}
            onPointerLeave={reset}
            onPointerEnter={reset}
        >
            {/* Border spotlight */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
                        ${gradientFrom}, 
                        ${gradientTo}, 
                        transparent 100%
                        )
                    `,
                }}
            />

            {/* Background spotlight */}
            <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] bg-black/80 z-1" />

            <motion.div
                className="pointer-events-none absolute inset-[1px] rounded-[calc(2rem-1px)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-2"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
                    `,
                    opacity: gradientOpacity,
                }}
            />

            <div className="relative z-10">{children}</div>
        </div>
    );
}
