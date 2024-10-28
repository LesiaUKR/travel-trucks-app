import { Link } from "react-router-dom";
import styled from "styled-components";

export const ReviewWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  .icon-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
  }
`;
export const ReviewLink = styled(Link)`
  color: ${({ theme }) => theme.textColorPrimary};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

export const ReviewText = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  border-bottom: 1px solid ${({ theme }) => theme.textColorPrimary};
`;
