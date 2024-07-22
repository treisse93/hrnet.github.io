import "react-datepicker/dist/react-datepicker.css";
import { forwardRef, useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import enUS from "date-fns/locale/en-US";
import "../../../sass/dateTimePicker.scss";

registerLocale("en-US", enUS); // Register the locale for the datepicker

/**
 * A component for selecting a date and time.
 *
 * @param {string} id - The ID of the DateTimePicker component.
 * @param {function} setDate - The function to set the selected date and time.
 * @param {Date} date - The selected date and time.
 * @param {Date} minDate - The minimum selectable date.
 * @param {Date} maxDate - The maximum selectable date.
 * @returns {JSX.Element} The DateTimePicker component.
 */
export default function DateTimePicker({
  id,
  setDate,  // Renamed from setElement to setDate
  date,  // Renamed from element to date
  minDate,
  maxDate,
}) {
  // State to keep track of the selected date.
  const [dateParams, setDateParams] = useState(date);
  const clsName = id === "startDate" ? "startDate" : "birthDate";

  // useEffect hook to update dateParams when the date prop changes.
  useEffect(() => {
    setDateParams(date);
  }, [date, id]);

  const CustomInput = forwardRef(({ value, id, onClick }, ref) => (
    <input
      id={id}
      className={clsName}
      onClick={onClick}
      ref={ref}
      value={value}
      placeholder="MM/DD/YYYY"
      readOnly
    />
  ));

  return (
    <DatePicker
      id={id}
      selected={dateParams}
      minDate={minDate || null} // Conditional rendering of calculated minDate.
      maxDate={maxDate || null} // Conditional rendering of calculated maxDate.
      showYearDropdown // Enable dropdown for year selection.
      scrollableYearDropdown // Enable scrolling within the year dropdown.
      onChange={(date) => {
        setDate(date);  // Corrected the handler for date changes.
        setDateParams(date);
      }}
      showIcon
      calendarIconClassname="CalendarIcon"
      wrapperClassName="wrapper"
      popperClassName="popper"
      showPopperArrow={false} // Hide the arrow for the calendar popup.
      dateFormat={"dd/MM/yyyy"} // Format for the date display.
      customInput={<CustomInput />} // Custom input component for the datepicker.
    />
  );
}
