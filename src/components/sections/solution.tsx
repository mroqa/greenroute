"use client";

import { motion } from "framer-motion";
import { Activity, GitCompareArrows, Target, ArrowRight } from "lucide-react";
import {
  Reveal,
  SectionHeading,
  SectionShell,
  StaggerGroup,
  StaggerItem,
} from "@/components/site/primitives";

const STEPS = [
  {
    num: "01",
    icon: Activity,
    title: "Track",
    headline: "Log any trip — or let auto-detect do it for you",
    body: "Open the app and forget about it. GPS and accelerometer signals passively detect every trip and infer the transport mode in real time. No buttons, no manual logging, no friction.",
    bullets: [
      "Passive trip detection",
      "9 transport modes supported",
      "Background-friendly logging",
    ],
    accent: "from-emerald-500 to-teal-500",
    glow: "rgba(16, 185, 129, 0.35)",
  },
  {
    num: "02",
    icon: GitCompareArrows,
    title: "Compare",
    headline: "See real grams of CO₂ for every route choice",
    body: "Every trip is scored against South Africa-specific emission factors — not foreign averages. Compare the kombi, the BRT, the e-hail and the EV on honest, locally-calibrated numbers.",
    bullets: [
      "SA-specific emission factors",
      "Live Eskom grid intensity",
      "Per-trip and per-mode breakdown",
    ],
    accent: "from-lime-500 to-emerald-500",
    glow: "rgba(132, 204, 22, 0.35)",
  },
  {
    num: "03",
    icon: Target,
    title: "Act",
    headline: "Choose greener routes and build carbon-saving streaks",
    body: "Hit your weekly CO₂ budget. GreenRoute surfaces smarter route options and rewards consistency with streaks — turning climate action from a guilt trip into a daily win.",
    bullets: [
      "Weekly CO₂ budget tracking",
      "Greener route suggestions",
      "Streak rewards & gamification",
    ],
    accent: "from-amber-500 to-orange-500",
    glow: "rgba(245, 158, 11, 0.35)",
  },
];

export function SolutionSection() {
  return (
    <SectionShell
      id="solution"
      className="relative overflow-hidden bg-gradient-to-b from-background via-emerald-50/40 to-background"
    >
      {/* Decorative grid */}
      <div className="bg-grid-soft pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative">
        <SectionHeading
          eyebrow={
            <>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              The solution
            </>
          }
          title={
            <>
              One app. Every mode.
              <br className="hidden sm:block" /> Real South African data.
            </>
          }
          description="Three steps turn an unmeasured commute into a carbon-smart decision — automatically, passively, and on data that actually fits the streets you travel."
        />

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-5">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.num} className="h-full">
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card p-7 shadow-card-soft"
                >
                  {/* Top accent bar */}
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${step.accent}`}
                  />
                  {/* Hover glow */}
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: step.glow }}
                  />

                  {/* Number + icon row */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${step.accent} text-white shadow-lg`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="font-mono text-5xl font-bold text-foreground/10 transition-colors group-hover:text-foreground/20">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-display text-lg font-semibold leading-snug text-foreground/90">
                    {step.headline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-border/60 pt-5">
                    {step.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-sm font-medium text-foreground/80"
                      >
                        <span
                          className={`flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br ${step.accent}`}
                        >
                          <svg
                            viewBox="0 0 12 12"
                            className="h-2.5 w-2.5 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path d="M2 6.5L4.5 9L10 3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {/* Flow connector */}
        <Reveal className="mt-10 flex justify-center" delay={0.1}>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/20">
            Track
            <ArrowRight className="h-4 w-4" />
            Compare
            <ArrowRight className="h-4 w-4" />
            Act
            <span className="ml-1 text-xs font-normal text-muted-foreground">
              · all in seconds
            </span>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
