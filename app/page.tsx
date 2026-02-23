import { Banner } from "@/components/Home/Banner";
import { KnowOurProducts } from "@/components/Home/KnowOurProducts";
import { TechAssistService } from "@/components/Home/TechAssistService";
import { Testimonials } from "@/components/Home/Testimonials";
import { Offers } from "@/components/Home/Offers";

export default function Home() {
  return (
    <>
      <Banner />
      <KnowOurProducts />
      <TechAssistService />
      <Testimonials />
      <Offers />
    </>
  );
}
