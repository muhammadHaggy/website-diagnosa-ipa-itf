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

function RekomWHO() {
  return (
    <MKBox component="section" py={3} sx={{ marginTop: -20, backgroundColor: "#035560"  }} >
      <Container>
          <Grid container item xs={12} lg={12} md={12} mx="auto"
            justifyContent="center"
            gap={{xs:4, md:12}}
            paddingBottom={5}>
            <Grid item xs={12} lg={12} md={12} mx="auto" >
              <MKTypography
              variant="h3"
              paddingBottom="5px"
              justifyContent="center"
              textAlign="center"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
                [breakpoints.down("xs")]: {
                  fontSize: size["xs"],
                },
                color:"#FFFFFF"
              })}
            >
              Siapa saja yang dapat mengalaminya ?{" "}
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
                
                color:"#FFFFFF"
              })}
            >Infeksi	jamur	 terjadi	 bila	terdapat	gangguan	daya	 tahan	 tubuh	 tertentu dan atau faktor risiko	atau faktor predisposisi.
            Hal itu	dapat	mempermudah terjadinya infeksi jamur, mulai dari infeksi	jamur	di permukaan	kulit	(mikosis	superfisial),	alergi	kulit	atau	asma,	hingga	 infeksi	jamur	sistemik	(mikosis	sistemik)	yang	mengancam	jiwa.	Individu	dengan	kondisi	daya	 tahan	 tubuh	 yang	 menurun	 akibat	 infeksi	 HIV,	 penyakit	 berat	 (misalnya	 pasien	 di	 ICU),	 penyakit	 kronik	 (misalnya	 diabetes,	 gagal	 ginjal,	 penyakit	 paru	 kronik,	 dll)	 merupakan	 kelompok	yang	paling	berisiko	mengalami	mikosis	sistemik.
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
                color:"#FFFFFF"
              })}
            >
              Bagaimana Rekomendasi WHO terkait penyakit ini?{" "}
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
                color:"#FFFFFF"
              })}
            >WHO	merekomendasikan	tiga bidang	utama	sebagai langkah nyata: 
            <ul>
                <li>Peningkatan	surveilans	penyakit jamur	(yang	memerlukan	akses	rutin	ke diagnostik).</li>
                <li>Dukungan	yang	ditargetkan	untuk	riset	dan	inovasi	(obat	antijamur baru,	diagnostik	yang	 lebih	baik).</li>
                <li>            Peningkatan	sistem	kesehatan	(untuk	memastikan	akses	ke	diagnosis, deteksi	resistensi,	dan	 terapi,	termasuk	peningkatan	jumlah	dan	kualitas pelatihan).</li>
            </ul>
            </MKTypography>
            </Grid>
          </Grid>
          

        </Container>
    </MKBox>
  );
}

export default RekomWHO;
