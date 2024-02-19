import React from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";

const mpesaAccountOptions: string[] = [
  "Tithe",
  "Project",
  "Charity",
  "Offertory/Sadaka",
  "Others (Specify)",
];

const FundingCard: React.FC = () => {
  const theme = useTheme();

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
        backgroundColor: theme.palette.common.white,
        border: `1px solid ${theme.palette.secondary.main}`,
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          sx={{ fontSize: 12, marginTop: theme.spacing(3) }}
          color={theme.palette.text.disabled}
        >
          FUNDING APPEAL
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontSize: 20, marginTop: theme.spacing(1) }}
          color="primary"
        >
          St. Catherine Of Siena Parish Kitisuru
        </Typography>
        <Divider textAlign="left">
          <Typography gutterBottom sx={{ fontSize: 12 }}>
            <span style={{ color: theme.palette.error.main }}>IMPORTANT!</span>{" "}
            Information in support of our Church
          </Typography>
        </Divider>

        <Card
          elevation={0}
          sx={{
            marginTop: theme.spacing(1),
            borderRadius: 4,
            background: `linear-gradient(90deg, rgba(131,58,180,1) 37%, rgba(252,176,69,1) 100%, rgba(18,195,73,1) 100%)`,
          }}
        >
          <CardContent>
            <Stack spacing={3} direction="row">
              <Box>
                <AutoAwesomeIcon fontSize="large" color="secondary" />
              </Box>
              <Box>
                <Typography color={theme.palette.common.white}>
                  Cheques Payable to:
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ fontFamily: "Futura Std Bold" }}
                  color={theme.palette.common.white}
                >
                  St. Catherine Of Siena Parish
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>

        <Divider textAlign="left" sx={{ marginTop: theme.spacing(3) }}>
          <Typography gutterBottom sx={{ fontSize: 12 }}>
            More Options
          </Typography>
        </Divider>

        <Card
          elevation={0}
          sx={{
            marginTop: theme.spacing(1),
            borderRadius: 4,
            border: `2px solid linear-gradient(90deg, rgba(131,58,180,1) 37%, rgba(252,176,69,1) 100%, rgba(18,195,73,1) 100%)`,
          }}
        >
          <CardContent>
            <Stack spacing={3} direction="row">
              <Box>
                <MobileScreenShareIcon fontSize="large" color="success" />
              </Box>
              <Box>
                <Typography color={theme.palette.success.light}>
                  Via M-PESA Paybill
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Futura Std Bold",
                    color: theme.palette.success.main,
                  }}
                >
                  <u>Paybill</u> Number:{" "}
                  <span
                    style={{
                      background: `-webkit-radial-gradient(#FFA700, #951855)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    997866
                  </span>
                </Typography>

                <Typography
                  color={theme.palette.primary.main}
                  sx={{ marginTop: 2 }}
                >
                  <span
                    style={{
                      marginTop: 5,
                      fontFamily: "Futura Std Bold",
                    }}
                  >
                    Account{" "}
                  </span>
                  <span
                    style={{
                      marginTop: 5,
                      fontSize: 10,
                      color: theme.palette.text.disabled,
                    }}
                  >
                    (Enter one of the below)
                  </span>
                </Typography>
                <Stack
                  spacing={1}
                  direction={{ xs: "column", sm: "row" }}
                  useFlexGap
                  sx={{ marginTop: theme.spacing(2) }}
                >
                  {mpesaAccountOptions.map((item) => (
                    <Chip
                      label={item}
                      // sx={{ marginRight: theme.spacing(0.5) }}
                    />
                  ))}
                </Stack>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default FundingCard;
