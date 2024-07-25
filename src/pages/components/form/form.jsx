import "../../../sass/form.scss";
import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { departments, states } from "../../../data/utilsData.jsx";
import {
  add_employeeInfo,
  remove_employeeInfo,
} from "../../../redux/employeeSlice/employeeInfoSlice.jsx";
import {
  add_adress,
  remove_adress,
} from "../../../redux/employeeSlice/adressSlice.jsx";
import {
  add_service,
  remove_service,
} from "../../../redux/employeeSlice/serviceSlice.jsx";
import { add_employee } from "../../../redux/databaseSlice/databaseSlice.jsx";
import store from "../../../redux/store.jsx";
import ReactSelect from "../reactSelect/reactSelect.jsx";
import DateTimePicker from "../dateTimePicker/dateTimePicker.jsx";

export default function Form({
  isModaleActive,
  setValidateForm,
  setNeedClose,
  needClose,
}) {
  const maxAge = 70;
  const minAge = 18;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [birthDate, setBirthDate] = useState(
    new Date(new Date().setFullYear(startDate.getFullYear() - 18))
  );
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  const minBirthDate = new Date(startDate);
  minBirthDate.setFullYear(startDate.getFullYear() - maxAge);

  const maxBirthDate = new Date(startDate);
  maxBirthDate.setFullYear(startDate.getFullYear() - minAge);

  const minStartDate = new Date(startDate);
  minStartDate.setFullYear(startDate.getFullYear() - 1);

  const maxStartDate = new Date(startDate);
  maxStartDate.setFullYear(startDate.getFullYear() + 1);

  const [selectedStateLocation, setSelectedStateLocation] = useState(states[0]);
  const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);

  const [validated, setValidated] = useState(false);
  const [firstNameErrorCls, setFirstNameErrorCls] = useState("hidden");
  const [lastNameErrorCls, setLastNameErrorCls] = useState("hidden");
  const [birthdateErrorCls, setBirthdateErrorCls] = useState("hidden");
  const [streetErrorCls, setStreetErrorCls] = useState("hidden");
  const [cityErrorCls, setCityErrorCls] = useState("hidden");
  const [zipCodeErrorCls, setZipCodeErrorCls] = useState("hidden");
  const [startDateErrorCls, setStartDateErrorCls] = useState("hidden");

  const dispatch = useDispatch();

  const resetForm = useCallback(() => {
    console.log("Resetting form");
    setFirstName("");
    setLastName("");
    setStreet("");
    setCity("");
    setZip("");
    setStartDate(new Date());
    setBirthDate(
      new Date(new Date().setFullYear(startDate.getFullYear() - 18))
    );

    setSelectedStateLocation(states[0]);
    setSelectedDepartment(departments[0]);

    setValidated(false);
    setValidateForm(false);
    setNeedClose(false);
    dispatch(remove_employeeInfo());
    dispatch(remove_adress());
    dispatch(remove_service());
  }, [dispatch, setValidateForm, setNeedClose, startDate]);

  useEffect(() => {
    if (needClose) {
      resetForm();
    }
  }, [needClose, resetForm]);

  function ConvertDate(date) {
    return date.toISOString();
  }

  function isValidAge() {
    const age =
      new Date(startDate).getFullYear() - new Date(birthDate).getFullYear();
    return age >= minAge && age <= maxAge;
  }

  function checkFields() {
    const streetRegex = /^[a-zA-Z0-9\s,'-]*$/;
    const textRegEx = /^[a-zA-Z'-]+$/;
    const zipCodeRegEx = /^[0-9]{5}$/;

    let isValid = true;

    console.log("Checking form fields");

    if (firstName.length < 2 || !textRegEx.test(firstName)) {
      setFirstNameErrorCls("");
      isValid = false;
    } else {
      setFirstNameErrorCls("hidden");
    }

    if (lastName.length < 2 || !textRegEx.test(lastName)) {
      setLastNameErrorCls("");
      isValid = false;
    } else {
      setLastNameErrorCls("hidden");
    }

    if (!isValidAge()) {
      setBirthdateErrorCls("");
      isValid = false;
    } else {
      setBirthdateErrorCls("hidden");
    }

    if (!streetRegex.test(street)) {
      setStreetErrorCls("");
      isValid = false;
    } else {
      setStreetErrorCls("hidden");
    }

    if (city.length < 3 || !textRegEx.test(city)) {
      setCityErrorCls("");
      isValid = false;
    } else {
      setCityErrorCls("hidden");
    }

    if (!zipCodeRegEx.test(zip)) {
      setZipCodeErrorCls("");
      isValid = false;
    } else {
      setZipCodeErrorCls("hidden");
    }

    if (startDate < minStartDate || startDate > maxStartDate) {
      setStartDateErrorCls("");
      isValid = false;
    } else {
      setStartDateErrorCls("hidden");
    }

    setValidated(isValid);
    return isValid;
  }

  const handleSubmit = (e) => {
    // Préparez les données à envoyer
    const employeeData = {
      id: 1,
      employeeInfo: {
        firstName: "mmm",
        lastName: "mmm",
        birthDate: "2006-06-29T10:21:28.000Z",
      },
      adress: {
        street: "mmm",
        city: "pppp",
        zip: "55555",
        state: { abbreviation: "AK" },
      },
      service: {
        startDate: "2024-07-03T10:21:28.000Z",
        department: "Marketing",
      },
    };

    // Validez les données
    console.log("Submitting employee data:", employeeData);

    e.preventDefault();
    console.log("Submit button clicked");

    if (!checkFields()) {
      console.log("Form validation failed");
      return;
    }

    console.log("Form validation succeeded");

    const employeeInfo = {
      firstName,
      lastName,
      birthDate: ConvertDate(birthDate),
    };
    const address = { street, city, zip, state: selectedStateLocation.value };
    const service = {
      startDate: ConvertDate(startDate),
      department: selectedDepartment.value,
    };

    console.log("Employee Info:", employeeInfo);
    console.log("Address:", address);
    console.log("Service:", service);

    dispatch(add_employeeInfo(employeeInfo));
    console.log("Dispatched add_employeeInfo");
    dispatch(add_adress(address));
    console.log("Dispatched add_adress");
    dispatch(add_service(service));
    console.log("Dispatched add_service");
    dispatch(
      add_employee({
        employeeInfo: store.getState().employee.employeeInfo,
        adress: store.getState().employee.adress,
        service: store.getState().employee.service,
      })
    );

    console.log("Dispatch actions completed");

    setValidateForm(true);
    setNeedClose(true);
  };

  return (
    <form onSubmit={handleSubmit} className="form__Container">
      <div className="form__Container__Infos">
        <h2>Onboarding</h2>
        {/* Group of inputs related to onboarding */}
        <div className="form__Container__Onboarding">
          {/* Form group for start date selection */}
          <div className="form__Container__Onboarding__Input">
            <label htmlFor="startDate">Start Date</label>
            <DateTimePicker
              label="Start Date"
              date={startDate}
              setDate={(date) => {
                setStartDate(date);
                console.log("Start Date: ", date);
              }}
              minDate={minStartDate}
              maxDate={maxStartDate}
            />
            {/* Error message for start date */}
            <p id="StartDateError" className={startDateErrorCls}>
              Start Date required!
            </p>
          </div>
          <div className="form__Container__Onboarding__Input">
            <label htmlFor="department">Department</label>
            {/* Custom select component for choosing department */}

            <ReactSelect
              id="selectDepartment"
              options={departments}
              selectedOption={selectedDepartment}
              setSelectedOption={(option) => {
                setSelectedDepartment(option);
                console.log("Department: ", option);
              }}
            />
          </div>
        </div>
      </div>
      <div className="form__Container__EmployeeInfos">
        <div className="form__Container__EmployeeInfos__Employee">
          <h2>Employee</h2>
          <div className="form__Container__EmployeeInfos__Employee__Article">
            <div className="form__Container__Onboarding__Input">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  console.log("First Name: ", e.target.value);
                }}
              />
              <span className={`error ${firstNameErrorCls}`}>
                Please enter a valid first name.
              </span>
            </div>
            <div className="form__Container__Onboarding__Input">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  console.log("Last Name: ", e.target.value);
                }}
              />
              <span className={`error ${lastNameErrorCls}`}>
                Please enter a valid last name.
              </span>
            </div>
            <div className="form__Container__Onboarding__Input">
              <label htmlFor="birthDate">Date of birth</label>
              <DateTimePicker
                label="Birth Date"
                date={birthDate}
                setDate={(date) => {
                  setBirthDate(date);
                  console.log("Birth Date: ", date);
                }}
                minDate={minBirthDate}
                maxDate={maxBirthDate}
              />
              <span className={`error ${birthdateErrorCls}`}>
                Please enter a valid birth date.
              </span>
            </div>
          </div>
        </div>
        <div className="form__Container__EmployeeInfos__Adress">
          <h2>Contact</h2>
          {/* Group of inputs related to contact information */}
          <div className="form__Container__EmployeeInfos__Adress__Article">
            {/* Form group for street input */}

            <div className="form__Container__Onboarding__Input">
              <label htmlFor="street">Street</label>
              <input
                type="text"
                id="street"
                value={street}
                onChange={(e) => {
                  setStreet(e.target.value);
                  console.log("Street: ", e.target.value);
                }}
              />
              <span className={`error ${streetErrorCls}`}>
                Please enter a valid street address.
              </span>
            </div>

            <div className="form__Container__Onboarding__Input">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                  console.log("City: ", e.target.value);
                }}
              />
              <span className={`error ${cityErrorCls}`}>
                Please enter a valid city.
              </span>
            </div>

            <div className="form__Container__Onboarding__Input">
              <label htmlFor="zip">ZIP Code</label>
              <input
                type="text"
                id="zip"
                value={zip}
                onChange={(e) => {
                  setZip(e.target.value);
                  console.log("ZIP Code: ", e.target.value);
                }}
              />
              <span className={`error ${zipCodeErrorCls}`}>
                Please enter a valid zip code.
              </span>
            </div>

            <div className="form__Container__Onboarding__Input">
              <label htmlFor="selectStates">State</label>
              {/* Custom select component for choosing state */}
              <ReactSelect
                id="selectState"
                options={states}
                selectedOption={selectedStateLocation}
                setSelectedOption={(option) => {
                  setSelectedStateLocation(option);
                  console.log("State: ", option);
                }}
              />
            </div>

            <span className={`error ${startDateErrorCls}`}>
              Please enter a valid start date.
            </span>
          </div>
        </div>
      </div>

      <div className="form__Container__Button">
        <button className="submit_button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
