import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
// import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';

export const TransactionsList = ({ transactions, ...rest }) => {
  const [selectedtransactionIds, setSelectedtransactionIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedtransactionIds;

    if (event.target.checked) {
      newSelectedtransactionIds = transactions.map((transaction) => transaction.id);
    } else {
      newSelectedtransactionIds = [];
    }

    setSelectedtransactionIds(newSelectedtransactionIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedtransactionIds.indexOf(id);
    let newSelectedtransactionIds = [];

    if (selectedIndex === -1) {
      newSelectedtransactionIds = newSelectedtransactionIds.concat(selectedtransactionIds, id);
    } else if (selectedIndex === 0) {
      newSelectedtransactionIds = newSelectedtransactionIds.concat(selectedtransactionIds.slice(1));
    } else if (selectedIndex === selectedtransactionIds.length - 1) {
      newSelectedtransactionIds = newSelectedtransactionIds.concat(selectedtransactionIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedtransactionIds = newSelectedtransactionIds.concat(
        selectedtransactionIds.slice(0, selectedIndex),
        selectedtransactionIds.slice(selectedIndex + 1)
      );
    }

    setSelectedtransactionIds(newSelectedtransactionIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedtransactionIds.length === transactions.length}
                    color="primary"
                    indeterminate={
                      selectedtransactionIds.length > 0
                      && selectedtransactionIds.length < transactions.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Date
                </TableCell>
                <TableCell>
                  Type
                </TableCell>
                <TableCell>
                  Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.slice(0, limit).map((transaction) => (
                <TableRow
                  hover
                  key={transaction.id}
                  selected={selectedtransactionIds.indexOf(transaction.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedtransactionIds.indexOf(transaction.id) !== -1}
                      onChange={(event) => handleSelectOne(event, transaction.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    {transaction.name}
                  </TableCell>
                  <TableCell>
                    {transaction.date}
                  </TableCell>
                  <TableCell>
                    {transaction.type}
                  </TableCell>
                  <TableCell>
                    ${transaction.amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={transactions.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

TransactionsList.propTypes = {
  transactions: PropTypes.array.isRequired
};