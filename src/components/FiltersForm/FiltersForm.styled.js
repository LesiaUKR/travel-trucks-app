import styled from "styled-components";

export const Form = styled.form`
  width: 360px;

  .locationContainer {
    margin-bottom: 32px;
  }

  .locationLabel {
    color: ${({ theme }) => theme.textColorThird};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
  }
  .inputLocationContainer {
    position: relative;
    margin-top: 8px;
  }

  .locationInput {
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

    &::placeholder {
      color: #6C717B;
    }

    &:focus::placeholder {
      color: #101828;
  }

}

  .inputLocationContainer svg {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }
  .inputLocationContainer .locationInput:focus + svg {
    stroke: #101828;
  }

  .filtersContainer {
    display: flex;
    flex-direction: column;

    row-gap: 32px;
    margin-bottom: 64px;
  }

  .filtersTitle {
    color: ${({ theme }) => theme.textColorSecondary};
    margin-bottom: 14px;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
  }

  .filtersTypeTitle {
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
  .filterWrap {
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

  .filterWrap:hover {
    outline: 1px solid ${({ theme }) => theme.buttonColor};
  }
  .filterCheckbox.hidden {
    display: none;
  }

  .labelText {
    margin-top: 9px;
    color: ${({ theme }) => theme.textColorPrimary};

    text-align: center;

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25;
  }
`;
