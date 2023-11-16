import Image from "next/image";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import background from "@/assets/images/domonicanOrder.png";
import { SectionTitle } from "@/components";
import { ArrowForward } from "@mui/icons-material";
import Link from "next/link";

const DominicanOrder = () => {
  const theme = useTheme();

  return (
    <Box
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
            <Typography sx={{ marginTop: theme.spacing(2) }}>
              Dominican, byname Black Friar, member of the Order of Friars
              Preachers, also called Order of Preachers (O.P.), one of the four
              great mendicant orders of the Roman Catholic Church, founded by
              St. Dominic in 1215. Its members include friars, nuns, active
              sisters, and lay Dominicans. From the beginning the order has been
              a synthesis of the contemplative life and the active ministry. The
              members live a community life, and a careful balance is maintained
              between democratically constituted chapters, or legislative
              assemblies, and strong but elected superiors.....
            </Typography>
            <Link href="/">
              <Stack direction="row">
                <Typography
                  sx={{
                    marginTop: theme.spacing(6),
                    color: theme.palette.primary.main,
                  }}
                >
                  Learn More
                </Typography>
                <ArrowForward
                  sx={{
                    marginTop: theme.spacing(6),
                    marginLeft: theme.spacing(2),
                    color: theme.palette.primary.main,
                    fontSize: 20,
                  }}
                />
              </Stack>
            </Link>
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
