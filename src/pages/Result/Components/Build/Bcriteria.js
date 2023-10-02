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
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

// Material Kit 2 React examples
import { Link } from "react-router-dom";


import CenteredBlogCard from "../Card/CenteredBlogCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import businesswoman from "assets/images/result/businesswoman-using-tablet-analysis-graph-company-finance-strategy-statistics-success-concept-planning-future-office-room.jpg"
import { Badge, Button } from "@mui/material";


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
        diabetes: melitus,

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

    const symptomsAnswer = {
        neutropenia: neutropenia,
        hematologi: hematologi,
        organ_solid: organSolid,
        kortikosteroid: kortikosteroid,
        perawatan: perawatan,
        paru_kronik: paruKronik,
        sirosis: sirosis,
        diabetes: melitus
    }


    const clinicalAnswerA = {
        demam: demam,
        nyeri: nyeri,
        sesak: sesak,
        batuk: batuk,
        gagal_napas: gagalNapas,
    }

    const clinicalAnswerB = {
        infiltrat: infiltrat
    }


    const testsAnswer = {
        mikroskopik: mikroskopik,
        kultur: kultur,
        galaktomanan: galaktomanan
    }


    const clinicalReviewA = Object.keys(clinicalAnswerA)
        .filter((question) => clinicalAnswerA[question])  // Only include questions with answers that are true
        .map((question) => {
            const answer = clinicalAnswerA[question];
            const questionText = question.replace(/^\w/, (c) => c.toUpperCase());
            // replace underscores with spaces
            return `${questionText.replace(/_/g, " ")}`;
        }

        );

    const clinicalReviewB = Object.keys(clinicalAnswerB)
        .filter((question) => clinicalAnswerB[question])  // Only include questions with answers that are true
        .map((question) => {
            const answer = clinicalAnswerB[question];
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

    const styles = {
        largeBadge: {
            fontSize: "16px", // Ganti dengan ukuran yang Anda inginkan
            padding: "10px 16px", // Sesuaikan dengan ukuran yang Anda inginkan
        },
        button: {
            color: "black", // Ganti dengan warna teks yang Anda inginkan
            fontFamily: "Mona Sans", // Ganti dengan font yang sesuai
            fontWeight: 'bold',
            color: "white",
        },
    };

    return (
        <MKBox component="section" py={12} >
            <Container>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid alignItems="center" justifyContent="center" item xs={12} lg={8}>
                        <Grid container spacing={3} alignItems="center" justifyContent="center">
                            <Grid container item xs={12} lg={8}>
                                <Typography variant="h3" component="div">
                                    Ringkasan Kriteria Inklusi
                                </Typography>
                            </Grid>
                            <Container>
                                <Card variant="outlined" sx={{ mt: 4, p: 1 }}>
                                    <CardContent sx={{ px: 1, marginLeft: 4 }} >
                                        <Grid container spacing={3}>
                                            <Card xs={12} lg={3} sx={{ backgroundColor: "#87cefa", px: 1, my: 1, mr: 1 }}>
                                                <CardContent sx={{ px: 1 }}>                                                    <Grid item >
                                                    <Button variant="outlined" color="primary" style={styles.button} sx={{ mb: 1, height: '88px', background: "#cc3366" }}>Kriteria Pasien</Button>
                                                    {symptomsReview.length > 0 ? (
                                                                symptomsReview.map((item, index) => (
                                                                    <Typography key={index}>
                                                                        <CheckCircleIcon color="primary" style={{ marginRight: "8px", verticalAlign: "middle" }} />
                                                                        {item}
                                                                    </Typography>
                                                                ))
                                                            ) : (
                                                                    <div style={{ display: "flex", alignItems: "center" }}>
                                                                        <CheckBoxOutlineBlankIcon color="maroon" style={{ marginRight: "8px", verticalAlign: "middle" }} />
                                                                        <Typography style={{ color: "maroon", fontSize: 15 }}>
                                                                            Kriteria tidak terpenuhi
                                                                        </Typography>
                                                                    </div>
                                                            )}
                                                </Grid>
                                                </CardContent>
                                            </Card>
                                            <Card xs={12} lg={6} sx={{ backgroundColor: "#87cefa", px: 1, my: 1, mr: 1 }}>
                                                <CardContent sx={{ px: 1 }}>                                                    <Grid item >
                                                    <Button variant="outlined" color="primary" style={styles.button} sx={{ mb: 1, width: '100%', height: '40px', background: "#cc3366" }}>
                                                        Kriteria Klinis
                                                    </Button>

                                                    <Grid container spacing={2}>
                                                        <Grid item lg={6}>
                                                            <Button variant="outlined" color="primary" style={styles.button} sx={{ mb: 1, width: '100%', background: "#db7093" }}>
                                                                Gejala
                                                            </Button>
                                                            {clinicalReviewA.length > 0 ? (
                                                                clinicalReviewA.map((item, index) => (
                                                                    <Typography key={index}>
                                                                        <CheckCircleIcon color="primary" style={{ marginRight: "8px", verticalAlign: "middle" }} />
                                                                        {item}
                                                                    </Typography>
                                                                ))
                                                            ) : (
                                                                    <div style={{ display: "flex", alignItems: "center" }}>
                                                                        <CheckBoxOutlineBlankIcon color="maroon" style={{ marginRight: "8px", verticalAlign: "middle" }} />
                                                                        <Typography style={{ color: "maroon",  fontSize: 15 }}>
                                                                            Kriteria tidak terpenuhi
                                                                        </Typography>
                                                                    </div>
                                                            )}

                                                        </Grid>
                                                        <Grid item lg={6}>
                                                            <Button variant="outlined" color="primary" style={styles.button} sx={{ mb: 1, width: '100%', background: "#db7093" }}>
                                                                Radiologi
                                                            </Button>
                                                            {clinicalReviewB.length > 0 ? (
                                                                clinicalReviewB.map((item, index) => (
                                                                    <Typography key={index}>
                                                                        <CheckCircleIcon color="primary" style={{ marginRight: "8px", verticalAlign: "middle" }} />
                                                                        {item}
                                                                    </Typography>
                                                                ))
                                                            ) : (
                                                                    <div style={{ display: "flex", alignItems: "center" }}>
                                                                        <CheckBoxOutlineBlankIcon color="maroon" style={{ marginRight: "8px", verticalAlign: "middle" }} />
                                                                        <Typography style={{ color: "maroon", fontSize: 15 }}>
                                                                            Kriteria tidak terpenuhi
                                                                        </Typography>
                                                                    </div>
                                                            )}
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                </CardContent>
                                            </Card>
                                            <Card xs={12} lg={2} sx={{ backgroundColor: "#87cefa", px: 1, my: 1 }}>
                                                <CardContent sx={{ px: 0 }}>
                                                    <Grid item>
                                                        <Button variant="outlined" color="primary" style={styles.button} sx={{ mb: 1, height: '88px', background: "#cc3366" }}>Kriteria Mikologi</Button>
                                                        {testsReview.length > 0 ? (
                                                            testsReview.map((item, index) => (
                                                                <Typography key={index}>
                                                                    <CheckCircleIcon color="primary" style={{ marginRight: "8px", verticalAlign: "middle" }} />
                                                                    {item}
                                                                </Typography>
                                                            ))
                                                        ) : (
                                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                                    <CheckBoxOutlineBlankIcon color="maroon" style={{ marginRight: "8px", verticalAlign: "middle" }} />
                                                                    <Typography style={{ color: "maroon", fontSize: 15 }}>
                                                                        Kriteria tidak terpenuhi
                                                                    </Typography>
                                                                </div>
                                                        )}
                                                    </Grid>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Container>
                        </Grid>
                    </Grid>
                    <Grid item alignItems="center" justifyContent="center" xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 7 } }}>
                        <CenteredBlogCard
                            image={businesswoman}
                            title="Hasil Diagnosis Kriteria Inklusi"
                            description={stateDescription}
                            action={{
                                type: "internal",
                                route: state.kriteria === '2' ? "/" : "/scoring",
                                color: "info",
                                label: state.kriteria === '2' ? "Kembali ke Beranda" : "Lanjut ke Skoring",
                                state: state,
                            }}
                        >  <Link
                            to={{
                                pathname: "/scoring",
                                state: { myData: state } // Mengirim data sebagai state
                            }}
                        >
                                Lanjut ke Skoring
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