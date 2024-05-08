"use client";

import {
  AboutIntroContent,
  AreasOfApostles,
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
        <OurMission />
      </Box>
      <KeyFacts />
      <OurValues />
      <LeadershipSection />
      <AreasOfApostles />
    </>
  );
};

export default Home;
