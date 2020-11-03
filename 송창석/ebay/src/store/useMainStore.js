import { useReducer } from 'react';
import { fetchJson } from '../utils/fetch';

const reducer = (state, action) => {
  switch(action.type) {
    case "DISPATCH_GNB": 
      return {
        ...state,
        [action.key]: {
          main: action.res.mainMenu,
          side: action.res.sideMenu
        }
      }
    case "DISPATCH_CONTENT":
      return {
        ...state,
        [action.key]: {
          title: action.res[action.key].title,
          items: action.res[action.key].items
        }
      }
    default:
      return state
  }
}

const useMainStore = (initialForm) => {
  const [mainState, dispatchMainState] = useReducer(reducer, initialForm)

  const fetchData = (type, key) => {
    fetchJson(key).then((res) => {
      dispatchMainState({
        type,
        res,
        key
      })
    })
  }

  return {
    mainState,
    fetchData
  }
};

export default useMainStore;