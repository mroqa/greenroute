# Green Route App — Landing Page Build Worklog

Project: Marketing landing page for "GreenRoute" — South Africa's first carbon intelligence platform, built for Cape Town.

Source materials:
- /home/z/my-project/upload/GreenRoute-slides.pdf (8-slide deck, content extracted)
- /home/z/my-project/upload/Green Route app.mp4 (app demo, frames analyzed via VLM)

Brand identity (from video):
- Primary color: bright green (#4CAF50 / emerald)
- Dark green for positive metrics, red for carbon overages, amber/yellow accents
- Minimalist card UI with dotted backgrounds
- Cape Town / Table Mountain / sunset imagery
- Hero copy: "Every commute" (white) + "has a cost." (green)

Content (from slides):
- Tagline: South Africa's First Carbon Intelligence Platform
- Track / Compare / Act — 3 steps
- Auto-Detect / Calculate / Report — how it works
- 9 transport modes with gCO2/passenger-km: Walk/Cycle 0, Minibus Taxi 52, MyCiTi BRT 68, Golden Arrow Bus 89, E-hail/Diesel Car 171, Petrol Car (solo) 192
- Key features: Auto-Detect, Live Grid Sync, Route Learning, ESG Reporting
- Market: Individual commuters + Enterprise sustainability teams
- Stats: 9 modes, 900 gCO2/kWh Eskom, 60-70% kombi commuters, 3x grid vs EU
- Beta: greenroute.lync.digital / Mohammed.roqa@lync.digital / Cape Town, South Africa

---
Task ID: 1-11
Agent: main (Z.ai Code)
Task: Build a fancy marketing landing page for the GreenRoute carbon intelligence app — frontend only, no backend, single / route.

Work Log:
- Read source materials: extracted text from GreenRoute-slides.pdf (8 pages), analyzed 6 video frames via VLM to understand app UI and brand identity
- Identified brand: bright emerald green (#16a34a/#22c55e) primary, dark forest greens, amber/yellow + carbon-red accents; Cape Town / Table Mountain sunset theme; "Every commute has a cost." hero copy
- Set up custom green theme in src/app/globals.css (oklch emerald palette, dotted/grid backgrounds, blob/pulse/shimmer/ticker/float keyframe animations, custom scrollbar, gradient text helpers)
- Updated src/app/layout.tsx with Plus Jakarta Sans + Inter + JetBrains Mono fonts and GreenRoute SEO metadata
- Generated 2 AI images: cape-town-hero.png (1344x768) and minibus-taxi.png (1344x768) via z-ai image CLI into public/assets/
- Built shared primitives (src/components/site/primitives.tsx): Reveal, StaggerGroup/Item, Eyebrow, AnimatedCounter, SectionShell, SectionHeading, HoverGlow
- Built GreenRouteLogo + LogoMark (src/components/site/logo.tsx) — custom SVG with leaf + route pins
- Built PhoneFrame + DashboardMockup (src/components/site/phone-mockup.tsx) — replicates the video's 15kg/3.2T card, mode chips, streak bar chart, greener-route suggestion, bottom nav
- Built 10 sections (src/components/sections/):
  - nav.tsx — sticky pill nav with scroll-shrink, mobile hamburger menu
  - hero.tsx — Cape Town bg, "Every commute has a cost." headline (white + green gradient), phone mockup with floating stat cards (Eskom grid 900g, auto-detected MyCiTi, 12-day streak badge)
  - stats-bar.tsx — 4 big stats + infinite marquee ticker
  - problem.tsx — 4 problem cards (invisible minibus taxi, foreign emission factors, 900gCO2/kWh grid, Scope 3 obligations) with sources
  - solution.tsx — Track/Compare/Act 3-step cards with gradient accents + flow connector
  - how-it-works.tsx — Auto-Detect/Calculate/Report phases on dark emerald bg + mode inference flow (Walk/MyCiTi/Taxi/EV rules) + data pipeline strip
  - transport-modes.tsx — recharts horizontal bar chart (6 modes, color-coded green→red, value labels) + mode detail cards + source attribution
  - features.tsx — 4 feature cards (Auto-Detect, Live Grid Sync, Route Learning, ESG Reporting) with stats and gradient icons
  - market.tsx — B2C/B2B split cards with stats, bullets, and "why now" CTA strip
  - cta.tsx — "Every trip is a choice. Make it count." with email capture form (commuter/enterprise toggle), success state with checkmark, contact cards
  - footer.tsx — logo, 3 link columns, 3 contact items, bottom bar with live grid indicator
- Composed src/app/page.tsx (single / route) with min-h-screen flex-col wrapper + mt-auto footer (sticky pattern)
- Replaced radix Toaster with sonner Toaster in layout for the form toast notifications
- Ran ESLint: clean, no errors
- Self-verified with agent-browser: page renders all 10 sections, hero headline + phone mockup + floating cards visible, transport modes bar chart renders with color-coded bars + labels, CTA form submission works (success state "You're on the list!" with green checkmark), nav smooth-scroll works (#how-it-works), mobile responsive (390px single column + hamburger menu opens with all links), no console errors, sticky footer DOM verified (min-h-screen flex-col + flex-1 main + mt-auto footer, footerAtBottom: true)

Stage Summary:
- Production-ready marketing landing page for GreenRoute at / route
- 10 sections covering: hero → stats → problem → solution → how-it-works → transport modes → features → market → CTA → footer
- Custom emerald/green brand theme matching the app's video identity
- Animated phone mockup replicating the app's carbon dashboard (15kg daily / 3.2T annual CO2)
- Interactive recharts bar chart for 6 transport modes with SA-specific gCO2/pkm data
- Working email capture form with commuter/enterprise toggle + success state + sonner toast
- Fully responsive (mobile hamburger menu, single-column layouts)
- Sticky footer (min-h-screen flex-col + mt-auto pattern)
- No backend, no database, no API routes — pure marketing showcase
- ESLint clean, no console errors, all interactions browser-verified
