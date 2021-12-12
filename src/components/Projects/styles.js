import styled from "styled-components";
import { defaultTheme } from "../../styles/globalStyles";
import { MainGlassContainer } from "../../styles/glassContainer";

export const MainContainer = styled(MainGlassContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainTitle = styled.div`
  margin-bottom: ${defaultTheme.space.big};

  font-size: ${defaultTheme.fontSize.mainTitle};
  font-weight: 700;
  text-align: center;
`;

export const ComingSoonText = styled.div`
  font-size: ${defaultTheme.fontSize.mainTitle};
  font-weight: 700;
  text-align: center;
`;
