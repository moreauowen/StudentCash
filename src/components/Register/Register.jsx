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
import { Link } from 'react-router-dom';
import Logo from "../Logo/Logo";
  //TODO:
  //Mobile layout needs to be messed around with

const REGISTER_ENDPOINT = 'http://localhost:5001/api/users/register';

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
  <Link to='/login' />
    console.log('done registering in');
  };

  return (
    <Grid
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgcolor='primary.main'
      sx={{
        height: "100vh",
      }}>
      <Logo size={55} color={'white'}/>
      <Container
        maxWidth="xs"
        sx={{
          bgcolor: "primary.light",
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
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Box display="flex" flexDirection="row" alignItems="center">
                  <Checkbox size="small" />
                  <Typography
                    sx={{
                      fontSize: "12px",
                    }}>
                    I agree to the Terms and Conditions and Privacy Policy
                  </Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
              <Button 
                type="submit"
                variant="contained" 
                fullWidth
              >
                Sign Up
              </Button>
              <Typography
                display='block'
                sx={{
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  textAlign: 'left',
                  marginRight: '10px',
                }}
              >
                Already have an account? <Link to='/login'>Login</Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Grid>
  );
}

export default Register;
