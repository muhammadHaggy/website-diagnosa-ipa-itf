import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import bgImage from "assets/images/scoring/scoring.jpg";
import { useMemo, useState } from "react";
import Pasien from "./Pasien";

function FormSkoring() {
  const [galaktomanan, setGalaktomanan] = useState(false)
  const [step, setStep] = useState(0)

  const judul = useMemo(() => {
    if (step == 0) {
      return "Kriteria Klinis"
    }
  }, [step])

  // Pasien
  const [neutropenia, setNeutropenia] = useState(false)
  const [hematologi, setHematologi] = useState(false)
  const [organSolid, setOrganSolid] = useState(false)
  const [kortikosteroid, setKortikosteroid] = useState(false)
  const [perawatan, setPerawatan] = useState(false)
  const [paruKronik, setParuKronik] = useState(false)
  const [sirosis, setSirosis] = useState(false)
  const [melitus, setMelitus] = useState(false)

  const pasien = {
    neutropenia, setNeutropenia,
    hematologi, setHematologi,
    organSolid, setOrganSolid,
    kortikosteroid, setKortikosteroid,
    perawatan, setPerawatan,
    paruKronik, setParuKronik,
    sirosis, setSirosis,
    melitus, setMelitus
  }

  function lanjut() {
    if (step == 2) {
      // tembak API
    } else {
      setStep(step + 1)
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }

  function kembali() {
    if (step == 0) {
      return
    } else {
      setStep(step - 1)
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }

  return (
    <Container>
      <Grid minHeight={'100vh'} pt={15} pb={8} display={'flex'} direction={'column'} justifyContent={'center'}>
        <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={2}>
              <Grid
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
                  <MKBox py={6} px={6} my="auto">
                    <MKTypography variant="h3">
                      {judul}
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={7}>
                <Pasien {...pasien} lanjut={lanjut} kembali={kembali} step={step} />
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FormSkoring;
