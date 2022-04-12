import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Register from "./components/Register/Register";
import DashboardContainer from "./components/DashboardContainer/DashboardContainer";
import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//theming
import { ThemeProvider, createTheme } from '@mui/material/styles';
import lightTheme from './lightTheme';

const theme = (true) ? createTheme(lightTheme) : createTheme(lightTheme);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
            <Route index element={<Homepage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<DashboardContainer />} >
              <Route index element={<Dashboard />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
