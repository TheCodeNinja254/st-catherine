"use client";

import React, { useState } from "react";
import { MinistriesContent, MinistriesSlider } from "@/sections";
import { Box } from "@mui/material";
import MinistriesPageProps from "@/interfaces/MinistriesPageProps";
import MinistriesIntro from "@/components/ministries_page";

const MinistriesPage: React.FC<MinistriesPageProps> = ({
  defaultContentId,
}) => {
  const [contentTypeID, setContentTypeID] = useState(defaultContentId);

  return (
    <Box>
      <MinistriesIntro />
      <MinistriesSlider
        contentTypeID={contentTypeID}
        setContentTypeID={setContentTypeID}
      />
      <MinistriesContent contentTypeID={contentTypeID} />
    </Box>
  );
};

export default MinistriesPage;
