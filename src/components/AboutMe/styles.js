import styled from "styled-components";
import { defaultTheme } from "../../styles/globalStyles";
import {
  MainGlassContainer,
  SubGlassContainer,
} from "../../styles/glassContainer";

export const MainContainer = styled(MainGlassContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainTitle = styled.div`
  margin-bottom: ${defaultTheme.space.big};

  font-size: ${defaultTheme.fontSize.mainTitle};
  font-weight: 700;
`;

export const ContentContainer = styled.div`
  width: 100%;

  display: flex;
`;

export const PhotoContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;

    text-align: center;
  }
`;

export const Description = styled.p`
  margin-bottom: ${defaultTheme.space.big};
`;

export const Title = styled.p`
  margin-bottom: ${defaultTheme.space.normal};

  font-size: ${defaultTheme.fontSize.subtitle};
  font-weight: 700;
`;

export const Subtitle = styled.p`
  margin-bottom: ${defaultTheme.space.extraSmall};

  font-weight: 700;
`;

export const TechnologiesContainer = styled.div`
  width: 100%;

  margin-bottom: ${({ bigMarginBottom }) =>
    bigMarginBottom ? defaultTheme.space.big : defaultTheme.space.normal};

  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const TechnologyGlass = styled(SubGlassContainer)`
  padding: 0.33rem;
  margin: ${defaultTheme.space.extraSmall};

  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 30px;
`;

export const TechnologyName = styled.p`
  font-size: ${defaultTheme.fontSize.small};
`;
