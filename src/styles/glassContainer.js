import styled from "styled-components";
import { defaultTheme } from "../styles/globalStyles";

/*
    Props:
    blur - blur()
*/
export const MainGlassContainer = styled.div`
  min-height: 85vh;
  width: 90%;

  margin-top: 11vh;
  margin-bottom: 4vh;
  padding: ${defaultTheme.space.big};

  background-color: ${({ theme }) => theme.glass.background.main};
  box-shadow: ${defaultTheme.boxShadow.thin};
  backdrop-filter: blur(${({ blur }) => blur || "10px"});
  -webkit-backdrop-filter: blur(${({ blur }) => blur || "10px"});
  border-radius: 30px;
  border: ${({ theme }) => theme.glass.border};

  scroll-margin-top: 11vh;
`;

/*
    Props:
    blur - blur()
    border - border
*/
export const SubGlassContainer = styled.div`
  box-shadow: ${defaultTheme.boxShadow.thin};
  backdrop-filter: blur(${({ blur }) => blur || "10px"});
  -webkit-backdrop-filter: blur(${({ blur }) => blur || "10px"});
  border: ${({ theme }) => theme.glass.border};
`;
