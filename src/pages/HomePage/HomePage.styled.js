import { Link } from "react-router-dom";
import styled from "styled-components";
import heroVanWithSunset from "/images/hero-van-with-sunset.png";

export const HomeMainContent = styled.main`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-top: 72px;
  min-height: calc(100vh - 72px);
  background-color: ${(props) => props.theme.headerBgColor};
  background-image: url(${heroVanWithSunset});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const HeroContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0px 64px 0px 64px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const HeroTitle = styled.h1`
  margin-bottom: 16px;
  color: ${(props) => props.theme.inputBackground};
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 0.67;
`;
export const HeroText = styled.p`
  margin-bottom: 40px;
  color: ${(props) => props.theme.inputBackground};

  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.33;
`;
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

  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverColor};
  }
`;
