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
        <ListSectionText
          content={[
            "Building on the sacraments of baptism, reconciliation, and holy communion, confirmation completes the process of initiation into the Catholic community. Through Confirmation, we receive, from the Holy Spirit, the strength and courage to practice our faith.Jesus promised His followers He would send His Spirit to comfort and strengthen them after His death. Forty days after His resurrection, the Holy Spirit was poured out on them on Pentecost. Through Confirmation, our own Pentecost, we receive the Holy Spirit, through the anointing with oil and the laying on of hands.",
          ]}
        />
      </Box>
      <Box sx={{ marginTop: theme.spacing(4) }}>
        <SectionTitle title="Youth Confirmation" />
        <Box sx={{ marginTop: theme.spacing(4) }}>
          <ListSectionText
            content={[
              "A few years after receiving the sacraments of Penance and First Eucharist, children receive the sacrament of Confirmation after completing a two-year program of preparation. Generally, students are in the 8th or 9th grades at the time they are confirmed. Confirmation usually is held in May or June.",
            ]}
          />
        </Box>
      </Box>
      <Box sx={{ marginTop: theme.spacing(4) }}>
        <SectionTitle title="Adult Confirmation" />
        <Box sx={{ marginTop: theme.spacing(4) }}>
          <ListSectionText
            content={[
              "As with baptism, adult confirmation is part of the Rite of Christian Initiation of Adults (RCIA).",
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ConfirmationContent;
