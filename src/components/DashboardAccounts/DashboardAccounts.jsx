import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container
} from "@mui/material";
import generateTwoWeekSummary from "../../helperFunctions";
import DashboardAccountTransaction from "./DashboardAccountTransaction";

const DashboardAccounts = ({ accounts, setChartData, setChartHeight }) => {
  const [selectedAccount, setSelectedAccount] = useState(0);
  const [transactionData, setTransactionData] = useState([]);

  const updateViewedAccount = (accountNumber) => {
    const currAccountTransactions = accounts[accountNumber].transactions;
    const newChartData = generateTwoWeekSummary(currAccountTransactions)
    setChartData(newChartData[0]);
    setChartHeight(newChartData[1])
    setTransactionData(currAccountTransactions);
  };

  useEffect(() => {
    updateViewedAccount(0);
  }, []);

  const handleSelectChange = (e) => {
    const num = parseInt(e.target.value);
    updateViewedAccount(num);
    setSelectedAccount(num);
  };

  return (
    <Box>
      <Typography variant="h5" fontSize="1.4rem" padding={2}>
        Your Accounts
      </Typography>
      <FormControl fullWidth>
        <InputLabel>Account</InputLabel>
        <Select
          value={selectedAccount}
          label="Account"
          onChange={handleSelectChange}
          variant="outlined"
          sx={{ borderColor: "primary.main" }}
        >
          {accounts.map((account, index) => (
            <MenuItem value={index} key={account.lastFour}>
              {account.institution} - x{account.lastFour}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography variant="subtitle2" paddingY={2}>
        Recent Transactions
      </Typography>
      <Container>
        {transactionData ? (
          transactionData.map(({transactionAmount, transactionName, transactionDate}, index) => (
            <DashboardAccountTransaction key={index} store={transactionName} amount={transactionAmount} date={transactionDate.toLocaleDateString('en-us', {month:'numeric', day:'numeric'})} />
          ))
        ) : (
          <Typography variant="subtitle1">No recent transactions</Typography>
        )}
      </Container>
    </Box>
  );
};

export default DashboardAccounts;
