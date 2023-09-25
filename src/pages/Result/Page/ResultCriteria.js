import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import { displayedRoutes } from "routes";
import InformationCriteria from "../Components/InformationCriteria";

function ResultCriteria() {
  return (
    <>
      <MKBox bgColor="white">
        <DefaultNavbar
          routes={displayedRoutes}
          action={{
            type: "internal",
            route: "/",
            label: "Kembali ke Beranda",
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