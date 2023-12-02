"use client";

import { AboutIntroContent, FathersMessage } from "@/components/about_us_page";
import { Box, useTheme } from "@mui/material";

const Page = () => {
  const theme = useTheme();

  return (
    <>
      <AboutIntroContent />
      <Box sx={{ marginTop: theme.spacing(0) }}>
        <FathersMessage />
      </Box>
    </>
  );
};

export default Page;
