import { TableRow, TableCell } from "@mui/material";

const RecurringChargeItem = ({ companyName, chargeAmount }) => {

  return (
    <TableRow>
      <TableCell component="th">{companyName}</TableCell>
      <TableCell align="right">$ {chargeAmount}</TableCell>
    </TableRow>
  );
};

export default RecurringChargeItem;
