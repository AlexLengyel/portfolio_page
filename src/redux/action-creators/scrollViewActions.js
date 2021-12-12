import { CHANGE_SCROLL_VIEW } from "../actionTypes";

export const changeScrollView = (scrollViewNumber) => (dispatch) => {
  const action = {
    type: CHANGE_SCROLL_VIEW,
    payload: scrollViewNumber,
  };
  return dispatch(action);
};
