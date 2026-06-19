"use client";

import { motion } from "framer-motion";
import {
  Footprints,
  Bus,
  Car,
  Zap,
  Leaf,
  TrendingUp,
  Flame,
  Route,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Phone frame                                                       */
/* ------------------------------------------------------------------ */
export function PhoneFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19] w-[290px] sm:w-[320px]",
        "rounded-[3rem] p-2.5",
        "bg-gradient-to-b from-zinc-800 to-zinc-950",
        "shadow-[0_40px_80px_-20px_rgba(6,78,59,0.45),0_0_0_1px_rgba(255,255,255,0.06)_inset]",
        className,
      )}
    >
      {/* Side buttons */}
      <div className="absolute -left-1 top-28 h-12 w-1 rounded-l bg-zinc-700" />
      <div className="absolute -left-1 top-44 h-8 w-1 rounded-l bg-zinc-700" />
      <div className="absolute -right-1 top-36 h-16 w-1 rounded-r bg-zinc-700" />

      {/* Screen */}
      <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-[#0b1f17]">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-30 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Dashboard mockup — mimics the video: 15kg / 3.2T card             */
/* ------------------------------------------------------------------ */
export function DashboardMockup({ className }: { className?: string }) {
  return (
    <div className={cn("flex h-full flex-col", className)}>
      {/* Status bar */}
      <div className="flex items-center justify-between px-6 pt-3 text-[10px] font-semibold text-white/70">
        <span>9:41</span>
        <span className="flex items-center gap-1">
          <span className="inline-block h-2 w-3 rounded-[1px] bg-white/60" />
          <span className="inline-block h-2 w-4 rounded-[1px] bg-white/80" />
        </span>
      </div>

      {/* App header */}
      <div className="px-5 pt-7">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300/70">
              Good morning
            </p>
            <p className="font-display text-lg font-bold text-white">Cape Town</p>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 ring-1 ring-emerald-400/30">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-wider text-emerald-300">
              Grid live
            </span>
          </div>
        </div>
      </div>

      {/* Hero metric card — matches video: 15kg / 3.2T */}
      <div className="mx-5 mt-4">
        <div className="relative overflow-hidden rounded-2xl bg-[#0f2a1e] p-4 ring-1 ring-white/10">
          <div className="bg-dotted-light absolute inset-0 opacity-40" />
          <div className="relative">
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
              Today&apos;s commute
            </p>
            <div className="mt-1.5 flex items-end gap-2">
              <span className="font-mono text-4xl font-bold text-emerald-400">
                15
              </span>
              <span className="mb-1 font-mono text-base font-semibold text-emerald-300/80">
                kg
              </span>
              <span className="mb-1.5 ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 font-mono text-xs font-bold text-amber-950">
                +
              </span>
              <span className="font-mono text-4xl font-bold text-rose-400">
                3.2
              </span>
              <span className="mb-1 font-mono text-base font-semibold text-rose-300/80">
                T
              </span>
            </div>
            <div className="mt-1 flex justify-between text-[9px] font-semibold uppercase tracking-wider">
              <span className="text-emerald-300/70">Daily commute</span>
              <span className="text-rose-300/70">Annual CO₂</span>
            </div>
            {/* Progress bar — over budget */}
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-rose-500 to-rose-400"
                initial={{ width: 0 }}
                animate={{ width: "78%" }}
                transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <div className="mt-1.5 flex items-center justify-between text-[9px] text-white/50">
              <span>78% of weekly budget</span>
              <span className="text-rose-300">+2.1kg vs target</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mode breakdown */}
      <div className="mx-5 mt-4">
        <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
          Today&apos;s trips · 3 modes
        </p>
        <div className="grid grid-cols-4 gap-1.5">
          <ModeChip icon={<Footprints className="h-3 w-3" />} label="Walk" grams="0" tone="emerald" />
          <ModeChip icon={<Bus className="h-3 w-3" />} label="MyCiTi" grams="68" tone="teal" />
          <ModeChip icon={<Car className="h-3 w-3" />} label="Taxi" grams="52" tone="lime" />
          <ModeChip icon={<Zap className="h-3 w-3" />} label="EV" grams="41" tone="cyan" />
        </div>
      </div>

      {/* Streak / weekly chart */}
      <div className="mx-5 mt-4">
        <div className="rounded-2xl bg-[#0f2a1e] p-3 ring-1 ring-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Flame className="h-3 w-3 text-amber-400" />
              <span className="text-[10px] font-semibold text-white">
                12-day streak
              </span>
            </div>
            <span className="text-[9px] font-semibold text-emerald-300">
              -18% vs last week
            </span>
          </div>
          {/* Mini bar chart */}
          <div className="mt-2 flex h-10 items-end gap-1">
            {[40, 65, 30, 80, 55, 45, 25].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-emerald-600 to-emerald-400"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{
                  duration: 0.7,
                  delay: 0.8 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            ))}
          </div>
          <div className="mt-1 flex justify-between text-[8px] text-white/40">
            <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
          </div>
        </div>
      </div>

      {/* Greener route suggestion */}
      <div className="mx-5 mt-3 mb-4">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500/15 to-lime-500/10 p-2.5 ring-1 ring-emerald-400/30"
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-400/20">
            <Leaf className="h-3.5 w-3.5 text-emerald-300" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold text-white">
              Greener route found
            </p>
            <p className="truncate text-[9px] text-white/60">
              Switch to MyCiTi · save 2.3kg CO₂
            </p>
          </div>
          <Route className="h-3 w-3 shrink-0 text-emerald-300" />
        </motion.div>
      </div>

      {/* Bottom nav */}
      <div className="mt-auto flex items-center justify-around border-t border-white/10 bg-[#0a1c14] px-4 py-3">
        <NavItem icon={<TrendingUp className="h-3.5 w-3.5" />} label="Stats" active />
        <NavItem icon={<Route className="h-3.5 w-3.5" />} label="Routes" />
        <NavItem icon={<Leaf className="h-3.5 w-3.5" />} label="Streaks" />
        <NavItem icon={<Car className="h-3.5 w-3.5" />} label="Modes" />
      </div>
    </div>
  );
}

function ModeChip({
  icon,
  label,
  grams,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  grams: string;
  tone: "emerald" | "teal" | "lime" | "cyan";
}) {
  const tones = {
    emerald: "bg-emerald-500/15 text-emerald-300 ring-emerald-400/25",
    teal: "bg-teal-500/15 text-teal-300 ring-teal-400/25",
    lime: "bg-lime-500/15 text-lime-300 ring-lime-400/25",
    cyan: "bg-cyan-500/15 text-cyan-300 ring-cyan-400/25",
  } as const;
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-1 rounded-lg p-2 ring-1 ring-inset",
        tones[tone],
      )}
    >
      {icon}
      <span className="text-[8px] font-semibold uppercase tracking-wide text-white/80">
        {label}
      </span>
      <span className="font-mono text-[9px] font-bold">{grams}g</span>
    </div>
  );
}

function NavItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-0.5",
        active ? "text-emerald-400" : "text-white/40",
      )}
    >
      {icon}
      <span className="text-[8px] font-semibold">{label}</span>
    </div>
  );
}
