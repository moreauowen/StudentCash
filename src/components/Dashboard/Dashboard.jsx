import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import DefaultChart from "../Charts/DefaultChart";
import ExpenseContainer from "./ExpenseContainer";
import IncomeContainer from "./IncomeContainer";

// Test purposes
import generateFakeAccount from "../../generateFakeAccount.tsx";


const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [balance, setBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState({});
  const [chartHeight, setChartHeight] = useState(1000);

  useEffect(() => {
    //replace with the actual user account
    const newUserAccount = async () => {
      const account = await generateFakeAccount();
      return account;
    };

    newUserAccount().then((newAccount) => {
      setCurrentUser(newAccount);
      setIsLoading(false);
    });

    loadIncomeAndExpenses();
  }, []);

  // Calculates Balance and Updates State
  const calculateBalance = (incomes, expenses) => {
    let bal = 0;
    for (let income of incomes) {
      bal += income.value;
    }
    for (let expense of expenses) {
      bal -= expense.value;
    }
    setBalance(bal);
  };

  const loadIncomeAndExpenses = async () => {
    setIsLoading(true);

    // Load income
    const incResponse = await axios({
      method: "POST",
      url: 'http://localhost:5001/api/users/get-income',
      withCredentials: true,
    });


    // Load expenses
    const expResponse = await axios({
      method: "POST",
      url: 'http://localhost:5001/api/users/get-expenses',
      withCredentials: true,
    });

    setIncomes(incResponse.data);
    setExpenses(expResponse.data);
    calculateBalance(incResponse.data,expResponse.data);
    setIsLoading(false);
  };

  const doughnutFillerData = {
    labels: [
      "Entertainment",
      "Food/Grocery",
      "Electronics",
      "Household Supplies",
    ],
    datasets: [
      {
        label: "Spending Categories",
        data: [3, 6, 1, 4],
        backgroundColor: ["#8af297", "#388f43", "#23cf39", "#0b5915"],
        hoverOffset: 3,
      },
    ],
    options: {
      responsive: true,
      maintainAspectRatio: true,
    },
  };

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <Box>
      <Grid container>
        <Grid container>
          <Grid item>
            <Typography fontSize="1.4rem" padding={2}>
              Welcome, {currentUser.firstName}
            </Typography>
          </Grid>
          <Grid item>
            <Typography fontSize="1.4rem" padding={2}>
              Current Balance: ${balance}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: 0,
                borderTop: "solid 4px",
                borderColor: "primary.main",
                height: "100%",
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="400">
                  14-Day Account Balance
                </Typography>
                <DefaultChart chartHeight={chartHeight} data={chartData} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: 0,
                borderTop: "solid 4px",
                borderColor: "primary.main",
                height: "100%",
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="400">
                  Spending Categories
                </Typography>
                <Doughnut
                  data={doughnutFillerData}
                  width="100%"
                  height="100%"
                ></Doughnut>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <IncomeContainer income={incomes} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ExpenseContainer charges={expenses} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
