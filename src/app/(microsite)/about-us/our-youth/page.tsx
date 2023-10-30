"use client";

import GenericPagesIntro from "@/components/about_us_page/generic_pages_intro";
import { OurYouthContent } from "@/components/about_us_page";

const Home = () => {
  return (
    <>
      <GenericPagesIntro pageTitle="Our Youth" />
      <OurYouthContent />
    </>
  );
};

export default Home;
