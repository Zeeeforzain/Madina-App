import React, { useState, useRef, useEffect } from "react"; 
import BoxComponent from "./Components/Box";
import Sidebar from "./Components/Sidebar";
import Head from "./Components/Head";
import TypographyComponent from "./Components/Typography";
import ButtonComponent from "./Components/Button";
import Table from "./Components/Table";
import Form from "./Components/Form";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import Find from "./Components/Find";

export default function Admin() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rows, setRows] = useState([
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

  const modalRef = useRef(null);
  const status = [
    { value: 1, label: "All" },
    { value: 2, label: "Active" },
    { value: 3, label: "Inactive" },
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  const handleCancelClick = () => {
    setIsModalOpen(false);
  };

  const handleStatusChange = (id) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id
          ? { ...row, Status: row.Status === 'Active' ? 'Inactive' : 'Active' }
          : row
      )
    );
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleCloseModal);
    } else {
      document.removeEventListener("mousedown", handleCloseModal);
    }

    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, [isModalOpen]);

  const headings = [
    { field: 'Name', headerName: 'Name' },
    { field: 'Role', headerName: 'Role' },
    { field: 'Email', headerName: 'Email' },
    { field: 'Phone', headerName: 'Phone No', type: 'number' },
    { field: 'Last_Login', headerName: 'Last Login' },
    {
      field: 'Status',
      headerName: 'Status',
      renderCell: (params) => (
        <span style={{ color: params.value === 'Active' ? 'green' : 'red' }}>
          {params.value}
        </span>
      ),
    },
  ];

  const icons = {
    edit: <ModeEditOutlineOutlinedIcon />,
    key: <VpnKeyOutlinedIcon />,
  };

  return (
    <BoxComponent>
      <Head />
      <BoxComponent display="flex" justifyContent="space-between">
        <Sidebar />
        <BoxComponent width="82%" padding="20px">
          <BoxComponent display="flex" justifyContent="space-between" width="100%">
            <TypographyComponent fontSize="30px" fontFamily="var(--main)" color="var(--dull)" fontWeight="400">
              Admin Access
            </TypographyComponent>
            <ButtonComponent
              variant="contained"
              backgroundColor="var(--primary)"
              sx={{ color: "var(--light)", padding: "10px" }}
              onClick={handleOpenModal}
            >
              + Add Sub-Admin
            </ButtonComponent>
          </BoxComponent>
          <Find placeholder="Search a user by name, e-mail or phone number" label='Status' status={status}/>
          <Table rows={rows} headings={headings} icons={icons} onStatusChange={handleStatusChange} />
        </BoxComponent>
      </BoxComponent>

      {isModalOpen && (
        <>
          <BoxComponent
            position="fixed"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bgcolor="rgba(0, 0, 0, 0.5)"
            zIndex="1200"
            onClick={handleCancelClick}
          />
          <BoxComponent
            position="fixed"
            width="40%"
            top="5%"
            left="30%"
            transform="translate(-50%, -50%)"
            bgcolor="var(--light)"
            borderRadius="8px"
            padding="20px"
            ref={modalRef}
            zIndex="1200"
          >
            <Form />
          </BoxComponent>
        </>
      )}
    </BoxComponent>
  );
}
