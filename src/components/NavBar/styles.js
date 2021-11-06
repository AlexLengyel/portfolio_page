import styled from "styled-components";
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
  box-shadow: ${defaultTheme.boxShadow.thick};
`;

export const Logo = styled.p`
  width: 25%;

  @media (max-width: 768px) {
    width: auto;
  }
`;

export const ButtonContainer = styled.div`
  width: 25%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    width: 110px;
  }

  @media (max-width: 600px) {
    width: 90px;
  }
`;

export const Hamburger = styled.div`
  height: 22px;
  width: 29px;

  margin-left: auto;

  display: none;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;

  span {
    height: 2px;
    width: 100%;

    border-radius: 30x;
    background-color: white;
  }

  @media (max-width: 768px) {
    display: flex;
  }

  @media (max-width: 600px) {
    height: 20px;
    width: 27px;
  }
`;

// If the screen is wider than 768px
export const MenuContainerBig = styled.div`
  width: 50%;

  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
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
  box-shadow: ${defaultTheme.boxShadow.thick};
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
