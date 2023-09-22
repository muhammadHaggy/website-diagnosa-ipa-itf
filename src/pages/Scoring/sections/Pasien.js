import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import PertanyaanSkoring from "./PertanyaanSkoring";
import Grid from "@mui/material/Grid";
import MKButton from "components/MKButton";


function Pasien({
  neutropenia, setNeutropenia,
  hematologi, setHematologi,
  organSolid, setOrganSolid,
  kortikosteroid, setKortikosteroid,
  perawatan, setPerawatan,
  paruKronik, setParuKronik,
  sirosis, setSirosis,
  melitus, setMelitus,
  lanjut, kembali, step
}) {
  return (
    <>
      <MKBox component="form" p={2}>
        <MKBox px={3} py={2}>
          <MKBox direction="column">
            <MKTypography variant="body1">
              Neutropenia
            </MKTypography>
            <PertanyaanSkoring value={neutropenia} setValue={setNeutropenia} />
          </MKBox>
        </MKBox>
        <MKBox px={3} py={2}>
          <MKBox direction="column">
            <MKTypography variant="body1">
              Keganasan hematologi
            </MKTypography>
            <PertanyaanSkoring value={hematologi} setValue={setHematologi} />
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
              Penggunaan kortikosteroid sistemik dan/obat imunosupresan
            </MKTypography>
            <PertanyaanSkoring value={kortikosteroid} setValue={setKortikosteroid} />
          </MKBox>
        </MKBox>
        <MKBox px={3} py={2}>
          <MKBox direction="column">
            <MKTypography variant="body1">
              Perawatan lama di ICU {`(≥ 14 hari)`}
            </MKTypography>
            <PertanyaanSkoring value={perawatan} setValue={setPerawatan} />
          </MKBox>
        </MKBox>
        <MKBox px={3} py={2}>
          <MKBox direction="column">
            <MKTypography variant="body1">
              Penyakit paru kronik {`(Termasuk TB paru, PPOK, kanker paru)`}
            </MKTypography>
            <PertanyaanSkoring value={paruKronik} setValue={setParuKronik} />
          </MKBox>
        </MKBox>
        <MKBox px={3} py={2}>
          <MKBox direction="column">
            <MKTypography variant="body1">
              Sirosis hati
            </MKTypography>
            <PertanyaanSkoring value={sirosis} setValue={setSirosis} />
          </MKBox>
        </MKBox>
        <MKBox px={3} py={2}>
          <MKBox direction="column">
            <MKTypography variant="body1">
              Diabetes melitus
            </MKTypography>
            <PertanyaanSkoring value={melitus} setValue={setMelitus} />
          </MKBox>
        </MKBox>

        {step > 0 ?
          <Grid item display={'flex'} justifyContent={'space-between'}>
            <MKButton variant="gradient" color="info" onClick={kembali}>
              Kembali
            </MKButton>
            <MKButton variant="gradient" color="info" onClick={lanjut}>
              Lanjut
            </MKButton>
          </Grid>
          :
          <Grid item display={'flex'} justifyContent={'end'}>
            <MKButton variant="gradient" color="info" onClick={lanjut}>
              Lanjut
            </MKButton>
          </Grid>
        }
      </MKBox>
    </>
  )
}

export default Pasien