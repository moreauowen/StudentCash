import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Divider,
  Grid,
  TextField,
  Alert,
} from "@mui/material";
import axios from "axios";

const RESET_ENDPOINT = "http://localhost:5001/api/users/reset";

const Reset = (props) => {
  const [formError, setFormError] = useState();

  const handleResetButtonClick = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const currentPasswordField = data.get("current-password");
    const newPasswordField = data.get("new-password");
    const confirmPasswordField = data.get("confirm-password");

    const resetData = {
      currentPassword: currentPasswordField,
      newPassword: newPasswordField,
    };

    if (confirmPasswordField === newPasswordField) {
      axios({
        method: "POST",
        data: resetData,
        url: RESET_ENDPOINT,
        withCredentials: true,
      })
        .then((res) => {
          if (res.data.valid) {
            setFormError({
              severity: "success",
              message: res.data.msg,
            });
          } else {
            setFormError({
              severity: "error",
              message: res.data.msg,
            });
          }
        })
        .catch((err) => {
          setFormError({
            severity: "error",
            message: err.response.data.msg,
          });
        });
    } else {
      setFormError({
        severity: "error",
        message: "Passwords do not match.",
      });
      return;
    }
  };
  return (
    <Card {...props} component="form" onSubmit={handleResetButtonClick}>
      <CardHeader title="Reset Password" />
      <Divider />
      <CardContent>
        {formError ? (
          <Alert severity={formError.severity} style={{ marginBottom: "12px" }}>
            {formError.message}
          </Alert>
        ) : null}

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Current Password"
              name="current-password"
              required
              // value={userProfileData.firstNameField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="New Password"
              name="new-password"
              required
              // value={userProfileData.lastNameField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirm-password"
              required
              // value={userProfileData.lastNameField}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardActions>
        <Button color="primary" fullWidth variant="contained" type="submit">
          Reset
        </Button>
      </CardActions>
    </Card>
  );
};

export default Reset;
