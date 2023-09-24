import MKBox from "components/MKBox";
import FormKriteria from "./sections/FormSkoring";
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
            label: "Keluar Form Diagnosa",
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
