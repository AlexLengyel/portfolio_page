import styled, { keyframes } from "styled-components";
import { SubGlassContainer } from "../../styles/glassContainer";
import { defaultTheme } from "../../styles/globalStyles";

export const MainContainer = styled(SubGlassContainer)`
  min-height: 7vh;
  width: 100vw;

  padding: 0 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;

  background: ${({ theme }) => theme.glass.background.main};
`;

export const Logo = styled.p``;

export const Hamburger = styled.div`
  height: 18px;
  width: 27px;

  display: none;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;

  span {
    width: 100%;
    height: 2px;

    border-radius: 20px;
    background-color: white;
  }

  @media (max-width: 768px) {
    display: flex;
  }

  @media (max-width: 600px) {
    height: 16px;
    width: 24px;
  }
`;

// If the screen is wider than 768px
export const MenuContainerBig = styled.div`
  width: 50%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: none;

    background: ${({ theme }) => theme.glass.background.main};
    box-shadow: ${defaultTheme.boxShadow.thin};
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }

  @media (min-width: 1400px) {
    width: 630px;
  }
`;

export const MenuItemBig = styled.p`
  cursor: pointer;
  text-align: center;
`;

// If the screen is more narrow than 768px
const moveMenu = keyframes`
    100% {
        transform: translateX(-40vw);
    }
`;

export const MenuContainerSmall = styled.div`
  width: 40vw;
  height: 60vh;

  display: none;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  position: fixed;
  z-index: 10;
  top: 20vh;
  left: ${({ open }) => (open ? "60vw" : "100vw")};

  border-radius: 30px 0px 0px 30px;

  background: ${({ theme }) => theme.glass.background.main};
  box-shadow: ${defaultTheme.boxShadow.thin};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: ${({ theme }) => theme.glass.border};

  transition: left 0.7s cubic-bezier(0.6, 0, 0.4, 1);

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MenuItemSmall = styled.p`
  cursor: pointer;
  text-align: center;
`;
