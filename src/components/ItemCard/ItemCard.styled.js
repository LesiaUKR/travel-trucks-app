import styled from "styled-components";

export const ItemCardContainer = styled.li`
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding: 24px;
  width: 888px;

  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.borderColorDefault};

  .card-img-box {
    position: relative;
    width: 292px;
    height: 320px;

    border-radius: 10px;
    background-color: lightgray;
    overflow: hidden;
  }

  .card-img-box > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 526px;

  .show-more-btn {
    width: 166px;
  }
`;

export const CardTitleBox = styled.div`
  display: flex;
  justify-content: space-between;

  .card-title {
    color: ${({ theme }) => theme.textColorPrimary};
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.25;
  }

  .card-price-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .card-price {
    color: ${({ theme }) => theme.textColorPrimary};
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.25;
  }

  .reset-btn {
    width: 24px;
    height: 24px;

    svg {
      stroke: ${({ theme }) => theme.iconColorFirst};
    }
  }
`;

export const CardReviewLocationBox = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  margin-top: -16px;

  .review-box,
  .location-box {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .icon-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
  }

  .review-btn {
    color: ${({ theme }) => theme.textColorPrimary};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;

    span {
      border-bottom: 1px solid ${({ theme }) => theme.textColorPrimary};
    }
  }
`;

export const CardDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;

  color: ${({ theme }) => theme.textColorSecondary};

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const CardText = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;


