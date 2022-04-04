import { Box, Container, Grid, Typography } from '@mui/material';
import { User } from './User';
import { Profile } from './Profile';
import { Dashboard } from '../Dashboard/Dashboard';

const Account = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
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
            lg={4}
            md={6}
            xs={12}
          >
            <User />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <Profile />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Account.getLayout = (page) => (
  <Dashboard>
    {page}
  </Dashboard>
);

export default Account; 
