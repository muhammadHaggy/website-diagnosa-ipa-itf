import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import bgImage from "assets/images/scoring/scoring.jpg";
import { useMemo, useState } from "react";
import Pasien from "./Pasien";
import Klinis from "./Klinis";
import KlinisB from "./KlinisB";
import Lab from "./Lab";

function FormSkoring() {
  const [step, setStep] = useState(0)

  const judul = useMemo(() => {
    if (step == 0) {
      return "Kriteria Pasien"
    } else if (step == 1 || step == 2) {
      return "Kriteria Klinis"
    } else {
      return "Kriteria Lab. Jamur (Mikologi)"
    }
  }, [step])

  // Pasien
  const [neutropenia, setNeutropenia] = useState(null)
  const [hematologi, setHematologi] = useState(null)
  const [organSolid, setOrganSolid] = useState(null)
  const [kortikosteroid, setKortikosteroid] = useState(null)
  const [perawatan, setPerawatan] = useState(null)
  const [paruKronik, setParuKronik] = useState(null)
  const [sirosis, setSirosis] = useState(null)
  const [melitus, setMelitus] = useState(null)

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
  const [demam, setDemam] = useState(null)
  const [nyeri, setNyeri] = useState(null)
  const [sesak, setSesak] = useState(null)
  const [batuk, setBatuk] = useState(null)
  const [gagalNapas, setGagalNapas] = useState(null)

  const klinisA = {
    demam, setDemam,
    nyeri, setNyeri,
    sesak, setSesak,
    batuk, setBatuk,
    gagalNapas, setGagalNapas
  }

  // Klinis B
  const [infiltrat, setInfiltrat] = useState(null)

  // Lab Jamur
  const [mikroskopik, setMikroskopik] = useState(null)
  const [kultur, setKultur] = useState(null)
  const [galaktomanan, setGalaktomanan] = useState(null)

  const lab = {
    mikroskopik, setMikroskopik,
    kultur, setKultur,
    galaktomanan, setGalaktomanan
  }

  function lanjut() {
    if (step == 3) {
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
                {step == 2 &&
                  <KlinisB infiltrat={infiltrat} setInfiltrat={setInfiltrat} lanjut={lanjut} kembali={kembali} />
                }
                {step == 3 &&
                  <Lab {...lab} lanjut={lanjut} kembali={kembali} />
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
