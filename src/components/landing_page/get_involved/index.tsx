import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { SectionTitle } from "@/components";
import { ChevronRight } from "@mui/icons-material";
import getInvolvedContent, {
  GetInvolvedContentType,
} from "@/static/get_involved_content";
import Link from "next/link";

const GetInvolved = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        paddingTop: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
      }}
    >
      <CardContent>
        <Container>
          <SectionTitle title="Get Involved" />
          <Grid container spacing={2} sx={{ marginTop: theme.spacing(4) }}>
            {getInvolvedContent?.map((content: GetInvolvedContentType) => (
              <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={content.id}>
                <Card
                  elevation={0}
                  sx={{ backgroundColor: theme.palette.background.default }}
                >
                  <CardMedia
                    sx={{ height: 290, borderRadius: 2 }}
                    image={content.imageLink}
                    title="get involved"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: 700 }}
                    >
                      {content.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {content.content}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link href={content.learnMoreLink}>
                      <Button size="small">
                        Learn More <ChevronRight />
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </CardContent>
    </Box>
  );
};

export default GetInvolved;
