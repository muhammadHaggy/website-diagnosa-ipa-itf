import MKBox from "components/MKBox";
import FormSkoring from "./sections/FormSkoring";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";

function Scoring() {
  return (
    <>
      <MKBox bgColor="white">
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "https://www.creative-tim.com/product/material-kit-react",
            label: "free download",
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
