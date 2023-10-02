/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";
import MKButton from 'components/MKButton';
// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import { Typography } from "@mui/material";

function ContentDivider({pb = "150px"}) {
  return (
    <div style={{
        paddingBottom: pb, // Default value
        "@media (min-width: 600px)": {
          paddingBottom: "50px", // Value for screens with a width of 600px and above (e.g., xs)
        },
        "@media (min-width: 960px)": {
          paddingBottom: pb, // Value for screens with a width of 960px and above (e.g., md)
        },
        "@media (min-width: 1280px)": {
          paddingBottom: pb, // Value for screens with a width of 1280px and above (e.g., lg)
        },
      }}>
</div>
  );
}

export default ContentDivider;
