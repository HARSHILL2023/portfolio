import React, { useState, useRef, useLayoutEffect, cloneElement } from 'react';
import { twMerge } from 'tailwind-merge';

// --- Internal Defaults ---

const DefaultHomeIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
);

const DefaultCompassIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
    </svg>
);

const DefaultBellIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
);

const defaultNavItems = [
    { id: 'default-home', icon: <DefaultHomeIcon />, label: 'Home' },
    { id: 'default-explore', icon: <DefaultCompassIcon />, label: 'Explore' },
    { id: 'default-notifications', icon: <DefaultBellIcon />, label: 'Notifications' },
];

/**
 * LimelightNav - An adaptive-width navigation bar with a "limelight" beam effect.
 * Tailored for high-signal portfolio architectures.
 */
export const LimelightNav = ({
    items = defaultNavItems,
    defaultActiveIndex = 0,
    activeIndex: controlledActiveIndex,
    onTabChange,
    className,
    limelightClassName,
    iconContainerClassName,
    iconClassName,
}) => {
    const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
    const [isReady, setIsReady] = useState(false);
    const navItemRefs = useRef([]);
    const limelightRef = useRef(null);

    // Sync state with controlled prop
    React.useEffect(() => {
        if (controlledActiveIndex !== undefined) {
            setActiveIndex(controlledActiveIndex);
        }
    }, [controlledActiveIndex]);

    useLayoutEffect(() => {
        if (items.length === 0) return;

        const limelight = limelightRef.current;
        const activeItem = navItemRefs.current[activeIndex];

        if (limelight && activeItem) {
            const newLeft = activeItem.offsetLeft + activeItem.offsetWidth / 2 - limelight.offsetWidth / 2;
            limelight.style.left = `${newLeft}px`;

            if (!isReady) {
                // Stabilize the limelight position on initial mount
                const timer = setTimeout(() => setIsReady(true), 50);
                return () => clearTimeout(timer);
            }
        }
    }, [activeIndex, isReady, items]);

    if (items.length === 0) return null;

    const handleItemClick = (index, itemOnClick) => {
        setActiveIndex(index);
        onTabChange?.(index);
        itemOnClick?.();
    };


    return (
        <nav className={twMerge(
            "relative inline-flex items-center h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl px-2 shadow-2xl transition-all duration-500 overflow-x-auto max-w-[95vw] scrollbar-hide",
            className
        )}>

            {items.map(({ id, icon, label, onClick, link }, index) => (
                <a
                    key={id}
                    href={link || "#"}
                    ref={el => (navItemRefs.current[index] = el)}
                    className={twMerge(
                        "relative z-20 flex h-full cursor-pointer items-center justify-center px-6 transition-transform active:scale-95 group",
                        iconContainerClassName
                    )}
                    onClick={(e) => {
                        // If it's an anchor jump within the page, we don't want to break the click
                        if (link?.startsWith('#')) {
                            e.preventDefault(); 
                        }
                        handleItemClick(index, onClick);
                    }}
                    aria-label={label}
                >
                    {cloneElement(icon, {
                        className: twMerge(
                            "w-5 h-5 transition-all duration-300 ease-in-out",
                            activeIndex === index 
                                ? "opacity-100 text-purple-400 scale-110 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" 
                                : "opacity-40 text-white group-hover:opacity-70",
                            icon.props.className,
                            iconClassName
                        ),
                    })}
                </a>
            ))}


            {/* LIMELIGHT BEAM EFFECT */}
            <div
                ref={limelightRef}
                className={twMerge(
                    "absolute top-0 z-10 w-12 h-[3px] rounded-full bg-purple-500 shadow-[0_45px_15px_rgba(168,85,247,0.8)]",
                    isReady ? "transition-[left] duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)" : "",
                    limelightClassName
                )}
                style={{ left: '-999px' }}
            >
                {/* Visual Beam Polygon */}
                <div className="absolute left-[-50%] top-[3px] w-[200%] h-14 [clip-path:polygon(10%_100%,35%_0,65%_0,90%_100%)] bg-gradient-to-b from-purple-500/40 to-transparent pointer-events-none blur-[1px]" />
            </div>
        </nav>
    );
};
