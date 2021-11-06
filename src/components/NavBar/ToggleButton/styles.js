import styled from "styled-components";
import { defaultTheme } from "../../../styles/globalStyles";
import { LightMode } from "@styled-icons/material/LightMode";
import { DarkMode } from "@styled-icons/material/DarkMode";

export const MainContainer = styled.div`
  padding: 3px 4px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: white;
  border-radius: 15px;
  cursor: pointer;

  box-shadow: inset 0px 0px 2px 1px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 4px 5px;
  }
`;

export const Ball = styled.div`
  height: 20px;
  width: 20px;

  position: absolute;
  z-index: 2;

  background-color: white;
  border-radius: 50%;
  box-shadow: ${defaultTheme.boxShadow.toggle};

  transform: ${({ lightOrDark }) =>
    lightOrDark === "dark" && "translateX(23px)"};
  transition: all 0.5s ease;

  @media (min-width: 768px) {
    height: 22px;
    width: 22px;

    transform: ${({ lightOrDark }) =>
      lightOrDark === "dark" && "translateX(25px)"};
  }

  @media (max-width: 600px) {
    height: 18px;
    width: 18px;

    transform: ${({ lightOrDark }) =>
      lightOrDark === "dark" && "translateX(21px)"};
  }
`;

export const LightModeIcon = styled(LightMode)`
  height: 20px;
  width: 20px;

  @media (min-width: 768px) {
    height: 22px;
    width: 22px;
  }

  @media (max-width: 600px) {
    height: 18px;
    width: 18px;
  }
`;

export const DarkModeIcon = styled(DarkMode)`
  height: 20px;
  width: 20px;

  margin-left: 3px;

  @media (min-width: 768px) {
    height: 22px;
    width: 22px;
  }

  @media (max-width: 600px) {
    height: 18px;
    width: 18px;
  }
`;
