import styled from 'styled-components';

export const FeaturesWrapper = styled.div`
display: flex;
width: 631px;
height: 588px;
padding: 44px 52px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 100px;

border-radius: 10px;
background: ${(props) => props.theme.camperFeaturesWrapperColor};
`