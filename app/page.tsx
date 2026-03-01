'use server';

import { Banner } from "@/components/Home/Banner";
// import { KnowOurProducts } from "@/components/Home/KnowOurProducts";
import { TechAssistService } from "@/components/Home/TechAssistService";
import { Testimonials } from "@/components/Home/Testimonials";
// import { Offers } from "@/components/Home/Offers";
// import { getAllProducts } from "@/services/getProducts";
import { Features } from "@/components/Home/Features";
// import { getReviews } from "@/services/getReviews";
import { KnowOurServices } from "@/components/Home/KnowOurServices";

export default async function Home() {
  // const products = await getAllProducts();

  // const reviews = await getReviews();

  // console.log(reviews);

  return (
    <>
      <Banner />
      <KnowOurServices />
      <TechAssistService />
      <Testimonials />
      <Features />
      {/* <Offers products={products} /> */}
      {/* <KnowOurProducts products={products} /> */}
    </>
  );
}
