import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, useTheme } from "@mui/material";
import TopMediaActionableInterface from "@/interfaces/TopMediaActionableInterface";

const TopMediaActionableCard = (props: TopMediaActionableInterface) => {
  const theme = useTheme();
  const {
    image,
    title,
    description,
    id,
    onClick,
    action,
    active,
    variant = "default",
  } = props;

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        backgroundColor:
          variant === "paper"
            ? theme.palette.background.paper
            : theme.palette.background.default,
        border: active
          ? `2px solid ${theme.palette.primary.main}`
          : `2px solid ${theme.palette.background[variant]}`,
      }}
    >
      <CardActionArea onClick={() => onClick(id)}>
        <CardMedia component="img" height="100" image={image} alt={title} />
        <CardContent>
          <Typography
            color={active ? "primary" : ""}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </Typography>
          {action && (
            <Typography
              align="right"
              color={active ? "primary" : ""}
              sx={{ marginTop: theme.spacing(2) }}
            >
              ...{action}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TopMediaActionableCard;
