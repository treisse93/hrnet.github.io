import { React, useEffect, useState } from "react";
import "../../sass/createEmployeePage.scss";
import Form from "../components/form/form.jsx";
import { Modal } from "modal_hrnet_project";

/**
 * Component for creating a new user.
 *
 * @returns {JSX.Element} The CreateUserPage component.
 */
export default function CreateUserPage() {
  // State for tracking form validation status
  const [validateForm, setValidateForm] = useState(false);

  // State to control the visibility of the modal
  const [activeModale, setActiveModale] = useState(false);

  // State to track the need for closing the modal
  const [needClose, setNeedClose] = useState("");

  // Effect hook that activates the modal when the form is validated
  useEffect(() => {
    if (validateForm) {
      console.log("Form validated, setting modal active");
      setActiveModale(true);
    }
  }, [validateForm]);

  const handleModalClose = () => {
    console.log("Modal close button clicked");
    setActiveModale(false);
    setNeedClose(false); // Reset needClose after closing the modal
  };

  return (
    // JSX structure for the CreateUserPage component
    <>
      <main className="CreateEmployeesMain">
        {/* Page title */}
        <h1 className="CreateEmployeesMain__Title">Create Employees</h1>

        {/* Form component for creating new employees */}
        <Form
          isModaleActive={activeModale}
          setValidateForm={setValidateForm}
          setNeedClose={setNeedClose}
          needClose={needClose}
        />
      </main>
      <Modal
        onClose={handleModalClose}
        isActive={activeModale}
        isValidateForm={validateForm}
        setActiveModale={setActiveModale}
        modaleboxcolor="green"
        radius="20px"
        buttonMargin="25px"
        btnOnClick={setActiveModale}
        showButton={true}
        buttonTextContent="Close"
        buttonRadius="50px"
        bgAnimation="fade"
      >
        <div>Your form has been submitted successfully!</div>
        <button onClick={handleModalClose}>Close</button>
      </Modal>
    </>
  );
}
