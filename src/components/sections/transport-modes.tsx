"use client";

import { motion } from "framer-motion";
import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  Footprints,
  Bike,
  Bus,
  Train,
  Car,
  CarTaxiFront,
  Zap,
  ArrowDownRight,
  Info,
} from "lucide-react";
import {
  Reveal,
  SectionHeading,
  SectionShell,
  StaggerGroup,
  StaggerItem,
} from "@/components/site/primitives";
import { useIsMobile } from "@/hooks/use-mobile";

const MODES = [
  {
    mode: "Walk / Cycle",
    grams: 0,
    icon: Footprints,
    color: "#10b981", // emerald
    note: "Zero-emission baseline",
  },
  {
    mode: "MyCiTi BRT",
    grams: 68,
    icon: Train,
    color: "#14b8a6", // teal
    note: "Cape Town's bus rapid transit",
  },
  {
    mode: "Minibus Taxi",
    grams: 52,
    icon: CarTaxiFront,
    color: "#84cc16", // lime
    note: "SA's invisible backbone — now measured",
  },
  {
    mode: "Golden Arrow Bus",
    grams: 89,
    icon: Bus,
    color: "#f59e0b", // amber
    note: "Diesel fleet, suburban routes",
  },
  {
    mode: "E-hail / Diesel Car",
    grams: 171,
    icon: Car,
    color: "#f97316", // orange
    note: "Uber, Bolt, single-occupancy diesel",
  },
  {
    mode: "Petrol Car (solo)",
    grams: 192,
    icon: Car,
    color: "#ef4444", // red
    note: "The most carbon-costly commute",
  },
];

export function TransportModesSection() {
  const isMobile = useIsMobile();

  return (
    <SectionShell
      id="modes"
      className="relative overflow-hidden bg-background"
    >
      <div className="bg-dotted pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative">
        <SectionHeading
          eyebrow={
            <>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              Transport modes · gCO₂ per passenger-km
            </>
          }
          title={
            <>
              9 SA modes.
              <br className="hidden sm:block" /> Localised data. Honest numbers.
            </>
          }
          description="Every gram is calibrated against UCT Energy Research Centre and the DEA National GHG Inventory — not foreign averages. Here are six of the nine modes GreenRoute tracks."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
          {/* Bar chart */}
          <Reveal className="lg:col-span-3" delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-border/70 bg-card p-6 shadow-card-soft sm:p-8">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="font-display text-lg font-bold text-foreground">
                    CO₂ intensity by mode
                  </p>
                  <p className="text-xs font-medium text-muted-foreground">
                    Lower is greener — grams of CO₂ per passenger-kilometre
                  </p>
                </div>
                <div className="hidden items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200 sm:inline-flex">
                  <ArrowDownRight className="h-3.5 w-3.5" />
                  Greener
                </div>
              </div>

              <div className="h-72 w-full sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={MODES}
                    layout="vertical"
                    margin={{ top: 4, right: 36, bottom: 4, left: 8 }}
                  >
                    <defs>
                      {MODES.map((m) => (
                        <linearGradient
                          key={m.mode}
                          id={`grad-${m.mode.replace(/[^a-zA-Z]/g, "")}`}
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="0"
                        >
                          <stop offset="0%" stopColor={m.color} stopOpacity={0.85} />
                          <stop offset="100%" stopColor={m.color} stopOpacity={1} />
                        </linearGradient>
                      ))}
                    </defs>
                    <XAxis
                      type="number"
                      domain={[0, 220]}
                      tick={{ fill: "oklch(0.48 0.02 160)", fontSize: 11, fontWeight: 500 }}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(v) => `${v}g`}
                    />
                    <YAxis
                      type="category"
                      dataKey="mode"
                      tick={{ fill: "oklch(0.22 0.04 160)", fontSize: isMobile ? 10 : 12, fontWeight: 600 }}
                      axisLine={false}
                      tickLine={false}
                      width={isMobile ? 85 : 120}
                    />
                    <Bar
                      dataKey="grams"
                      radius={[6, 6, 6, 6]}
                      barSize={26}
                      isAnimationActive
                      animationDuration={900}
                      animationEasing="ease-out"
                    >
                      {MODES.map((m) => (
                        <Cell
                          key={m.mode}
                          fill={`url(#grad-${m.mode.replace(/[^a-zA-Z]/g, "")})`}
                        />
                      ))}
                      <LabelList
                        dataKey="grams"
                        position="right"
                        formatter={(v: number) => `${v}g`}
                        style={{
                          fill: "oklch(0.22 0.04 160)",
                          fontSize: 12,
                          fontWeight: 700,
                          fontFamily: "var(--font-mono)",
                        }}
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 flex items-start gap-2 rounded-xl bg-muted/60 p-3 text-xs text-muted-foreground">
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                <p>
                  <span className="font-semibold text-foreground">Sources:</span>{" "}
                  Minibus taxi — UCT Energy Research Centre 2024 + GreenRoute fieldwork.
                  Car & grid factors — DEA National GHG Inventory 2024.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Mode detail cards */}
          <StaggerGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {MODES.slice(0, 4).map((m) => {
              const Icon = m.icon;
              return (
                <StaggerItem key={m.mode}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-4 shadow-card-soft"
                  >
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 ring-inset"
                      style={{
                        backgroundColor: `${m.color}15`,
                        color: m.color,
                        // @ts-expect-error CSS var
                        "--tw-ring-color": `${m.color}30`,
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-sm font-bold text-foreground">
                        {m.mode}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">
                        {m.note}
                      </p>
                    </div>
                    <div className="text-right">
                      <p
                        className="font-mono text-lg font-bold"
                        style={{ color: m.color }}
                      >
                        {m.grams}
                      </p>
                      <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                        g/pkm
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>

        {/* Hidden but referenced icons to keep imports used */}
        <span className="hidden">
          <Bike />
          <Zap />
        </span>
      </div>
    </SectionShell>
  );
}
