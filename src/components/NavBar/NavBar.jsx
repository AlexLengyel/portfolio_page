import React, { useState } from "react";
import {
  MainContainer,
  Logo,
  ButtonContainer,
  Hamburger,
  MenuContainerBig,
  MenuItemBig,
  MenuContainerSmall,
  MenuItemSmall,
} from "./styles";
import ToggleButton from "./ToggleButton/ToggleButton";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MainContainer>
        <Logo>Alex's Page</Logo>
        <MenuContainerBig>
          <MenuItemBig>Home</MenuItemBig>
          <MenuItemBig>About Me</MenuItemBig>
          <MenuItemBig>Projects</MenuItemBig>
          <MenuItemBig>Contact</MenuItemBig>
        </MenuContainerBig>
        <ButtonContainer>
          <ToggleButton />
          <Hamburger onClick={() => setOpen(!open)}>
            <span />
            <span />
            <span />
          </Hamburger>
        </ButtonContainer>
      </MainContainer>
      <MenuContainerSmall open={open}>
        <MenuItemSmall>Home</MenuItemSmall>
        <MenuItemSmall>About Me</MenuItemSmall>
        <MenuItemSmall>Projects</MenuItemSmall>
        <MenuItemSmall>Contact</MenuItemSmall>
      </MenuContainerSmall>
    </>
  );
};

export default NavBar;
