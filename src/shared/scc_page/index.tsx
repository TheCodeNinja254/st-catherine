"use client";

import React, { useState } from "react";
import { NavigationSlider } from "@/sections";
import { Box } from "@mui/material";
import ContentPagesProps from "@/interfaces/ContentPagesProps";
import MinistriesIntro from "@/components/ministries_page";
import sccInfo from "@/static/scc";
import SccContent from "@/sections/scc_content";

const SccPage: React.FC<ContentPagesProps> = ({ defaultContentId }) => {
  const [contentTypeID, setContentTypeID] = useState(defaultContentId);

  return (
    <Box>
      <MinistriesIntro />
      {contentTypeID !== 1 && contentTypeID !== 4 && (
        <NavigationSlider
          contentTypeID={contentTypeID}
          setContentTypeID={setContentTypeID}
          title="Small Christian Communities (SCC) and more"
          content={sccInfo}
          baseURL="scc"
          description="Connect with small Christian communities. Stay upto date. Beware of your communities farewell."
        />
      )}
      <SccContent contentTypeID={contentTypeID} />
    </Box>
  );
};

export default SccPage;
