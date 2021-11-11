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
    mainTitle: "2.5rem",
    title: "2rem",
    subtitle: "1.5rem",
    paragraph: "1rem",
    small: "0.5rem",
  },
  boxShadow: {
    thick: "rgba(0, 0, 0, 0.16) 0px 4px 20px",
    thin: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        font-size: 22px;
        font-weight: 400;
        //font-family: 'Mukta', sans-serif;
        font-family: 'Quicksand', sans-serif;

        @media (max-width: 768px) {
            font-size: 20px;
        }

        @media (max-width: 600px) {
            font-size: 18px;
        }
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
