import Select from "react-select";
import { useEffect, useState } from "react";

/**
 * ReactSelect - A customizable select input component.
 *
 * @param {Object} props - Component props.
 * @param {string} props.id - The ID of the select input for conditional styling.
 * @param {Array} props.options - Array of options for the select input.
 * @param {Object} props.selectedOption - The currently selected value.
 * @param {Function} props.setSelectedOption - Function to update the selected value.
 * @returns {JSX.Element} The rendered Select component.
 */
export default function ReactSelect({
  id,
  options,
  selectedOption,
  setSelectedOption,
}) {
  const [selected, setSelected] = useState(selectedOption);

  useEffect(() => {
    setSelected(selectedOption);
  }, [selectedOption]);

  const customWidth = id === "selectState" ? "200px" : "100%";

  return (
    <Select
      menuPlacement="auto"
      styles={{
        container: (provided) => ({
          ...provided,
          border: "none",
          color: "#000",
          backgroundColor: "#fff",
          borderRadius: "5px",
          fontSize: "1vw",
          padding: "0 15px",
          width: customWidth,
          height: "2vw",
          marginTop: "0.2vw",
        }),
        control: (provided) => ({
          ...provided,
          border: "none",
          boxShadow: "none",
          borderRadius: "5px",
          minHeight: "2vw",
          height: "2vw",
          width: "100%",
          margin: 0,
          "&:hover": { border: "none" },
        }),
        indicatorsContainer: (provided) => ({
          ...provided,
          color: "#000",
        }),
        indicatorSeparator: (provided) => ({
          ...provided,
          display: "none",
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          color: "#fff",
          backgroundSize: "cover",
          backgroundPosition: "end",
          backgroundRepeat: "no-repeat",
        }),
        valueContainer: (provided) => ({
          ...provided,
          padding: "0",
          fontSize: "1vw",
        }),
        singleValue: (provided) => ({
          ...provided,
          "grid-area": "3/3/1/3",
        }),
        input: (provided) => ({
          ...provided,
          height: "100%",
        }),
        inputContainer: (provided) => ({
          ...provided,
          margin: "0",
        }),
        menu: (provided) => ({
          ...provided,
          borderRadius: "5px",
          fontSize: "1vw",
          zIndex: 100,
        }),
      }}
      value={selected}
      onChange={setSelectedOption}
      placeholder={options[0]?.label || "Select..."}
      name={id}
      inputId={id}
      options={options}
    />
  );
}
