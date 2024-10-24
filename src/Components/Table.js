import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import Switch from '@mui/material/Switch';

export default function Table() {
  const [rows, setRows] = React.useState([
    { id: 1, Name: 'Snow', Role: 'Admin', Email: 'Jon@gmail.com', Phone: '0300000000', Last_Login: 'Monday', Status: 'Active' },
    { id: 2, Name: 'Lannister', Role: 'User', Email: 'Cersei@gmail.com', Phone: '0300000001', Last_Login: 'Tuesday', Status: 'Inactive' },
    { id: 3, Name: 'Stark', Role: 'User', Email: 'Arya@gmail.com', Phone: '0300000002', Last_Login: 'Wednesday', Status: 'Active' },
    { id: 4, Name: 'Targaryen', Role: 'Admin', Email: 'Daenerys@gmail.com', Phone: '0300000003', Last_Login: 'Thursday', Status: 'Inactive' },
    { id: 5, Name: 'Melisandre', Role: 'User', Email: 'Mel@gmail.com', Phone: '0300000004', Last_Login: 'Friday', Status: 'Active' },
    { id: 6, Name: 'Clifford', Role: 'User', Email: 'Cliff@gmail.com', Phone: '0300000005', Last_Login: 'Saturday', Status: 'Inactive' },
    { id: 7, Name: 'Clifford', Role: 'User', Email: 'Cliff@gmail.com', Phone: '0300000005', Last_Login: 'Saturday', Status: 'Inactive' },
    { id: 8, Name: 'Clifford', Role: 'User', Email: 'Cliff@gmail.com', Phone: '0300000005', Last_Login: 'Saturday', Status: 'Inactive' },
    { id: 9, Name: 'Clifford', Role: 'User', Email: 'Cliff@gmail.com', Phone: '0300000005', Last_Login: 'Saturday', Status: 'Inactive' },
    { id: 10, Name: 'Clifford', Role: 'User', Email: 'Cliff@gmail.com', Phone: '0300000005', Last_Login: 'Saturday', Status: 'Inactive' },
  ]);

  const handleStatusChange = (id) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id
          ? { ...row, Status: row.Status === 'Active' ? 'Inactive' : 'Active' }
          : row
      )
    );
  };

  const columns = [
    { field: 'Name', headerName: 'Name', width: 150 },
    { field: 'Role', headerName: 'Role', width: 150 },
    { field: 'Email', headerName: 'Email', width: 150 },
    {
      field: 'Phone',
      headerName: 'Phone No',
      type: 'number',
      width: 150,
    },
    {
      field: 'Last_Login',
      headerName: 'Last Login',
      width: 150,
    },
    {
      field: 'Status',
      headerName: 'Status',
      width: 150,
      renderCell: (params) => (
        <span style={{ color: params.value === 'Active' ? 'green' : 'red' }}>
          {params.value}
        </span>
      ),
    },
    {
      field: 'Edit',
      headerName: '',
      width: 50,
      renderCell: () => (
        <IconButton aria-label="edit" sx={{ color: 'var(--primary)' }}>
          <ModeEditOutlineOutlinedIcon />
        </IconButton>
      ),
    },
    {
      field: 'Key',
      headerName: '',
      width: 50,
      renderCell: () => (
        <IconButton aria-label="key" sx={{ color: 'var(--primary)' }}>
          <VpnKeyOutlinedIcon />
        </IconButton>
      ),
    },
    {
      field: 'Actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <Switch
          checked={params.row.Status === 'Active'}
          onChange={() => handleStatusChange(params.row.id)}
        />
      ),
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{
          border: 0,
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 'bold',
          },
        }}
      />
    </Paper>
  );
}
