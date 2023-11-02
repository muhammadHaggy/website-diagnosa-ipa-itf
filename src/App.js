/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import PrivateRoutes from "utils/PrivateRoutes";
import { getToken } from "utils/authUtils";
// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";
import LandingPage from "layouts/pages/landing-pages";

// Material Kit 2 React routes
import routes from "routes";
import Register from "pages/auth/Page/register";
import Login from "pages/auth/Page/login";
import Logout from "pages/auth/Page/logout";
// import { AuthProvider } from "context/AuthContext";

export default function App() {
  const { pathname } = useLocation();
  // useEffect(() => {
  //   const token = getToken();
  //   if (!token) {
  //     return <Login></Login>;
  //   }
  // })
  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Routes>
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/logout" element={<Logout />} />
          <Route path="auth/register" element={<Register />} />
          <Route path="" element={<LandingPage />} />
        <Route element={<PrivateRoutes />}>
            {getRoutes(routes)}
        </Route>
      </Routes>
      
    </ThemeProvider>
  );
}
