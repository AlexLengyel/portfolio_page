import { CHANGE_SCROLL_VIEW } from "../actionTypes";

const initialState = {
  scrollView: 0,
};

const scrollViewReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_SCROLL_VIEW:
      return {
        ...state,
        scrollView: payload,
      };
    default:
      return state;
  }
};

export default scrollViewReducer;
