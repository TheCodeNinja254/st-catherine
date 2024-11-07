"use client";

import React, { useState } from "react";
import { SccContent, SccSlider } from "@/sections";
import { Box } from "@mui/material";
import ContentPagesProps from "@/interfaces/ContentPagesProps";
import MinistriesIntro from "@/components/ministries_page";

const SccPage: React.FC<ContentPagesProps> = ({ defaultContentId }) => {
  const [contentTypeID, setContentTypeID] = useState(defaultContentId);

  return (
    <Box>
      <MinistriesIntro />
      {contentTypeID !== 1 && contentTypeID !== 4 && (
        <SccSlider
          contentTypeID={contentTypeID}
          setContentTypeID={setContentTypeID}
        />
      )}
      <SccContent contentTypeID={contentTypeID} />
    </Box>
  );
};

export default SccPage;
