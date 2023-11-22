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
import BaptismContent from "@/components/sacraments_page/content_switch_section/content/baptism_content";
import { useRouter } from "next/navigation";

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
    name: "Anointing of the sick",
    slug: "anointing-of-the-sick",
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

const ContentSwitchSection = (props: any) => {
  const theme = useTheme();
  const { contentTypeName } = props;
  const [activeTab, setActiveTab] = useState(contentTypeName);
  const router = useRouter();

  const handleTabChange = (contentCat: string): void => {
    setActiveTab(contentCat);
    router.push(`/sacraments/${contentCat}`);
  };

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
                    onClick={() => handleTabChange(item.slug)}
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
          {activeTab === "baptism" && <BaptismContent />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContentSwitchSection;
