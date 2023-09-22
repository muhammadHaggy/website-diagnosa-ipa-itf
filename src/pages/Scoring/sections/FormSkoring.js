import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import bgImage from "assets/images/scoring/scoring.jpg";
import { useMemo, useState } from "react";
import Pasien from "./Pasien";
import Klinis from "./Klinis";

function FormSkoring() {
  const [galaktomanan, setGalaktomanan] = useState(false)
  const [step, setStep] = useState(0)

  const judul = useMemo(() => {
    if (step == 0) {
      return "Kriteria Pasien"
    } else if (step == 1 || step == 2) {
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

  // Klinis A
  const [demam, setDemam] = useState(false)
  const [nyeri, setNyeri] = useState(false)
  const [sesak, setSesak] = useState(false)
  const [batuk, setBatuk] = useState(false)
  const [gagalNapas, setGagalNapas] = useState(false)

  const klinisA = {
    demam, setDemam,
    nyeri, setNyeri,
    sesak, setSesak,
    batuk, setBatuk,
    gagalNapas, setGagalNapas
  }

  function lanjut() {
    if (step == 2) {
      // tembak API
    } else {
      setStep(step + 1)
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }

  function kembali() {
    if (step == 0) {
      return
    } else {
      setStep(step - 1)
      window.scrollTo({ top: 0, behavior: 'instant' });
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
                {step == 0 &&
                  <Pasien {...pasien} lanjut={lanjut} kembali={kembali} step={step} />
                }
                {step == 1 &&
                  <Klinis {...klinisA} lanjut={lanjut} kembali={kembali} />
                }
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FormSkoring;
