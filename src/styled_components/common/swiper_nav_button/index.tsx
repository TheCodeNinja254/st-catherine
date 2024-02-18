import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";

const SwiperNavButton = styled(ButtonBase)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: "48px",
  width: "56px",
  borderRadius: "8px",
  color: "white",
  backgroundColor: theme.palette.primary.main,
  "&.swiper-button-disabled": {
    color: "rgba(158, 165, 173, 1)",
    backgroundColor: "rgba(145, 158, 171, 0.24)",
  },
}));

export default SwiperNavButton;
