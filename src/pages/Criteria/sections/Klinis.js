import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import PertanyaanSkoring from "./PertanyaanSkoring";
import Grid from "@mui/material/Grid";
import MKButton from "components/MKButton";
import { useMemo } from "react";


function Klinis({
  demam, setDemam,
  nyeri, setNyeri,
  sesak, setSesak,
  batuk, setBatuk,
  gagalNapas, setGagalNapas,
  lanjut, kembali
}) {
  const valid = useMemo(() => {
    return (
      demam != null &&
      nyeri != null &&
      sesak != null &&
      batuk != null &&
      gagalNapas != null
    )
  }, [demam, nyeri, sesak, batuk, gagalNapas])
  
  return (
    <>
      <MKBox component="form" p={2}>
        <MKTypography variant="h4">
          A. Apakah terdapat salah satu gejala di bawah ini pada pasien?
        </MKTypography>
        <MKBox px={3} py={2}>
          <MKBox direction="column">
            <MKTypography variant="body1">
              Demam berkepanjangan {`(≥ 4 hari)`}
            </MKTypography>
            <PertanyaanSkoring value={demam} setValue={setDemam} />
          </MKBox>
        </MKBox>
        <MKBox px={3} py={2}>
          <MKBox direction="column">
            <MKTypography variant="body1">
              Nyeri dada pleuritik
            </MKTypography>
            <PertanyaanSkoring value={nyeri} setValue={setNyeri} />
          </MKBox>
        </MKBox>
        <MKBox px={3} py={2}>
          <MKBox direction="column">
            <MKTypography variant="body1">
              Sesak napas
            </MKTypography>
            <PertanyaanSkoring value={sesak} setValue={setSesak} />
          </MKBox>
        </MKBox>
        <MKBox px={3} py={2}>
          <MKBox direction="column">
            <MKTypography variant="body1">
              Batuk darah atau batuk hebat
            </MKTypography>
            <PertanyaanSkoring value={batuk} setValue={setBatuk} />
          </MKBox>
        </MKBox>
        <MKBox px={3} py={2}>
          <MKBox direction="column">
            <MKTypography variant="body1">
              Gagal napas
            </MKTypography>
            <PertanyaanSkoring value={gagalNapas} setValue={setGagalNapas} />
          </MKBox>
        </MKBox>
        <Grid item display={'flex'} justifyContent={'space-between'}>
          <MKButton variant="gradient" color="dark" onClick={kembali}>
            Kembali
          </MKButton>
          <MKButton disabled={!valid} variant="gradient" color="info" onClick={lanjut}>
            Lanjut
          </MKButton>
        </Grid>
      </MKBox>
    </>
  )
}

export default Klinis