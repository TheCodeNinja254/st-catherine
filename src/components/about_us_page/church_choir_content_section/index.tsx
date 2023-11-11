import { SectionTitle } from "@/components";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import choirPositions from "@/static/choir_positions";

const achievements = [
  "We acquired musical equipment ie. Keyboard donated by the Couples of Christ group. This has helped uplift the songs in the Church",
  "The Choir produced the first musical DVD entitled “Asante Ninashukuru” (2012)",
  "The Choir now has a set of 2 uniforms that are worn during special occasions",
  "We have developed the St. Catherine of Siena Handbook and a Code of Conduct that every choir member signs",
  "We Introduced a policy for annual registration of Kshs 200, and a monthly contribution of Kshs 100",
  "We introduced a bulletin that is sold on Sundays at Kshs 20 which has boosted the choir kitty.",
];

const ChurchChoirContentSection = () => {
  const theme = useTheme();

  return (
    <Box>
      <Container
        sx={{ paddingTop: theme.spacing(6), paddingBottom: theme.spacing(8) }}
      >
        <SectionTitle title="Our Choir" />
        <Typography sx={{ marginTop: theme.spacing(4) }}>
          The choir is an important leader in worship: it is that portion of the
          congregation that is trained to lead, enhance and support Church
          members in sung prayer and praise. The St. Catherine of Siena choir is
          a voluntary group of Christians with a calling and gift for singing.
          The choir’s mission is to serve God and the congregational community
          through the joyous gift of music. The choir’s structure includes a
          council whose rolesand responsibilities are described in the St.
          Catherine of Siena Choir Handbook. The council includes the following
          posts:
        </Typography>
        <List dense>
          {choirPositions?.map((val: string) => (
            <ListItem key={val}>
              <ListItemText primary={val} />
            </ListItem>
          ))}
        </List>
        <Box
          sx={{ marginTop: theme.spacing(3), marginBottom: theme.spacing(3) }}
        >
          <SectionTitle title="Achievements" />
        </Box>
        <List dense>
          {achievements?.map((val: string) => (
            <ListItem key={val}>
              <ListItemText primary={val} />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default ChurchChoirContentSection;
