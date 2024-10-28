import styled from "styled-components";
import DatePicker from "react-datepicker";
import { createGlobalStyle } from "styled-components";

export const StyledDatePicker = styled(DatePicker)`
  width: 527px;
  height: 60px;
  padding: 12px;

  border: none;
  border-radius: 12px;
  background: ${({ theme }) => theme.inputBackground};

  &::placeholder {
    color: ${({ theme }) => theme.textColorFourth};

    font-family: Inter, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
  }

  &:focus::placeholder {
    color: #101828;
  }

  &:focus {
    outline: none;
  }

  .react-datepicker__input-container input {
    width: 100%;
    height: 100%;
    padding: 18px;
    border: none;
    border-radius: 12px;
    background: ${({ theme }) => theme.inputBackground};

    &::placeholder {
      color: ${({ theme }) => theme.textColorFourth};
    }

    &:focus::placeholder {
      color: #101828;
    }

    &:focus {
      outline: none;
    }
  }
`;

export const DatePickerStyles = createGlobalStyle`

.react-datepicker{
 padding: 12px;
 background-color: ${({ theme }) => theme.calendarBgColor};
 color:${({ theme }) => theme.textColorPrimary};
 border: 1px solid ${({ theme }) => theme.calendarBorderColor};

 font-family: Inter , sans-serif;
 font-size: 14px;
 font-style: normal;
 font-weight: 400;
 line-height: 1.2;
}
.react-datepicker-popper .react-datepicker {
  font-family: Inter, sans-serif;
  color: ${({ theme }) => theme.calendarBgColor};
  border-color:${({ theme }) => theme.calendarBorderColor};
}

.react-datepicker-popper .react-datepicker__triangle {
  fill:  ${({ theme }) => theme.calendarBorderColor};
  stroke:  ${({ theme }) => theme.calendarTriangleStroke};
}

  .react-datepicker__month-container {
    background: ${({ theme }) => theme.calendarBgColor};
  }

  .react-datepicker__header {
    background-color: ${({ theme }) => theme.calendarBgColor};
    border-bottom: 1px solid ${({ theme }) => theme.calendarHeaderBorderColor};
   margin-bottom: 14px;
  }

  .react-datepicker__current-month{
    color:${({ theme }) => theme.textColorPrimary};
text-align: center;
font-family: Inter , sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height:1.2;
  }

  .react-datepicker__day-name, 
  .react-datepicker__time-name {
    color: ${({ theme }) => theme.textColorSecondary};
  }

  .react-datepicker__day {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    color: ${({ theme }) => theme.textColorPrimary};

font-family: Inter ;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.2;
  }

  .react-datepicker__day--disabled,
  .react-datepicker__day--outside-month{
    color: ${({ theme }) => theme.datepickerDayDisabled};
  }


  .react-datepicker__day--today,
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
  background-color: ${({ theme }) => theme.calendarBorderColor};
  color: ${({ theme }) => theme.calendarDateToday};
  border-radius: 50%;
  padding: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.calendarBorderColor};
    color: ${({ theme }) => theme.calendarDateToday};
  }
}

@media (hover: hover) {
  .react-datepicker__day:hover {
    background-color: ${({ theme }) => theme.calendarBorderColor} !important;
    color: ${({ theme }) => theme.calendarDateToday}!important;
    border-radius: 50%;
    padding: 4px;
  }
}


.react-datepicker__day--highlighted {
  background-color:  ${({ theme }) => theme.calendarSelectedDayBgColor};
  color:  ${({ theme }) => theme.calendarSelectedDayColor};
  border-radius: 50%;
  padding: 4px;
}

.react-datepicker__day--in-selecting-range,
.react-datepicker__day--in-range,
.react-datepicker__day--select-start,
.react-datepicker__day--select-end {
  background-color:  ${({ theme }) => theme.calendarSelectedDayBgColor};
  color:  ${({ theme }) => theme.calendarSelectedDayColor};
  border-radius: 50%;
  padding: 4px;
  &:hover {
    background-color: ${({ theme }) => theme.calendarBorderColor} !important;
    color: ${({ theme }) => theme.calendarDateToday}!important;
  }
}

.react-datepicker__day--select-start,
.react-datepicker__day--select-end {
  border-radius: 50%;
  padding: 4px;
  background-color:  ${({ theme }) => theme.calendarSelectedDayBgColor};
  color:  ${({ theme }) => theme.calendarSelectedDayColor};
  &:hover {
    background-color:  ${({ theme }) => theme.calendarSelectedDayBgColor};
    color:  ${({ theme }) => theme.calendarSelectedDayColor};
  }
}
`;
