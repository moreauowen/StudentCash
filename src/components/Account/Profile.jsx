import React from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
  Button,
  Card,
  CardHeader,
  Divider,
  CardContent,
  CardActions,
} from "@mui/material";

const USERPROFILE_ENDPOINT = 'http://localhost:5001/api/users/account';

export const Profile = () => {
  return (
    <form
      autoComplete="off"
      noValidate
      // {...props}
    >
      <Card>
        <CardHeader title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="First name"
                name="firstName"
                // required
                // value={userProfileData.firstNameField}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                // required
                // value={userProfileData.lastNameField}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                required
                // value={userProfileData.emailField}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                type="number"
                // value={userProfileData.phoneNumField}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Birth Year"
                name="birthyear"
                // required
                // value={userProfileData.birthYearField}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Birth Date"
                name="birthDate"
                // required
                // value={userProfileData.birthDateField}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button color="primary" variant="contained" fullWidth>
            Save
          </Button>
          <Button color="secondary" variant="contained" fullWidth>
            Delete Account
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
