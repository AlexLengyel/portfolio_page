import styled from "styled-components";
import { defaultTheme } from "../../../styles/globalStyles";

export const MainContainer = styled.div`
  width: 100%;

  padding-left: ${defaultTheme.space.normal};
  padding-top: ${defaultTheme.space.small};
  padding-bottom: ${defaultTheme.space.small};

  display: flex;
  flex-direction: column;
  text-align: left;

  border-left: 1px solid red;
`;

export const Date = styled.p`
  margin-bottom: ${defaultTheme.space.small};

  &:before {
    content: "";

    width: 0.6rem;
    height: 0.6rem;

    border-radius: 50%;
    box-shadow: ${defaultTheme.boxShadow.thin};
    background-color: red;

    position: absolute;
    z-index: 1;
    transform: translate(-1.3rem, 0.3rem);
  }
`;

export const Name = styled.p`
  margin-bottom: ${defaultTheme.space.extraSmall};
`;

export const Location = styled.p`
  margin-bottom: ${defaultTheme.space.small};

  font-size: ${defaultTheme.fontSize.small};
`;

export const Description = styled.p`
  margin-bottom: ${({ noMarginBottom }) =>
    noMarginBottom ? "0rem" : defaultTheme.space.big};
`;
