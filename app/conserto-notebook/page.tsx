import { StickyHeader } from '@/components/LaptopRepair/StickyHeader';
import { HeroSection } from '@/components/LaptopRepair/HeroSection';
import { SocialProofSection } from '@/components/LaptopRepair/SocialProofSection';
import { ServicesSection } from '@/components/LaptopRepair/ServicesSection';
import { LabGallerySection } from '@/components/LaptopRepair/LabGallerySection';
import { RealCasesSection } from '@/components/LaptopRepair/RealCasesSection';
import { TestimonialsSection } from '@/components/LaptopRepair/TestimonialsSection';
import { CtaBanner } from '@/components/LaptopRepair/CtaBanner';
import { LandingFooter } from '@/components/LaptopRepair/LandingFooter';
import { FloatingWhatsApp } from '@/components/LaptopRepair/FloatingWhatsApp';

export default function ConsertoNotebookPage() {
  return (
    <>
      <StickyHeader />
      <main>
        <HeroSection />
        <SocialProofSection />
        <ServicesSection />
        <LabGallerySection />
        <RealCasesSection />
        <TestimonialsSection />
        <CtaBanner />
      </main>
      <LandingFooter />
      {/* <FloatingWhatsApp /> */}
    </>
  );
}