import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { Libraries } from "@googlemaps/js-api-loader/src";
import { Box } from "@mui/material";

const libraries: Libraries | undefined = ["places"];

const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};

const GoogleMapSection = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCpLn_y5ktSqbK-cnibg69gUJy5eSYlJzA",
    libraries,
  });

  console.log({ isLoaded, loadError });

  return (
    <Box>
      <GoogleMap zoom={10} center={center}>
        <Marker position={center} />
      </GoogleMap>
    </Box>
  );
};

export default GoogleMapSection;
