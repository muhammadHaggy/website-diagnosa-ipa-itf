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
import { Link } from "react-router-dom";


import CenteredBlogCard from "../Card/CenteredBlogCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import businesswoman from "assets/images/result/businesswoman-using-tablet-analysis-graph-company-finance-strategy-statistics-success-concept-planning-future-office-room.jpg"


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

    const clinicalAnswer = {
        neutropenia: neutropenia,
        hematologi: hematologi,
        organ_solid: organSolid,
        kortikosteroid: kortikosteroid,
        perawatan: perawatan,
        paru_kronik: paruKronik,
        sirosis: sirosis,
        melitus: melitus
    }


    const symptomsAnswer = {
        demam: demam,
        nyeri: nyeri,
        sesak: sesak,
        batuk: batuk,
        gagal_napas: gagalNapas,
        infiltrat: infiltrat
    }



    const testsAnswer = {
        mikroskopik: mikroskopik,
        kultur: kultur,
        galaktomanan: galaktomanan
    }


    const clinicalReview = Object.keys(clinicalAnswer)
        .filter((question) => clinicalAnswer[question])  // Only include questions with answers that are true
        .map((question) => {
            const answer = clinicalAnswer[question];
            const questionText = question.replace(/^\w/, (c) => c.toUpperCase());
            // replace underscores with spaces
            return `${questionText.replace(/_/g, " ")}`;
        }

        );

    const symptomsReview = Object.keys(symptomsAnswer)
        .filter((question) => symptomsAnswer[question])  // Only include questions with answers that are true
        .map((question) => {
            const answer = symptomsAnswer[question];
            const questionText = question.replace(/^\w/, (c) => c.toUpperCase());
            // replace underscores with spaces
            return `${questionText.replace(/_/g, " ")}`;
        }

        );

    const testsReview = Object.keys(testsAnswer)
        .filter((question) => testsAnswer[question])  // Only include questions with answers that are true
        .map((question) => {
            const answer = testsAnswer[question];
            const questionText = question.replace(/^\w/, (c) => c.toUpperCase());
            // replace underscores with spaces
            return `${questionText.replace(/_/g, " ")}`;
        }

        );

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
                                                {clinicalReview.map((item, index) => (
                                                    <Typography key={index}>
                                                        <CheckCircleIcon color="primary" style={{ marginRight: "8px", verticalAlign: "middle" }} />
                                                        {item.replace(/^\w/, (c) => c.toUpperCase())}
                                                    </Typography>
                                                ))}
                                            </Grid>
                                            <Grid item xs={12} lg={4}>
                                                <Typography variant="h6">Patient</Typography>
                                                {symptomsReview.map((item, index) => (
                                                    <Typography key={index}>
                                                        <CheckCircleIcon color="primary" style={{ marginRight: "8px", verticalAlign: "middle" }} />
                                                        {item.replace(/^\w/, (c) => c.toUpperCase())}
                                                    </Typography>
                                                ))}
                                            </Grid>
                                            <Grid item xs={12} lg={4}>
                                                <Typography variant="h6">Micology</Typography>
                                                {testsReview.map((item, index) => (
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
                            image={businesswoman}
                            title="Criteria Result"
                            description={stateDescription}
                            action={{
                                type: "internal",
                                route: state.kriteria === '2' ? "/" : "/scoring",
                                color: "info",
                                label: state.kriteria === '2' ? "Kembali ke Landing Page" : "Lanjut ke Form Skoring",
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