import { Box, Typography } from '@mui/material';
import { FaMoneyBillWave } from 'react-icons/fa';

export default function Logo({marginX = 0, marginY = 0, size, color = 'white'}) {

    const textColors = {
        'white': "secondary.main",
        'green': "primary.main",
    }

    //margin top of logo needs to be (size*0.25)

    const logoTopMargin = size*0.25;

    return(
        <Box
            sx={{
                marginY: `${marginY}%`,
                marginX: `${marginX}%`,
                color: `${textColors[color]}`,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
            <FaMoneyBillWave size={size} style={{ marginTop: `${logoTopMargin}px`, flexShrink: '0'}}/>
            <Typography
                sx={{
                    fontSize: `${size}px`,
                    fontWeight: 700,
                    fontStyle: "oblique",
                    letterSpacing: -2,
                    width: 'fit-content'
                }}>
                StudentCash
            </Typography>
        </Box>
    )
}
