import styled from "styled-components";

export const VehicleDetailsWrapper = styled.div`
  width: 527px;
`;
export const VehicleDetailsTitle = styled.h3`
  padding-bottom: 24px;
  margin-bottom: 24px;
  color: ${(props) => props.theme.textColorPrimary};

  border-bottom: 1px solid ${(props) => props.theme.bookFormBorder};
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2;
`;
export const VehicleDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const VehicleDetailsItem = styled.li`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.textColorPrimary};

  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;
