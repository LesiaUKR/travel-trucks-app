import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { StyledDatePicker } from './InputDatePicker.styled';

export default function InputDatePicker({placeholder }) {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <StyledDatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      placeholderText={placeholder}
      dateFormat="dd-MM-yyyy"
    />
  );
}
