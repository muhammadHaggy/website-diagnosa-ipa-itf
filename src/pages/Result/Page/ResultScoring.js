import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import InformationScoring from "../Components/InformationsScoring";
import { displayedRoutes } from "routes";
import background from "assets/images/result/result-background.jpg"
import ContentDivider from "pages/LandingPages/sections/ContentDivider";
function ResultScoring() {
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
          transparent
          dark
        />
        <ContentDivider pb="30px"
        />
        <InformationScoring />
      </MKBox>
    </>
  );
}

export default ResultScoring;