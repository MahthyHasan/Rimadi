import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./dashCom.css";
import { ReactComponent as CalendarIcon } from "../../../assets/DashBoard/calendar.svg";

function CustomDatePicker({ startDate, onChange, dateFormat }) {
  const [selectedDate, setSelectedDate] = useState(startDate);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (onChange) {
      onChange(date);
    }
  };

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <div className="date-picker-container" onClick={onClick} ref={ref}>
      <input
        type="text"
        value={value}
        onChange={() => {}}
        className="custom-input"
        readOnly
      />
      <CalendarIcon className="calendar-icon" />
    </div>
  ));

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        customInput={<CustomInput />}
        dateFormat={dateFormat}
        showPopperArrow={false}        
        minDate={new Date()}        
      />
    </div>
  );
}

export default CustomDatePicker;
