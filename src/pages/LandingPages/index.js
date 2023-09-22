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
import Card from "@mui/material/Card";
import Button from "@mui/material/Button"
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";
import MKButton from 'components/MKButton';
// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/landingpage/bg-aspergilosis.png";
import LungIcon from "components/CustomIcon/LungIcon";
import PatientIcon from "components/CustomIcon/PatientIcon";
import PandemicIcon from "components/CustomIcon/PandemicIcon";
import SickIcon from "components/CustomIcon/SickIcon";
import { displayedRoutes } from "routes";

function LandingPage() {
  return (
    <>
    <DefaultNavbar
        routes={displayedRoutes}
        action={{
          type: "internal",
          route: "/scoring",
          label: "Menuju Form Diagnosa",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              textAlign="center"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              ASPERGILOSIS INVASIF{" "}
            </MKTypography>
            <MKTypography
              variant="body2"
              color="white"
              textAlign="center"
              px={{ xs: 4, lg: 12 }}
              mt={1}
            >
                Aspergilosis adalah infeksi oleh jamur Aspergillus yang banyak ditemukan di alam.  
                Kebanyakan orang menghirup spora Aspergillus setiap hari tanpa menjadi sakit
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        justifyContent="center"
        textAlign="center"
        alignItems="center"
        sx={{ 
            pt: { xs: 5, md: 10 },
            mt: { xs: -15 },
            pb: { xs: 150, md: 50 },
            backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
              rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        
        <Container
        >
          <Grid 
          container 
          spacing={3}
          justifyContent="center"
          columnSpacing={5}
          paddingBottom={3}
          >
            <Grid item xs={12} sm={10} md={10} lg={6} xl={6} >
            <div style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px",  height: "100%"}}>
                <FilledInfoCard
                color="info"
                icon={<SickIcon />}
                description="Orang dengan sistem kekebalan tubuh lemah atau mengalami penyakit tertentu berisiko lebih tinggi terkena aspergilosis."
                />
            </div>
            </Grid>

            <Grid item xs={12} sm={10} md={10} lg={6} xl={6}>
            <div style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px",  height: "100%" }}>
                <FilledInfoCard
                color="info"
                icon={<PandemicIcon />}
                description="Infeksi jamur ini semula kurang dianggap penting, sampai akhirnya pada akhir 2022 WHO menyatakan infeksi jamur sebagai masalah kesehatan global yang harus diwaspadai."
                />
            </div>
            </Grid>
          </Grid>
          <Grid 
          container 
          spacing={3}
          justifyContent="center"
          columnSpacing={5}
          paddingBottom={3}
          
          >
            <Grid item xs={12} sm={10} md={10} lg={6} xl={6} >
            <div style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px",  height: "100%"}}>
                <FilledInfoCard
                color="info"
                icon={<PatientIcon />}
                description="Aspergillosis invasif terjadi ketika jamur Aspergillus menyebabkan infeksi serius, misalnya pada pasien sakit kritis atau dirawat di ICU, pasien yang menjalani transplantasi organ, dll."  />
            </div>
            </Grid>

            <Grid item xs={12} sm={10} md={10} lg={6} xl={6} >
            <div style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px",  height: "100%" }}>
                <FilledInfoCard
                
                color="info"
                icon={<LungIcon />}
                description=
                "Aspergillosis invasif paling sering menyerang paru, namun dapat juga menyebar ke organ lain, dengan angka kematian berkisar 30-40%."  />
            </div>
            </Grid>
          </Grid>
          <Grid container 
          justifyContent="center"
          paddingX={{xs:3, md:6}}
          paddingTop={10}>
            <MKButton sx={{ 
            backgroundColor: "#035560", color: "#FFFFFF"
        }} size="large" fullWidth circular >Lanjut ke Form Diagnosis</MKButton>
          </Grid>
          
        </Container>
        <Container>
            <Grid container item xs={12} lg={7} mx="auto"
          justifyContent="center"
          paddingX={{xs:3, md:6}}
          paddingTop={20}
          paddingBottom={5}>
            <MKTypography
              variant="h2"
              textAlign="center"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
                [breakpoints.down("xs")]: {
                    fontSize: size["xs"],
                  },
              })}
            >
              Prosedur Diagnosis Aspergilosis Paru Invasif{" "}
            </MKTypography>
          </Grid>
          
          <Grid container item lg={12} mx="auto" spacing={1} height={100}
          justifyContent="center">
            <Grid item  lg={4} >
            <div style={{boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px",  height: "100%"}}>
                <FilledInfoCard
                color = "#1A73E8"
                title="KRITERIA PASIEN"
                description=
                "Salah satu kriteria berikut: neutropenia, keganasan hematologi, penggunaan kortikosteroid sistemik dan/obat imunosupresan, perawatan lama di ICU, penyakit paru kronik (termasuk TB paru, PPOK, kanker paru), sirosis hati, diabetes melitus"  />
             </div>
            </Grid>
            <Grid item  lg={4} >
            <div style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px",  height: "100%"}}>
                <FilledInfoCard
                title="KRITERIA KLINIS"
                description=
                "Salah satu gejala berikut: demam berkepanjangan, nyeri dada pleuritik, sesak napas, batuk darah, gagal napas, SERTA hasil pemeriksaan foto toraks abnormal, termasuk infiltrat, perselubungan inhomogen, dll"  />
             </div>
            </Grid>
            <Grid item  lg={4} >
            <div style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px",  height: "100%"}}>
                <FilledInfoCard
                color="info"
                title="KRITERIA MIKOLOGI"
                description=
                "Pemeriksaan mikroskopik dan kultur jamur dari sekret paru (BAL, aspirat ETT, bilasan ronkus), atau deteksi antigen galaktomanan positif atau PCR dari sekret paru dan atau serum"  />
             </div>
            </Grid>
          </Grid>

        </Container>
      </Card>
    </>
  );
}

export default LandingPage;
