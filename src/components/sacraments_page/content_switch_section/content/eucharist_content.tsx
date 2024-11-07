import { MassScheduleCard, SectionTitle } from "@/components";
import { Box, useTheme } from "@mui/material";
import React from "react";
import ListSectionText from "@/components/common/list_section_text";

const EucharistContent = () => {
  const theme = useTheme();

  return (
    <Box>
      <SectionTitle title="Eucharist" />
      <Box sx={{ marginTop: theme.spacing(4) }}>
        <ListSectionText content={["", ""]} />
      </Box>

      <Box sx={{ marginTop: theme.spacing(4) }}>
        <SectionTitle title="Mass Schedule" />
        <Box sx={{ marginTop: theme.spacing(2) }}>
          <MassScheduleCard />
        </Box>
      </Box>
    </Box>
  );
};

export default EucharistContent;
