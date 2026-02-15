"use client";

import { useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const useMorphingText = (texts) => {
    const textIndexRef = useRef(0);
    const morphRef = useRef(0);
    const cooldownRef = useRef(0);
    const timeRef = useRef(new Date());

    const text1Ref = useRef(null);
    const text2Ref = useRef(null);

    const setMorph = useCallback((fraction) => {
        if (text2Ref.current) {
            text2Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
        }

        fraction = 1 - fraction;
        if (text1Ref.current) {
            text1Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            text1Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
        }

        if (text1Ref.current) {
            text1Ref.current.textContent = texts[textIndexRef.current % texts.length];
        }
        if (text2Ref.current) {
            text2Ref.current.textContent = texts[(textIndexRef.current + 1) % texts.length];
        }
    }, [texts]);

    const doCooldown = useCallback(() => {
        morphRef.current = 0;
        if (text2Ref.current) {
            text2Ref.current.style.filter = "";
            text2Ref.current.style.opacity = "100%";
        }
        if (text1Ref.current) {
            text1Ref.current.style.filter = "";
            text1Ref.current.style.opacity = "0%";
        }
    }, []);

    const doMorph = useCallback(() => {
        morphRef.current -= cooldownRef.current;
        cooldownRef.current = 0;

        let fraction = morphRef.current / 0.75;

        if (fraction >= 1) {
            cooldownRef.current = 0.5;
            fraction = 1;
        }

        setMorph(fraction);

        if (fraction === 1) {
            textIndexRef.current++;
        }
    }, [setMorph]);

    useEffect(() => {
        let requestAnimationFrameId;

        const animate = () => {
            let newTime = new Date();
            let dt = (newTime.getTime() - timeRef.current.getTime()) / 1000;
            timeRef.current = newTime;

            cooldownRef.current -= dt;

            if (cooldownRef.current <= 0) {
                doMorph();
            } else {
                doCooldown();
            }

            requestAnimationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(requestAnimationFrameId);
        };
    }, [doMorph, doCooldown]);

    return { text1Ref, text2Ref };
};

export const MorphingText = ({ texts, className, width = "min-w-[300px]" }) => {
    const { text1Ref, text2Ref } = useMorphingText(texts);

    return (
        <div className={cn("relative inline-flex items-center justify-center py-4 select-none", className)}>
            <svg id="filters" className="hidden">
                <defs>
                    <filter id="threshold">
                        <feColorMatrix
                            in="SourceGraphic"
                            type="matrix"
                            values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
                        />
                    </filter>
                </defs>
            </svg>

            <div
                className={cn("relative flex items-center justify-start min-h-[1.5em]", width)}
                style={{ filter: "url(#threshold)" }}
            >
                <span
                    ref={text1Ref}
                    className="absolute left-0 inset-y-0 flex items-center justify-start whitespace-nowrap"
                />
                <span
                    ref={text2Ref}
                    className="flex items-center justify-start whitespace-nowrap"
                />
            </div>
        </div>
    );
};
