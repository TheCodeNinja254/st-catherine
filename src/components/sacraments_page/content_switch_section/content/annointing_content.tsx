import { SectionTitle } from "@/components";
import { Box, useTheme } from "@mui/material";
import React from "react";
import ListSectionText from "@/components/common/list_section_text";

const AnointingContent = () => {
  const theme = useTheme();

  return (
    <Box>
      <SectionTitle title="Anointing Of The Sick" />
      <Box sx={{ marginTop: theme.spacing(4) }}>
        <ListSectionText content={["", ""]} />
      </Box>
    </Box>
  );
};

export default AnointingContent;
