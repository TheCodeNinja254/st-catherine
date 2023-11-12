import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import background from "@/assets/images/ourValues2.jpg";
import { SectionTitle } from "@/components";

const LeadershipSection = () => {
  const theme = useTheme();

  return (
    <Card elevation={0} sx={{ paddingBottom: theme.spacing(6) }}>
      <CardContent>
        <Container>
          <Box sx={{ marginTop: theme.spacing(10) }}>
            <SectionTitle title="Leadership" />
          </Box>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box sx={{ paddingRight: theme.spacing(4) }}>
                <Typography
                  variant="body1"
                  sx={{ marginTop: theme.spacing(4) }}
                >
                  LeadershipLike any other parish, St. Catherine of Siena is led
                  by the parish priest who is assisted by assistant priests.
                  There is also the parish pastoral council which gives counsel
                  to the parish priest for smooth running of the parish. The
                  first parish priest was Rev. Fr. Ed Goman, OP who was
                  succeeded by Rev. Fr. Kieran, OP, and then Rev. Fr. Martin
                  Ndegwa, OP. Later, Rev. Fr. John Lenkaak, OP, then Rev. Fr.
                  Gideon Muchira, OP and now the current parish priest Fr.
                  Emmanuel Mulu, OP.The Parish Priest is assisted by other
                  priests who reside in the parish. They include Rev. Prof.
                  Frederick Mvumbi, OP-Lecturer at the Catholic University of
                  Eastern Africa; Rev. Fr. Leo Mwenda, OP-A PhD candidate at the
                  Catholic University of Eastern Africa and Rev. Fr. Gideon
                  Muchira, OP- the Vicar Provincial of the Dominicans in Eastern
                  Africa.The priests also minister to the students of the
                  University of Nairobi’s School of Business located in Lower
                  Kabete.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box sx={{ paddingTop: theme.spacing(4) }}>
                <Image src={background} alt="our mission" height={300} />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={8} sx={{ marginTop: theme.spacing(3) }}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box sx={{ paddingTop: theme.spacing(4) }}>
                <Image src={background} alt="our mission" height={300} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box sx={{ paddingRight: theme.spacing(4) }}>
                <Typography
                  variant="body1"
                  sx={{ marginTop: theme.spacing(4) }}
                >
                  There are two Mass in a week in Lower Kabete. On Sunday, Mass
                  is at 11.00 am while on Tuesday, Mass is at 8.00 pm. Both Mass
                  are in English.Last but not the least, the priests also serve
                  in an Outstation of the parish, St. Martin’s Kibagare which is
                  located in an informal settlement area (slum). For lack of
                  land, the Christians worship in a school chapel owned by the
                  Assumption Sisters of Nairobi who own a center for education
                  in the slum. The center is home for a girls high school and a
                  primary school both run by the Assumption Sisters of Nairobi
                  to help the children from the slum to acquire education.Mass
                  at St. Martin’s Kibagare is as followsSunday: 7.30 am
                  students-English 9.00 am Christians-SwahiliFriday: 5.00 pm
                  students-EnglishThe other weekdays, namely Monday and
                  Wednesday mass are in the morning at 7 am for the sisters’
                  community in the center (Assumption Sisters of Nairobi).
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </CardContent>
    </Card>
  );
};

export default LeadershipSection;
