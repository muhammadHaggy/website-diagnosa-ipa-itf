

/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

// Presentation page components

function High() {
    return (
        <>
            <RotatingCard>
                <RotatingCardFront
                    image={bgFront}
                    icon="touch_app"
                    title={
                        <>
                            Recommendation/
                            <br />
                            Treatment
                        </>
                    }
                    description="Hover this page and see our best recommendation by experts by clicking on."
                />
                <RotatingCardBack
                    image={bgBack}
                    title=""
                    description="Lanjutkan monitoring pasien."
                    action={{
                        type: "internal",
                        route: "/sections/page-sections/page-headers",
                        label: "click for more",
                    }}
                />
            </RotatingCard>
        </>
    );
}

export default High;
