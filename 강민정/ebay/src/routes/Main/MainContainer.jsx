import React, { createContext, useContext, useReducer } from 'react';
import {loadData} from '../../action/action.js';
import { PATH, INITIAL_API } from '../../constants/constants.js';
import {useOnMounted} from '../../action/useOnMounted.js';
import { MainReducer } from '../../App';
import MainPresenter from './MainPresenter';

export const UseAPI = createContext(INITIAL_API);

const MainContainer = () => {
  const {mainReducer} = useContext(MainReducer);
  const [API, dispatch] = useReducer(mainReducer, INITIAL_API);

  const renderAPI = ({type, name}) => {
    loadData(PATH, [name]).then(data => {
      if (type === 'menu') {
        dispatch({
          type: type,
          value: {
            mainMenu: data.mainMenu,
            sideMenu: data.sideMenu
          }
        })
      } else {
        dispatch({
          type: type,
          value: {
            title: data[name].title,
            items: data[name].items
          }
        })
      }
    });
  };

  useOnMounted(() => {
    renderAPI({
      type: 'menu',
      name: 'menu'
    });
    renderAPI({
      type: 'store',
      name: 'mainStore'
    });
    renderAPI({
      type: 'best',
      name: 'mainBest'
    });
    renderAPI({
      type: 'exhibition',
      name: 'mainEvent'
    });
    renderAPI({
      type: 'product',
      name: 'mainProducts'
    });
  });

  return (
    <UseAPI.Provider value={API}>
      <MainPresenter/>
    </UseAPI.Provider>
  )
}


export default MainContainer;