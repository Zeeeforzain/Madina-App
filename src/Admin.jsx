import React, { useState, useRef, useEffect } from "react";
import BoxComponent from "./Components/Box";
import Sidebar from "./Components/Sidebar";
import Head from "./Components/Head";
import TypographyComponent from "./Components/Typography";
import ButtonComponent from "./Components/Button";
import Searchbox from "./Components/Searchbox";
import Dropdown from "./Components/Dropdown";
import Table from "./Components/Table";
import Form from "./Components/Form"; // Assuming Form is your form component

export default function Admin() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const status = [
    { value: 1, label: "All" },
    { value: 2, label: "Active" },
    { value: 3, label: "Inactive" },
  ];

  // Handle opening the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const handleCloseModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  // Function to close the modal when clicking the "Cancel" button
  const handleCancelClick = () => {
    setIsModalOpen(false);
  };

  // Add event listener for clicks outside the modal
  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleCloseModal);
    } else {
      document.removeEventListener("mousedown", handleCloseModal);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, [isModalOpen]);

  return (
    <BoxComponent>
      <Head />
      <BoxComponent display="flex" justifyContent="space-between">
        <Sidebar />
        <BoxComponent width="82%" padding="20px">
          <BoxComponent
            display="flex"
            justifyContent="space-between"
            width="100%"
          >
            <TypographyComponent
              fontSize="30px"
              fontFamily="var(--main)"
              color="var(--dull)"
              fontWeight="400"
            >
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
          <BoxComponent
            display="flex"
            justifyContent="space-between"
            width="50%"
            margin="30px 0px"
          >
            <Searchbox />
            <BoxComponent marginLeft="10px">
              <Dropdown label="Status" menuItems={status} />
            </BoxComponent>
          </BoxComponent>
          <Table />
        </BoxComponent>
      </BoxComponent>

      {/* Modal with overlay */}
      {isModalOpen && (
        <>
          {/* Overlay */}
          <BoxComponent
            position="fixed"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bgcolor="rgba(0, 0, 0, 0.5)" /* Dimmed background */
            zIndex="1200"
            onClick={
              handleCancelClick
            } /* Close the modal when the overlay is clicked */
          />

          {/* Modal for the form */}
          <BoxComponent
            position="fixed"
            top="5%"
            left="30%"
            transform="translate(-50%, -50%)"
            bgcolor="white"
            boxShadow="0px 1px 2px rgba(0, 0, 0, 0.1)"
            width="40%"
            zIndex="1300"
            ref={modalRef}
            padding="0px"
          >
            <Form onCancel={handleCancelClick} />{" "}
            {/* Pass the handleCancelClick to Form */}
          </BoxComponent>
        </>
      )}
    </BoxComponent>
  );
}
