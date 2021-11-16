import styled from "styled-components";
import { defaultTheme } from "../../styles/globalStyles";
import { MainGlassContainer } from "../../styles/glassContainer";

export const MainContainer = styled(MainGlassContainer)`
  padding: 3.5rem;

  display: flex;

  @media (max-width: 768px) {
    flex-direction: column-reverse;

    padding: ${defaultTheme.space.big};
  }
`;

export const TextAndButtonContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;

    text-align: center;
  }
`;

export const Text = styled.p`
  font-size: ${defaultTheme.fontSize.paragraph};
`;

export const Name = styled.p`
  font-size: ${defaultTheme.fontSize.mainTitle};
  font-weight: 700;
`;

export const PhotoContainer = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
  align-items: center;
`;
