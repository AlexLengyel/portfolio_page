import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  color: { primary: "black", secondary: null },
  background: {
    body: [
      "#56ccf2",
      "-webkit-linear-gradient(to right, #56ccf2, #2f80ed)",
      "linear-gradient(to right, #56ccf2, #2f80ed)",
    ],
  },
  glass: {
    background: "rgba(255, 255, 255, 0.25)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
  },
};

export const darkTheme = {
  color: { primary: "white", secondary: null },
  background: {
    body: [
      "#56ccf2",
      "-webkit-linear-gradient(to right, #56ccf2, #2f80ed)",
      "linear-gradient(to right, #56ccf2, #2f80ed)",
    ],
  },
  glass: {
    background: "rgba(0, 0, 0, 0.25)",
    border: "1px solid rgba(0, 0, 0, 0.18)",
  },
};

export const defaultTheme = {
  fontSize: {
    mainTitle: null,
    title: null,
    subtitle: null,
    paragraph: null,
    small: null,
  },
  boxShadow: {
    glass: "0 8px 32px 0 rgba( 31, 38, 135, 0.25 )",
  },
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
        width: 100vw;
        overflow-x: hidden;
    }
`;
