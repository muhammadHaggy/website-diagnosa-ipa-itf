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
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

import { Link } from "react-router-dom";


import post1 from "assets/images/examples/testimonial-6-2.jpg";
import post2 from "assets/images/examples/testimonial-6-3.jpg";
import post3 from "assets/images/examples/blog-9-4.jpg";
import post4 from "assets/images/examples/blog2.jpg";
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import MKTypography from "components/MKTypography";
import CenteredBlogCard from "../Card/CenteredBlogCard";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import Link from "react-router-dom/Link";

function Bcriteria(prop) {
    console.log(prop.prop)
    const state = prop.prop;
    const stateDescriptions = {
        '0': "Terdiagnosis Possible (Mungkin) terhadap Penyakit Aspergillosis Paru Invasif",
        '1': "Terdiagnosis Probable (Sangat Mungkin) terhadap Penyakit Aspergillosis Paru Invasif",
        '2': "Kondisi Pasien saat ini belum mengarah pada diagnosis API"
    };

    const stateDescription = stateDescriptions[state.kriteria] || "Deskripsi tidak tersedia";

    const {
        neutropenia,
        hematologi,
        organSolid,
        kortikosteroid,
        perawatan,
        paruKronik,
        sirosis,
        melitus,
        
        demam,
        nyeri,
        sesak,
        batuk,
        gagalNapas,
        infiltrat,
        
        mikroskopik,
        kultur,
        galaktomanan
      } = state.checked

    const answers = {
        neutropenia: neutropenia,
        hematologi: hematologi,
        organSolid: organSolid,
        kortikosteroid: kortikosteroid,
        perawatan: perawatan,
        paruKronik: paruKronik,
        sirosis: sirosis,
        melitus: melitus,
        
        demam:demam,
        nyeri:nyeri,
        sesak:sesak,
        batuk:batuk,
        gagalNapas:gagalNapas,
        infiltrat:infiltrat,
        
        mikroskopik:mikroskopik,
        kultur:kultur,
        galaktomanan:galaktomanan
    };

    const review = Object.keys(answers).map((question) => {
        const answer = answers[question];
        const questionText = question.replace(/^\w/, (c) => c.toUpperCase());

        return `${questionText}: ${answer ? "Ya" : "Tidak"}`;
    });

    return (
        <MKBox component="section" py={12}>
            <Container>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} lg={6}>
                        <Grid container spacing={3}>
                            <Grid container item xs={12} lg={6}>
                            </Grid>
                            <Container>
                                <Card variant="outlined" sx={{ mt: 4, p: 2 }}>
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            Review
                                        </Typography>
                                        {review.map((item, index) => (
                                            <Typography key={index}>{item}</Typography>
                                        ))}
                                    </CardContent>
                                </Card>
                            </Container>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
                        <CenteredBlogCard
                            image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                            title="Criteria Result"
                            description={stateDescription}
                            action={{
                                type: "internal",
                                route: state.kriteria === '2' ? "/" : "/scoring", // Ubah route sesuai dengan kriteria
                                color: "info",
                                label: state.kriteria === '2' ? "Kembali ke landing page" : "Lanjut ke Form Skoring", // Ubah label sesuai dengan kriteria
                                state: state,
                              }}
                        >  <Link
                            to={{
                                pathname: "/scoring",
                                state: { myData: state } // Mengirim data sebagai state
                            }}
                        >
                                Lanjut ke Form Skoring
                            </Link>
                            halo
                        </CenteredBlogCard>

                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Bcriteria;
