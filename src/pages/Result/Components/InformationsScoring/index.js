import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBadge from "components/MKBadge";

import MKBox from "components/MKBox";
import { useLocation } from 'react-router-dom';
import Presentation from "pages/Result/Components/Presentations/index";



function InformationScoring() {
  const location = useLocation();
  const myProp = location.state;

  const titleText = myProp.is_probable
    ? "Terdiagnosis Probable (sangat mungkin) terhadap Penyakit Aspergillosis Paru Invasif"
    : "Terdiagnosis Possible (mungkin) terhadap Penyakit Aspergillosis Paru Invasif";


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
            <Typography
              variant="h4"
              align="center"
              marginTop={2}
              sx={{
                paddingTop: 2,
                color: "primary.main", // Warna teks
                // fontSize: "20px", // Ukuran teks
                // fontWeight: "bold", // Jenis font teks
                // fontStyle: "italic", // Gaya font teks
              }}
            >
              {titleText}
            </Typography>
            <Grid container spacing={2}>
              <Presentation props={myProp} />
            </Grid>
          </MKBox>
        </Grid>
      </Grid>
    </Container>
  );
}

export default InformationScoring;