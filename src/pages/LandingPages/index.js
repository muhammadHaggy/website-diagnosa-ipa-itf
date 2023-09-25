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
import PatientCounter from "pages/LandingPages/sections/PatientCounter";
import Pengertian from "./sections/Pengertian";
import Gambar from "./sections/Gambar";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";
import MKButton from 'components/MKButton';
// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import { Link } from "react-router-dom";
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/landingpage/aspergilus_2.jpg";
import bgImage3 from "assets/images/landingpage/aspergilus_3.jpg";
import LungIcon from "components/CustomIcon/LungIcon";
import PatientIcon from "components/CustomIcon/PatientIcon";
import PandemicIcon from "components/CustomIcon/PandemicIcon";
import SickIcon from "components/CustomIcon/SickIcon";
import { displayedRoutes } from "routes";
import ContentDivider from "./sections/ContentDivider";
import EpidDanPeran from "./sections/EpidDanPeran";
import ButtonForm from "./sections/ButtonForm"
import RekomWHO from "./sections/RekomWHO";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import aspergilusImage from "assets/images/landingpage/aspergilus_landing_page.jpg";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

function LandingPage() {
  return (
    <>
      <DefaultNavbar
        routes={displayedRoutes}
        action={{
          type: "internal",
          route: "/criteria",
          label: "Menuju Diagnosis",
          color: "secondary",
        }}

      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showIndicators={false}
        // style={{ paddingBottom: '20px' }}  // Set the height limit here
        >
          <div>
            <img style={{ maxHeight: '500px', objectFit: "cover" }} src={bgImage} alt="Aspergilosis Background" />
          </div>
          <div>
            <img style={{ maxHeight: '500px' }} src={aspergilusImage} alt="Description" />
          </div>
          <div>
            <img style={{ maxHeight: '500px' }} src={bgImage3} alt="Description" />
          </div>
        </Carousel>

      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -4,
          mb: 8,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <PatientCounter />
        <Container  >
          <Grid container justifyContent="center" mx="auto" py={8}>
            <MKTypography
              variant="h1"
              // color="white"
              textAlign="center"
              mt={-6}
              mb={1}
              // sx={({ breakpoints, typography: { size } }) => ({
              //   [breakpoints.down("md")]: {
              //     fontSize: size["3xl"],
              //   },
              //   [breakpoints.down("xs")]: {
              //     fontSize: size["xs"],
              //   },
              // })}
            // sx={({ breakpoints, typography: { size } }) => ({
            //   [breakpoints.down("md")]: {
            //     fontSize: size["3xl"],
            //   },
            // })}
            >
              ASPERGILOSIS PARU INVASIF{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              // color="white"
              textAlign="center"
              px={{ xs: 4, lg: 12 }}
              mt={1}
            >
              Aspergilosis Paru invasif merupakan spektrum aspergilosis yang berlangsung akut pada pasien dengan gangguan sistem imun. Kasus API biasanya berhubungan dengan organ paru, dalam bentuk Aspergilosis Paru Invasif (API).
            </MKTypography>
          </Grid>
        </Container>
        <ButtonForm />
        <ContentDivider />
        <Pengertian />
        <Gambar />
        {/* <EpidDanPeran /> */}
        {/* <ContentDivider /> */}
        {/* <RekomWHO /> */}
        <MKTypography
              variant="h2"
              // color="white"
              textAlign="center"
              // mt={-6}
              mb={4}
            // sx={({ breakpoints, typography: { size } }) => ({
            //   [breakpoints.down("md")]: {
            //     fontSize: size["3xl"],
            //   },
            // })}
            >
              Penjelasan Lebih Lanjut{" "}
            </MKTypography>
        <Container sx={{mb: 8}}>
          {/* Accordion for EpidDanPeran */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Epidemiologi Aspergilosis Paru Invasif</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ml:4}}>
              <ul>
                <li>API merupakan spektrum aspergilosis akut pada pasien dengan gangguan sistem imun.</li>
                <li>Jumlah kasus API bervariasi di seluruh dunia, dengan pertambahan kasus di beberapa negara.</li>
                <li>Data insiden API di Indonesia masih terbatas, namun diperkirakan terdapat sekitar 49.500 kasus setiap tahun.</li>
              </ul>
            </AccordionDetails>
          </Accordion>

          {/* Accordion for RekomWHO */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Peran Konsensus</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Konsensus diharapkan menjadi panduan bersama untuk meningkatkan kualitas layanan kesehatan, khususnya terkait API, bagi organisasi profesi, penentu kebijakan, institusi pendidikan, dan pihak terkait di Indonesia
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Siapa Saja Yang Dapat Mengalaminya</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Infeksi	jamur	 terjadi	 bila	terdapat	gangguan	daya	 tahan	 tubuh	 tertentu dan atau faktor risiko	atau faktor predisposisi.
              Hal itu	dapat	mempermudah terjadinya infeksi jamur, mulai dari infeksi	jamur	di permukaan	kulit	(mikosis	superfisial),	alergi	kulit	atau	asma,	hingga	 infeksi	jamur	sistemik	(mikosis	sistemik)	yang	mengancam	jiwa.	Individu	dengan	kondisi	daya	 tahan	 tubuh	 yang	 menurun	 akibat	 infeksi	 HIV,	 penyakit	 berat	 (misalnya	 pasien	 di	 ICU),	 penyakit	 kronik	 (misalnya	 diabetes,	 gagal	 ginjal,	 penyakit	 paru	 kronik,	 dll)	 merupakan	 kelompok	yang	paling	berisiko	mengalami	mikosis	sistemik.
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Rekomendasi WHO</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ml:4}}>
              <ul>
                <li>Peningkatan	surveilans	penyakit jamur	(yang	memerlukan	akses	rutin	ke diagnostik).</li>
                <li>Dukungan	yang	ditargetkan	untuk	riset	dan	inovasi	(obat	antijamur baru,	diagnostik	yang	 lebih	baik).</li>
                <li>            Peningkatan	sistem	kesehatan	(untuk	memastikan	akses	ke	diagnosis, deteksi	resistensi,	dan	 terapi,	termasuk	peningkatan	jumlah	dan	kualitas pelatihan).</li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </Container>
      </Card>
    </>
  );
}

export default LandingPage;
