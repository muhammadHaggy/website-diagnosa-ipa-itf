import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import PertanyaanSkoring from "./PertanyaanSkoring";
import Grid from "@mui/material/Grid";
import MKButton from "components/MKButton";
import { useMemo } from "react";


function Lab({
  mikroskopik, setMikroskopik,
  kultur, setKultur,
  galaktomanan, setGalaktomanan,
  lanjut, kembali
}) {
  const valid = useMemo(() => {
    return (
      mikroskopik != null &&
      kultur != null &&
      galaktomanan != null
    )
  }, [mikroskopik, kultur, galaktomanan])
  
  return (
    <>
      <MKBox component="form" p={2}>
        <MKTypography variant="h4">
          Apakah terdapat salah satu hasil positif pada pemeriksaan laboratorium jamur dari spesimen darah atau aspirat ETT/BAL/Bilasan bronkus?
        </MKTypography>
        <MKBox px={3} py={2}>
          <MKBox direction="column">
            <MKTypography variant="body1">
              Pemeriksaan mikroskopik Aspergillus
            </MKTypography>
            <PertanyaanSkoring value={mikroskopik} setValue={setMikroskopik} />
          </MKBox>
        </MKBox>
        <MKBox px={3} py={2}>
          <MKBox direction="column">
            <MKTypography variant="body1">
              Pemeriksaan kultur jamur Aspergillus
            </MKTypography>
            <PertanyaanSkoring value={kultur} setValue={setKultur} />
          </MKBox>
        </MKBox>
        <MKBox px={3} py={2}>
          <MKBox direction="column">
            <MKTypography variant="body1">
              Deteksi galaktomanan Aspergillus
            </MKTypography>
            <PertanyaanSkoring value={galaktomanan} setValue={setGalaktomanan} />
          </MKBox>
        </MKBox>
        <Grid item display={'flex'} justifyContent={'space-between'}>
          <MKButton variant="gradient" color="info" onClick={kembali}>
            Kembali
          </MKButton>
          <MKButton disabled={!valid} variant="gradient" color="info" onClick={lanjut}>
            Lihat Hasil
          </MKButton>
        </Grid>
      </MKBox>
    </>
  )
}

export default Lab