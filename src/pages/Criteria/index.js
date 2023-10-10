import MKBox from "components/MKBox";
import FormKriteria from "./sections/FormKriteria";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import { displayedRoutes } from "routes";
import background from "assets/images/result/result-background.jpg"

function Criteria() {
  return (
    <>
      <MKBox bgColor="white"
      sx={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        display: "grid",
        placeItems: "center",
        backgroundRepeat: "no-repeat",
        paddingX: { xs: 2, sm: 4, md: 6 } }}
      >
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
