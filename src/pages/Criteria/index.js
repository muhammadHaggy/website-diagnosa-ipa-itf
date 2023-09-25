import MKBox from "components/MKBox";
import FormKriteria from "./sections/FormKriteria";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import { displayedRoutes } from "routes";

function Criteria() {
  return (
    <>
      <MKBox bgColor="white">
        <DefaultNavbar
          routes={displayedRoutes}
          action={{
            type: "internal",
            route: "/",
            label: "Keluar dari Diagnosis",
            color: "error",
          }}
          transparent
          dark
        />
        <FormKriteria />
      </MKBox>
    </>
  );
}

export default Criteria;
