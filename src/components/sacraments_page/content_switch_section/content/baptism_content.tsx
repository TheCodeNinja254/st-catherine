import { ParapgrapSectionText, SectionTitle } from "@/components";
import { Box, useTheme } from "@mui/material";
import React from "react";
import ListSectionText from "@/components/common/list_section_text";

const BaptismContent = () => {
  const theme = useTheme();

  return (
    <Box>
      <SectionTitle title="Baptism" />
      <Box sx={{ marginTop: theme.spacing(4) }}>
        <ParapgrapSectionText content={[""]} />
        <ListSectionText content={["", ""]} />
      </Box>
    </Box>
  );
};

export default BaptismContent;
