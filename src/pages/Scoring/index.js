import { Grid } from "@mui/material";
import GmIndex from "./sections/GmIndex";
import { useState } from "react";

function Scoring() {
  const [gmIndex, setGmIndex] = useState(false)

  return (
    <Grid container direction={'column'} alignContent={'center'} py={'5rem'}>
      <GmIndex gmIndex={gmIndex} setGmIndex={setGmIndex} />
    </Grid>
  )
}

export default Scoring;