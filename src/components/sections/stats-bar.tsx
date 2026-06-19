"use client";

import { Reveal } from "@/components/site/primitives";
import { motion } from "framer-motion";

const STATS = [
  { value: "9", label: "SA transport modes", suffix: "" },
  { value: "900", label: "gCO₂ per kWh on Eskom grid", suffix: "" },
  { value: "60-70", label: "of SA commuters use kombi taxis", suffix: "%" },
  { value: "3×", label: "Eskom grid vs EU average", suffix: "" },
];

const MARQUEE_ITEMS = [
  "Auto-detect 9 transport modes",
  "Live Eskom grid sync",
  "Scope 3 reporting ready",
  "Minibus taxi emissions tracked",
  "Localised SA emission factors",
  "Route learning after 3 trips",
  "JSE ESG disclosure ready",
  "GRI 305-3 exports",
  "Carbon-saving streaks",
];

export function StatsBar() {
  return (
    <section className="relative border-y border-border/60 bg-background">
      {/* Stat grid */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-px overflow-hidden lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.08}
            className="relative flex flex-col items-center gap-1 px-4 py-8 text-center sm:py-10"
          >
            <span className="bg-gradient-to-br from-emerald-600 to-emerald-500 bg-clip-text font-display text-4xl font-extrabold text-transparent sm:text-5xl lg:text-6xl">
              {s.value}
              {s.suffix}
            </span>
            <span className="max-w-[14rem] text-xs font-medium text-muted-foreground sm:text-sm">
              {s.label}
            </span>
          </Reveal>
        ))}
      </div>

      {/* Marquee ticker */}
      <div className="relative overflow-hidden border-t border-border/60 bg-emerald-950 py-3">
        <div className="mask-fade-x flex">
          <motion.div
            className="animate-ticker flex shrink-0 items-center gap-8 pr-8"
            aria-hidden="true"
          >
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 text-sm font-medium text-emerald-100/80"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-lime-400" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
