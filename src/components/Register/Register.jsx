import {
  Typography,
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  FormControl,
  Checkbox,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FaMoneyBillWave } from "react-icons/fa";

export default function Register(props) {
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
            <TextField fullWidth label="Email" type="email" required />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField fullWidth label="Password" type="password" required />
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
            <Button variant="contained" fullWidth>
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
