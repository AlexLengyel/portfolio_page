import { CHANGE_THEME } from "../actionTypes";

export const changeTheme = () => (dispatch) => {
  const action = {
    type: CHANGE_THEME,
    payload: null,
  };
  return dispatch(action);
};
