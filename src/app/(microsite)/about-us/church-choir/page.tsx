"use client";

import GenericPagesIntro from "@/components/about_us_page/generic_pages_intro";
import { ChurchChoirContentSection } from "@/components/about_us_page";

const Home = () => {
  return (
    <>
      <GenericPagesIntro pageTitle="The Church Choir" />
      <ChurchChoirContentSection />
    </>
  );
};

export default Home;
