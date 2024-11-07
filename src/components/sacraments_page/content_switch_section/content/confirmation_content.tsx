import { SectionTitle } from "@/components";
import { Box, useTheme } from "@mui/material";
import React from "react";
import ListSectionText from "@/components/common/list_section_text";

const ConfirmationContent = () => {
  const theme = useTheme();

  return (
    <Box>
      <SectionTitle title="Confirmation" />
      <Box sx={{ marginTop: theme.spacing(4) }}>
        <ListSectionText content={[""]} />
      </Box>
      <Box sx={{ marginTop: theme.spacing(4) }}>
        <SectionTitle title="Youth Confirmation" />
        <Box sx={{ marginTop: theme.spacing(4) }}>
          <ListSectionText content={[""]} />
        </Box>
      </Box>
      <Box sx={{ marginTop: theme.spacing(4) }}>
        <SectionTitle title="Adult Confirmation" />
        <Box sx={{ marginTop: theme.spacing(4) }}>
          <ListSectionText content={[""]} />
        </Box>
      </Box>
    </Box>
  );
};

export default ConfirmationContent;
