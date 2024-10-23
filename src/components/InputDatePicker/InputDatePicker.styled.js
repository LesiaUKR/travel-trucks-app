import styled from "styled-components";
import DatePicker from "react-datepicker";

export const StyledDatePicker = styled(DatePicker)`
  width: 527px;
  height: 60px;
  padding: 18px;

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