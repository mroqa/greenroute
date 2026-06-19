"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Reveal — scroll-triggered entrance animation                       */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: "div" | "section" | "li" | "span" | "header";
}) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}

/* ------------------------------------------------------------------ */
/*  Stagger container + item                                           */
/* ------------------------------------------------------------------ */
export function StaggerGroup({
  children,
  className,
  stagger = 0.08,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 20,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Eyebrow — small label chip above headings                          */
/* ------------------------------------------------------------------ */
export function Eyebrow({
  children,
  className,
  tone = "emerald",
}: {
  children: ReactNode;
  className?: string;
  tone?: "emerald" | "cream" | "dark";
}) {
  const tones = {
    emerald: "bg-primary/10 text-primary ring-primary/20",
    cream: "bg-amber-50 text-amber-700 ring-amber-200/60",
    dark: "bg-white/10 text-white ring-white/20 backdrop-blur",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ring-1 ring-inset",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  AnimatedCounter — count-up number on view                         */
/* ------------------------------------------------------------------ */
export function AnimatedCounter({
  value,
  decimals = 0,
  suffix = "",
  prefix = "",
  className,
  duration = 1.6,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });

  const display = useTransform(spring, (v) => {
    return `${prefix}${v.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })}${suffix}`;
  });

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, value, mv]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}

/* ------------------------------------------------------------------ */
/*  SectionShell — consistent vertical rhythm + max width             */
/* ------------------------------------------------------------------ */
export function SectionShell({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full px-5 sm:px-8 lg:px-12",
        "py-20 sm:py-24 lg:py-32",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SectionHeading — eyebrow + title + optional description           */
/* ------------------------------------------------------------------ */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "emerald",
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  tone?: "emerald" | "cream" | "dark";
  className?: string;
}) {
  const alignClass =
    align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={cn("flex flex-col gap-4", alignClass, className)}>
      {eyebrow && (
        <Reveal>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  HoverGlow — magnetic hover wrapper for CTAs                       */
/* ------------------------------------------------------------------ */
export function HoverGlow({
  children,
  className,
  glow = "rgba(34, 197, 94, 0.45)",
}: {
  children: ReactNode;
  className?: string;
  glow?: string;
}) {
  return (
    <motion.div className={cn("relative", className)} whileHover="hover">
      <motion.div
        className="pointer-events-none absolute -inset-2 rounded-[28px] opacity-0 blur-2xl"
        style={{ background: glow }}
        variants={{ hover: { opacity: 0.7 } }}
        transition={{ duration: 0.4 }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
