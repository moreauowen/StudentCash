import { Box, Container, Grid, Typography } from '@mui/material';
import { User } from './User';
import { Profile } from './Profile';
import Reset from './Reset';

const Account = () => (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Account
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
          >
            <User />
          </Grid>
          <Grid
            item
            xl={6}
            xs={12}
          >
            <Profile />
          </Grid>
          <Grid
            item
            xl={6}
            xs={12}
          >
            <Reset />
          </Grid>
        </Grid>
      </Container>
    </Box>
);

export default Account; 
