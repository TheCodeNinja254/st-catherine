"use client";

import GenericPagesIntro from "@/components/about_us_page/generic_pages_intro";
import ContentDisplay from "@/components/content_display";
import WrapperContainer from "@/containers";
import cwaContent from "@/static/cwa";

const Home = () => {
  return (
    <>
      <GenericPagesIntro pageTitle="Catholic Women Association" />
      <WrapperContainer variant="paper">
        <ContentDisplay
          title="Catholic Women Association"
          content={cwaContent}
        />
      </WrapperContainer>
    </>
  );
};

export default Home;
