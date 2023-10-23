import { styled, Toolbar } from "@mui/material";

const MyToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  marginLeft: theme.spacing(10),
  marginRight: theme.spacing(10),
  [theme.breakpoints.down("sm")]: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

export default MyToolbar;
