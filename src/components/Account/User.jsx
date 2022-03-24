import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography
} from '@mui/material';

const user = {
    avatar: '',
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
            src={user.avatar}
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
        <Divider />
        <CardActions>
        <Button
            color="primary"
            fullWidth
            variant="text"
        >
            Upload picture
        </Button>
        </CardActions>
    </Card>
);
