import {
  SAVE_FAVORITE_COMICS,
  SET_VALUE
} from './dashboardConstants';

const INITIAL_STATE = {
  getMyFavoriteComics: [],
  menuValue: 0
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case SAVE_FAVORITE_COMICS:
      var _getMyFavoriteComics

      if(action.data){
        _getMyFavoriteComics = action.data
      }

      return {
        ...state,
        getMyFavoriteComics: _getMyFavoriteComics
      };

    case SET_VALUE:
      var _menuValue

      if(action.data){
        _menuValue = action.data
        
      }

      return {
        ...state,
        menuValue: _menuValue
      };
  }

  return state;
};