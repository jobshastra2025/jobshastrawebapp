import FeaturedJobs from "./_components/FeaturedJobs";
import Ribbon from "./_components/Ribbon";
import Testimonials from "./_components/Testimonials";
import React from "react";
import Hiring from "./_components/Hiring";
import MainBody from "../../../components/MainBody";
import TestimonialsSlider from "./_components/TestimonialsSlider";

export default function HomePage() {
  return (
    <>
      <MainBody>
      <Hiring/>
      </MainBody>
      <Ribbon/>
      <FeaturedJobs />
      <Testimonials />
      <TestimonialsSlider/>
    </>
  );
}