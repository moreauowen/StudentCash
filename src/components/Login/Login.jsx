import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  lighten,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { FaMoneyBillWave } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Login(props) {
  return (
    <Grid
      container
      sx={{ height: "100vh", bgcolor: "primary", color: "primary.text" }}
    >
      <Box
        component={Grid}
        item
        xs={false}
        sm={7}
        display={{ xs: "none", md: "flex" }}
        sx={{
          bgcolor: "light.main",
          color: "light.text",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Box /* LOGO COMPONENT TO REDUCE REDUNDANCY? */
          sx={{
            margin: "5%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FaMoneyBillWave size={80} />
          <Typography
            sx={{
              fontSize: "80px",
              fontWeight: 700,
              fontStyle: "oblique",
              letterSpacing: -2,
              marginLeft: "5px",
            }}
          >
            StudentCash
          </Typography>
        </Box>
      </Box>
      <Grid item xs={12} md={5} component={Paper}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent={{ sm: "center", md: "none" }}
          marginTop={{ xs: "100px", sm: 0 }}
          height="100vh"
        >
          <Box
            sx={{
              display: "grid",
              columnGap: 2,
              rowGap: 1,
              padding: "10%",
              width: "100%",
            }}
          >
            <Box
              component={Grid}
              display={{ xs: "flex", md: "none" }}
              sx={{
                color: "light.main",
                flexDirection: "row",
                alignItems: "center",
                justifySelf: "center",
              }}
            >
              <FaMoneyBillWave size={60} />
              <Typography
                sx={{
                  fontSize: "50px", // NEED TO FIX THIS CROPPING WHEN AT MIN WIDTH
                  fontWeight: 700,
                  fontStyle: "oblique",
                  letterSpacing: -2,
                  marginLeft: "5px",
                }}
              >
                StudentCash
              </Typography>
            </Box>
            <Typography
              variant="h6"
              fontWeight={500}
              display={{ xs: "none", sm: "block" }}
            >
              Log In
            </Typography>
            <TextField
              variant="outlined"
              name="Email"
              autoComplete="email"
              label="Email"
              color="primary"
              margin="dense"
              fullWidth
            />
            <TextField
              variant="outlined"
              name="Password"
              autoComplete="password"
              label="Password"
              color="primary"
              type="password"
              fullWidth
            />
            <FormControlLabel
              label="Remember Me"
              control={<Checkbox color="primary" />}
            />
            <Button
              variant="contained"
              bgcolor={"primary"}
              fullWidth
              sx={{
                "&.MuiButton-contained": {
                  color: "#ffffff",
                },
              }}
            >
              Log In
            </Button>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                display="block"
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  textAlign: "left",
                  marginRight: "10px",
                }}
              >
                Don't have an account? <a href="#">Sign Up</a>
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  textAlign: "right",
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
