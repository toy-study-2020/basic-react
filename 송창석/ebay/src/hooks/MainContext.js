import React, {useReducer, createContext, useContext} from 'react';

const initialState = {
  menu: {
    main: [],
    side: []
  },
  mainStore: {
    title: "",
    items: []
  },
  mainBest: {
    title: "",
    items: []
  },
  mainEvent: {
    title: "",
    items: []
  },
  mainProducts: {
    title: "",
    items: []
  }
}

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

const MainStateContext = createContext(null)
const MainDispatchContext = createContext(null)

export const MainProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <MainStateContext.Provider value={state}>
      <MainDispatchContext.Provider value={dispatch}>
        {children}
      </MainDispatchContext.Provider>
    </MainStateContext.Provider>
  )
}

export const useMainState = () => {
  const state = useContext(MainStateContext)
  return state
}

export const useMainDispatch = () => {
  const dispatch = useContext(MainDispatchContext)
  return dispatch
}
