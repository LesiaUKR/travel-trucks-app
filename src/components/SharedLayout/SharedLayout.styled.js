import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  padding: 24px 0;
  border-bottom: 1px solid ${({ theme }) => theme.categoryBadgeBackground};
  background: ${({ theme }) => theme.headerBgColor};
  > nav {
    display: flex;
    gap: 32px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0px 64px 0px 64px;
`;

export const LogoWrapper = styled.div`
 margin-right: 450px;

 svg {
      fill: ${({ theme }) => theme.iconLogoColorSecond};
    }
`;

export const NavWrapper = styled.nav`
  display: flex;
  gap: 32px;
`;

export const StyledLink = styled(NavLink)`

  font-size: 16px;
  color: ${(props) => props.theme.textColorPrimary};
  font-weight: 500;
  line-height: 1.5;
letter-spacing: -0.08px;
  &.active {
    color: ${(props) => props.theme.buttonHoverColor};
  }
`;
