import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

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
  { field: 'Status', headerName: 'Status', width: 150 },
  { field: '', headerName: '', width: 50 },
  { field: '', headerName: '', width: 50 },
  { field: 'Actions', headerName: 'Actions', width: 150 },
];

const rows = [
  {id:1, Name: 'Snow',Role:'Admin', Email: 'Jon@gmail.com', Phone: '0300000000',Last_Login:'Monday', Status:'Active', Actions:'None' },
  {id:2, Name: 'Snow',Role:'Admin', Email: 'Jon@gmail.com', Phone: '0300000000',Last_Login:'Monday', Status:'Active', Actions:'None' },
  {id:3, Name: 'Snow',Role:'Admin', Email: 'Jon@gmail.com', Phone: '0300000000',Last_Login:'Monday', Status:'Active', Actions:'None' },
  {id:4, Name: 'Snow',Role:'Admin', Email: 'Jon@gmail.com', Phone: '0300000000',Last_Login:'Monday', Status:'Active', Actions:'None' },
  {id:5, Name: 'Snow',Role:'Admin', Email: 'Jon@gmail.com', Phone: '0300000000',Last_Login:'Monday', Status:'Active', Actions:'None' },
  {id:6, Name: 'Snow',Role:'Admin', Email: 'Jon@gmail.com', Phone: '0300000000',Last_Login:'Monday', Status:'Active', Actions:'None' },

];

const paginationModel = { page: 0, pageSize: 5 };

export default function Table() {
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
