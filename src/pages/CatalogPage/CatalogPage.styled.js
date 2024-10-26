import styled from "styled-components";

export const CatalogMainContent = styled.main`
display: flex;
flex-direction: row;
justify-content: center;   
  align-items: flex-start;
  max-width: 1440px;
  margin: 0 auto;
  gap: 64px;
  padding-top: 72px;
  min-height: calc(100vh - 72px);
`
export const AsideContainer = styled.div`
  padding-left: 64px;
  padding-top: 48px;
`

export const CatalogSection = styled.section`
  padding: 48px 0px 52px 0px;
`;

export const CatalogContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 64px;
  justify-content: center;

  max-width: 1440px;
  padding-right: 64px;
  margin: 0 auto;
`;
