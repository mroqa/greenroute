"use client";

import { GreenRouteLogo } from "@/components/site/logo";
import { MapPin, Mail, Globe, ArrowUpRight } from "lucide-react";

const FOOTER_LINKS = [
  {
    title: "Platform",
    links: [
      { label: "The problem", href: "#problem" },
      { label: "Solution", href: "#solution" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Transport modes", href: "#modes" },
    ],
  },
  {
    title: "For business",
    links: [
      { label: "Key features", href: "#features" },
      { label: "Market opportunity", href: "#market" },
      { label: "Scope 3 reporting", href: "#features" },
      { label: "Join the beta", href: "#beta" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "UCT Energy Research Centre", href: "#" },
      { label: "DEA National GHG Inventory", href: "#" },
      { label: "Eskom Integrated Report", href: "#" },
      { label: "Electricity Maps API", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-background">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <GreenRouteLogo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              South Africa&apos;s first carbon intelligence platform. Track,
              compare, and reduce your commute&apos;s CO₂ — built for Cape Town,
              calibrated for the Eskom grid.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200">
                <MapPin className="h-3 w-3" />
                Cape Town
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-inset ring-amber-200">
                Beta live
              </span>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l.label}
                      {l.href === "#" && (
                        <ArrowUpRight className="h-3 w-3 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="mt-12 grid grid-cols-1 gap-3 border-t border-border pt-8 sm:grid-cols-3">
          <ContactItem
            icon={Globe}
            label="Web"
            value="greenroute.lync.digital"
          />
          <ContactItem
            icon={Mail}
            label="Enterprise"
            value="Mohammed.roqa@lync.digital"
          />
          <ContactItem
            icon={MapPin}
            label="Built in"
            value="Cape Town, South Africa"
          />
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} GreenRoute. Every trip is a choice —
            make it count.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">
              Privacy
            </a>
            <span className="h-3 w-px bg-border" />
            <a href="#" className="hover:text-foreground">
              Terms
            </a>
            <span className="h-3 w-px bg-border" />
            <span className="inline-flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-primary" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Eskom grid live
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Globe;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card p-3.5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          {label}
        </p>
        <p className="truncate text-sm font-semibold text-foreground">
          {value}
        </p>
      </div>
    </div>
  );
}
