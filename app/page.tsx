'use server';

import { Banner } from "@/components/Home/Banner";
import { KnowOurProducts } from "@/components/Home/KnowOurProducts";
import { TechAssistService } from "@/components/Home/TechAssistService";
import { Testimonials } from "@/components/Home/Testimonials";
import { Offers } from "@/components/Home/Offers";
import { getAllProducts } from "@/services/getProducts";
import { Features } from "@/components/Home/Features";
import { KnowOurServices } from "@/components/Home/KnowOurServices";
import { QuickVideos } from "../components/QuickVideos";
import { ContatoContent } from "@/components/ContatoContent";
import { ReserveToClient } from "@/components/Home/ReserveToClient";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <>
      <Banner />
      <KnowOurServices />
      <QuickVideos />
      <Testimonials />  
      <Features />
      <ContatoContent />
      <TechAssistService />
      <ReserveToClient products={products} />
    </>
  );
}
