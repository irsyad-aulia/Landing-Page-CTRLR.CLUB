import BackgroundVideo from '@/components/ui/BackgroundVideo';
import HeroSection from '@/components/sections/HeroSection';
import DiagnosticSection from '@/components/sections/DiagnosticSection';
import CoreFunctionsSection from '@/components/sections/CoreFunctionsSection';
import ActiveModulesSection from '@/components/sections/ActiveModulesSection';
import RIndexSection from '@/components/sections/RIndexSection';
import AccessControlSection from '@/components/sections/AccessControlSection';
import RoadmapSection from '@/components/sections/RoadmapSection';
import FooterSection from '@/components/sections/FooterSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BackgroundVideo />
      <HeroSection />
      <DiagnosticSection />
      <CoreFunctionsSection />
      <ActiveModulesSection />
      <RIndexSection />
      <AccessControlSection />
      <RoadmapSection />
      <FooterSection />
    </main>
  );
}
