import { Grid } from "@mui/material";

const DashboardAccountTransaction = ({ store, date, amount }) => {
    return (
        <Grid container paddingY={1}>
            <Grid item xs={2} fontSize="0.9rem" textAlign="left">{date}</Grid>
            <Grid item xs={7} fontSize="1rem">{store}</Grid>
            <Grid item xs={3} textAlign="right">${amount}</Grid>
        </Grid>
    )
}

export default DashboardAccountTransaction;