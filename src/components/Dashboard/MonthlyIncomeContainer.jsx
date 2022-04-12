import { Box, Button, Card, CardContent, Typography, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";

const MonthlyIncomeContainer = ({ monthlyIncome }) => {
  return (
    <Card
      sx={{
        borderRadius: 0,
        borderTop: "solid 4px",
        borderColor: "primary.main",
        height: "100%",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" fontWeight="400" gutterBottom>
            Monthly Income
          </Typography>
          <Button variant="outlined">
            <AiOutlinePlus />
          </Button>
        </Box>
        {monthlyIncome.length > 0 ? (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Company</TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {monthlyIncome.map(({ source, amount }) => 
                    <TableRow>
                        <TableCell>{source}</TableCell>
                        <TableCell>$ {amount}</TableCell>
                    </TableRow>
                )}
            </TableBody>
          </Table>
        ) : (
          <Typography
            variant="subtitle1"
            sx={{
              fontStyle: "oblique",
            }}
          >
            No monthly income
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default MonthlyIncomeContainer;
