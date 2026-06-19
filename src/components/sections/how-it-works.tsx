"use client";

import { motion } from "framer-motion";
import {
  Radar,
  Calculator,
  FileBarChart,
  Footprints,
  Bus,
  Car,
  Zap,
  Cpu,
  Activity,
  Cloud,
  Database,
} from "lucide-react";
import {
  Reveal,
  SectionHeading,
  SectionShell,
  StaggerGroup,
  StaggerItem,
} from "@/components/site/primitives";

const PHASES = [
  {
    num: "1",
    icon: Radar,
    title: "Auto-Detect",
    tagline: "Passive trip logging",
    body: "GPS and accelerometer signals detect your trip and infer the transport mode — no input needed. Mode inference runs entirely on-device.",
  },
  {
    num: "2",
    icon: Calculator,
    title: "Calculate",
    tagline: "Localised SA emission factors",
    body: "Your exact CO₂ is computed using SA-specific emission factors — updated live via the Eskom grid intensity feed.",
  },
  {
    num: "3",
    icon: FileBarChart,
    title: "Report",
    tagline: "Weekly, monthly, enterprise",
    body: "Weekly budget, monthly summaries, streak rewards, and enterprise Scope 3 exports — all in one dashboard.",
  },
];

const INFERENCE_RULES = [
  {
    icon: Footprints,
    condition: "Avg speed < 6 km/h",
    mode: "Walk",
    color: "emerald",
  },
  {
    icon: Bus,
    condition: "Regular stops, 15–50 km/h",
    mode: "MyCiTi BRT",
    color: "teal",
  },
  {
    icon: Car,
    condition: "High variance, 15–60 km/h",
    mode: "Minibus taxi",
    color: "lime",
  },
  {
    icon: Zap,
    condition: "Smooth accel, 20+ km/h",
    mode: "EV / Car",
    color: "amber",
  },
];

const colorMap: Record<string, string> = {
  emerald: "bg-emerald-500/10 text-emerald-600 ring-emerald-500/20",
  teal: "bg-teal-500/10 text-teal-600 ring-teal-500/20",
  lime: "bg-lime-500/10 text-lime-600 ring-lime-500/20",
  amber: "bg-amber-500/10 text-amber-600 ring-amber-500/20",
};

export function HowItWorksSection() {
  return (
    <SectionShell
      id="how-it-works"
      className="relative overflow-hidden bg-emerald-950 text-white"
    >
      {/* Decorative background */}
      <div className="bg-dotted-light pointer-events-none absolute inset-0 opacity-30" />
      <div className="animate-blob pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
      <div
        className="animate-blob pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-lime-500/10 blur-3xl"
        style={{ animationDelay: "-6s" }}
      />

      <div className="relative">
        <SectionHeading
          tone="dark"
          eyebrow={
            <>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-lime-400" />
              How it works
            </>
          }
          title={
            <>
              From commute to
              <br className="hidden sm:block" /> carbon score in seconds
            </>
          }
          description="Three on-device passes turn raw motion data into a calibrated carbon footprint — no cloud round-trip, no manual entry, no privacy compromise."
        />

        {/* Phase cards */}
        <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PHASES.map((p) => {
            const Icon = p.icon;
            return (
              <StaggerItem key={p.num} className="h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-7"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-400 to-emerald-500 text-emerald-950 shadow-lg">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-mono text-xs font-bold uppercase tracking-widest text-lime-300/80">
                        Phase {p.num}
                      </p>
                      <h3 className="font-display text-xl font-bold text-white">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm font-semibold text-lime-200/90">
                    {p.tagline}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {p.body}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {/* Mode inference flow */}
        <Reveal className="mt-16" delay={0.1}>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-md">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-lime-300">
                  <Cpu className="h-3.5 w-3.5" />
                  Mode inference engine
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold text-white">
                  On-device signal routing
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Speed, variance, and acceleration signatures are matched
                  against transport-mode fingerprints. Everything happens
                  locally — your raw GPS never leaves the phone.
                </p>
              </div>

              {/* Pipeline diagram */}
              <div className="grid w-full grid-cols-2 gap-3 lg:w-auto lg:grid-cols-4">
                {INFERENCE_RULES.map((r) => {
                  const Icon = r.icon;
                  return (
                    <motion.div
                      key={r.mode}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className={`flex flex-col items-center gap-2 rounded-2xl p-4 text-center ring-1 ring-inset ${colorMap[r.color]}`}
                    >
                      <Icon className="h-6 w-6" />
                      <p className="font-display text-sm font-bold text-white">
                        {r.mode}
                      </p>
                      <p className="font-mono text-[10px] leading-tight text-white/60">
                        {r.condition}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Data pipeline strip */}
            <div className="mt-8 grid grid-cols-1 gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
              <PipelineStep
                icon={Activity}
                title="Sensor input"
                detail="GPS · accelerometer · gyroscope"
              />
              <PipelineStep
                icon={Cloud}
                title="Live grid feed"
                detail="Eskom intensity via Electricity Maps API"
              />
              <PipelineStep
                icon={Database}
                title="SA emission factors"
                detail="UCT + DEA National GHG Inventory"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

function PipelineStep({
  icon: Icon,
  title,
  detail,
}: {
  icon: typeof Activity;
  title: string;
  detail: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-3.5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-lime-400/15 text-lime-300">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="mt-0.5 font-mono text-[10px] text-white/50">{detail}</p>
      </div>
    </div>
  );
}
