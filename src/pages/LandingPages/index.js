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
import bgImage from "assets/images/landingpage/bg-aspergilosis.png";
import LungIcon from "components/CustomIcon/LungIcon";
import PatientIcon from "components/CustomIcon/PatientIcon";
import PandemicIcon from "components/CustomIcon/PandemicIcon";
import SickIcon from "components/CustomIcon/SickIcon";
import { displayedRoutes } from "routes";
import ContentDivider from "./sections/ContentDivider";
import EpidDanPeran from "./sections/EpidDanPeran";
import ButtonForm from "./sections/ButtonForm"
import RekomWHO from "./sections/RekomWHO";

function LandingPage() {
  return (
    <>
      <DefaultNavbar
        routes={displayedRoutes}
        action={{
          type: "internal",
          route: "/criteria",
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
              Aspergilosis invasif merupakan spektrum aspergilosis yang berlangsung akut pada pasien dengan gangguan sistem imun. Kasus Al biasanya berhubungan dengan organ paru, dalam bentuk Aspergilosis Paru Invasif (API).
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <PatientCounter/>
      <ButtonForm/>
      <ContentDivider/>
      <Pengertian/>
      <Gambar/>
      <EpidDanPeran/>
      <ContentDivider/>
      <RekomWHO/>
    </>
  );
}

export default LandingPage;
