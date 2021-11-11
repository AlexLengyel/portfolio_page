import { CHANGE_SCROLL_VIEW } from "../actionTypes";

export const changeScrollView = (scrollViewNumber) => (dispatch) => {
  console.log("hello action");
  const action = {
    type: CHANGE_SCROLL_VIEW,
    payload: scrollViewNumber,
  };
  return dispatch(action);
};
