/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";
import Low from "./Recommendation/low";
import High from "./Recommendation/low";
import Build from "react-countup";
import BuiltBy from "../Build";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

const exampleData = {
  id: 1,
  ipa_prob: "36.8%",
  total_score: 4,
  is_probable: true,
  form_data: {
    // Anda dapat menambahkan lebih banyak properti di sini sesuai kebutuhan Anda
    // Misalnya, jika Anda memiliki properti lain seperti 'name', 'age', dll.
  },
};

function Presentation(prop) {
  const { id, ipa_prob, total_score, is_probable, form_data, is_high_risk } = prop.props;
  console.log(prop)

  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Container sx={{ mt: 6 }}>
            {/* <FilledInfoCard */}
            <BuiltBy />
          </Container>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={4}>
                <FilledInfoCard
                  color="info"
                  icon="precision_manufacturing"
                  title="Total score"
                  description={total_score}
                  action={{
                    type: "external",
                    route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                    label: "Read more",
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <FilledInfoCard
                  color="info"
                  icon="apps"
                  title="Risk Classification"
                  description="High-risk group"
                  action={{
                    type: "external",
                    route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                    label: "Read more",
                  }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <FilledInfoCard
                  variant="gradient"
                  color="error"
                  icon="flag"
                  title="IPA Probability"
                  description="36.8%"
                  action={{
                    type: "external",
                    route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                    label: "Let's start",
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Presentation;
