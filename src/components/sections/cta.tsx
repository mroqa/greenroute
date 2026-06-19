"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Globe, Mail } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/site/primitives";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"commuter" | "enterprise">("commuter");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
    toast.success("You're on the list! We'll be in touch soon.", {
      description:
        role === "enterprise"
          ? "Our team will reach out about Scope 3 reporting setup."
          : "Beta access opens for Cape Town commuters first.",
    });
  };

  return (
    <section
      id="beta"
      className="relative isolate overflow-hidden bg-emerald-950 px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background layers */}
      <div className="bg-dotted-light pointer-events-none absolute inset-0 opacity-25" />
      <div className="animate-blob pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-emerald-500/25 blur-3xl" />
      <div
        className="animate-blob pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-lime-500/15 blur-3xl"
        style={{ animationDelay: "-5s" }}
      />
      {/* Cape Town image strip at bottom */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(7,28,20,0.9), transparent), url('/assets/cape-town-hero.png')",
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: copy */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-lime-300 ring-1 ring-white/20 backdrop-blur-md">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-lime-400" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime-400" />
              </span>
              Beta open · Cape Town
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Every trip is a choice.
              <br />
              <span className="bg-gradient-to-r from-lime-300 via-emerald-300 to-emerald-400 bg-clip-text text-transparent">
                Make it count.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-emerald-50/80">
              GreenRoute is live in Cape Town — beta access is open now for
              commuters and enterprise teams. Join the waitlist and we&apos;ll
              reach out with onboarding details.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <ContactCard
                icon={Globe}
                label="Web"
                value="greenroute.lync.digital"
              />
              <ContactCard
                icon={Mail}
                label="Enterprise"
                value="Mohammed.roqa@lync.digital"
              />
              <ContactCard
                icon={MapPin}
                label="Built in"
                value="Cape Town, South Africa"
              />
            </div>
          </Reveal>
        </div>

        {/* Right: form card */}
        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] p-7 shadow-2xl backdrop-blur-xl sm:p-9">
            {/* Glow accent */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-lime-400/20 blur-3xl" />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-lime-400 to-emerald-500 text-emerald-950 shadow-lg">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-white">
                  You&apos;re on the list!
                </h3>
                <p className="mt-2 max-w-xs text-sm text-emerald-100/80">
                  Beta access opens for Cape Town first. Watch your inbox —
                  we&apos;ll be in touch within 48 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setEmail("");
                  }}
                  className="mt-6 text-xs font-semibold uppercase tracking-widest text-lime-300 hover:text-lime-200"
                >
                  Add another email
                </button>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="relative">
                <h3 className="font-display text-2xl font-bold text-white">
                  Join the beta
                </h3>
                <p className="mt-1 text-sm text-emerald-100/70">
                  Reserve your spot — Cape Town commuters and enterprise teams.
                </p>

                {/* Role toggle */}
                <div className="mt-6 grid grid-cols-2 gap-2 rounded-2xl bg-black/20 p-1.5">
                  {(["commuter", "enterprise"] as const).map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className={`rounded-xl px-4 py-2.5 text-sm font-semibold capitalize transition-all ${
                        role === r
                          ? "bg-gradient-to-r from-lime-400 to-emerald-500 text-emerald-950 shadow-md"
                          : "text-emerald-100/70 hover:text-white"
                      }`}
                    >
                      {r === "commuter" ? "I'm a commuter" : "Enterprise team"}
                    </button>
                  ))}
                </div>

                {/* Email field */}
                <div className="mt-4">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-widest text-emerald-100/70"
                  >
                    Work or personal email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@capetown.co.za"
                    className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-base text-white placeholder:text-white/30 outline-none transition-colors focus:border-lime-400/60 focus:bg-white/10"
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-lime-400 to-emerald-500 px-6 py-3.5 text-base font-bold text-emerald-950 shadow-lg transition-transform hover:scale-[1.02]"
                >
                  Reserve my spot
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </button>

                <p className="mt-4 text-center text-xs text-emerald-100/50">
                  No spam. One onboarding email, then your beta invite.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Globe;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <Icon className="h-3.5 w-3.5 text-lime-300" />
        <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald-100/70">
          {label}
        </span>
      </div>
      <p className="mt-1.5 truncate text-sm font-semibold text-white">
        {value}
      </p>
    </div>
  );
}
