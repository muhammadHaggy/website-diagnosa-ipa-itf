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

import * as React from 'react';
import Modal from '@mui/material/Modal';
import Slide from "@mui/material/Slide";
import Divider from "@mui/material/Divider";
import MKButton from "components/MKButton";
import { Link, useNavigate } from "react-router-dom";


function FormKriteria() {
  const [step, setStep] = useState(0)

  const judul = useMemo(() => {
    if (step == 0) {
      return "Kriteria Pasien"
    } else if (step == 1 || step == 2) {
      return "Kriteria Klinis (Gejala & Radiologi)"
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
  const fillAllwithTrue = () => {
    setStep(3)
    setNeutropenia(false)
    setHematologi(false)
    setOrganSolid(false)
    setKortikosteroid(true)
    setPerawatan(false)
    setParuKronik(false)
    setSirosis(false)
    setMelitus(false)
    setDemam(false)
    setNyeri(false)
    setSesak(false)
    setBatuk(false)
    setGagalNapas(false)
    setInfiltrat(false)
    setMikroskopik(false)
    setKultur(false)
    setGalaktomanan(false)
  }

  React.useEffect(() => {
    fillAllwithTrue()
  }, [])
  const lab = {
    mikroskopik, setMikroskopik,
    kultur, setKultur,
    galaktomanan, setGalaktomanan
  }

  function lanjut() {
    setStep(step + 1)
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function kembali() {
    if (step == 0) {
      return
    } else {
      setStep(step - 1)
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }

  const terdiagnosa = useMemo(() => {
    return (
      (neutropenia || hematologi || organSolid || kortikosteroid || perawatan || paruKronik || sirosis || melitus)
      && (demam || nyeri || sesak || batuk || gagalNapas || infiltrat)
    )
  }, [neutropenia, hematologi, organSolid, kortikosteroid, perawatan, paruKronik, sirosis, melitus, demam, nyeri, sesak, batuk, gagalNapas, infiltrat])

  const isProbable = useMemo(() => {
    return (terdiagnosa && (mikroskopik || kultur || galaktomanan))
  })

  const kriteria = useMemo(() => {
    if (terdiagnosa && !isProbable) {
      return 0
    }

    if (isProbable) {
      return 1
    }

    return 2
  }, [terdiagnosa, isProbable])

  const [open, setOpen] = React.useState(false)
  const navigate = useNavigate()
  async function lihatHasil() {
    if (!terdiagnosa) {
      setOpen(!open)
    } else {
      try {
        const res = await fetch('https://api.mikostop.com/api/add/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'is_pulmonary_TB': paruKronik,
            'has_solid_organ_malignancy': organSolid,
            'is_galactomannan_positive': galaktomanan,
            'is_receiving_systemic_corticosteroids': kortikosteroid,
            'is_probable': isProbable
          })
        })
        if (res.ok) {
          const data = await res.json()
          navigate('/result', { state: data })
        }
      } catch (e) {
        console.log(e)
      }
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
                  <Lab {...lab} lihatHasil={lihatHasil} kembali={kembali} />
                }
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Grid>

      {/* MODAL */}
      <MKBox component="section" py={6}>
        <Container>
          <Modal open={open} onClose={lihatHasil} sx={{ display: "grid", placeItems: "center" }}>
            <Slide direction="down" in={open} timeout={500}>
              <MKBox
                position="relative"
                display="flex"
                maxWidth="500px"
                flexDirection="column"
                borderRadius="xl"
                bgColor="white"
                shadow="xl"
              >
                <MKBox display="flex" alignItems="center" justifyContent="space-between" p={2}>
                  <MKTypography variant="h5" textAlign={'center'}>Pasien Tidak Memenuhi Kriteria Diagnosa</MKTypography>
                </MKBox>
                <Divider sx={{ my: 0 }} />
                <MKBox p={2}>
                  <MKTypography variant="body2" color="secondary" fontWeight="regular">
                    Silakan lanjutkan monitoring pasien.
                  </MKTypography>
                </MKBox>
                <Divider sx={{ my: 0 }} />
                <MKBox display="flex" justifyContent="center" p={1.5}>
                  <MKButton variant="gradient" color="info" component={Link} to="/">
                    Kembali ke beranda
                  </MKButton>
                </MKBox>
              </MKBox>
            </Slide>
          </Modal>
        </Container>
      </MKBox>
    </Container>
  );
}

export default FormKriteria;
