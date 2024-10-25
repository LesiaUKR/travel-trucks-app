import styled from 'styled-components';   


export const DetailsSection = styled.section`

`

export const DetailsContainer = styled.div`
max-width: 1440px;
padding: 0px 64px 0px 64px;
margin: 0 auto;
`
export const DetailsWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
gap: 40px;

`
export const DetailsTabsList = styled.ul`
display: flex;
flex-wrap: nowrap;
flex-direction: row;
gap: 40px;

margin-bottom: 44px;
border-bottom: 1px solid ${(props) => props.theme.bookFormBorder};
`

export const DetailsTabsBtn = styled.button`
 position: relative;
 color: ${(props) => props.theme.textColorPrimary};
padding: 0;
padding-bottom: 24px;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 1.2;
border: none;
background: none;

&.active::after{
  content: '';
  position: absolute;
    bottom: -2px;
    left: 0;
  width: 100%;
  height: 5px;
  background: #E44848;
}
`