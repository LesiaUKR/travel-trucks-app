import styled from "styled-components";

export const ThemeWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
`;

export const ToggleSwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
`;

export const SwitchInput = styled.input`
  display: none;
`;

export const ToggleSwitchSpan = styled.span`
  position: absolute;
  cursor: pointer;
  background-color: #b6b6b6;
  border-radius: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;
  &::before {
    position: absolute;
    content: "";
    left: 2px;
    top: 2px;
    width: 21px;
    height: 21px;
    background-color: #333;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
`;
export const StyledSwitchInput = styled(SwitchInput)`
  &:checked + ${ToggleSwitchSpan} {
    background-color: #d84343;
  }

  &:checked + ${ToggleSwitchSpan}::before {
    transform: translateX(25px);
    background-color: #333;
  }
`;
