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
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";
import Low from "./Recommendation/low";
import High from "./Recommendation/low";

function Presentation() {
    return (
        <MKBox component="section" py={6} my={6}>
            <Container>
            {/* <Typography
                    variant="h4"
                    align="left" // Posisikan teks ke kiri
                    sx={{
                        position: 'absolute',
                        top: 0, // Atur ke sudut atas
                        left: 0, // Atur ke sudut kiri
                        background: 'rgba(0, 0, 0, 0.1)', // Warna latar belakang dengan transparansi
                        padding: '8px 16px', // Padding untuk menjaga jarak dari tepi
                        color: 'white', // Warna teks
                        fontFamily: 'Arial, sans-serif', // Ganti font sesuai preferensi Anda
                    }}
                >
                    Result
                </Typography> */}
                <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
                    <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
                        <Low/>
                        {/* <High/> */}
                    </Grid>
                    <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Card elevation={3}>
                                    <CardContent>
                                        <DefaultInfoCard
                                            icon="score"
                                            title="4"
                                            description="Patient's total score"
                                        />
                                    </CardContent>
                                </Card>

                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Card elevation={3}>
                                    <CardContent>
                                        <DefaultInfoCard
                                            icon="group"
                                            title="High-risk group"
                                            description="Risk classification"
                                        />
                                    </CardContent>
                                </Card>

                            </Grid>
                        </Grid>
                        <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 }, alignItems: 'center', justifyContent: 'center' }}>
                            <Grid item xs={12} md={6}>
                                <Card elevation={3}>
                                    <CardContent>
                                        <DefaultInfoCard
                                            icon="percent"
                                            title="36.8%"
                                            description="IPA Probability"
                                        />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Presentation;
