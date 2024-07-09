import React, { useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import { FiberManualRecordRounded } from "@mui/icons-material";
import EventModal from "@/components/common/event_modal";
import { Dayjs } from "dayjs";

const EventsSection = () => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = React.useState<Dayjs>();

  const handleOpen = (passedDay: any) => {
    setOpen(true);
    setSelectedDate(passedDay);
  };

  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Card elevation={0} sx={{ borderRadius: 3 }}>
        <CardActionArea onClick={() => handleOpen("12-01-2024")}>
          <CardContent>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 700,
                color: theme.palette.secondary.main,
              }}
            >
              Event Title
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 200,
                marginBottom: theme.spacing(1),
                color: theme.palette.text.secondary,
              }}
            >
              Organized by:{" "}
              <span
                style={{
                  fontWeight: 700,
                }}
              >
                The Choir
              </span>
            </Typography>
            <Divider />
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 200,
                marginTop: theme.spacing(1),
                color: theme.palette.text.secondary,
              }}
            >
              Lorem ipsum. istamet ipsumLorem ipsum. istamet ipsumLorem ipsum.
              istamet ipsumLorem ipsum. istamet ipsumLorem ipsum. istamet ipsum
            </Typography>
            <Divider sx={{ marginTop: theme.spacing(1) }} />
            <Box display="flex">
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 200,
                  marginTop: theme.spacing(1),
                  color: theme.palette.text.secondary,
                }}
              >
                Where:{" "}
                <span
                  style={{
                    fontWeight: 700,
                  }}
                >
                  Karura Forest
                </span>
              </Typography>
              <FiberManualRecordRounded
                sx={{
                  margin: theme.spacing(2),
                  fontSize: 6,
                  color: theme.palette.text.secondary,
                }}
              />
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 200,
                  marginTop: theme.spacing(1),
                  color: theme.palette.text.secondary,
                }}
              >
                When:{" "}
                <span
                  style={{
                    fontWeight: 700,
                  }}
                >
                  24th Aug 2024
                </span>
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
      <EventModal open={open} handleClose={handleClose} date={selectedDate} />
    </Box>
  );
};

export default EventsSection;
