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

const procedure = [
  "a) Opening prayers",
  "b) Confirmation of previous minutes",
  "c) Agenda of the day",
];

const df = [
  "d) Same age group",
  "e) Share and exchange ideas",
  "f) Youth calendar activities",
];

const activities = [
  "g) To participate in the mass",
  "h) Participate in the youth calendar",
  "i) Retreats",
  "j) Raising funds for the Church projects",
];

const OurYouthContent = () => {
  const theme = useTheme();

  return (
    <Box>
      <Container
        sx={{ paddingTop: theme.spacing(6), paddingBottom: theme.spacing(8) }}
      >
        <SectionTitle title="Our Youth" />
        <Typography sx={{ marginTop: theme.spacing(4) }}>
          The youth are like kinetic energy, very strong and ready to spring. If
          unchecked their energy can be used for the wrong reasons. If tapped
          and directed towards the right dimensions, the energy can be both a
          source of self and Church development. The youth therefore must be
          nurtured in the right perspective in St Catherine of Siena Church.{" "}
          <br />
          <br />
          The current membership is unlimited since some are in schools others
          in colleges while others at home. They leadership has the chairperson,
          secretary, treasurer. Meetings are held every last Sunday of the month
          at the Church grounds.
        </Typography>
        <Typography sx={{ marginTop: theme.spacing(4) }}>
          Procedure Meetings
        </Typography>
        <List dense>
          {procedure?.map((val: string) => (
            <ListItem key={val}>
              <ListItemText primary={val} />
            </ListItem>
          ))}
        </List>
        <Typography sx={{ marginTop: theme.spacing(4) }}>
          Their driving force is
        </Typography>
        <List dense>
          {df?.map((val: string) => (
            <ListItem key={val}>
              <ListItemText primary={val} />
            </ListItem>
          ))}
        </List>
        <Typography sx={{ marginTop: theme.spacing(4) }}>
          Their current activities are
        </Typography>
        <List dense>
          {activities?.map((val: string) => (
            <ListItem key={val}>
              <ListItemText primary={val} />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default OurYouthContent;
