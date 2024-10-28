import styled from "styled-components";
import DefaultBtn from "../DefaultBtn/DefaultBtn";

export const Form = styled.form`
  width: 360px;

  .location-container {
    margin-bottom: 32px;
  }

  .location-label {
    color: ${({ theme }) => theme.textColorThird};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
  }
  .input-location-container {
    position: relative;
    margin-top: 8px;
  }

  .location-input {
    width: 100%;
    height: 56px;
    padding: 18px 0px 18px 44px;
    border: none;
    outline: none;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.inputBackground};
    text-align: left;

    font-size: 16px;
    font-weight: 400;
    line-height: 1, 25;
    cursor: pointer;

    &::placeholder {
      color: #6C717B;
    }

    &:focus::placeholder {
      color: #101828;
  }

}

  .input-location-container svg {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }
  .input-location-container .location-input:focus + svg {
    stroke: #101828;
  }

  .filters-container {
    display: flex;
    flex-direction: column;

    row-gap: 32px;
    margin-bottom: 64px;
  }

  .filters-title {
    color: ${({ theme }) => theme.textColorSecondary};
    margin-bottom: 14px;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
  }

  .filters-type-title {
    margin-bottom: 24px;
    color: ${({ theme }) => theme.textColorPrimary};
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.2;
  }

  .filter-btn{
  padding-left: 60px;
  padding-right: 60px;
  
  }
`;

export const VehicleFilters = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 10px;

  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.borderColorDefault};
  .filter-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 9px 0px;

    width: 113px;
    height: 95px;

    border-radius: 10px;
    border: none;
    outline: 1px solid ${({ theme }) => theme.borderColorDefault};
    transition: outline 0.3s ease;
  }

 
  .label-text {
    margin-top: 9px;
    color: ${({ theme }) => theme.textColorPrimary};

    text-align: center;

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25;
  }
`;

export const EquipmentFilterItem = styled.li`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 9px 0px;

    width: 113px;
    height: 95px;
    cursor: pointer;

    border-radius: 10px;
    border: none;
    outline: 1px solid ${({ theme }) => theme.borderColorDefault};
    transition: outline 0.3s ease;


  &:hover {
    outline: 1px solid ${({ theme }) => theme.buttonColor};
  }
  .filter-checkbox.hidden {
    position: absolute;
    opacity: 0;
  }

  &.active {
    outline: 1px solid ${({ theme }) => theme.buttonColor};
}
`

export const VanTypeFilterItem = styled.li`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 9px 0px;

    width: 113px;
    height: 95px;
    cursor: pointer;

    border-radius: 10px;
    border: none;
    outline: 1px solid ${({ theme }) => theme.borderColorDefault};
    transition: outline 0.3s ease;
 

  
&:hover {
    outline: 1px solid ${({ theme }) => theme.buttonColor};
  }
  .filter-radio-btn.hidden {
    position: absolute;
    opacity: 0;
  }

  &.active {
    outline: 1px solid ${({ theme }) => theme.buttonColor};
}
`

export const ButtonsWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const ResetBtn = styled(DefaultBtn)`
  border: 1px solid ${({ theme }) => theme.loadMoreBtnBorder};
  background-color: ${({ theme }) => theme.loadMoreBgColor};
  color: ${({ theme }) => theme.loadMoreBtnText};
  transition: background-color 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.loadMoreBtnBorderHover};
    background-color: ${({ theme }) => theme.loadMoreBgColor};
  }
`;