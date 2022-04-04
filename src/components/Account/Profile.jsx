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

const USERPROFILE_ENDPOINT = 'http://localhost:5001/api/users/account';

export const Profile = () => {

    const handleProfileOnClick = e => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const firstNameField = data.get("FirstName");
        const lastNameField = data.get("LastName");
        const passwordField = data.get("Password")
        const schoolField = data.get("School");
        const stateField = data.get("State");
        const cityField = data.get("City");
        const userProfileData = {
            firstName: firstNameField,
            lastName: lastNameField,
            password: passwordField,
            school: schoolField,
            state: stateField,
            city: cityField,
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

    return (
        <div>
            <form
                autoComplete="off"
                noValidate
                onSubmit={handleProfileOnClick}
            >
                <Card>
                    <CardHeader
                        title="Profile"
                        subheader="You can edit your profile information in this form"
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
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid
                                item
                                md={12}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="School"
                                    name="school"
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
                                    label="State"
                                    name="state"
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
                                    label="City"
                                    name="city"
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
            <br></br>
            <br></br>
            <form
            autoComplete="off"
                noValidate
                //onSubmit={}
            >
                <Card>
                    <CardHeader
                        title="Change Password"
                        subheader="You can change your account password in this form"
                    />
                    <Divider />
                    <CardContent>
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                item
                                md={12}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Current Password"
                                    name="currentPassword"
                                    required
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid
                                item
                                md={12}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Password"
                                    name="password"
                                    required
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid
                                item
                                md={12}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Confirm Password"
                                    name="confirmPassword"
                                    required
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
                            Change Password
                        </Button>
                    </Box>
                </Card>
            </form>
            <br></br>
            <br></br>
            <form
            autoComplete="off"
                noValidate
                //onSubmit={}
            >
                <Card>
                    <CardHeader
                        title="Delete Account"
                        subheader="You can delete your account in this form"
                    />
                    <Divider />
                    <CardContent>
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                item
                                md={12}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    required
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid
                                item
                                md={12}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Password"
                                    name="password"
                                    required
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid
                                item
                                md={12}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Confirm Password"
                                    name="confirmPassword"
                                    required
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
                            Delete Account
                        </Button>
                    </Box>
                </Card>
            </form>
        </div>
    );
}
