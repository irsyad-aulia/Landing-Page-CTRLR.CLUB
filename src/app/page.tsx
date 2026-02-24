import BackgroundVideo from '@/components/ui/BackgroundVideo';
import HeroSection from '@/components/sections/HeroSection';
import DiagnosticSection from '@/components/sections/DiagnosticSection';
import SystemFunctionsSection from '@/components/sections/SystemFunctionsSection';
import ActiveModulesSection from '@/components/sections/ActiveModulesSection';
import RIndexSection from '@/components/sections/RIndexSection';
import AccessControlSection from '@/components/sections/AccessControlSection';
import RoadmapSection from '@/components/sections/RoadmapSection';
import FooterSection from '@/components/sections/FooterSection';

export default function Home() {
  return (
    <>
      <BackgroundVideo />
      <main className="flex min-h-screen flex-col items-center justify-start">
        <HeroSection />
        <DiagnosticSection />
        <SystemFunctionsSection />
        <ActiveModulesSection />
        <RIndexSection />
        <AccessControlSection />
        <RoadmapSection />
        <FooterSection />
      </main>
    </>
  );
}
