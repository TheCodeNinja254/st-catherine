import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";

const SwiperNavButton = styled(ButtonBase)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: "25px",
  width: "25px",
  borderRadius: "50%",
  color: "white",
  backgroundColor: theme.palette.primary.main,
  "&.swiper-button-disabled": {
    color: "rgba(158, 165, 173, 1)",
    backgroundColor: "rgba(145, 158, 171, 0.24)",
  },
}));

export default SwiperNavButton;
