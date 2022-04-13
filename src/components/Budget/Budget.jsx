import { Box, Container, Grid, Typography } from '@mui/material';
import { Toolbar } from './Toolbar';
import { Dashboard } from '../Dashboard/Dashboard';
import { TransactionsList } from './customer-list-results';
import { transactions } from './customers-mock';

const Budget = () => (
    <>
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8
            }}
        >
            <Container maxWidth={false}>
            <Typography
              sx={{ mb: 3 }}
              variant="h4"
            >
              Budgets
            </Typography>
                <Toolbar />
                <Box sx={{ mt: 3 }}>
                    <transactionsList transactions={transactions} />
                </Box>
            </Container>
        </Box>
    </>
);

Budget.getLayout = (page) => (
    <Dashboard>
        {page}
    </Dashboard>
);

export default Budget; 
