import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Drawer,
  Container,
  Button
} from "@mui/material";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import DefaultChart from "../Charts/DefaultChart";
import DashboardAccounts from "../DashboardAccounts/DashboardAccounts";
import RecurringChargeContainer from "../Dashboard/RecurringChargesContainer";
import MonthlyIncomeContainer from "./MonthlyIncomeContainer";

//test purposes
import generateFakeAccount from "../../generateFakeAccount.tsx";

const Dashboard = () => {
  const sidebarWidth = 300;

  const [currentUser, setCurrentUser] = useState({});
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
  }, []);

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
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
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
          <Grid item xs={12} md={4}>
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
          <Grid item xs={12} md={4}>
            <MonthlyIncomeContainer monthlyIncome={currentUser.monthlyIncome} />
          </Grid>
          <Grid item xs={12} md={8}>
            <RecurringChargeContainer charges={currentUser.recurringCharges} />
          </Grid>
        </Grid>
      </Grid>
      <Drawer
        anchor="right"
        variant="permanent"
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "white",
            color: "black",
            width: `${sidebarWidth * 1.5}px`,
          },
        }}
      >
        <Container>
          {currentUser.accounts.length > 0 ? (
            <DashboardAccounts
              accounts={currentUser.accounts}
              setChartData={setChartData}
              setChartHeight={setChartHeight}
            />
          ) : (
            <Box>
              <Typography variant="subtitle1" paddingY={2}>You don't have any accounts.</Typography>
              <Button fullWidth variant="contained">Click here to add one</Button>
            </Box>
          )}
        </Container>
      </Drawer>
    </Box>
  );
};

export default Dashboard;
