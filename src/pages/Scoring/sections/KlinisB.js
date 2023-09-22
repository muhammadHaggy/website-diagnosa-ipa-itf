import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import PertanyaanSkoring from "./PertanyaanSkoring";
import Grid from "@mui/material/Grid";
import MKButton from "components/MKButton";


function KlinisB({
  infiltrat, setInfiltrat,
  lanjut, kembali
}) {
  return (
    <>
      <MKBox component="form" p={2}>
        <MKTypography variant="h3">
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
          <MKButton variant="gradient" color="info" onClick={kembali}>
            Kembali
          </MKButton>
          <MKButton variant="gradient" color="info" onClick={lanjut}>
            Lanjut
          </MKButton>
        </Grid>
      </MKBox>
    </>
  )
}

export default KlinisB