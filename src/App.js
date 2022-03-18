import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import lightTheme from './lightTheme';
import Register from "./components/Register/Register";

import Login from "./components/Login/Login";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Dashboard from "./components/Dashboard/Dashboard";
import Homepage from "./components/Homepage/Homepage";

function App() {

  const [lightMode, setLightMode] = useState(true);
  
  const theme = lightMode ? createTheme(lightTheme) : createTheme(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='dash' element={<RequireAuth>
                                          <Dashboard />
                                        </RequireAuth>} />
            {/* <Route path='overview' element={<Overview /> } />
            <Route path='budget' element={<Budget /> } />
            <Route path='reports' element={<Reports /> } /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
