"use client";

import {
  AboutIntroContent,
  DominicanOrder,
  Introduction,
  KeyFacts,
  LeadershipSection,
  OurValues,
} from "@/components/about_us_page";
import { Box, useTheme } from "@mui/material";
import OurMission from "../../../components/about_us_page/our_mission";

const Home = () => {
  const theme = useTheme();

  return (
    <>
      <AboutIntroContent />
      <Box sx={{ marginTop: theme.spacing(0) }}>
        <Introduction />
      </Box>
      <Box sx={{ marginTop: theme.spacing(5) }}>
        <OurMission />
      </Box>
      <KeyFacts />
      <OurValues />
      <LeadershipSection />
      <DominicanOrder />
    </>
  );
};

export default Home;
