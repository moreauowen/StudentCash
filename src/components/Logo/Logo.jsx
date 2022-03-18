import { Box, Typography, ThemeProvider } from '@mui/material';
import { FaMoneyBillWave } from 'react-icons/fa';

export default function Logo({margin, size, color}) {

    const textColors = {
        'white': "secondary.main",
        'green': "primary.main",
    }

    return(
        <Box
            sx={{
                margin: `${margin | 0}%`,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                color: `${textColors[color]}`,
            }}>
            <FaMoneyBillWave size={size} />
            <Typography
                sx={{
                    fontSize: `${size}px`,
                    fontWeight: 700,
                    fontStyle: "oblique",
                    letterSpacing: -2,
                    marginLeft: "5px",
                }}>
                StudentCash
            </Typography>
        </Box>
    )
}