import React from 'react';
import axios from 'axios';
import {
  Typography,
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Checkbox,
} from "@mui/material";
import { FaMoneyBillWave } from "react-icons/fa";

const REGISTER_ENDPOINT = 'http://localhost:5000/api/users/register';

const Register = () => {

  const handleRegisterOnClick = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const emailField = data.get("Email");
    const passwordField = data.get("Password");
    const registerData = {
      email: emailField, 
      password: passwordField,
    };

    // Post register and wait for response
    axios.post(REGISTER_ENDPOINT, registerData)
      .then(res => {
        console.log(res);
        alert("Success, please try to login with the credentials.");
      })
      .catch(err => {
        console.log(err.repsonse);
        alert(err.response.data.msg);
      });

    console.log('done registering in');
  };

  return (
    <Grid
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgcolor={{ xs: "primary.bg", sm: "primary.main" }}
      sx={{
        height: "100vh",
      }}
    >
      <Box
        component={Grid}
        color={{ xs: "light.main", sm: "primary.contrastText" }}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <FaMoneyBillWave size={60} />
        <Typography
          sx={{
            fontSize: "60px",
            fontWeight: 700,
            fontStyle: "oblique",
            letterSpacing: -2,
            marginLeft: "5px",
          }}
        >
          StudentCash
        </Typography>
      </Box>
      <Container
        maxWidth="xs"
        sx={{
          bgcolor: "primary.bg",
          minHeight: "fit-content",
          borderRadius: "8px",
          padding: "16px",
        }}
      >
        <Box component="form" onSubmit={handleRegisterOnClick}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Register</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="First Name" required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Last Name" required />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField fullWidth name="Email" label="Email" type="email" required />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField fullWidth name="Password" label="Password" type="password" required />
              <Box display="flex" flexDirection="row" alignItems="center">
                <Checkbox size="small" />
                <Typography
                  sx={{
                    fontSize: "12px",
                  }}
                >
                  I agree to the <a href="#">Terms and Conditions</a> and{" "}
                  <a href="#">Privacy Policy</a>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Grid>
  );
}

export default Register;
