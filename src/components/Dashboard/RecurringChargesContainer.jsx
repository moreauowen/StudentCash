import { Card, CardContent, Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";
import RecurringChargeItem from "./RecurringChargeItem";

const RecurringChargesContainer = ({ charges }) => {
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
              Recurring Charges
            </Typography>
            <Button variant="outlined"><AiOutlinePlus /></Button>
          </Box>
          {charges.length > 0 ? (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Company</TableCell>
                  <TableCell align="right">Cost</TableCell>
                  <TableCell align="right">Frequency</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {charges.map(
                  (
                    { companyName, chargeAmount, recurringDate },
                    index
                  ) => (
                    <RecurringChargeItem
                      key={index}
                      companyName={companyName}
                      chargeAmount={chargeAmount}
                      recurringDate={recurringDate}
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
              No recurring charges
            </Typography>
          )}
        </CardContent>
      </Card>
    )
}

export default RecurringChargesContainer;