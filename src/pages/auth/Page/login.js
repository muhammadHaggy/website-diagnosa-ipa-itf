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

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { setUserSession, getUser } from "utils/authUtils";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

// Material Kit 2 React components
import MKAlert from "components/MKAlert";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";



// Images
import authbg from "assets/images/auth/auth-illustration.svg"

function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const handleSetRememberMe = () => setRememberMe(!rememberMe);
    const [username, setUsername] = useState(""); // State for username
    const [password, setPassword] = useState(""); // State for password
    const [showEmptyFieldsAlert, setShowEmptyFieldsAlert] = useState("");
    const [showLoginAlert, setShowLoginAlert] = useState(false);
  async function handleLogin() {
        if(username.trim()  == "" || password.trim() == "")  {
            setShowEmptyFieldsAlert(true);
        }
        else{
            setShowEmptyFieldsAlert(false);
            setLoading(true);
            try {
              const res = await fetch('https://api.mikostop.com/api/login/', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "username": username,
                    "password": password
                })
            })
            if (res.ok) {
                const data = await res.json()
                console.log(data)
                if (data)   {
                    console.log(data)
                    setUserSession(
                        data.token, 
                        {
                            username: username,
                            role: data.roles[0]
                        });
                    if (getUser() != null)
                        navigate(-1)
                }
                
            }
            else {
                setShowLoginAlert(true)
            }
            } catch (e) {
            console.log(e)
            } 
            finally{
                setLoading(false);
            }
                
            }
       
      
  }

  return (
    <>
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2} >
        <Grid container justifyContent="center" alignItems="center"
        >
          <Grid item px={10} xs={12} sm={12} md={6} lg={6} xl={6} py={10}
          sx={{
            px: {xs:0, sm:10, md:5, lg:5, xl:10, py:10}
          }}
          >
            <MKBox
              mx={2}
              mt={-3}
              p={2}
              mb={1}
            >
              <MKTypography variant="h2" fontWeight="bold" color="info">
                Login
              </MKTypography>
            </MKBox>
            <MKBox pt={4} pb={3} px={3}>
              <MKBox component="form" role="form">
              {showEmptyFieldsAlert && (
                    <div style={{paddingBottom: "4px", fontSize: '14px', color: 'red' }} className="alert alert-danger ">Harap isi semua field.</div>
                )}
                {showLoginAlert && !showEmptyFieldsAlert && (
                    <MKAlert color="error" dismissible 
                        sx={{ // Set the desired width
                            height: "auto",  
                            padding: "8px",  
                            fontSize: "12px",  
                     
                    }}>
                        Login Invalid. Silakan coba lagi.
                    </MKAlert>
                )} 
                <MKBox mb={2}>
                  <MKInput type="username" label="Username" fullWidth value={username}
          onChange={(e) => setUsername(e.target.value)} />
                </MKBox>
                <MKBox mb={2} mt={4}>
                  <MKInput type="password" label="Password" fullWidth value={password}
          onChange={(e) => setPassword(e.target.value)}/>
                </MKBox>
                <MKBox display="flex" alignItems="center" ml={-1}>
                  <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                  <MKTypography
                    variant="button"
                    fontWeight="regular"
                    color="text"
                    onClick={handleSetRememberMe}
                    sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                  >
                    &nbsp;&nbsp;Ingat saya
                  </MKTypography>
                </MKBox>
                <MKBox mt={4} mb={1}>
                  <MKButton 
                  variant="gradient" 
                  color="info" 
                  fullWidth
                  onClick={handleLogin}
                  >
                    {loading ? (
                    <CircularProgress size={24} color="inherit" />
                    ) : (
                    "Login"
                    )}
                  </MKButton>
                </MKBox>
                <MKBox mt={3} mb={1} textAlign="center">
                  <MKTypography variant="button" color="text" 
                    style={{
                        '&hover': {
                            textDecoration: 'underline',
                        }
                      }}
                  >
                    Belum mempunyai akun?{" "}
                    <MKTypography
                      component={Link}
                      to="/auth/register"
                      variant="button"
                      color="info"
                      fontWeight="medium"
                      textGradient
                    >
                      Daftar
                    </MKTypography>
                  </MKTypography>
                </MKBox>
              </MKBox>
            </MKBox>
          </Grid>
          <Grid item xs={0} sm={0} md={6} lg={6} xl={6}>
            <MKBox
            bgColor= "#072A66"
            mx = {0}
            px = {0}
              sx={{
                backgroundImage: `url(${authbg})`,
                backgroundPosition: "center bottom",
                height: "100vh",
                backgroundSize: "cover",
                display: {xs:"none", sm:"none", md:"grid", lg:"grid", xl:"grid"}, 
                backgroundRepeat: "no-repeat"
              }}
            >
                
            </MKBox>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
}

export default Login;
