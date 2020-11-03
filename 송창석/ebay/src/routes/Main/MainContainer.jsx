import React from 'react';
import { MAIN_APIS } from '../../constant/constant';
import useMainStore from '../../store/useMainStore';
import { useOnMounted } from '../../utils/useOnMounted';
import MainPresenter from './MainPresenter';

export const MainContext = React.createContext(null)

const MainContainer = () => {
  const {mainState, fetchData} = useMainStore({
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
  })

  useOnMounted(() => fetchData("DISPATCH_GNB", MAIN_APIS.MENU))
  useOnMounted(() => fetchData("DISPATCH_CONTENT", MAIN_APIS.STORE))
  useOnMounted(() => fetchData("DISPATCH_CONTENT", MAIN_APIS.BEST))
  useOnMounted(() => fetchData("DISPATCH_CONTENT", MAIN_APIS.EVENT))
  useOnMounted(() => fetchData("DISPATCH_CONTENT", MAIN_APIS.PRODUCTS))

  return (
    <MainContext.Provider value={mainState}>
      <MainPresenter />
    </MainContext.Provider>
  )
}

export default MainContainer;