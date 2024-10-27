import "react-datepicker/dist/react-datepicker.css";
import { StyledDatePicker } from './InputDatePicker.styled';

export default function InputDatePicker({placeholder, selectedDate, onChange  }) {


  return (
    <StyledDatePicker
      selected={selectedDate}
      onChange={onChange}
      placeholderText={placeholder}
      dateFormat="dd-MM-yyyy"
    />
  );
}
