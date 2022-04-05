import { TableRow, TableCell, LinearProgress } from "@mui/material";

const RecurringChargeItem = ({ companyName, chargeAmount, recurringDate }) => {
  const currentDate = new Date();
  const rdate = (recurringDate < currentDate.getDay()) ? recurringDate + 31 : recurringDate;
  const progress = Math.round(rdate - currentDate.getDay() / 31)

  return (
    <TableRow>
      <TableCell component="th">{companyName}</TableCell>
      <TableCell align="right">$ {chargeAmount}</TableCell>
      <TableCell align="right">{recurringDate}</TableCell>
      <TableCell align="right">
        <LinearProgress variant="determinate" value={progress} color="primary" sx={{width: '100%', minWidth: '3rem'}}/>
      </TableCell>
    </TableRow>
  );
};

export default RecurringChargeItem;
