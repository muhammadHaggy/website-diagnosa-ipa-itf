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
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";
import MKButton from 'components/MKButton';
// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import { Typography } from "@mui/material";
import flavus from "assets/images/landingpage/flavus.png";
import fumigatus from "assets/images/landingpage/fumigatus.png"
import niger from "assets/images/landingpage/niger.png"
import aspergillus from "assets/images/landingpage/aspergilus.png"
function Gambar() {
  return (
    <MKBox
                minHeight="75vh"
                sx={{
                backgroundImage: `url(${aspergillus})`,
                backgroundSize: "contain",
                display: "grid",
                placeItems: "center",
                backgroundRepeat: "no-repeat",
                paddingX: { xs: 2, sm: 4, md: 6 },
                }}
            >
                
            </MKBox>
  );
}

export default Gambar;
