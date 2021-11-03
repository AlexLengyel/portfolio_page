import styled from "styled-components";
import { defaultTheme } from "../styles/globalStyles";

/*
    Props:
    padding - padding
    fD - flex-direction
    jC - justify-content
    aI - align-items
*/
export const MainGlassContainer = styled.div`
  min-height: 85vh;
  width: 90%;

  margin-top: 10vh;
  margin-bottom: 5vh;
  padding: ${({ padding }) => padding || "0"};

  display: flex;
  flex-direction: ${({ fD }) => fD || "row"};
  justify-content: ${({ jC }) => jC || "flex-start"};
  align-items: ${({ aI }) => aI || "flex-start"};

  background: ${({ theme }) => theme.glass.background};
  box-shadow: ${defaultTheme.boxShadow.glass};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 30px;
  border: ${({ theme }) => theme.glass.border};
`;

/*
    Props:
    margin - margin
    padding - padding
    fD - flex-direction
    jC - justify-content
    aI - align-items
    boxShadow - box-shadow
    blur - blur()
    borderRadius - border-radius
    border - border
*/
export const SubGlassContainer = styled.div`
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};

  display: flex;
  flex-direction: ${({ fD }) => fD || "row"};
  justify-content: ${({ jC }) => jC || "flex-start"};
  align-items: ${({ aI }) => aI || "flex-start"};

  box-shadow: ${({ boxShadow }) => boxShadow || defaultTheme.boxShadow.glass};
  backdrop-filter: blur(${({ blur }) => blur || "5px"});
  -webkit-backdrop-filter: blur(${({ blur }) => blur || "5px"});
  border-radius: ${({ borderRadius }) => borderRadius || "30px"};
  border: ${({ theme }) => theme.glass.border};
`;
