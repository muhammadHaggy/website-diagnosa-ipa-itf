import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import bgImage from "assets/images/scoring/scoring.jpg";
import { useState } from "react";
import Card from "./Card";

import * as React from 'react';
import { useLocation, useNavigate } from "react-router-dom";


function FormSkoring() {

  const location = useLocation();
  const criteria = location.state.kriteria;

  const isProbable = React.useMemo(() => {
    if (criteria === "1") {
      return true
    }
    return false
  }, [criteria])

  const [paruKronik, setParuKronik] = useState(null)
  const [organSolid, setOrganSolid] = useState(null)
  const [galaktomanan, setGalaktomanan] = useState(null)
  const [kortikosteroid, setKortikosteroid] = useState(null)

  const pasien = {
    organSolid, setOrganSolid,
    kortikosteroid, setKortikosteroid,
    paruKronik, setParuKronik,
    galaktomanan, setGalaktomanan
  }

  const navigate = useNavigate()
  async function lihatHasil() {
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
        navigate('/result/scoring', { state: data })
      }
    } catch (e) {
      console.log(e)
    }
  }


  return (
    <Container>
      <Grid minHeight={'100vh'} pt={20} pb={8} display={'flex'} direction={'column'} justifyContent={'center'}>
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
                      Pertanyaan Skoring
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={7}>
                <Card {...pasien} lanjut={lihatHasil} />
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FormSkoring;
