import styled from "styled-components";
import DefaultBtn from "@/components/DefaultBtn/DefaultBtn";

export const CatalogMainContent = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  max-width: 1440px;
  margin: 0 auto;
  gap: 64px;
  padding-top: 72px;
  min-height: calc(100vh - 72px);
`;
export const AsideContainer = styled.div`
  padding-left: 64px;
  padding-top: 48px;
`;

export const CatalogSection = styled.section`
  padding: 48px 0px 52px 0px;
  min-width: 888px;
  min-height: 752px;

  text-align: center;
`;

export const CatalogContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 64px;
  justify-content: center;
  align-items: center;

  max-width: 1440px;
  padding-right: 64px;
  margin: 0 auto;
`;

export const NoItemsFound = styled.h2`
  color: ${({ theme }) => theme.textColorFirst};
  font-size: 24px;
  font-weight: 500;
  margin-top: 100px;
`;

export const LoadMoreBtn = styled(DefaultBtn)`
  margin-top: 40px;
  border: 1px solid ${({ theme }) => theme.loadMoreBtnBorder};
  background-color: ${({ theme }) => theme.loadMoreBgColor};
  color: ${({ theme }) => theme.loadMoreBtnText};
  transition: border-color 0.3s ease, background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.loadMoreBtnBorderHover};
    background-color: ${({ theme }) => theme.loadMoreBgColor};
  }
`;
