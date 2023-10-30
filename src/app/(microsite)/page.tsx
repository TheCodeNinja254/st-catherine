"use client";

import OurMission from "@/components/landing_page/our_mission";
import GetInvolved from "@/components/landing_page/get_involved";
import PhotoGallery from "@/components/landing_page/photo_gallery";
import { ContactUS } from "@/components";
import IntroContent from "../../components/landing_page/intro_content";

const Home = () => {
  return (
    <>
      <IntroContent />
      <OurMission />
      <GetInvolved />
      <PhotoGallery />
      <ContactUS />
    </>
  );
};

export default Home;
