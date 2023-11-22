import { ParapgrapSectionText, SectionTitle } from "@/components";
import { Box, useTheme } from "@mui/material";
import React from "react";
import ListSectionText from "../../../common/list_section_text";

const BaptismContent = () => {
  const theme = useTheme();

  return (
    <Box>
      <SectionTitle title="Baptism" />
      <Box sx={{ marginTop: theme.spacing(4) }}>
        <ParapgrapSectionText
          content={[
            "Baptisms are ordinarily celebrated the first Sunday of the month either at the 4:30 p.m. Mass on Saturday or the 8:00 a.m. and 12:30 p.m. Masses on Sunday. Baptisms may be celebrated at the 10:00 a.m. Mass only during the time of the year when CCD classes are not in session. Baptisms are not celebrated during the Lenten season except in case of an emergency.",
          ]}
        />
        <ListSectionText
          content={[
            "Parents should already be registered and practicing members of the parish.",
            "At least one Godparent needs to be a practicing Roman Catholic who has completed his/her sacraments of initiation. The preference is that they both be Roman Catholics.",
            "However, if someone is chosen outside of the Catholic faith, then that person has to be a Christian who has been baptized in the name of the Trinity.",
            "Parents and Godparents/sponsors are required to attend an orientation/class. That orientation will begin at 10:00 a.m. It will last approximately two hours.",
            "It is requested that children not attend this session. But if it is impossible to find a family member or babysitter to take care of your child, then bring her or him to the orientation.",
          ]}
        />
      </Box>
    </Box>
  );
};

export default BaptismContent;
