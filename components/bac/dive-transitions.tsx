"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/** Thin depth-line progress bar fixed under the navbar. */
export function ScrollProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  if (reduced) return null;
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[55] h-[2.5px] origin-left bg-gradient-to-r from-ocean-500 via-lagoon-400 to-lagoon-300"
    />
  );
}

/**
 * "Ascending to the surface" — dark ocean transition with
 * rising bubbles and glowing horizon line.
 */
export function AscendTransition() {
  return (
    <div
      aria-hidden="true"
      className="relative h-32 overflow-hidden bg-abyss-950 sm:h-44"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-abyss-900 via-ocean-950/60 to-abyss-950" />
      {/* sun glow at the surface line */}
      <div className="absolute inset-x-1/4 bottom-0 h-24 rounded-[100%] bg-lagoon-400/10 blur-3xl" />
      {/* horizon line */}
      <div className="absolute inset-x-0 bottom-6 h-px bg-gradient-to-r from-transparent via-lagoon-300/30 to-transparent" />
      {/* depth ticks */}
      <div className="absolute bottom-4 right-6 flex flex-col items-end gap-1.5 opacity-50">
        {[40, 30, 20, 10].map((m) => (
          <span key={m} className="flex items-center gap-2">
            <span className="text-[8px] font-bold tracking-widest text-foam-50/70">
              {m}m
            </span>
            <span className="h-px w-5 bg-lagoon-300/40" />
          </span>
        ))}
      </div>
      {/* small bubbles rising fast (ascending feel) */}
      <div className="absolute inset-0">
        {[8, 18, 30, 44, 58, 70, 82, 92].map((left, i) => (
          <span
            key={i}
            className="absolute bottom-0 rounded-full border border-lagoon-300/40 bg-lagoon-400/10"
            style={{
              left: `${left}%`,
              width: 5 + (i % 3) * 3,
              height: 5 + (i % 3) * 3,
              animation: `bubble-rise ${5 + (i % 4)}s linear ${i * 0.8}s infinite`,
              ["--bubble-sway" as string]: `${10 + i * 2}px`,
              ["--bubble-opacity" as string]: 0.5,
            }}
          />
        ))}
      </div>
      <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-[0.5em] text-lagoon-300/70">
        NAIK KE PERMUKAAN
      </p>
    </div>
  );
}

/**
 * "Descending" — deep section transition sinking into the deep with
 * slow drifting particles.
 */
export function DescendTransition() {
  return (
    <div
      aria-hidden="true"
      className="relative h-32 overflow-hidden bg-abyss-950 sm:h-44"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-abyss-950 via-abyss-900 to-abyss-950" />
      {/* depth ticks */}
      <div className="absolute top-4 right-6 flex flex-col items-end gap-1.5 opacity-60">
        {[10, 20, 30, 40].map((m) => (
          <span key={m} className="flex items-center gap-2">
            <span className="text-[8px] font-bold tracking-widest text-foam-50/80">
              {m}m
            </span>
            <span className="h-px w-5 bg-lagoon-300/40" />
          </span>
        ))}
      </div>
      {/* drifting motes */}
      <div className="absolute inset-0">
        {[12, 26, 40, 55, 68, 80, 90].map((left, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-lagoon-300/60"
            style={{
              left: `${left}%`,
              top: `${20 + (i * 11) % 60}%`,
              width: 2 + (i % 3),
              height: 2 + (i % 3),
              animation: `float-slow ${6 + (i % 5)}s ease-in-out ${i * 0.5}s infinite`,
              opacity: 0.35,
            }}
          />
        ))}
      </div>
      <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-[0.5em] text-lagoon-200/80">
        MENYELAM KE KEDALAMAN
      </p>
    </div>
  );
}
