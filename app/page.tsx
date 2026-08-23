import { KnowOurProducts } from "@/components/Home/KnowOurProducts";
import { CtaBanner } from "@/components/LaptopRepair/CtaBanner";
import { HeroSection } from "@/components/LaptopRepair/HeroSection";
import { LabGallerySection } from "@/components/LaptopRepair/LabGallerySection";
import { RealCasesSection } from "@/components/LaptopRepair/RealCasesSection";
import { ServicesSection } from "@/components/LaptopRepair/ServicesSection";
import { SocialProofSection } from "@/components/LaptopRepair/SocialProofSection";
import { TestimonialsSection } from "@/components/LaptopRepair/TestimonialsSection";

export default function Home() {

  return (
    <>
      <>
            <main>
              <HeroSection />
              <SocialProofSection />
              <ServicesSection />
              <LabGallerySection />
              <RealCasesSection />
              <TestimonialsSection />
              {/* <KnowOurProducts /> */}
              <CtaBanner />
            </main>
          </>
    </>
  );
}
