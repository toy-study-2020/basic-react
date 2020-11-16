import { JOIN_INITIAL_VALUE } from '../constants/constants';

const joinReducer = (state, action) => {
  switch (action.type) {
    case 'clear':
      return JOIN_INITIAL_VALUE;
    case action.type:
      return {
        ...state,
        [action.type]: action.value
      };
    default:
      throw new Error();
  }
}

const mainReducer = (state, action) => {
  switch (action.type) {
    default:
      throw new Error();
    case 'menu':
      return {
        ...state,
        menu: {
          mainMenu: action.value.mainMenu,
          sideMenu: action.value.sideMenu
        }
      }
    case action.type:
      return {
        ...state,
        [action.type]: {
          title: action.value.title,
          items: action.value.items
        }
      }
  }
}


export {
  joinReducer,
  mainReducer
};