"use client";

import React, { useState } from "react";
import { MinistriesContent, SccSlider } from "@/sections";
import { Box } from "@mui/material";
import MinistriesPageProps from "@/interfaces/MinistriesPageProps";
import MinistriesIntro from "@/components/ministries_page";

const SccPage: React.FC<MinistriesPageProps> = ({ defaultContentId }) => {
  const [contentTypeID, setContentTypeID] = useState(defaultContentId);

  return (
    <Box>
      <MinistriesIntro />
      <SccSlider
        contentTypeID={contentTypeID}
        setContentTypeID={setContentTypeID}
      />
      <MinistriesContent contentTypeID={contentTypeID} />
    </Box>
  );
};

export default SccPage;
