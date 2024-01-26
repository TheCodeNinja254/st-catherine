import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

const SpecialAnnouncementsPage = () => {
  const theme = useTheme();

  return (
    <Container>
      <Card
        sx={{
          backgroundColor: theme.palette.background.default,
          marginTop: theme.spacing(5),
          marginBottom: theme.spacing(5),
          borderRadius: 3,
        }}
        elevation={0}
      >
        <CardContent>
          <Typography variant="h2" align="center">
            Special Announcements
          </Typography>{" "}
          <Typography variant="h5" align="center">
            Announcements for Sunday, 23rd November 2023
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          backgroundColor: theme.palette.background.default,
          marginTop: theme.spacing(5),
          marginBottom: theme.spacing(5),
          borderRadius: 3,
        }}
        elevation={0}
      >
        <CardContent>
          <Container>
            <Box>
              <List>
                <ListItem>
                  <ListItemText>
                    1. We thank the following groups for their services today:
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText inset>
                    8.00a.m. Mass St. Teresa SCC
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
          </Container>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SpecialAnnouncementsPage;
