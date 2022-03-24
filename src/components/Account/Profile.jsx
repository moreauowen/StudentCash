import React from 'react';
// import axios from 'axios';
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

// const USERPROFILE_ENDPOINT = 'http://localhost:5001/api/users/profile'; // set a token

export const Profile = () => {

    // const handleProfileOnClick = e => {
    //     e.preventDefault();
    //     const data = new FormData(e.currentTarget);
    //     const firstNameField = data.get("FirstName");
    //     const lastNameField = data.get("LastName");
    //     const emailField = data.get("Email");
    //     const phoneNumField = data.get("PhoneNum");
    //     const birthYearField = data.get("BirthYear");
    //     const birthDateField = data.get("BirthDate");
    //     const userProfileData = {
    //         firstName: firstNameField,
    //         lastName: lastNameField,
    //         email: emailField,
    //         phoneNum: phoneNumField,
    //         birthYear: birthYearField,
    //         birthDate: birthDateField
    //     };

    //     // Post updated profile and wait for response
    //     axios.post(USERPROFILE_ENDPOINT, userProfileData)
    //         .then(res => {
    //             console.log(res);
    //             alert("Success, please refresh the page to see update.");
    //         })
    //         .catch(err => {
    //             console.log(err.repsonse);
    //             alert(err.response.data.msg);
    //         });

    //     console.log("done update user profile");
    // };

    return (
        <form
            autoComplete="off"
            noValidate
            // {...props}
        >
            <Card>
                <CardHeader
                    title="Profile"
                />
                <Divider />
                <CardContent>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="First name"
                                name="firstName"
                                required
                                // value={userProfileData.firstNameField}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Last name"
                                name="lastName"
                                required
                                // value={userProfileData.lastNameField}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Email Address"
                                name="email"
                                required
                                // value={userProfileData.emailField}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Phone Number"
                                name="phone"
                                type="number"
                                // value={userProfileData.phoneNumField}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Birth Year"
                                name="birthyear"
                                required
                                // value={userProfileData.birthYearField}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Birth Date"
                                name="birthDate"
                                required
                                // value={userProfileData.birthDateField}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        p: 2
                    }}
                >
                    <Button
                        color="primary"
                        variant="contained"
                    >
                        Save
                    </Button>
                </Box>
            </Card>
        </form>
    );
}
