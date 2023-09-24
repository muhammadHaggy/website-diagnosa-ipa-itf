import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import { displayedRoutes } from "routes";
import InformationScoring from "../Components/InformationsScoring";

function ResultCriteria() {
  return (
    <>
      <MKBox bgColor="white">
        <DefaultNavbar
          routes={displayedRoutes}
          action={{
            type: "internal",
            route: "/scoring",
            label: "Menuju Form Diagnosa",
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

export default ResultCriteria;