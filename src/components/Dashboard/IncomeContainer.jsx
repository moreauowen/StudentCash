import { Box, Button, Card, CardContent, Typography, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";

const IncomeContainer = ({ income }) => {
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
            Income
          </Typography>
          <Button variant="outlined">
            <AiOutlinePlus />
          </Button>
        </Box>
        {income.length > 0 ? (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Vendor</TableCell>
                <TableCell align="right">Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {income.map(({ source, amount }) => 
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
            No recent income.
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default IncomeContainer;
