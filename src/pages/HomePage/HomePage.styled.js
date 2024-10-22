import { Link } from "react-router-dom";
import styled from "styled-components";
import heroVanWithSunset from "/images/hero-van-with-sunset.png";

export const HomeSection = styled.section`
  background-image: url(${heroVanWithSunset});
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 260px;
  padding-bottom: 260px;
`;

export const HeroContainer = styled.div`
max-width: 1440px;
padding: 0px 64px 0px 64px;
height: 100%;
margin: 0 auto;

display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`

export const HeroTitle = styled.h1`
margin-bottom: 16px;
color: ${(props) => props.theme.inputBackground};
font-size: 48px;
font-style: normal;
font-weight: 600;
line-height: 0.67;
`
export const HeroText = styled.p`
margin-bottom: 40px;
color: ${(props) => props.theme.inputBackground};

font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 1.33;

`
export const HeroLink = styled(Link)`
 padding: 16px 48.5px;

border: none;
border-radius: 200px;
background-color: ${({ theme }) => theme.buttonColor};

color: ${({ theme }) => theme.buttonTextColor};

font-family: "Inter", sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 1.5;
letter-spacing: -0.08px;
transition: background-color 0.3s ease;

&:hover{
background-color:${({ theme }) => theme.buttonHoverColor};
}
`


