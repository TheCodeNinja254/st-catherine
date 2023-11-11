import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { MyButton } from "@/styled_components";
import ContactUsPhoneIcon from "@/assets/svgs/ContactUsPhoneIcon";
import { CustomInputNoBorder, SectionTitle } from "@/components/common";
import EmailUsIcon from "@/assets/svgs/EmailUsIcon";
import ScheduleIcon from "@/assets/svgs/ScheduleIcon";

const ContactUs = () => {
  const theme = useTheme();

  return (
    <Card sx={{ paddingTop: theme.spacing(8) }}>
      <CardContent>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box sx={{ marginLeft: theme.spacing(2) }}>
                <SectionTitle title="Get In Touch" />
              </Box>
              <Box sx={{ marginTop: theme.spacing(4) }}>
                <Stack direction="row" spacing={2}>
                  <Box display="flex" alignContent="center">
                    <ContactUsPhoneIcon />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: 24 }}>
                      Give us a call.
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 200 }}>
                      +254 712 345 678
                    </Typography>
                  </Box>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ marginTop: theme.spacing(4) }}
                >
                  <Box display="flex" alignContent="center">
                    <EmailUsIcon />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: 24 }}>
                      Send us an email
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 200 }}>
                      stcatherine@gmail.com
                    </Typography>
                  </Box>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ marginTop: theme.spacing(4) }}
                >
                  <Box display="flex" alignContent="center">
                    <ScheduleIcon />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: 24 }}>
                      Our Schedule
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 200 }}>
                      Monday - Sunday (9:00 AM- 6:00 PM)
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Card
                sx={{
                  backgroundColor: theme.palette.common.white,
                  borderRadius: 2,
                }}
                variant="outlined"
              >
                <CardContent sx={{ padding: theme.spacing(5) }}>
                  <CustomInputNoBorder
                    type="text"
                    label="Name"
                    style={{
                      marginBlock: "16px",
                    }}
                    name="name"
                  />
                  <CustomInputNoBorder
                    type="email"
                    label="Email"
                    style={{
                      marginBlock: "16px",
                    }}
                    name="email"
                  />
                  <CustomInputNoBorder
                    multiline
                    rows={5}
                    type="text"
                    label="Message"
                    style={{
                      marginBlock: "16px",
                    }}
                    name="message"
                  />
                  <MyButton
                    disableElevation
                    fullWidth
                    variant="contained"
                    sx={{ marginTop: theme.spacing(2) }}
                  >
                    Send Message
                  </MyButton>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </CardContent>
    </Card>
  );
};

export default ContactUs;
