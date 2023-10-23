import {
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import popular_links, {
  PopularLink,
  PopularLinkCategory,
} from "@/static/popular_links";

const PopularLinks = () => {
  const theme = useTheme();

  return (
    <Card
      variant="elevation"
      sx={{
        borderRadius: 2,
        [theme.breakpoints.up("md")]: {
          marginLeft: theme.spacing(6),
          marginRight: theme.spacing(6),
        },
      }}
    >
      <CardContent
        sx={{
          [theme.breakpoints.up("md")]: {
            px: theme.spacing(8),
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bolder",
            textAlign: "center",
            margin: theme.spacing(2),
          }}
        >
          Popular Links
        </Typography>
        <Grid container spacing={2}>
          {popular_links.map((linkCat: PopularLinkCategory) => (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={linkCat.id}>
              <Typography
                key={linkCat.id}
                sx={{
                  textTransform: "uppercase",
                  color: theme.palette.primary.main,
                  fontSize: 18,
                  fontWeight: 700,
                }}
              >
                {linkCat.category}
              </Typography>
              <Divider sx={{ marginTop: theme.spacing(1) }} />
              {linkCat.links.map((link: PopularLink) => (
                <div key={link.id}>
                  <Link href={link.url}>
                    <Typography
                      sx={{
                        color: theme.palette.common.black,
                        fontSize: 14,
                        marginTop: theme.spacing(1),
                        "&: hover": {
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      {link.title}
                    </Typography>
                  </Link>
                  <Divider sx={{ marginTop: theme.spacing(1) }} />
                </div>
              ))}
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PopularLinks;
