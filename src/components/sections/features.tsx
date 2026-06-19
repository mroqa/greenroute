"use client";

import { motion } from "framer-motion";
import {
  Radar,
  Zap,
  Brain,
  FileBarChart,
  type LucideIcon,
} from "lucide-react";
import {
  Reveal,
  SectionHeading,
  SectionShell,
  StaggerGroup,
  StaggerItem,
} from "@/components/site/primitives";

interface Feature {
  icon: LucideIcon;
  tag: string;
  title: string;
  body: string;
  stat?: { value: string; label: string };
  accent: string; // tailwind gradient
  glow: string;
  span?: boolean; // span two columns on lg
}

const FEATURES: Feature[] = [
  {
    icon: Radar,
    tag: "Auto-Detect",
    title: "Passive trip logging",
    body: "GPS and accelerometer detect trips and infer your transport mode without any user input. Open the app once and forget — every commute gets logged, every mode gets scored.",
    stat: { value: "0 taps", label: "to log a trip" },
    accent: "from-emerald-500 to-teal-500",
    glow: "rgba(16, 185, 129, 0.35)",
    span: true,
  },
  {
    icon: Zap,
    tag: "Live Grid Sync",
    title: "Dynamic EV factors",
    body: "Eskom grid intensity updates EV emission factors in real time via the Electricity Maps API. A clean-grid hour genuinely changes your number.",
    stat: { value: "Real-time", label: "Eskom feed" },
    accent: "from-amber-400 to-orange-500",
    glow: "rgba(245, 158, 11, 0.35)",
  },
  {
    icon: Brain,
    tag: "Route Learning",
    title: "Smarter with every trip",
    body: "GreenRoute recognises your top commutes after 3 trips and surfaces them as one-tap shortcuts. The longer you use it, the less you have to think.",
    stat: { value: "3 trips", label: "to learn a route" },
    accent: "from-lime-400 to-emerald-500",
    glow: "rgba(132, 204, 22, 0.35)",
  },
  {
    icon: FileBarChart,
    tag: "ESG Reporting",
    title: "Scope 3 ready, out of the box",
    body: "Aggregated commuter emission data for GRI 305-3 and JSE ESG disclosure requirements. Export-ready, auditor-friendly, and built for the corporate sustainability team that needs it yesterday.",
    stat: { value: "GRI 305-3", label: "JSE ESG ready" },
    accent: "from-emerald-600 to-emerald-700",
    glow: "rgba(5, 150, 105, 0.4)",
    span: true,
  },
];

export function FeaturesSection() {
  return (
    <SectionShell
      id="features"
      className="relative overflow-hidden bg-gradient-to-b from-background to-emerald-50/40"
    >
      <div className="bg-grid-soft pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative">
        <SectionHeading
          eyebrow={
            <>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              Key features
            </>
          }
          title={
            <>
              Built for commuters.
              <br className="hidden sm:block" /> Ready for enterprise.
            </>
          }
          description="Four capabilities that make GreenRoute work for the individual on the kombi and the sustainability team in the boardroom — without compromise."
        />

        <StaggerGroup
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6"
          stagger={0.08}
        >
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <StaggerItem
                key={f.tag}
                className={f.span ? "md:col-span-2" : ""}
              >
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card p-6 shadow-card-soft sm:flex-row sm:items-center sm:gap-6 sm:p-7"
                >
                  {/* Hover glow */}
                  <div
                    className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: f.glow }}
                  />

                  {/* Icon */}
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${f.accent} text-white shadow-lg`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Copy */}
                  <div className="mt-4 flex-1 sm:mt-0">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                        {f.tag}
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-xl font-bold text-foreground">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {f.body}
                    </p>
                  </div>

                  {/* Stat */}
                  {f.stat && (
                    <div className="mt-4 shrink-0 sm:mt-0 sm:pl-6 sm:text-right">
                      <p className="bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text font-display text-2xl font-extrabold text-transparent">
                        {f.stat.value}
                      </p>
                      <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                        {f.stat.label}
                      </p>
                    </div>
                  )}
                </motion.article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {/* Bottom badge row */}
        <Reveal className="mt-12" delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              "On-device inference",
              "Privacy-first GPS handling",
              "Auditor-ready exports",
              "Electricity Maps API",
              "UCT-calibrated factors",
            ].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2 text-xs font-semibold text-muted-foreground shadow-card-soft"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                {badge}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
