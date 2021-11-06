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
    background: {
      main: "rgba(255, 255, 255, 0.1)",
    },
    border: "1px solid rgba(255, 255, 255, 0.15)",
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
    background: {
      main: "rgba(0, 0, 0, 0.1)",
    },
    border: "1px solid rgba(255, 255, 255, 0.15)",
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
    thick:
      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -2px;",
    thin: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    toggle:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
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
