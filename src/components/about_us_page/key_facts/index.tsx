import Image from "next/image";
import {
  Box,
  Card,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import background from "@/assets/images/our_vision.jpg";
import { SectionTitle } from "@/components";
import keyFacts from "@/static/key_facts";

const KeyFacts = () => {
  const theme = useTheme();

  return (
    <Card sx={{ paddingBottom: theme.spacing(8) }} elevation={0} id="key-facts">
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box sx={{ marginTop: theme.spacing(10) }}>
              <SectionTitle title="Key Facts" />
            </Box>
            <Typography sx={{ marginTop: theme.spacing(2) }}>
              Want to know some interesting facts about St Catherine of Sienna?
            </Typography>
            <List dense>
              {keyFacts?.map((val: string) => (
                <ListItem key={val}>
                  <ListItemText primary={val} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box sx={{ paddingTop: theme.spacing(4) }}>
              <Image src={background} alt="our mission" height={300} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Card>
  );
};

export default KeyFacts;
