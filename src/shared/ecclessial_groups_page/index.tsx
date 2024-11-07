"use client";

import React, { useState } from "react";
import { EcclesialContent, NavigationSlider } from "@/sections";
import { Box } from "@mui/material";
import ContentPagesProps from "@/interfaces/ContentPagesProps";
import Intro from "@/components/ecclesial_page/Intro";
import ecclesialGroups from "@/static/ecclesial_groups";

const EcclesialGroupsPage: React.FC<ContentPagesProps> = ({
  defaultContentId,
}) => {
  const [contentTypeID, setContentTypeID] = useState(defaultContentId);

  return (
    <Box>
      <Intro />
      <NavigationSlider
        contentTypeID={contentTypeID}
        setContentTypeID={setContentTypeID}
        baseURL="ecclesial-groups"
        title="Ecclesial Groups"
        description="Read about or Ecclesial groups, keep up with what the groups are doing and see their impact."
        content={ecclesialGroups}
      />
      <EcclesialContent contentTypeID={contentTypeID} />
    </Box>
  );
};

export default EcclesialGroupsPage;
