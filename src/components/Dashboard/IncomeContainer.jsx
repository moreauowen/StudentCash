import { useState } from 'react';
import axios from 'axios';
import { Box, Button, Card, CardContent, Typography, Table, TableHead, TableRow, TableCell, TableBody,
  Modal,
  TextField,
  InputAdornment,
  Input } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";

const IncomeContainer = ({ income }) => {
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
  };

  const handleAddIncome = (e) => {
    e.preventDefault()
    setFormError("")
    validateAddIncome()

    const addIncomeData = {
      income_name: modalFormContent.name,
      income_value: modalFormContent.value,
    };

    axios({
      method: "POST",
      url: 'http://localhost:5001/api/incomes/create',
      withCredentials: true,
      data: addIncomeData
    })
      .then(res => {
        if (res.data) {
          window.location.reload(false);
        } else {
          alert('Error when creating income.')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const validateAddIncome = () => {
    const { name, value } = modalFormContent;
    if (name.length == 0) {
      setFormError("Income must have a name");
      return false;
    }
    if (isNaN(value) || value.length == 0) {
      setFormError("Amount must be a number");
      return false;
    }
    return true;
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
            Income
          </Typography>
          <Button variant="outlined" onClick={handleOpen} >
            <AiOutlinePlus />
          </Button>
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
                Add an Income
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
                  onClick={handleAddIncome}
                  variant='contained'

                >
                Add
                </Button>
            </Box>
          </Modal>
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
                {income.map(({ name, value }) => 
                    <TableRow>
                        <TableCell component="th">{name}</TableCell>
                        <TableCell align="right">$ {value}</TableCell>
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
            No recent income
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default IncomeContainer;
