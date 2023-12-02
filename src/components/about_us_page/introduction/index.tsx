import {
  Box,
  Card,
  Container,
  Grid,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import ourMissionOne from "@/assets/images/churchFull.jpg";
import { SectionTitle } from "@/components";
import ParapgrapSectionText from "../../common/parapgraph_section";

const introContent: string[] = [
  "Welcome to St. Catherine of Siena Parish, a vibrant community nestled in the serene Kitisuru Area of Nairobi. As one of the 115 parishes under the esteemed Metropolitan Archdiocese of Nairobi, we are proud to be entrusted to the care of the Dominican Friars of the Eastern Africa Provincial Vicariate whose core apostolate is centered on teaching and preaching, fervently pursuing the truth that leads to the salvation of souls. ",
  "We believe in the transformative power of faith and education, and our efforts are directed towards fostering spiritual growth and understanding within our parish. We invite you to explore the rich tapestry of St. Catherine of Siena Parish, where the ancient traditions of the Dominican Order intersect with the contemporary journey of faith. Join us as we continue to build a community grounded in love, truth, and the pursuit of salvation.",
];

const Introduction = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card
      sx={{
        paddingBottom: theme.spacing(8),
        [theme.breakpoints.down("sm")]: {
          marginTop: theme.spacing(55),
        },
      }}
      elevation={0}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box sx={{ marginTop: theme.spacing(10) }}>
              <SectionTitle title="A Welcome Message" />
            </Box>
            <Box sx={{ marginTop: theme.spacing(3) }}>
              <ParapgrapSectionText content={introContent} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Stack
              direction="row"
              spacing={1}
              sx={{ marginTop: theme.spacing(4) }}
            >
              <Image
                src={ourMissionOne}
                alt="our mission"
                height={isMobile ? 354 : 400}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Card>
  );
};

export default Introduction;
