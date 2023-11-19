import Image from "next/image";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import mapImage from "@/assets/images/map.png";

import { SectionTitle } from "@/components/common";
import Link from "next/link";
import { ArrowForward } from "@mui/icons-material";

const Directions = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        paddingBottom: theme.spacing(8),
        paddingTop: theme.spacing(5),
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Stack direction="row" spacing={1}>
              <Image src={mapImage} alt="tithes_offerings" width={510} />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box sx={{ marginTop: theme.spacing(10) }}>
              <SectionTitle title="Directions" />
            </Box>
            <List dense>
              <ListItem>
                <ListItemText primary="St Catherine of Siena Catholic Church" />
              </ListItem>
              <ListItem>
                <ListItemText primary="QQ8G+M34, Peponi Rd, Nairobi City" />
              </ListItem>
            </List>
            <Link href="/">
              <Stack direction="row">
                <Typography
                  sx={{
                    marginTop: theme.spacing(6),
                    color: theme.palette.primary.main,
                  }}
                >
                  Open Maps
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
        </Grid>
      </Container>
    </Box>
  );
};

export default Directions;
