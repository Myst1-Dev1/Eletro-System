'use server';

import { Banner } from "@/components/Home/Banner";
import { KnowOurProducts } from "@/components/Home/KnowOurProducts";
import { TechAssistService } from "@/components/Home/TechAssistService";
import { Testimonials } from "@/components/Home/Testimonials";
import { Offers } from "@/components/Home/Offers";
import { getAllProducts } from "@/services/getProducts";

export default async function Home() {
  const products = await getAllProducts();
  return (
    <>
      <Banner />
      <KnowOurProducts products={products} />
      <TechAssistService />
      <Testimonials />
      <Offers products={products} />
    </>
  );
}
