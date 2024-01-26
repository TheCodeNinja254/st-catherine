import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Skeleton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

import { SectionTitle } from "@/components/common";
import Link from "next/link";
import { ArrowForward } from "@mui/icons-material";
import churchMapIcon from "@/assets/svgs/logo_icon.svg";
import { useCallback, useRef } from "react";

const mapIcon = churchMapIcon;

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string;

const initialCenter = {
  lat: -1.2333579319246752,
  lng: 36.765261899184175,
};

const initialZoom = 15;

const libraries = ["places"];

const options = {
  styles: [],
  disableDefaultUI: false,
  zoomControl: true,
  gestureHandling: "greedy",
};

const mapContainerStyle = {
  width: "100%",
  height: "40vh",
  maxWidth: "100%",
};

const Directions = () => {
  const theme = useTheme();

  const mapRef = useRef();

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    // @ts-ignore
    libraries,
  });

  const onMapLoad = useCallback((map: any) => {
    mapRef.current = map;
  }, []);

  if (loadError) return <Typography paragraph>Error loading map</Typography>;

  if (!isLoaded)
    return (
      <Skeleton
        variant="rounded"
        width={1200}
        height={50}
        style={{ marginBottom: theme.spacing(1) }}
      />
    );

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
              {/* <Image src={mapImage} alt="tithes_offerings" width={510} /> */}
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={initialZoom}
                center={initialCenter}
                options={options}
                onLoad={onMapLoad}
              >
                <Marker
                  position={{
                    lat: -1.2333579319246752,
                    lng: 36.765261899184175,
                  }}
                  icon={{
                    url: mapIcon,
                    scaledSize: new window.google.maps.Size(30, 30),
                  }}
                  label="St Catherine of Siena Catholic Church"
                />
              </GoogleMap>
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
            <Link
              target="_blank"
              href="https://www.google.com/maps/place/St.+Catherine+of+Siena+Catholic+Church/@-1.246373,36.6819471,12z/data=!4m20!1m13!4m12!1m4!2m2!1d36.7280684!2d-1.2423454!4e1!1m6!1m2!1s0x182f18220b273069:0x3b12f393c00a2d22!2sQQ8G%2BM34+St.+Catherine+of+Siena+Catholic+Church,+Peponi+Rd,+Nairobi+City!2m2!1d36.775218!2d-1.2333586!3m5!1s0x182f18220b273069:0x3b12f393c00a2d22!8m2!3d-1.2333586!4d36.775218!16s%2Fg%2F1tr6cl7p?entry=ttu"
            >
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
