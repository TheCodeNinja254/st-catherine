"use client";

import ContactUsIntro from "@/components/contact_us_page";
import { ContactUS, Directions } from "@/components";

const Home = () => {
  return (
    <>
      <ContactUsIntro />
      <ContactUS />
      <Directions />
    </>
  );
};

export default Home;
