import { SectionTitle } from "@/components";
import { Box, useTheme } from "@mui/material";
import React from "react";
import ListSectionText from "@/components/common/list_section_text";

const MarriageContent = () => {
  const theme = useTheme();

  return (
    <Box>
      <SectionTitle title="Marriage" />
      <Box sx={{ marginTop: theme.spacing(4) }}>
        <ListSectionText
          content={[
            "The Eucharist, also known as Holy Communion, is the sacrament in which we receive the Body and Blood of Christ. We believe that Christ is actually present in the bread and wine that have been consecrated at Mass.The origins of the Eucharist are in the Jewish Passover which commemorates Israel's deliverance from slavery by God. When Jesus celebrated Passover at his last supper with his apostles, he blessed, broke and shared the bread and wine, declaring that it was His body and blood. He promised he would be with them whenever they did the same in memory of him.The Mass is the new Passover, with Jesus offering his own body and blood so that we might be free.",
            "A few years after receiving the sacraments of Penance and First Eucharist, children receive the sacrament of Confirmation after completing a two-year program of preparation. Generally, students are in the 8th or 9th grades at the time they are confirmed. Confirmation usually is held in May or June..",
            "As with baptism, adult confirmation is part of the Rite of Christian Initiation of Adults (RCIA).",
          ]}
        />
      </Box>
    </Box>
  );
};

export default MarriageContent;
