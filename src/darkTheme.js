const darkTheme = {
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
}

export default darkTheme;
