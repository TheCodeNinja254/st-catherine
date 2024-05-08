import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, IconButton, useTheme } from "@mui/material";
import TopMediaActionableInterface from "@/interfaces/TopMediaActionableInterface";
import { ArrowOutward } from "@mui/icons-material";

const TopMediaActionableCard = (props: TopMediaActionableInterface) => {
  const theme = useTheme();
  const {
    image,
    title,
    description,
    id,
    onClick,
    active,
    variant = "default",
  } = props;

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
        backgroundColor:
          variant === "paper"
            ? theme.palette.background.paper
            : theme.palette.background.default,
        border: active
          ? `1px solid ${theme.palette.secondary.main}`
          : `1px solid ${theme.palette.background[variant]}`,
      }}
    >
      <CardActionArea onClick={() => onClick(id)}>
        <CardMedia component="img" height="72" image={image} alt={title} />
        <CardContent>
          <Box display="flex" justifyContent="space-between">
            <Typography
              color={active ? "secondary" : ""}
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </Typography>
            <IconButton size="small">
              <ArrowOutward fontSize="small" />
            </IconButton>
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TopMediaActionableCard;
