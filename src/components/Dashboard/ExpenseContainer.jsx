import { Card, CardContent, Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";
import RecurringChargeItem from "./RecurringChargeItem";

const ExpenseContainer = ({ charges }) => {
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
              justifyContent: "space-between"
            }}
          >
            <Typography variant="h6" fontWeight="400" gutterBottom>
              Expenses
            </Typography>
            <Button variant="outlined">
              {/** TODO - Add functionality to create expense here.*/}
              <AiOutlinePlus />
            </Button>
          </Box>
          {charges.length > 0 ? (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Cost</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {charges.map(
                  (
                    { companyName, chargeAmount},
                    index
                  ) => (
                    <RecurringChargeItem
                      key={index}
                      companyName={companyName}
                      chargeAmount={chargeAmount}
                    />
                  )
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
              No recent expenses
            </Typography>
          )}
        </CardContent>
      </Card>
    )
}

export default ExpenseContainer;