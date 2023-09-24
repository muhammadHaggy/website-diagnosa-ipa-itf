import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import PertanyaanSkoring from "./PertanyaanSkoring";
import Grid from "@mui/material/Grid";
import MKButton from "components/MKButton";
import { useMemo } from "react";


function Pasien({
  organSolid, setOrganSolid,
  kortikosteroid, setKortikosteroid,
  paruKronik, setParuKronik,
  galaktomanan, setGalaktomanan,
  lanjut
}) {
  const valid = useMemo(() => {
    return (
      organSolid != null &&
      kortikosteroid != null &&
      paruKronik != null &&
      galaktomanan != null
    )
  }, [organSolid, kortikosteroid, paruKronik, galaktomanan])

  return (
    <>
      <MKBox component="form" p={2}>
        <MKTypography variant="h4">
          Apakah terdapat salah satu kondisi di bawah ini pada pasien?
        </MKTypography>
        <MKBox px={3} py={2}>
          <MKBox direction="column">
            <MKTypography variant="body1">
              TB paru
            </MKTypography>
            <PertanyaanSkoring value={paruKronik} setValue={setParuKronik} />
          </MKBox>
        </MKBox>
        <MKBox px={3} py={2}>
          <MKBox direction="column">
            <MKTypography variant="body1">
              Keganasan organ solid
            </MKTypography>
            <PertanyaanSkoring value={organSolid} setValue={setOrganSolid} />
          </MKBox>
        </MKBox>
        <MKBox px={3} py={2}>
          <MKBox direction="column">
            <MKTypography variant="body1">
              Galaktomanan positif
            </MKTypography>
            <PertanyaanSkoring value={galaktomanan} setValue={setGalaktomanan} />
          </MKBox>
        </MKBox>
        <MKBox px={3} py={2}>
          <MKBox direction="column">
            <MKTypography variant="body1">
              Menerima obat kortikosteroid sistemik
            </MKTypography>
            <PertanyaanSkoring value={kortikosteroid} setValue={setKortikosteroid} />
          </MKBox>
        </MKBox>

        <Grid item display={'flex'} justifyContent={'end'}>
          <MKButton disabled={!valid} variant="gradient" color="info" onClick={lanjut}>
            Lihat Hasil
          </MKButton>
        </Grid>
      </MKBox>
    </>
  )
}

export default Pasien