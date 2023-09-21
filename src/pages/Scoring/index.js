import { Grid } from "@mui/material";
import { useState } from "react";
import FormSkoring from "./sections/FormSkoring";

function Scoring() {
  const [tbParu, setTbParu] = useState(false)
  const [organSolid, setOrganSolid] = useState(false)
  const [galaktomanan, setGalaktomanan] = useState(false)
  const [kortikosteroid, setKortikosteroid] = useState(false)

  return (
    <Grid container direction={'column'} alignContent={'center'} py={'5rem'} gap={"2rem"}>
      <FormSkoring label={"Menderita TB paru"} value={tbParu} setValue={setTbParu} />
      <FormSkoring label={"Menderita keganasan organ solid"} value={organSolid} setValue={setOrganSolid} />
      <FormSkoring label={"Galaktomanan positif"} value={galaktomanan} setValue={setGalaktomanan} />
      <FormSkoring label={"Menerima obat kortikosteroid sistemik"} value={kortikosteroid} setValue={setKortikosteroid} />
    </Grid>
  )
}

export default Scoring;