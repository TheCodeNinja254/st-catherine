"use client";

import GetInvolved from "@/components/landing_page/get_involved";
import PhotoGallery from "@/components/landing_page/photo_gallery";
import { ContactUS, Directions } from "@/components";
import IntroContent from "@/components/landing_page/intro_content";
import { MassSchedule, SliderSection, TithesOfferings } from "@/sections";

const Home = () => {
  return (
    <>
      <IntroContent />
      <SliderSection />
      <MassSchedule />
      <GetInvolved />
      <TithesOfferings />
      <PhotoGallery />
      <ContactUS />
      <Directions />
    </>
  );
};

export default Home;
