import "react-datepicker/dist/react-datepicker.css";
import { StyledDatePicker } from "./InputDatePicker.styled";

export default function InputDatePicker({
  placeholder,
  startDate,
  endDate,
  onChange,
}) {
  return (
    <StyledDatePicker
      selectsRange
      startDate={startDate}
      endDate={endDate}
      onChange={onChange}
      placeholderText={placeholder}
      dateFormat="dd-MM-yyyy"
      minDate={new Date()}
    />
  );
}
