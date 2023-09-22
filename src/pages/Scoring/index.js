import MKBox from "components/MKBox";
import FormSkoring from "./sections/FormSkoring";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import { displayedRoutes } from "routes";

function Scoring() {
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
        <FormSkoring />
      </MKBox>
    </>
  );
}

export default Scoring;
