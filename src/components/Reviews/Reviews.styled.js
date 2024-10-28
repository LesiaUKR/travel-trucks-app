import styled from "styled-components";
export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 44px;
  max-width: 631px;
  margin-top: 12px;
`;

export const ReviewsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ReviewsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Avatar = styled.p`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;

  color: ${(props) => props.theme.buttonColor};
  font-size: var(--font-medium);
  line-height: 1.33;
  border-radius: 50%;
  background-color: ${(props) => props.theme.categoryBadgeBackground};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Name = styled.p`
  font-weight: 500;
  line-height: 1.5;
`;

export const Rating = styled.div`
  display: flex;
  gap: 4px;
`;

export const Comment = styled.p`
  font-size: 16px;
  line-height: 1.5;
  font-style: normal;
  font-weight: 400;
  color: ${(props) => props.theme.textColorSecondary};
`;

export const NoReviews = styled.p`
  text-align: center;
  padding: 20px;

  color: ${(props) => props.theme.textColorPrimary};

  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2;
`;

export const StarWrapper = styled.div`
  position: relative;
  display: inline-block;

  svg {
    fill: #f2f4f7;
  }
`;
