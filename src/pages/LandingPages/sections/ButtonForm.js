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
import { Link } from "react-router-dom";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import { Typography } from "@mui/material";

function Gambar() {
  return (
      <Container>
          <Grid container item xs={12} lg={12} md={12} mx="auto"
            justifyContent="center"
            gap={{xs:4, md:12}}
            paddingBottom={5}>
            <Grid item xs={12} lg={12} md={12} mx="auto" >
            <MKButton
              sx={{
                 color: "#FFFFFF"

              }} to="/criteria"
              component={Link}
              color="info"
              size="large"
              fullWidth
              circular >Lanjut ke Form Diagnosa
            </MKButton>
            </Grid>
          </Grid>
          

    </Container>
  );
}

export default Gambar;
