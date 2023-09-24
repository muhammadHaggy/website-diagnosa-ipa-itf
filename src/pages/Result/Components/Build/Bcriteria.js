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
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import { Link } from "react-router-dom";


import post1 from "assets/images/examples/testimonial-6-2.jpg";
import post2 from "assets/images/examples/testimonial-6-3.jpg";
import post3 from "assets/images/examples/blog-9-4.jpg";
import post4 from "assets/images/examples/blog2.jpg";
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import MKTypography from "components/MKTypography";

function Bcriteria(prop) {
    // console.log(prop.prop)
    const state = prop.prop;
    const stateDescriptions = {
        0: "Terdiagnosis Possible (Mungkin) terhadap Penyakit Aspergillosis Paru Invasif",
        1: "Terdiagnosis Probable (Sangat Mungkin) terhadap Penyakit Aspergillosis Paru Invasif",
        2: "Kondisi Pasien saat ini belum mengarah pada diagnosis API"
      };

    const stateDescription = stateDescriptions[state] || "Deskripsi tidak tersedia";

    return (
        <MKBox component="section" py={12}>
            <Container>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} lg={6}>
                        <Grid container spacing={3}>
                            <Grid container item xs={12} lg={6}>
                            </Grid>
                            <Container>
                                <Grid container item xs={12} lg={6}>
                                    <MKTypography variant="h3" mb={3}>
                                        Check our latest blogposts
                                    </MKTypography>
                                </Grid>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6} lg={4}>
                                        <TransparentBlogCard
                                            image={post1}
                                            title="Rover raised $65 million"
                                            description="Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover ..."
                                            action={{
                                                type: "internal",
                                                route: "/pages/blogs/author",
                                                color: "info",
                                                label: "read more",
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4}>
                                        <TransparentBlogCard
                                            image={post2}
                                            title="MateLabs machine learning"
                                            description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
                                            action={{
                                                type: "internal",
                                                route: "/pages/blogs/author",
                                                color: "info",
                                                label: "read more",
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4}>
                                        <TransparentBlogCard
                                            image={post3}
                                            title="MateLabs machine learning"
                                            description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
                                            action={{
                                                type: "internal",
                                                route: "/pages/blogs/author",
                                                color: "info",
                                                label: "read more",
                                            }}
                                        />
                                    </Grid>
                                </Grid>
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
                                route: "/scoring",
                                color: "info",
                                label: "Lanjut ke Form Skoring",
                            }}
                        >  <Link
                            to={{
                                pathname: "/scoring",
                                state: { myData: state } // Mengirim data sebagai state
                            }}
                        >
                                Lanjut ke Form Skoring
                            </Link></CenteredBlogCard>

                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Bcriteria;
