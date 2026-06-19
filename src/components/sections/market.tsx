"use client";

import { motion } from "framer-motion";
import {
  User,
  Building2,
  TrendingUp,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import {
  Reveal,
  SectionHeading,
  SectionShell,
  StaggerGroup,
  StaggerItem,
} from "@/components/site/primitives";

const SEGMENTS = [
  {
    icon: User,
    badge: "B2C",
    audience: "Individual commuters",
    headline: "Cape Town's climate-aware commuter base",
    body: "Growing urban climate awareness and carbon literacy drive adoption. GreenRoute turns an abstract problem — &lsquo;my carbon footprint&rsquo; — into a daily, visible, gamified win.",
    stats: [
      { value: "9", label: "Transport modes tracked" },
      { value: "3×", label: "Eskom grid vs EU average" },
    ],
    bullets: [
      "Weekly CO₂ budget",
      "Carbon-saving streaks",
      "Greener route suggestions",
      "Auto-detected trip logging",
    ],
    accent: "from-emerald-500 to-teal-500",
    cardBg: "bg-gradient-to-br from-emerald-50 to-teal-50",
    iconBg: "from-emerald-500 to-teal-500",
  },
  {
    icon: Building2,
    badge: "B2B",
    audience: "Enterprise sustainability teams",
    headline: "An urgent, unmet Scope 3 mandate",
    body: "JSE ESG disclosures and global Scope 3 reporting mandates create an urgent, unmet B2B demand. Companies cannot currently collect commuter emission data — GreenRoute hands it to them, aggregated and audit-ready.",
    stats: [
      { value: "GRI 305-3", label: "Disclosure standard" },
      { value: "JSE ESG", label: "Listing requirement" },
    ],
    bullets: [
      "Aggregated commuter emissions",
      "Auditor-ready CSV / XLSX exports",
      "Multi-site, multi-team rollups",
      "Annual disclosure reports",
    ],
    accent: "from-amber-500 to-orange-500",
    cardBg: "bg-gradient-to-br from-amber-50 to-orange-50",
    iconBg: "from-amber-500 to-orange-500",
  },
];

export function MarketSection() {
  return (
    <SectionShell
      id="market"
      className="relative overflow-hidden bg-background"
    >
      <SectionHeading
        eyebrow={
          <>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            Market opportunity
          </>
        }
        title={
          <>
            Two audiences. One platform.
            <br className="hidden sm:block" /> Growing urgency.
          </>
        }
        description="SA's carbon intensity makes every mode choice more impactful than anywhere in Europe — and the reporting mandates are catching up fast. GreenRoute sits at the intersection."
      />

      <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {SEGMENTS.map((s) => {
          const Icon = s.icon;
          return (
            <StaggerItem key={s.audience}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className={`relative h-full overflow-hidden rounded-3xl border border-border/70 p-7 shadow-card-soft sm:p-8 ${s.cardBg}`}
              >
                {/* Decorative blob */}
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${s.accent} opacity-20 blur-2xl`}
                />

                <div className="relative flex items-center justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.iconBg} text-white shadow-lg`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <span
                    className={`rounded-full bg-gradient-to-r ${s.accent} px-3 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-md`}
                  >
                    {s.badge}
                  </span>
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {s.audience}
                </p>
                <h3 className="mt-1 font-display text-2xl font-bold text-foreground">
                  {s.headline}
                </h3>
                <p
                  className="mt-3 text-sm leading-relaxed text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />

                {/* Stats row */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {s.stats.map((st) => (
                    <div
                      key={st.label}
                      className="rounded-2xl bg-white/70 p-3.5 ring-1 ring-inset ring-border/50 backdrop-blur"
                    >
                      <p
                        className={`bg-gradient-to-r ${s.accent} bg-clip-text font-display text-xl font-extrabold text-transparent`}
                      >
                        {st.value}
                      </p>
                      <p className="mt-0.5 text-[11px] font-medium text-muted-foreground">
                        {st.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="mt-6 grid grid-cols-2 gap-2 border-t border-border/50 pt-5">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-sm font-medium text-foreground/80"
                    >
                      <CheckCircle2
                        className={`h-4 w-4 shrink-0 bg-gradient-to-br ${s.accent} text-white rounded-full`}
                        style={{ padding: 1 }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Footer link */}
                <a
                  href="#beta"
                  className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                >
                  Get in touch
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </motion.article>
            </StaggerItem>
          );
        })}
      </StaggerGroup>

      {/* Why-now strip */}
      <Reveal className="mt-10" delay={0.1}>
        <div className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-emerald-200/60 bg-gradient-to-r from-emerald-50 via-lime-50 to-amber-50 p-6 sm:flex-row sm:p-7">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-glow-emerald">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-lg font-bold text-foreground">
                The window is now.
              </p>
              <p className="text-sm text-muted-foreground">
                JSE ESG disclosures are tightening and urban climate awareness
                is peaking — both audiences need GreenRoute at the same time.
              </p>
            </div>
          </div>
          <a
            href="#beta"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-emerald transition-transform hover:scale-[1.03]"
          >
            Join the beta
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </SectionShell>
  );
}
