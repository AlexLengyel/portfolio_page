import { CHANGE_THEME } from "../actionTypes";

const initialState = {
  theme: "light",
};

const themeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

export default themeReducer;
