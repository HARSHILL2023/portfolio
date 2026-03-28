import React, { Suspense, lazy, useRef, useEffect } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

/**
 * GalaxyBackground
 *
 * A cinematic, GPU-accelerated full-screen background.
 * Uses a Spline 3D scene layered with glowing blobs and a
 * vignette gradient overlay. Fixed positioning ensures it
 * never scrolls with the page.
 *
 * Performance notes:
 * - Spline is lazy-loaded to avoid blocking the main bundle
 * - Glow blobs use CSS animations (GPU composited, no JS loop)
 * - Pointer events are intentionally forwarded to the Spline canvas
 *   so the scene stays interactive without blocking content above
 */
const GalaxyBackground = () => {
  return (
    <div
      className="fixed inset-0 w-screen h-screen overflow-hidden"
      style={{ background: "#000005", zIndex: 0 }}
    >
      {/* ── Spline 3D Layer ─────────────────────────────────────────── */}
      <Suspense
        fallback={
          <div
            className="absolute inset-0"
            style={{ background: "#000005" }}
          />
        }
      >
        <div className="absolute inset-0" style={{ pointerEvents: "auto" }}>
          <Spline
            scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </Suspense>

      {/* ── Animated Glow Blobs ──────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-left violet orb */}
        <div
          className="galaxy-blob"
          style={{
            width: 700,
            height: 700,
            background:
              "radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 70%)",
            top: "-160px",
            left: "-160px",
            animationDuration: "14s",
            animationDelay: "0s",
          }}
        />
        {/* Bottom-right indigo orb */}
        <div
          className="galaxy-blob"
          style={{
            width: 600,
            height: 600,
            background:
              "radial-gradient(circle, rgba(99,102,241,0.20) 0%, transparent 70%)",
            bottom: "-160px",
            right: "-160px",
            animationDuration: "18s",
            animationDelay: "-6s",
          }}
        />
        {/* Centre deep-blue accent */}
        <div
          className="galaxy-blob"
          style={{
            width: 420,
            height: 420,
            background:
              "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
            top: "38%",
            left: "44%",
            animationDuration: "22s",
            animationDelay: "-10s",
          }}
        />
        {/* Upper-right rose accent */}
        <div
          className="galaxy-blob"
          style={{
            width: 340,
            height: 340,
            background:
              "radial-gradient(circle, rgba(168,85,247,0.14) 0%, transparent 70%)",
            top: "8%",
            right: "10%",
            animationDuration: "16s",
            animationDelay: "-3s",
          }}
        />
      </div>

      {/* ── Cinematic Vignette / Edge Darkening ─────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to right,  rgba(0,0,5,0.88) 0%, transparent 28%, transparent 72%, rgba(0,0,5,0.88) 100%),
            linear-gradient(to bottom, rgba(0,0,5,0.40) 0%, transparent 35%, transparent 60%, rgba(0,0,5,0.97) 100%)
          `,
        }}
      />

      {/* ── Grain / noise texture for depth ─────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />

      {/* ── Blob keyframe animation injected once ───────────────────── */}
      <style>{`
        .galaxy-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          will-change: transform, opacity;
          animation: galaxyFloat linear infinite;
        }

        @keyframes galaxyFloat {
          0%   { transform: translate(0px,   0px)   scale(1);    opacity: 1;    }
          25%  { transform: translate(18px, -24px)  scale(1.06); opacity: 0.88; }
          50%  { transform: translate(-14px, 20px)  scale(0.95); opacity: 0.96; }
          75%  { transform: translate(22px,  12px)  scale(1.03); opacity: 0.82; }
          100% { transform: translate(0px,   0px)   scale(1);    opacity: 1;    }
        }
      `}</style>
    </div>
  );
};

export default GalaxyBackground;
