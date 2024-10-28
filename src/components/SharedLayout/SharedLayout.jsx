import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";

import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Logo from "../Logo/Logo";
import Loader from "../Loader/Loader";

import {
  StyledLink,
  HeaderContainer,
  Header,
  LogoWrapper,
  NavWrapper,
} from "./SharedLayout.styled";

export default function SharedLayout({ toggleTheme }) {
  return (
    <>
      <Header>
        <HeaderContainer>
          <LogoWrapper>
            <Link to="/">
              <Logo />
            </Link>
          </LogoWrapper>
          <NavWrapper>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/catalog">Catalog</StyledLink>
            <StyledLink to="/favorites">Favorites</StyledLink>
          </NavWrapper>
          <ThemeToggle toggleTheme={toggleTheme} />
        </HeaderContainer>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
