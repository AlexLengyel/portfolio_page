import React, { useState } from "react";
import {
  MainContainer,
  Logo,
  Hamburger,
  MenuContainerBig,
  MenuItemBig,
  MenuContainerSmall,
  MenuItemSmall,
} from "./styles";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <>
      <MainContainer>
        <Logo>Alex's Page</Logo>
        <Hamburger onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <MenuContainerBig>
          <MenuItemBig>Home</MenuItemBig>
          <MenuItemBig>About Me</MenuItemBig>
          <MenuItemBig>Projects</MenuItemBig>
          <MenuItemBig>Contact</MenuItemBig>
        </MenuContainerBig>
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
