import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import Information from "pages/LandingPages/AboutUs/sections/Information";
import routes from "routes";
import InformationScoring from "./Components/InformationsScoring";
import { displayedRoutes } from "routes";

function Scoring() {
  return (
    <>
      <MKBox bgColor="white">
        <DefaultNavbar
          routes={displayedRoutes}
          action={{
            type: "external",
            route: "https://www.creative-tim.com/product/material-kit-react",
            label: "free download",
            color: "info",
          }}
          transparent
          dark
        />
        <InformationScoring />
      </MKBox>
    </>
  );
}

export default Scoring;