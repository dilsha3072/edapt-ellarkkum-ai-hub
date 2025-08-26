import { HeroSection } from "@/components/sections/HeroSection";
import { ProgramOverview } from "@/components/sections/ProgramOverview";
import { WhyMatters } from "@/components/sections/WhyMatters";
import { KeyFeatures } from "@/components/sections/KeyFeatures";
import { SkillsMaster } from "@/components/sections/SkillsMaster";
import { AITools } from "@/components/sections/AITools";
import { LearningPath } from "@/components/sections/LearningPath";
import { Testimonials } from "@/components/sections/Testimonials";
import { HowToJoin } from "@/components/sections/HowToJoin";
import { CertificatePreview } from "@/components/sections/CertificatePreview";
import { FinalCTA } from "@/components/sections/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProgramOverview />
      <WhyMatters />
      <KeyFeatures />
      <SkillsMaster />
      <AITools />
      <LearningPath />
      <Testimonials />
      <HowToJoin />
      <CertificatePreview />
      <FinalCTA />
    </div>
  );
};

export default Index;