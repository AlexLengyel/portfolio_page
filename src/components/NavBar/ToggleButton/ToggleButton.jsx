import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { themeActionCreators } from "../../../redux/action-creators/index";
import { MainContainer, Ball, LightModeIcon, DarkModeIcon } from "./styles";

const ToggleButton = () => {
  const themeState = useSelector((state) => state.themeReducer.theme);
  const dispatch = useDispatch();
  const { changeTheme } = bindActionCreators(themeActionCreators, dispatch);

  return (
    <MainContainer onClick={changeTheme}>
      <LightModeIcon />
      <DarkModeIcon />
      <Ball lightOrDark={themeState} />
    </MainContainer>
  );
};

export default ToggleButton;
