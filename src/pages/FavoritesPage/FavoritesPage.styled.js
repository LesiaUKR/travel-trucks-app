import styled from "styled-components";

export const MainFavoritesContent = styled.main`
  padding-top: 72px;
`

export const FavoritesSection = styled.section`
  min-height: 100vh;
  padding: 48px 0px;
`
export const FavoritesContainer = styled.div`
display: flex;
justify-content: center;   
  align-items: flex-start;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0px 64px 0px 64px;
`

export const NoFavoritesText = styled.p`
 color: ${({ theme }) => theme.textColorFirst};
  font-size: 24px;
  font-weight: 500;
  margin-top: 100px;
`