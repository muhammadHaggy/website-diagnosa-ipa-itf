import MKBox from "components/MKBox";
import FormSkoring from "./sections/FormSkoring";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import { displayedRoutes } from "routes";

function Scoring() {
  return (
    <>
      <MKBox bgColor="white">
        <DefaultNavbar
          routes={displayedRoutes}
          action={{
            type: "internal",
            route: "/",
            label: "Keluar dari Diagnosa",
            color: "error",
          }}
          transparent
          dark
        />
        <FormSkoring />
      </MKBox>
    </>
  );
}

export default Scoring;
