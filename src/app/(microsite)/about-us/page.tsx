"use client";

import OurMission from "@/components/landing_page/our_mission";
import {
  AboutIntroContent,
  LeadershipSection,
  OurValues,
  OurVision,
} from "@/components/about_us_page";
import { Box, useTheme } from "@mui/material";

const Home = () => {
  const theme = useTheme();

  return (
    <>
      <AboutIntroContent />
      <Box sx={{ marginTop: theme.spacing(5) }}>
        <OurMission />
      </Box>
      <OurVision />
      <OurValues />
      <LeadershipSection />
    </>
  );
};

export default Home;
