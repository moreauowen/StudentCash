import {
  Card,
  CardContent,
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Modal,
  TextField,
  InputAdornment,
  Input
} from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";
import RecurringChargeItem from "./RecurringChargeItem";
import { useState } from "react";
import { red } from "@mui/material/colors";

const ExpenseContainer = ({ charges }) => {

  const [modalFormContent, setModalFormContent] = useState({
    name: "",
    value: "",
  });

  const [formError, setFormError] = useState("")
  const [open, setOpen] = useState(false);
  const handleOpen = () => {setOpen(true)}
  const handleClose = () => {
    setOpen(false)
    setModalFormContent({
      name: "",
      value: "",
    })
  }

  const handleChange = (e) => {
    const name = e.target.name
    setModalFormContent({
      ...modalFormContent,
      [name]: e.target.value
    });
    console.log(modalFormContent)
  };

  const handleAddExpense = (e) => {
    e.preventDefault()
    setFormError("")
    validateAddExpense()
  }

  const validateAddExpense = () => {
    const { name, value } = modalFormContent;
    if (name.length == 0) {
      setFormError("Expense must have a name")
      return false
    }
    if (isNaN(value) || value.length == 0) {
      setFormError("Amount must be a number")
      return false
    }
    return true
  }

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
            Expenses
          </Typography>
          <Button variant="outlined" onClick={handleOpen}>
            {/** TODO - Add functionality to create expense here.*/}
            <AiOutlinePlus />
          </Button>
          {/*Pronounced "moe-dall" */}
          <Modal
            open={open}
            onClose={handleClose}
          >
            <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              borderTop: '4px solid',
              borderColor: 'primary.main',
              boxShadow: 24,
              p: 2
            }}>
              <Typography variant="h6">
                Add an Expense
              </Typography>
              {formError ? 
              <Typography
              sx={{
                padding: 1,
                backgroundColor: "#fc8d8d",
                border: "solid 1px #fa2525",
                color: "#fff",
                borderRadius: "3px",
              }}>
                {formError}
              </Typography> : null}
              <TextField
                placeholder="Name"
                onChange={handleChange}
                value={modalFormContent.name}
                label="Name"
                name="name"
                size="small"
                fullWidth
                sx={{marginY: 2}}
                />
                <Input
                placeholder="Amount"
                onChange={handleChange}
                value={modalFormContent.value}
                variant="outlined"
                label="Amount"
                name="value"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                fullWidth
                sx={{marginBottom: 2}}
                />
                <Button 
                  onClick={handleAddExpense}
                  variant='contained'

                >
                Add
                </Button>
            </Box>
          </Modal>
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
              {charges.map(({ companyName, chargeAmount }, index) => (
                <RecurringChargeItem
                  key={index}
                  companyName={companyName}
                  chargeAmount={chargeAmount}
                />
              ))}
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
  );
};

export default ExpenseContainer;
