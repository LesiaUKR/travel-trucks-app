import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { StyledLink, HeaderContainer, Header, LogoWrapper, NavWrapper } from "./SharedLayout.styled";


import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Logo from "../Logo/Logo";
import Loader from "../Loader/Loader";

const SharedLayout = ({ toggleTheme }) => {

  return (
    <>
      <Header>
        <HeaderContainer>
     <LogoWrapper>
      <Logo />
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
};

export default SharedLayout;
