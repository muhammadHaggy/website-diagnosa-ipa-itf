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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


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

        demam: demam,
        nyeri: nyeri,
        sesak: sesak,
        batuk: batuk,
        gagalNapas: gagalNapas,
        infiltrat: infiltrat,

        mikroskopik: mikroskopik,
        kultur: kultur,
        galaktomanan: galaktomanan
    };

    // const review = Object.keys(answers).map((question) => {
    //     const answer = answers[question];
    //     const questionText = question.replace(/^\w/, (c) => c.toUpperCase());

    //     return `${questionText}: ${answer ? "Ya" : "Tidak"}`;
    // });

    const review = Object.keys(answers)
        .filter((question) => answers[question])  // Only include questions with answers that are true
        .map((question) => {
            const answer = answers[question];
            const questionText = question.replace(/^\w/, (c) => c.toUpperCase());

            return `${questionText}`;
        });

    const clinical = {
        neutropenia,
        hematologi,
        organSolid,
        kortikosteroid,
        perawatan,
        paruKronik,
        sirosis,
        melitus
    };

    const symptoms = {
        demam,
        nyeri,
        sesak,
        batuk,
        gagalNapas,
        infiltrat
    };

    const tests = {
        mikroskopik,
        kultur,
        galaktomanan
    };


    return (
        <MKBox component="section" py={12}>
            <Container>
                <Grid container spacing={3} alignItems="center" justifyContent="center">
                    <Grid alignItems="center" justifyContent="center" item xs={12} lg={8}>
                        <Grid container spacing={3}>
                            <Grid container item xs={12} lg={6}>
                                <Typography variant="h3" component="div">
                                    Review Form Kriteria
                                </Typography>
                            </Grid>
                            <Container>
                                <Card variant="outlined" sx={{ mt: 4, p: 2 }}>

                                    <CardContent>

                                        <Grid container spacing={3}>
                                            <Grid item xs={12} lg={4}>
                                                <Typography variant="h6">Clinical</Typography>
                                                {Object.keys(clinical).filter(q => clinical[q]).map((item, index) => (
                                                    <Typography key={index}>
                                                        <CheckCircleIcon color="primary" style={{ marginRight: "8px", verticalAlign: "middle" }} />
                                                        {item.replace(/^\w/, (c) => c.toUpperCase())}
                                                    </Typography>
                                                ))}
                                            </Grid>
                                            <Grid item xs={12} lg={4}>
                                                <Typography variant="h6">Patient</Typography>
                                                {Object.keys(symptoms).filter(q => symptoms[q]).map((item, index) => (
                                                    <Typography key={index}>
                                                        <CheckCircleIcon color="primary" style={{ marginRight: "8px", verticalAlign: "middle" }} />
                                                        {item.replace(/^\w/, (c) => c.toUpperCase())}
                                                    </Typography>
                                                ))}
                                            </Grid>
                                            <Grid item xs={12} lg={4}>
                                                <Typography variant="h6">Micology</Typography>
                                                {Object.keys(tests).filter(q => tests[q]).map((item, index) => (
                                                    <Typography key={index}>
                                                        <CheckCircleIcon color="primary" style={{ marginRight: "8px", verticalAlign: "middle" }} />
                                                        {item.replace(/^\w/, (c) => c.toUpperCase())}
                                                    </Typography>
                                                ))}
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>

                            </Container>
                        </Grid>
                    </Grid>
                    <Grid item alignItems="center" justifyContent="center" xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
                        <CenteredBlogCard
                            image="https://img.freepik.com/free-photo/option-writing-checkbox-concepts-survey_1232-4189.jpg?w=1380&t=st=1695559375~exp=1695559975~hmac=a1640ed7f3124c19a5102d5e5134723eccdf27a00d1ad093a7d8a294bcd4d1f9"
                            title="Criteria Result"
                            description={stateDescription}
                            action={{
                                type: "internal",
                                route: "/scoring",
                                color: "info",
                                label: "Lanjut ke Form Skoring",
                                state: state
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