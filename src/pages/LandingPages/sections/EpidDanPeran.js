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

function EpidDanPeran() {
  return (
    <MKBox component="section" py={3} sx={{ marginTop: -20  }} >
      <Container>
          <Grid container item xs={12} lg={12} md={12} mx="auto"
            justifyContent="center"
            gap={{xs:4, md:12}}
            paddingBottom={5}>
            <Grid item xs={12} lg={12} md={12} mx="auto" >
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
              Epidemiologi Aspergilosis Invasif{" "}
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
                "& ul": {
                    alignItems: "center",
                    justifyContent: "center",
                    paddingX: {xs:"50px", lg:"150px", md: "100px"},
                    listStylePosition: "inside",
                    textAlign: "left", // Align the text to the left
                  },
                  "& li": {
                    marginBottom: "8px",
                    listStyleType: "disc",
                    paddingLeft: "30px", // Adjust the left padding for list items as needed
                  },
              })}
            >
            <ul>
                <li>AI merupakan spektrum aspergilosis akut pada pasien dengan gangguan sistem imun.</li>
                <li>Jumlah kasus Al bervariasi di seluruh dunia, dengan pertambahan kasus di beberapa negara.</li>
                <li>Data insiden Al di Indonesia masih terbatas, namun diperkirakan terdapat sekitar 49.500 kasus setiap tahun.</li>
            </ul>
            </MKTypography>
            </Grid>
            <Grid item xs={12} lg={12} md={12} mx="auto" >
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
              Peran Konsensus{" "}
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
            >Konsensus diharapkan menjadi panduan bersama untuk meningkatkan kualitas layanan kesehatan, khususnya terkait Al, bagi organisasi profesi, penentu kebijakan, institusi pendidikan, dan pihak terkait di Indonesia
            
            </MKTypography>
            </Grid>
          </Grid>
          

        </Container>
    </MKBox>
  );
}

export default EpidDanPeran;
