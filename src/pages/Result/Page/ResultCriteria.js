import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import { displayedRoutes } from "routes";
import InformationScoring from "../Components/InformationsScoring";
import InformationCriteria from "../Components/InformationCriteria";

function ResultCriteria() {
  return (
    <>
      <MKBox bgColor="white">
        <DefaultNavbar
          routes={displayedRoutes}
          action={{
            type: "internal",
            route: "/scoring",
            label: "Menuju Form Skoring",
            color: "info",
          }}
          transparent
          dark
        />
        <InformationCriteria />
      </MKBox>
    </>
  );
}

export default ResultCriteria;