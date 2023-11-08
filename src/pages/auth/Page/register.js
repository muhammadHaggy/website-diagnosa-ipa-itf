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
import InputLabel from "@mui/material/InputLabel";

// @mui material components
import Card from "@mui/material/Card";
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

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState(""); // State for username
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [showEmptyFieldsAlert, setShowEmptyFieldsAlert] = useState("");
  const [showRegisterAlert, setShowRegisterAlert] = useState(false);
  const [error, setError] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);
  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);

    // Regular expression for email validation
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (!emailRegex.test(inputEmail)) {
      setError(true);
    } else {
      setError(false);
    }
  };
  async function handleRegister(event) {
    event.preventDefault();
    if (username.trim() == "" || password.trim() == "" || email.trim() == "") {
      setShowEmptyFieldsAlert(true);
    }
    else {
      setShowEmptyFieldsAlert(false);
      setLoading(true)
      try {
        const res = await fetch('https://api.mikostop.com/api/register/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "username": username,
            "email": email,
            "password": password,
            "first_name": firstName,
            "last_name": lastName,
            "age": age
          })
        })
        if (res.ok) {
          const data = await res.json()
          console.log(data)
          if (data) {
            console.log(data)
            setUserSession(
              data.token,
              {
                username: username,
                role: data.roles[0]
              });
            if (getUser() != null)
              navigate('/criteria')
          }

        }
        else {
          setShowRegisterAlert(true)
        }
      } catch (e) {
        console.log(e)
      }
      finally {
        setLoading(false)
      }

    }


  }

  return (
    <>
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item px={10} xs={12} sm={12} md={6} lg={6} xl={6} py={10}
            sx={{
              px: { xs: 0, sm: 10, md: 5, lg: 5, xl: 10, py: 10 }
            }}
          >
            <MKBox
              mx={2}
              mt={-3}
              p={2}
              mb={1}
            >
              <MKTypography variant="h2" fontWeight="bold" color="info">
                Daftar
              </MKTypography>
            </MKBox>
            <MKBox pt={4} pb={3} px={3}>
              <MKBox component="form" role="form" onSubmit={handleRegister} noValidate>
                {showEmptyFieldsAlert && (
                  <div style={{ paddingBottom: "4px", fontSize: '14px', color: 'red' }} className="alert alert-danger ">Harap isi semua field.</div>
                )}
                {showRegisterAlert && !showEmptyFieldsAlert && (
                  <MKAlert color="error" dismissible
                    sx={{
                      height: "auto",
                      padding: "8px",
                      fontSize: "12px",

                    }}>
                    Daftar gagal. Silakan coba lagi.
                  </MKAlert>
                )}
                <MKBox mb={2}>
                  <InputLabel htmlFor="username">Username</InputLabel>
                  <MKInput
                    id="username"
                    type="text" // type should be text for username
                    name="username" // add name attribute for autofill
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </MKBox>
                {/* Input for first name */}
                <MKBox mb={2}>
                  <InputLabel htmlFor="first-name">First Name</InputLabel>
                  <MKInput
                    id="first-name"
                    type="text"
                    fullWidth
                    value={firstName}
                    onChange={handleFirstNameChange}
                  />
                </MKBox>

                {/* Input for last name */}
                <MKBox mb={2}>
                  <InputLabel htmlFor="last-name">Last Name</InputLabel>
                  <MKInput
                    id="last-name"
                    type="text"
                    fullWidth
                    value={lastName}
                    onChange={handleLastNameChange}
                  />
                </MKBox>

                {/* Input for age */}
                <MKBox mb={2}>
                  <InputLabel htmlFor="age">Age</InputLabel>
                  <MKInput
                    id="age"
                    type="number"
                    fullWidth
                    value={age}
                    onChange={handleAgeChange}
                  />
                </MKBox>
                <MKBox mb={2} >
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <MKInput
                    type="email"
                    name="email" // add name attribute for autofill
                    id="email"
                    fullWidth
                    value={email}
                    onChange={handleEmailChange}
                    error={error}
                    helperText={error ? "Invalid email address" : ""}
                  />
                </MKBox>
                <MKBox mb={2}>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <MKInput
                    id="password"
                    type="password"
                    name="new-password" // add name attribute for autofill and suggest new password
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </MKBox>
                <MKBox mt={4} mb={1}>
                  <MKButton
                    type="submit"
                    variant="gradient"
                    color="info"
                    fullWidth
                  >
                    {loading ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      "Daftar"
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
                    Sudah mempunyai akun?{" "}
                    <MKTypography
                      component={Link}
                      to="/auth/login"
                      variant="button"
                      color="info"
                      fontWeight="medium"
                      textGradient
                    >
                      Login
                    </MKTypography>
                  </MKTypography>
                </MKBox>
              </MKBox>
            </MKBox>
          </Grid>
          <Grid item xs={0} sm={0} md={6} lg={6} xl={6}>
            <MKBox
              bgColor="#072A66"
              mx={0}
              px={0}
              sx={{
                backgroundImage: `url(${authbg})`,
                backgroundPosition: "center bottom",
                height: "100vh",
                backgroundSize: "cover",
                display: { xs: "none", sm: "none", md: "grid", lg: "grid", xl: "grid" },
                backgroundRepeat: "no-repeat"
              }}
            >
              {/* <MKTypography variant="h3" fontWeight="medium" color="white" textAlign="center"
                fontSize="28px"
              >

                Selamat datang di Mikostop
              </MKTypography> */}
            </MKBox>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
}

export default Register;
