"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";
import { SectionShell, SectionHeading, Reveal } from "@/components/site/primitives";

export function FounderSection() {
  return (
    <SectionShell id="founder" className="bg-[#FAF8F5] dark:bg-emerald-950/20">
      <div className="flex flex-col items-center">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="The person behind Lync"
          title="Meet the Founder"
          tone="cream"
          className="mb-12 sm:mb-16"
        />

        {/* Founder Card */}
        <Reveal delay={0.15} className="w-full max-w-4xl">
          <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_12px_32px_-12px_rgba(15,23,16,0.06)] dark:border-white/10 dark:bg-emerald-900/10 dark:backdrop-blur-xl">
            <div className="flex flex-col md:flex-row">
              {/* Photo Container */}
              <div className="relative aspect-[4/5] w-full shrink-0 bg-neutral-100 md:w-[320px] lg:w-[360px]">
                <Image
                  src="/assets/founder.png"
                  alt="Mohammed Roqa - Founder of GreenRoute"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  priority
                  className="object-cover"
                />
              </div>

              {/* Info/Bio Container */}
              <div className="flex flex-col justify-center p-8 sm:p-10 md:p-12">
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">
                    Mohammed Roqa
                  </h3>
                  <a
                    href="https://www.linkedin.com/in/mohammed-roqa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#0077B5]/10 text-[#0077B5] transition-colors hover:bg-[#0077B5] hover:text-white"
                    aria-label="Mohammed Roqa LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>

                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                  Technology Executive & Founder · South Africa
                </p>

                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  Systems architect and cloud engineer with over a decade of impact
                  across enterprise infrastructure, digital products, and data
                  engineering. The mind and vision behind Lync.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
