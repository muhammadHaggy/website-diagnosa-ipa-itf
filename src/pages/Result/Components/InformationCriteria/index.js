import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import { useLocation } from 'react-router-dom';
import Bcriteria from "../Build/Bcriteria";



function InformationCriteria() {
  const location = useLocation();
  const myProp = location.state;
  // console.log(myProp)

  return (

    <Container>
      <Grid minHeight={'100vh'} pt={15} pb={8} display={'flex'} direction={'column'} justifyContent={'center'}>
        <Grid container item>

          {/* <Typography */}
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={2} >
              {/* <Typography variant="h4" align="center" marginTop={4} marginLeft={4}>
               <MKBadge badgeContent="Result" variant="contained" color="info" container /> */}
              {/* <MKBadge */}
              {/* </Typography> */}
              <Bcriteria prop={myProp} />
            </Grid>
            
          </MKBox>
        </Grid>
      </Grid>
      
    </Container>
  );
}

export default InformationCriteria;