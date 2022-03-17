
import { createTheme } from '@mui/material/styles';
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { ThemeProvider } from '@emotion/react';
import "typeface-roboto";
import { CssBaseline } from '@mui/material';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#119822',
        contrastText: '#fafafa',
        bg: '#fdfdfd',
      },
      light: {
        main: '#119822',
        text: '#fdfdfd'
      }
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        @font-face {
          font-family: 'Roboto, sans-serif';
          font-weight: '400'
        }`
      }
    }
  });

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Login />
      </ThemeProvider>
  );
}

export default App;
