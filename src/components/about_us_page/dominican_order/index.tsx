import Image from "next/image";
import { Box, Container, Grid, useTheme } from "@mui/material";
import background from "@/assets/images/dominicanOrder.jpg";
import { SectionTitle } from "@/components";
import ContentDisplay from "@/components/content_display";
import dominicanOrder from "@/static/dominicanOrder";

const DominicanOrder = () => {
  const theme = useTheme();

  return (
    <Box
      id="dominican-order"
      sx={{
        paddingBottom: theme.spacing(8),
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box sx={{ marginTop: theme.spacing(10) }}>
              <SectionTitle title="Dominican Order" />
            </Box>
            <ContentDisplay content={dominicanOrder} />
            {/* <Link href="/"> */}
            {/*  <Stack direction="row"> */}
            {/*    <Typography */}
            {/*      sx={{ */}
            {/*        marginTop: theme.spacing(6), */}
            {/*        color: theme.palette.primary.main, */}
            {/*      }} */}
            {/*    > */}
            {/*      Learn More */}
            {/*    </Typography> */}
            {/*    <ArrowForward */}
            {/*      sx={{ */}
            {/*        marginTop: theme.spacing(6), */}
            {/*        marginLeft: theme.spacing(2), */}
            {/*        color: theme.palette.primary.main, */}
            {/*        fontSize: 20, */}
            {/*      }} */}
            {/*    /> */}
            {/*  </Stack> */}
            {/* </Link> */}
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box sx={{ paddingTop: theme.spacing(4) }}>
              <Image src={background} alt="our mission" height={300} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DominicanOrder;
