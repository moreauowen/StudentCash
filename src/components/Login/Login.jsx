import { Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

export default function Login(props) {

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
        <Logo size={80} margin={5} color={'white'}/>
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
              fullWidth>
              Log In
            </Button>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
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
