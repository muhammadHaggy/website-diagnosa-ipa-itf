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
import { useNavigate } from "react-router-dom";
import { check } from "prettier";


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

  // const fillAllwithTrue = () => {
  //   setStep(3)
  //   setNeutropenia(false)
  //   setHematologi(false)
  //   setOrganSolid(false)
  //   setKortikosteroid(true)
  //   setPerawatan(false)
  //   setParuKronik(false)
  //   setSirosis(false)
  //   setMelitus(false)
  //   setDemam(false)
  //   setNyeri(false)
  //   setSesak(false)
  //   setBatuk(false)
  //   setGagalNapas(false)
  //   setInfiltrat(true)
  //   setMikroskopik(false)
  //   setKultur(false)
  //   setGalaktomanan(true)
  // }

  // React.useEffect(() => {
  //   fillAllwithTrue()
  // }, [])

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

  const kriteriaPasien = useMemo(() => {
    return (neutropenia || hematologi || organSolid || kortikosteroid || perawatan || paruKronik || sirosis || melitus)
  }, [neutropenia, hematologi, organSolid, kortikosteroid, perawatan, paruKronik, sirosis, melitus])

  const kriteriaKlinis = useMemo(() => {
    return (demam || nyeri || sesak || batuk || gagalNapas || infiltrat)
  }, [demam, nyeri, sesak, batuk, gagalNapas, infiltrat])

  const kriteriaLab = useMemo(() => {
    return (mikroskopik || kultur || galaktomanan)
  }, [mikroskopik, kultur, galaktomanan])

  const terdiagnosa = useMemo(() => {
    return (kriteriaPasien && kriteriaKlinis)
  }, [kriteriaPasien, kriteriaKlinis])

  const isProbable = useMemo(() => {
    return (terdiagnosa && (mikroskopik || kultur || galaktomanan))
  }, [terdiagnosa, mikroskopik, kultur, galaktomanan])

  const kriteria = useMemo(() => {
    if (terdiagnosa && !isProbable) {
      return "0"
    }

    if (isProbable) {
      return "1"
    }

    return "2"
  }, [terdiagnosa, isProbable])

  const navigate = useNavigate()

  const checked = useMemo(() => {
    const check = {}

    if (neutropenia) check.neutropenia = true
    if (hematologi) check.hematologi = true
    if (organSolid) check.organSolid = true
    if (kortikosteroid) check.kortikosteroid = true
    if (perawatan) check.perawatan = true
    if (paruKronik) check.paruKronik = true
    if (sirosis) check.sirosis = true
    if (melitus) check.melitus = true
    
    if (demam) check.demam = true
    if (nyeri) check.nyeri = true
    if (sesak) check.sesak = true
    if (batuk) check.batuk = true
    if (gagalNapas) check.gagalNapas = true
    if (infiltrat) check.infiltrat = true
    
    if (mikroskopik) check.mikroskopik = true
    if (kultur) check.kultur = true
    if (galaktomanan) check.galaktomanan = true

    return check
  })
  const data = {
    kriteria: kriteria,
    kriteriaPasien: kriteriaPasien,
    kriteriaKlinis: kriteriaKlinis,
    kriteriaLab: kriteriaLab,
    checked: checked
  }

  // const {
  //   neutropenia,
  //   hematologi,
  //   organSolid,
  //   kortikosteroid,
  //   perawatan,
  //   paruKronik,
  //   sirosis,
  //   melitus,
    
  //   demam,
  //   nyeri,
  //   sesak,
  //   batuk,
  //   gagalNapas,
  //   infiltrat,
    
  //   mikroskopik,
  //   kultur,
  //   galaktomanan
  // } = data.checked
  
  async function lihatHasil() {
    navigate('/result/criteria', { state: data })
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
    </Container>
  );
}

export default FormKriteria;
