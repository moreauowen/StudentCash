import React from 'react';
import axios from 'axios';
import {
  Box,
  Grid,
  TextField,
  Button,
  Card,
  CardHeader,
  Divider,
  CardContent,
} from "@mui/material";
import { FaMoneyBillWave } from "react-icons/fa";
import { display } from '@mui/system';

const USERPROFILE_ENDPOINT = 'http://localhost:5001/api/users/profile'; // set a token

const Profile = () => {

    const handleProfileOnClick = e => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const firstNameField = data.get("FirstName");
        const lastNameField = data.get("LastName");
        const emailField = data.get("Email");
        const phoneNumField = data.get("PhoneNum");
        const birthYearField = data.get("BirthYear");
        const birthDateField = data.get("BirthDate");
        const countryField = data.get("Country");
        const stateField = data.get("State");
        const userProfileData = {
        firstName: firstNameField,
        lastName: lastNameField,
        email: emailField, 
        phoneNum: phoneNumField,
        birthYear: birthYearField,
        birthDate: birthDateField,
        country: countryField,
        state: stateField,
        };

        // Post updated profile and wait for response
        axios.post(USERPROFILE_ENDPOINT, userProfileData)
        .then(res => {
            console.log(res);
            alert("Success, please refresh the page to see update.");
        })
        .catch(err => {
            console.log(err.repsonse);
            alert(err.response.data.msg);
        });

        console.log("done update user profile");
    };

return(
    <form autoComplete = "off">
        <Card>
            <CardHeader title = "Profile"/>
            <Divider/>
            <CardContent>
                <Grid item md = {6} xs = {12}>
                    <TextField fullWidth label = "First name" name = "firstName" required />
                </Grid>
                <Grid item md = {6} xs = {12}>
                    <TextField fullWidth label = "Last name" name = "lastName" required />
                </Grid>
                <Grid item md = {6} xs = {12}>
                    <TextField fullWidth label = "Email" name = "email" required />
                </Grid>
                <Grid item md = {6} xs = {12}>
                    <TextField fullWidth label = "PhoneNum" name = "phoneNum" required />
                </Grid>
                <Grid item md = {6} xs = {12}>
                    <TextField fullWidth label = "BirthYear" name = "birthYear" required />
                </Grid>
                <Grid item md = {6} xs = {12}>
                    <TextField fullWidth label = "BirthDate" name = "birthDate" required />
                </Grid>
                <Grid item md = {6} xs = {12}>
                    <TextField fullWidth label = "Country" name = "country" required />
                </Grid>
                <Grid item md = {6} xs = {12}>
                    <TextField fullWidth label = "State" name = "state" required />
                </Grid>
            </CardContent>
            <Divider/>
            <Box sx = {{display: 'flex', justifyContent: 'flex-end', p: 2}}>
                <Button type="submit" variant="contained" fullWidth>
                    Update Profile
                </Button>
            </Box>
        </Card>
    </form>
    );
}

export default Profile;