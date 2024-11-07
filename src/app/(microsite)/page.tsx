"use client";

import GetInvolved from "@/components/landing_page/get_involved";
import PhotoGallery from "@/components/landing_page/photo_gallery";
import { ContactUS, Directions } from "@/components";
import IntroContent from "@/components/landing_page/intro_content";
import { MassSchedule, TithesOfferings } from "@/sections";
import { Introduction } from "@/components/about_us_page";

const Page = () => {
  return (
    <>
      <IntroContent />
      <Introduction />
      {/* <SliderSection /> */}
      <MassSchedule />
      <GetInvolved />
      <TithesOfferings />
      <PhotoGallery />
      <ContactUS />
      <Directions />
    </>
  );
};

export default Page;
