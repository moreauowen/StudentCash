import axios from 'axios';
import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    Typography
} from '@mui/material';

axios.get()

const user = {
    city: 'Boston',
    name: 'Duoduo Xu',
    school: 'Wentworth Institute of Technology'
};

export const User = (props) => (
    <Card {...props}>
        <CardContent>
        <Box
            sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
            }}
        >
            <Avatar
            sx={{
                height: 64,
                mb: 2,
                width: 64
            }}
            />
            <Typography
            color="textPrimary"
            gutterBottom
            variant="h5"
            >
            {user.name}
            </Typography>
            <Typography
            color="textSecondary"
            variant="body2"
            >
            {user.school}
            </Typography>
            <Typography
            color="textSecondary"
            variant="body2"
            >
            {user.city}
            </Typography>
        </Box>
        </CardContent>
        <CardActions>
        </CardActions>
    </Card>
);
