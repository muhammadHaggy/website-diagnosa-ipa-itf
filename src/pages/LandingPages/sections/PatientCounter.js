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

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import { Typography } from "@mui/material";

function PatientCounter() {
  return (
    <MKBox component="section" py={3} sx={{ marginTop: -20  }} >
      <Container>
        <Grid container  textAlign="center" justifyContent="center" gap={{xs:0, md:2, lg:4}} item xs={12} lg={12} >
          <Grid item xs={12} lg={3} md={6} sx={{transform: "scale(0.75)",transformOrigin: "center", textAlign:"center", backgroundColor: "#FFFFFF",justifyContent:"center", alignItems: 'center', borderRadius: "20px", boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}>
            <DefaultCounterCard
              count={179}
              suffix=" dari 3067"
              title={<Typography variant="h5">
                Kasus di Dunia
              </Typography>}
              description=
              "Dari data pasien dengan leukemia akut pada tahun 2011-2013."
              color="error"
            />
          </Grid>
          <Grid item xs={12} lg={3} md={6} display="flex" 
          sx={{transform: "scale(0.75)",transformOrigin: "center", textAlign:"center", backgroundColor: "#FFFFFF", justifyContent:"center", alignItems: 'center', borderRadius: "20px", boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}> 
     
            <DefaultCounterCard
              count={49500}
              title={<Typography variant="h5">
              Kasus di Indonesia
            </Typography>}
              description="Dari data tahunan kasus AI Indonesia."
              color="error"
            />
          </Grid>
          <Grid item xs={12} lg={3} md={6} 
          sx={{transform: "scale(0.75)",transformOrigin: "center", textAlign:"center", backgroundColor: "#FFFFFF", borderRadius: "20px", justifyContent:"center", alignItems: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}>
            <DefaultCounterCard
              count={7}
              suffix=".7% dari 410"
              title={<Typography variant="h5">
              Kasus di Jakarta
            </Typography>}
              description="Dari pasien yang diteliti pada tahun 2012-2014."
              color="error"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default PatientCounter;
