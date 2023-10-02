import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import { displayedRoutes } from "routes";
import InformationCriteria from "../Components/InformationCriteria";
import background from "assets/images/result/result-background.jpg"
import ContentDivider from "pages/LandingPages/sections/ContentDivider";


function ResultCriteria() {
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
            label: "Kembali ke Beranda",
            color: "info",
          }}
        />
        <ContentDivider pb="30px"
        />
        <InformationCriteria />
      </MKBox>
    </>
  );
}

export default ResultCriteria;