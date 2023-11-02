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
import MKButton from "components/MKButton";
import Icon from "@mui/material/Icon";
// Material Kit 2 React examples

// Images
import BuiltBy from "../Build/Bscoring";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

function getRiskDescription(is_high_risk) {
  return is_high_risk ? "Kelompok risiko tinggi" : "Kelompok risiko rendah";
}

function Presentation(prop) {
  const { id, ipa_prob, total_score, is_probable, form_data, is_high_risk } = prop.props;
  const cardColor = is_high_risk ? "error" : "info";
  const recommendationchat = is_high_risk ? "Approriate systemic antifungal administration (voriconazole i.v)" : "Continue Monitoring \n";

  return (
    <MKBox component="section" py={6} my={6} mt={1}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Container sx={{ mt: 0 }}>
            {/* <FilledInfoCard */}
            <BuiltBy chat={recommendationchat} />
          </Container>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={4}>
                <FilledInfoCard
                  color="info"
                  icon="assessment"
                  title="Total skor pasien"
                  description={total_score}
                // sx={{
                //   backgroundColor: 'rgba(0, 0, 6, 0.7)', // Ubah warna latar belakang menjadi lebih gelap
                // }}
                // action={{
                //   type: "external",
                //   route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                //   label: "Read more",
                // }}
                />
              </Grid>

              <Grid item xs={12} lg={4}>
                <FilledInfoCard
                  // variant="gradient"
                  color="info"
                  icon="donut_large"
                  title="Kemungkinan API"
                  description={`${ipa_prob}%`}
                // action={{
                //   type: "external",
                //   route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                //   label: "Let's start",
                // }}
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <FilledInfoCard
                  variant="gradient"
                  color={cardColor}
                  icon="view_list"
                  title="Klasifikasi Risiko"
                  description={getRiskDescription(is_high_risk)}
                // action={{
                //   type: "external",
                //   route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                //   label: "Read more",
                // }}
                />
              </Grid>

            </Grid>
            
          </Container>
          <MKButton color="primary" variant="gradient" size="large" sx={{
              width:"100%",
              mb:"50px",
              mt:"40px"
          }}>
              <Icon sx={{
                  marginRight:"2px"
              }}>mail</Icon>
              Kirim ke Email
          </MKButton>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Presentation;
