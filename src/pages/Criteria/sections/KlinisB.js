import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import PertanyaanSkoring from "./PertanyaanSkoring";
import Grid from "@mui/material/Grid";
import MKButton from "components/MKButton";
import { useMemo } from "react";


function KlinisB({
  infiltrat, setInfiltrat,
  lanjut, kembali
}) {
  const valid = useMemo(() => {
    return (
      infiltrat != null
    )
  }, [infiltrat])
  
  return (
    <>
      <MKBox component="form" p={2}>
        <MKTypography variant="h4">
          B. Apakah terdapat kelainan baru pada pemeriksaan radiologi pada pasien
        </MKTypography>
        <MKBox px={3} py={2}>
          <MKBox direction="column">
            <MKTypography variant="body1">
              Infiltrat dan/atau perselubungan inhomogen baru pada pemeriksaan foto toraks atau CT-scan dada
            </MKTypography>
            <PertanyaanSkoring value={infiltrat} setValue={setInfiltrat} />
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

export default KlinisB