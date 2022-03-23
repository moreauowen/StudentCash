import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from 'axios';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LOGIN_ENDPOINT = 'http://localhost:5000/api/users/login';

const Login = () => {

  const navigate = useNavigate()

  const handleLoginOnClick = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const emailField = data.get("Email");
    const passwordField = data.get("Password");
    const loginData = {
      email: emailField, 
      password: passwordField,
    };

    // Post login and wait for response
    axios.post(LOGIN_ENDPOINT, loginData)
      .then(res => {
        console.log(res);
        if (res.data.valid) navigate('/dash', {replace: true})
        else alert(res.message)
      })
      .catch(err => {
        console.log(err.response);
        alert(err.response.data.msg);
      });

    console.log('done logging in');
  };

  return (
    <Grid
      container>
      <Box
        component={Grid}
        item
        sm={7}
        bgcolor='primary.main'
        display={{ xs: 'none', md: 'flex' }}
        sx={{
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <Logo size={80} marginX={5} color={'white'}/>
      </Box>
      <Grid item xs={12} md={5}>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          height='100vh'>
          <Box
            sx={{
              display: 'grid',
              columnGap: 2,
              rowGap: 1,
              padding: '5%',
              width: '90%',
            }}>
            <Box display={{md:'none'}}><Logo size={55} color={'green'}/></Box>
            <Box
              component="form"
              onSubmit={handleLoginOnClick}
            >
              <Typography
                variant='h6'
                fontWeight={500}
                display={{ 
                  xs: 'none', 
                  sm: 'block',
                }}>
                Log In
              </Typography>
              <TextField
                variant='outlined'
                name='Email'
                autoComplete='email'
                label='Email'
                margin='dense'
                fullWidth
              />
              <TextField
                variant='outlined'
                name='Password'
                autoComplete='password'
                label='Password'
                type='password'
                fullWidth
              />
              <FormControlLabel
                label='Remember Me'
                control={<Checkbox />}
              />
              <Button
                variant='contained'
                fontWeight='500'
                fullWidth
                type="submit"
              >
                Log In
              </Button>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Grid item>
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
                  Don't have an account? <Link to='/register'>Sign Up</Link>
                </Typography>
              </Grid>
              <Typography
                sx={{
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  textAlign: 'right',
                }}
              >
                Forgot Password
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
