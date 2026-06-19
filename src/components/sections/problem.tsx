"use client";

import { motion } from "framer-motion";
import { EyeOff, Globe2, Gauge, Building2, ArrowRight } from "lucide-react";
import {
  Reveal,
  SectionHeading,
  SectionShell,
  StaggerGroup,
  StaggerItem,
} from "@/components/site/primitives";

const PROBLEMS = [
  {
    icon: EyeOff,
    stat: "60–70%",
    statLabel: "of SA urban commuters",
    title: "The minibus taxi is invisible",
    body: "Six to seven in ten South African urban commuters travel by kombi taxi — the backbone of SA mobility — yet not a single global tracker accounts for it. Billions of trips go unmeasured every year.",
    quote: "UCT Energy Research Centre, 2024",
  },
  {
    icon: Globe2,
    stat: "Foreign",
    statLabel: "emission factors",
    title: "Global datasets don't fit SA",
    body: "UK and US emission factors miss local load factors, fuel quality, and road conditions. What works in London or LA produces wildly wrong numbers on the N2 — making every &lsquo;carbon tracker&rsquo; imported into SA fundamentally unreliable.",
    quote: "DEA National GHG Inventory 2024",
  },
  {
    icon: Gauge,
    stat: "900",
    statLabel: "gCO₂ per kilowatt-hour",
    title: "SA's grid is among the world's most carbon-intensive",
    body: "Eskom's coal-heavy grid emits roughly three times the EU average per kWh. That changes the maths for every EV, every train, every electric bus — and no foreign app knows it.",
    quote: "Eskom Integrated Report 2025",
  },
  {
    icon: Building2,
    stat: "Scope 3",
    statLabel: "disclosure pressure",
    title: "Corporates can't collect commuter data",
    body: "JSE ESG requirements and global Scope 3 mandates demand commuter emission data that companies simply cannot collect today. The compliance gap is widening — and the auditors are already asking.",
    quote: "GRI 305-3 · JSE ESG Disclosure",
  },
];

export function ProblemSection() {
  return (
    <SectionShell id="problem" className="bg-background">
      <SectionHeading
        eyebrow={
          <>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-rose-500" />
            The problem
          </>
        }
        title={
          <>
            No platform exists for
            <br className="hidden sm:block" /> South African commuters
          </>
        }
        description="Every carbon tool on the market was built somewhere else — for somewhere else. They miss what makes South African mobility unique, and the gap is getting expensive."
      />

      <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
        {PROBLEMS.map((p, i) => {
          const Icon = p.icon;
          return (
            <StaggerItem key={p.title}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-border/70 bg-card p-6 shadow-card-soft sm:p-7"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-rose-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-600 ring-1 ring-inset ring-rose-500/15">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <p className="font-display text-3xl font-extrabold text-foreground">
                      {p.stat}
                    </p>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                      {p.statLabel}
                    </p>
                  </div>
                </div>

                <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                  {p.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: p.body }}
                />

                <div className="mt-5 flex items-center gap-2 border-t border-border/60 pt-4 text-[11px] font-medium text-muted-foreground/80">
                  <span className="inline-block h-1 w-1 rounded-full bg-muted-foreground/40" />
                  Source: {p.quote}
                </div>

                {/* Index badge */}
                <span className="absolute right-5 top-5 font-mono text-xs font-bold text-muted-foreground/20">
                  0{i + 1}
                </span>
              </motion.article>
            </StaggerItem>
          );
        })}
      </StaggerGroup>

      {/* Transition arrow */}
      <Reveal className="mt-14 flex justify-center" delay={0.1}>
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-sm font-medium text-muted-foreground">
            So we built one — for Cape Town, for the kombi, for the grid that powers it all.
          </p>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow-emerald"
          >
            <ArrowRight className="h-4 w-4 rotate-90" />
          </motion.div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
