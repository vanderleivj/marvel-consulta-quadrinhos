import {
  SAVE_FAVORITE_COMICS,
  SET_VALUE
} from './dashboardConstants';

export const saveFavoriteComics = (data) => {
  return dispatch => {
    dispatch({type: SAVE_FAVORITE_COMICS, data})
  };
};

export const setValue = (data) => {
  return dispatch => {
    dispatch({type: SET_VALUE, data})
  };
};