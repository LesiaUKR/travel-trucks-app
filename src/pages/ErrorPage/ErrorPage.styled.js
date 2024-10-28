import styled from "styled-components";
import DefaultBtn from "../../components/DefaultBtn/DefaultBtn";

export const ErrorPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 44px;
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 100px;
`;
export const ErrorTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: 1.25;
  color: ${({ theme }) => theme.textColorFirst};
`;

export const ErrorText = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 1.5;
  color: ${({ theme }) => theme.textColorSecondary};
`;

export const BackToCatalogBtn = styled(DefaultBtn)`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
`;
