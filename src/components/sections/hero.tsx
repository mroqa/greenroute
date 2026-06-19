"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Leaf, Zap, Activity } from "lucide-react";
import { PhoneFrame, DashboardMockup } from "@/components/site/phone-mockup";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        {/* Cape Town photograph */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(7,28,20,0.55) 0%, rgba(7,28,20,0.78) 55%, rgba(247,254,237,1) 100%), url('/assets/cape-town-hero.png')",
          }}
          aria-hidden="true"
        />
        {/* Deep emerald base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/60 via-emerald-900/30 to-amber-900/20" />
        {/* Animated blobs */}
        <div className="animate-blob absolute -left-32 top-32 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div
          className="animate-blob absolute -right-20 top-48 h-80 w-80 rounded-full bg-amber-400/15 blur-3xl"
          style={{ animationDelay: "-4s" }}
        />
        {/* Dotted texture overlay */}
        <div className="bg-dotted-light absolute inset-0 opacity-30" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-24 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:pb-32">
        {/* Left: Copy */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200 ring-1 ring-white/20 backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Built for Cape Town · Live in beta
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
          >
            Every commute
            <br />
            <span className="bg-gradient-to-r from-lime-300 via-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              has a cost.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-emerald-50/90 sm:text-xl"
          >
            South Africa&apos;s first carbon intelligence platform. Track 9
            transport modes, sync with the live Eskom grid, and turn every
            trip into a carbon-smart choice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#beta"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-glow-emerald transition-transform hover:scale-[1.03]"
            >
              Join the beta
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#how-it-works"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10"
            >
              <Play className="h-4 w-4 fill-current" />
              See how it works
            </a>
          </motion.div>

          {/* Inline trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-emerald-100/70"
          >
            <span className="inline-flex items-center gap-1.5">
              <Leaf className="h-3.5 w-3.5 text-emerald-300" />
              9 SA transport modes
            </span>
            <span className="h-3 w-px bg-white/20" />
            <span className="inline-flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-amber-300" />
              Live Eskom grid sync
            </span>
            <span className="h-3 w-px bg-white/20" />
            <span className="inline-flex items-center gap-1.5">
              <Activity className="h-3.5 w-3.5 text-lime-300" />
              Scope 3 ready
            </span>
          </motion.div>
        </div>

        {/* Right: Phone + floating cards */}
        <div className="relative flex justify-center lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="animate-float-y relative"
          >
            <PhoneFrame>
              <DashboardMockup />
            </PhoneFrame>
          </motion.div>

          {/* Floating stat card 1 — live grid sync */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -left-2 top-16 z-20 hidden w-44 rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-xl sm:block"
          >
            <div className="flex items-center gap-2">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/20">
                <Zap className="h-4 w-4 text-emerald-300" />
                <span className="absolute inset-0 animate-pulse-ring rounded-lg ring-2 ring-emerald-400/60" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-200/70">
                  Eskom grid
                </p>
                <p className="font-mono text-sm font-bold text-white">
                  900 gCO₂/kWh
                </p>
              </div>
            </div>
            <p className="mt-2 text-[10px] leading-snug text-white/60">
              3× more carbon-intensive than the EU average
            </p>
          </motion.div>

          {/* Floating stat card 2 — mode auto-detected */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -right-2 bottom-28 z-20 hidden w-48 rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-xl sm:block"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-200/70">
                Auto-detected
              </span>
              <span className="rounded-full bg-emerald-400/20 px-1.5 py-0.5 text-[9px] font-bold text-emerald-300">
                LIVE
              </span>
            </div>
            <p className="mt-1 font-display text-base font-bold text-white">
              MyCiTi BRT
            </p>
            <div className="mt-1.5 flex items-center gap-1.5">
              <span className="font-mono text-lg font-bold text-emerald-400">
                68
              </span>
              <span className="text-[10px] text-white/60">gCO₂/pkm</span>
            </div>
          </motion.div>

          {/* Floating badge — streak */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -right-4 top-8 z-20 hidden h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg sm:flex"
          >
            <div className="text-center">
              <p className="font-mono text-base font-bold leading-none text-amber-950">
                12
              </p>
              <p className="text-[7px] font-semibold uppercase tracking-wide text-amber-900/80">
                day streak
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
