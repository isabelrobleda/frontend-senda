import React from "react";
import Partners from "../components/Partners";
import SixCardHome from "../components/SixCardHome";
import OfertaHome from "../components/OfertaHome";
import TestimonialsHome from "../components/TestimonialsHome";
import Reviews from "../components/Reviews";
import CardsNosotros from "../components/CardsNosotros";
import DataHome from "../components/DataHome";
import CTAApply from "../components/CTAApply";
import MainHome from "../components/MainHome";

function Home() {
  return (
    <div>
      <MainHome />
      <Partners />
      <SixCardHome />
      <OfertaHome />
      <TestimonialsHome />
      <Reviews />
      <CardsNosotros />
      <DataHome />
      <CTAApply />
    </div>
  );
}

export default Home;
