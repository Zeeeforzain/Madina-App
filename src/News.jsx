import React, { useState } from 'react'; 
import BoxComponent from './Components/Box';
import Sidebar from './Components/Sidebar';
import Head from './Components/Head';
import TypographyComponent from './Components/Typography';
import ButtonComponent from './Components/Button';
import { useNavigate } from 'react-router-dom'; 
import Table from './Components/Table';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import Find from './Components/Find';

export default function News() {
  const navigate = useNavigate(); 

  const handleAddNews = () => {
    navigate('/newsform', { state: { title: 'Add News' } }); 
  };

  const handleEditNews = () => {
    navigate('/newsform', { state: { title: 'Edit News' } }); 
  };
  const status = [
    { value: 1, label: "All" },
    { value: 2, label: "Published" },
    { value: 3, label: "Removed" },
  ];

  // Using state to manage rows
  const [rows, setRows] = useState([
    {
      id: 1,
      coverImage: 'Images/bg.png',
      heading: 'Breaking News',
      category: 'World',
      creator: '',
      Status: 'Published',
    },
    {
      id: 2,
      coverImage: 'Images/logo.png',
      heading: 'Tech Update',
      category: 'Technology',
      creator: '',
      Status: 'Removed',
    },
    {
      id: 3,
      coverImage: 'Images/newspaper.png',
      heading: 'Health News',
      category: 'Health',
      creator: '',
      Status: 'Published',
    },
    {
      id: 4,
      coverImage: 'Images/newspaper.png',
      heading: 'Health News',
      category: 'Health',
      creator: '',
      Status: 'Published',
    },
    {
      id: 5,
      coverImage: 'Images/newspaper.png',
      heading: 'Health News',
      category: 'Health',
      creator: '',
      Status: 'Published',
    },
    {
      id: 6,
      coverImage: 'Images/newspaper.png',
      heading: 'Health News',
      category: 'Health',
      creator: '',
      Status: 'Published',
    },
    {
      id: 7,
      coverImage: 'Images/newspaper.png',
      heading: 'Health News',
      category: 'Health',
      creator: '',
      Status: 'Published',
    },
  ]);

  const headings = [
    { field: 'id', headerName: 'News ID', width: 100 },
    {
      field: 'coverImage',
      headerName: 'Cover Image',
      width: 150,
      renderCell: (params) => (
        <img src={params.row.coverImage} alt="Cover" style={{ width: '80px', height: '40px'}} />
      ),
    },
    { field: 'heading', headerName: 'Heading', width: 200 },
    { field: 'category', headerName: 'Category', width: 150 },
    { field: 'creator', headerName: 'Creator', width: 150, renderCell: () => <span></span> },
    {
      field: 'Status',
      headerName: 'Status',
      renderCell: (params) => (
        <span style={{ color: params.value === 'Published' ? 'green' : 'red' }}>
          {params.value}
        </span>
      ),
    },
  ];

  const icons = {
    edit: <ModeEditOutlineOutlinedIcon onClick={handleEditNews}/>,
  };

  const handleStatusChange = (id) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id
          ? { ...row, Status: row.Status === 'Published' ? 'Removed' : 'Published' }
          : row
      )
    );
  };

  return (
    <BoxComponent>
      <Head />
      <BoxComponent display="flex" justifyContent="space-between">
        <Sidebar />
        <BoxComponent display='flex' flexDirection='column' width="82%" padding="20px">
          <BoxComponent display="flex" justifyContent="space-between" width="100%">
            <TypographyComponent
              fontSize="30px"
              fontFamily="var(--main)"
              color="var(--dull)"
              fontWeight="400"
            >
              News Management
            </TypographyComponent>
            <ButtonComponent
              variant="contained"
              backgroundColor="var(--primary)"
              sx={{ color: "var(--light)", padding: "10px 20px" }}
              onClick={handleAddNews}
              title='Add News'
            >
              + Add News
            </ButtonComponent>
          </BoxComponent>
          <Find placeholder="Search a news by ID" label='Status' status={status}/>
          <Table 
            rows={rows} 
            headings={headings} 
            icons={icons} 
            onStatusChange={handleStatusChange} 
          />
        </BoxComponent>
      </BoxComponent>
    </BoxComponent>
  );
}
