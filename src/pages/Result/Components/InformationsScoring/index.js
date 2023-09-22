import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBadge from "components/MKBadge";

import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Information from "pages/Result/Components/Presentations/index";




function InformationScoring() {
  

  return (
    <Container>
      <Grid minHeight={'100vh'} pt={15} pb={8} display={'flex'} direction={'column'} justifyContent={'center'}>
        <Grid container item>
        
                {/* <Typography */}
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={2}>
              {/* <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: ({
                    palette: { gradients },
                    functions: { rgba, linearGradient },
                  }) =>
                    `${linearGradient(
                      rgba(gradients.light.main, 0.1),
                      rgba(gradients.light.state, 0.7),
                    )}, url(${bgImage})`,
                  backgroundSize: "cover",
                }}
              >
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox py={6} pl={6} my="auto">
                    <MKTypography variant="h3">
                      Pertanyaan Skoring
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={7}>
                <MKBox component="form" p={2}>
                  <MKBox px={3} py={2}>
                    <MKBox direction="column">
                      <MKTypography variant="body1">
                        Apakah pasien menderita TB paru?
                      </MKTypography>
                      <PertanyaanSkoring value={tbParu} setValue={setTbParu} />
                    </MKBox>
                  </MKBox>
                  <MKBox px={3} py={2}>
                    <MKBox direction="column">
                      <MKTypography variant="body1">
                        Apakah pasien menderita keganasan organ solid?
                      </MKTypography>
                      <PertanyaanSkoring value={organSolid} setValue={setOrganSolid} />
                    </MKBox>
                  </MKBox>
                  <MKBox px={3} py={2}>
                    <MKBox direction="column">
                      <MKTypography variant="body1">
                        Apakah pasien memiliki Galaktomanan positif?
                      </MKTypography>
                      <PertanyaanSkoring value={galaktomanan} setValue={setGalaktomanan} />
                    </MKBox>
                  </MKBox>
                  <MKBox px={3} py={2}>
                    <MKBox direction="column">
                      <MKTypography variant="body1">
                        Apakah pasien menerima obat kortikosteroid sistemik?
                      </MKTypography>
                      <PertanyaanSkoring value={kortikosteroid} setValue={setKortikosteroid} />
                    </MKBox>
                  </MKBox>
                  <Grid item display={'flex'} justifyContent={'end'}>
                    <MKButton variant="gradient" color="info">
                      Lanjut
                    </MKButton>
                  </Grid>
                </MKBox>
              </Grid> */}
               <Typography variant="h4" align="center" marginTop={4} marginLeft={4}>
               <MKBadge badgeContent="Result" variant="contained" color="info" container />
               {/* <MKBadge */}
                </Typography>
              <Information />
            </Grid>
          </MKBox>
        </Grid>
      </Grid>
    </Container>
  );
}

export default InformationScoring;