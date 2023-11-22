import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { ParapgrapSectionText, SectionTitle } from "@/components";
import ListSectionText from "../../common/list_section_text";

type SacramentCategoriesType = {
  id: number;
  name: string;
  slug: string;
};

const sacramentCategories: SacramentCategoriesType[] = [
  {
    id: 1,
    name: "Baptism",
    slug: "baptism",
  },
  {
    id: 2,
    name: "Confirmation",
    slug: "confirmation",
  },
  {
    id: 3,
    name: "Eucharist",
    slug: "eucharist",
  },
  {
    id: 4,
    name: "Reconciliation",
    slug: "reconciliation",
  },
  {
    id: 5,
    name: "Annointing of the sick",
    slug: "annointing-of-the-sick",
  },
  {
    id: 6,
    name: "Marriage",
    slug: "marriage",
  },
  {
    id: 7,
    name: "Holy Orders",
    slug: "holy-orders",
  },
];

const ContentSwitchSection = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState("baptism");

  return (
    <Container
      sx={{ paddingTop: theme.spacing(5), paddingBottom: theme.spacing(5) }}
    >
      <Grid container spacing={5}>
        <Grid item xs={4}>
          <Card
            sx={{
              backgroundColor: theme.palette.primary.main,
              borderRadius: 2,
            }}
            elevation={0}
          >
            <CardContent>
              {sacramentCategories.map((item: SacramentCategoriesType) => (
                <Box key={item.id} sx={{ marginBottom: theme.spacing(2) }}>
                  <Button
                    onClick={() => setActiveTab(item.slug)}
                    sx={{
                      color: theme.palette.common.white,
                    }}
                  >
                    {item.name}
                  </Button>
                  {activeTab === item.slug && (
                    <Divider
                      sx={{
                        width: 50,
                        height: 3,
                        backgroundColor: theme.palette.secondary.main,
                        marginLeft: theme.spacing(1),
                      }}
                    />
                  )}
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8}>
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContentSwitchSection;
