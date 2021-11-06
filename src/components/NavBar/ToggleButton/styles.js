import styled from "styled-components";
import { LightMode } from "@styled-icons/material/LightMode";
import { DarkMode } from "@styled-icons/material/DarkMode";

export const MainContainer = styled.div`
  padding: 4px 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: white;
  border-radius: 15px;
  cursor: pointer;

  box-shadow: inset 0px 0px 2px 1px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 3px 4px;
  }
`;

export const Ball = styled.div`
  height: 22px;
  width: 22px;

  position: absolute;
  z-index: 2;

  background-color: white;
  border-radius: 50%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  transform: ${({ lightOrDark }) =>
    lightOrDark === "dark" && "translateX(25px)"};
  transition: all 0.5s ease;

  @media (max-width: 768px) {
    height: 20px;
    width: 20px;

    transform: ${({ lightOrDark }) =>
      lightOrDark === "dark" && "translateX(23px)"};
  }

  @media (max-width: 600px) {
    height: 18px;
    width: 18px;

    transform: ${({ lightOrDark }) =>
      lightOrDark === "dark" && "translateX(21px)"};
  }
`;

export const LightModeIcon = styled(LightMode)`
  height: 22px;
  width: 22px;

  @media (max-width: 768px) {
    height: 20px;
    width: 20px;
  }

  @media (max-width: 600px) {
    height: 18px;
    width: 18px;
  }
`;

export const DarkModeIcon = styled(DarkMode)`
  height: 22px;
  width: 22px;

  margin-left: 3px;

  @media (max-width: 768px) {
    height: 20px;
    width: 20px;
  }

  @media (max-width: 600px) {
    height: 18px;
    width: 18px;
  }
`;
