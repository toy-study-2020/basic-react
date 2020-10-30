import React, {createContext, useContext, useReducer} from 'react';
import {LoadData} from '../../action/Action.js';
import {PATHContext} from "./Main";
import {useOnMounted} from '../../action/useOnMounted.js';
import MainPresenter from './MainPresenter';

const initialAPI = {
  menu: {},
  store: {},
  best: {},
  exhibition: {},
  product: {}
};

export const UseAPI = createContext(initialAPI);

const MainContainer = () => {
  const PATH = useContext(PATHContext);

  const reducer = (state, action) => {
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

  const [API, dispatch] = useReducer(reducer, initialAPI);

  const renderCategory = () => {
    LoadData(PATH, 'menu').then(data => {
      dispatch({
        type: 'menu',
        value: {
          mainMenu: data.mainMenu,
          sideMenu: data.sideMenu
        }
      })
    });
  };

  const renderStore = () => {
    LoadData(PATH, 'mainStore').then(data => {
      dispatch({
        type: 'store',
        value: {
          title: data.mainStore.title,
          items: data.mainStore.items
        }
      })
    });
  };

  const renderBest = () => {
    LoadData(PATH, 'mainBest').then(data => {
      dispatch({
        type: 'best',
        value: {
          title: data.mainBest.title,
          items: data.mainBest.items
        }
      })
    });
  };

  const renderExhibition = () => {
    LoadData(PATH, 'mainEvent').then(data => {
      dispatch({
        type: 'exhibition',
        value: {
          title: data.mainEvent.title,
          items: data.mainEvent.items
        }
      })
    });
  };

  const renderProduct = () => {
    LoadData(PATH, 'mainProducts').then(data => {
      dispatch({
        type: 'product',
        value: {
          title: data.mainProducts.title,
          items: data.mainProducts.items
        }
      })
    });
  };

  useOnMounted(() => renderCategory());
  useOnMounted(() => renderStore());
  useOnMounted(() => renderBest());
  useOnMounted(() => renderExhibition());
  useOnMounted(() => renderProduct());

  return (
    <UseAPI.Provider value={API}>
      <MainPresenter/>
    </UseAPI.Provider>
  )
}


export default MainContainer;