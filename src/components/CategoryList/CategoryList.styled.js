import styled from "styled-components";

export const CategoryListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  .category-item {
    display: flex;
    padding: 12px 18px;
    align-items: center;
    gap: 8px;

    border-radius: 100px;
    background: ${({ theme }) => theme.categoryBadgeBackground};
  }
`;
