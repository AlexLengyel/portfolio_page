import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { scrollViewActionCreators } from "../../redux/action-creators";
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
  const scrollViewState = useSelector(
    (state) => state.scrollViewReducer.scrollView
  );
  const dispatch = useDispatch();
  const { changeScrollView } = bindActionCreators(
    scrollViewActionCreators,
    dispatch
  );

  const [open, setOpen] = useState(false);

  const toggleChangeScrollViewHandler = (num) => {
    return scrollViewState !== num ? num : scrollViewState === num && num * 10;
  };

  const handleScrollView = (scrollViewNumber) => {
    setOpen(false);
    changeScrollView(toggleChangeScrollViewHandler(scrollViewNumber));
  };

  return (
    <>
      <MainContainer>
        <Logo>Alex's Page</Logo>
        <MenuContainerBig>
          <MenuItemBig onClick={() => handleScrollView(1)}>Home</MenuItemBig>
          <MenuItemBig onClick={() => handleScrollView(2)}>
            About Me
          </MenuItemBig>
          <MenuItemBig onClick={() => handleScrollView(3)}>
            Projects
          </MenuItemBig>
          <MenuItemBig onClick={() => handleScrollView(4)}>Contact</MenuItemBig>
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
        <MenuItemSmall onClick={() => handleScrollView(1)}>Home</MenuItemSmall>
        <MenuItemSmall onClick={() => handleScrollView(2)}>
          About Me
        </MenuItemSmall>
        <MenuItemSmall onClick={() => handleScrollView(3)}>
          Projects
        </MenuItemSmall>
        <MenuItemSmall onClick={() => handleScrollView(4)}>
          Contact
        </MenuItemSmall>
      </MenuContainerSmall>
    </>
  );
};

export default NavBar;
