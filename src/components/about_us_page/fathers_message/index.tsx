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
import displayImage from "@/assets/images/fromFather.jpg";
import { SectionTitle } from "@/components";
import ParapgrapSectionText from "../../common/parapgraph_section";

const introContent: string[] = [
  "Dear Friends and All People of God;",
  "It is with great joy and a spirit of warmth that I extend a heartfelt welcome to you on behalf of the entire St. Catherine of Siena Parish community. Whether you are a longtime member of our parish, a visitor exploring our faith community for the first time, or someone seeking solace and connection, we are delighted to have you here.",
  "Step into our parish, and you'll be greeted by a community that is not only welcoming but deeply rooted in faith. Our Christians embody the spirit of St. Catherine of Siena, who once said, 'Be who God meant you to be and you will set the world on fire.' This quote encapsulates our commitment to living out the Gospel values in our daily lives, igniting the flame of faith, love, and compassion within our parish family.",
  "As Father-in-Charge, I am honored to be a part of this faith-filled community that values compassion, service, and the joy of sharing our faith journey together. Our parish is more than just a physical space; it is a spiritual home where we come together to celebrate, support, and grow in our relationship with God and one another.",
  "Whether you are seeking spiritual guidance, community engagement, or simply a place to call home, know that you are not alone on this journey. St. Catherine of Siena Parish is here to walk with you, uplift you, and share in the blessings that come from living a life centered on teaching and preaching the Truth for the salvation of souls. St. Catherine of Siena urges us to 'Proclaim the truth and do not be silent through fear.'",
  "Take a moment to explore our website, where you'll find information about our various ministries, events, and ways to get involved. If you have any questions or if there's anything we can assist you with, please don't hesitate to reach out. We are here for you, and we look forward to the opportunity to connect with you.",
  "May God's grace and peace be with you always.",
  "Rev. Fr. Cleophas Tesha, OP.",
  "Father-In-Charge,",
  " St. Catherine of Siena Parish, Nairobi.",
];

const FathersMessage = () => {
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
            <Stack
              direction="row"
              spacing={1}
              sx={{ marginTop: theme.spacing(7) }}
            >
              <Image
                src={displayImage}
                alt="our mission"
                height={isMobile ? 354 : 400}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box sx={{ marginTop: theme.spacing(10) }}>
              <SectionTitle title="From Fr. Tesha" />
            </Box>
            <Box sx={{ marginTop: theme.spacing(3) }}>
              <ParapgrapSectionText content={introContent} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Card>
  );
};

export default FathersMessage;
