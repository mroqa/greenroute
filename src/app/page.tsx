import { SiteNav } from "@/components/sections/nav";
import { HeroSection } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { TransportModesSection } from "@/components/sections/transport-modes";
import { FeaturesSection } from "@/components/sections/features";
import { MarketSection } from "@/components/sections/market";
import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <SiteNav />
      <main className="flex-1">
        <HeroSection />
        <StatsBar />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <TransportModesSection />
        <FeaturesSection />
        <MarketSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
