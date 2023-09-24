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

function Pengertian() {
  return (
    <MKBox component="section" py={3} sx={{ marginTop: -20  }} >
      <Container>
          <Grid container item xs={12} lg={12} md={12} mx="auto"
            justifyContent="center"
            gap={{xs:4, md:12}}
            paddingBottom={5}>
            <Grid item xs={12} lg={4} md={4} mx="auto" >
              <MKTypography
              variant="h3"
              justifyContent="center"
              textAlign="center"
              paddingBottom="5px"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
                [breakpoints.down("xs")]: {
                  fontSize: size["xs"],
                },
              })}
            >
              Seputar Aspergilosis Invasif (Al){" "}
            </MKTypography>
            <Divider orientation="horizontal" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
            <MKTypography
              variant="body2"
              justifyContent="center"
              textAlign="center"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["lg"],
                },
                [breakpoints.down("xs")]: {
                  fontSize: size["xs"],
                },
              })}
            >
              Al adalah infeksi jamur invasif yang meningkat jumlah kasusnya, terutama pada pasien sakit kritis.
Diperkirakan terdapat lebih dari 1,8 juta kasus mikosis invasif di seluruh dunia, dengan 250.000 kasus Al.
Tingkat morbiditas dan mortalitas Al mencapai 30-80%.
Kasus Al sering berhubungan dengan organ paru, dikenal sebagai Aspergilosis Paru Invasif (API).
            </MKTypography>
            </Grid>
            <Grid item xs={12} lg={4} md={4} mx="auto" >
              <MKTypography
              variant="h3"
              textAlign="center"
              paddingBottom="5px"
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
              Penyebab Aspergilosis Invasif{" "}
            </MKTypography>
            <Divider orientation="horizontal" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
            <MKTypography
              variant="body2"
              justifyContent="center"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["lg"],
                },
                [breakpoints.down("xs")]: {
                  fontSize: size["xs"],
                },
                "& ol": { /* Apply styling to the <ol> element */
                  paddingLeft: "30px", /* Adjust the left padding as needed */
                  listStyle: "decimal inside", /* Use "decimal inside" for numbering inside the box */
                },
                "& li": { /* Apply styling to the <li> elements */
                  marginBottom: "8px", /* Add spacing between list items */
                },
              })}
            >Aspergilosis disebabkan oleh jamur Aspergillus spp. yang memiliki lebih dari 250 spesies.
            Penyebab Al yang paling sering adalah 
            <ol>
                <li>Aspergillus fumigatus</li>
                <li>A. flavus</li>
                <li>A. niger</li>
                <li>A. terreus</li>
                <li>A. fumigatus diakui sebagai jamur patogen kelompok prioritas kritis oleh WHO.</li>
            </ol>
            </MKTypography>
            </Grid>
          </Grid>
          

        </Container>
    </MKBox>
  );
}

export default Pengertian;
