"use client";

import React, { useState } from "react";
import { MinistriesContent, NavigationSlider } from "@/sections";
import { Box } from "@mui/material";
import ContentPagesProps from "@/interfaces/ContentPagesProps";
import MinistriesIntro from "@/components/ministries_page";
import ministries from "@/static/ministries";

const MinistriesPage: React.FC<ContentPagesProps> = ({ defaultContentId }) => {
  const [contentTypeID, setContentTypeID] = useState(defaultContentId);

  return (
    <Box>
      <MinistriesIntro />
      <NavigationSlider
        contentTypeID={contentTypeID}
        setContentTypeID={setContentTypeID}
        baseURL="ministries"
        description="Read about or ministries, keep up with what the ministries are doing and see their impact."
        content={ministries}
      />
      <MinistriesContent contentTypeID={contentTypeID} />
    </Box>
  );
};

export default MinistriesPage;
