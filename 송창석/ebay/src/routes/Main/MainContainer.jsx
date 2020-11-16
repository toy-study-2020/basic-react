import React, {useEffect} from 'react';
import { MAIN_APIS } from '../../constant/constant';
import { useMainState, useMainDispatch } from '../../hooks/MainContext';
import fetchAsyncDispatcher from '../../utils/asyncUtils';
import MainPresenter from './MainPresenter';

const MainContainer = () => {
  const state = useMainState()
  const dispatch = useMainDispatch()

  useEffect(() => {
    fetchAsyncDispatcher(dispatch, "DISPATCH_GNB", MAIN_APIS.MENU)
    fetchAsyncDispatcher(dispatch, "DISPATCH_CONTENT", MAIN_APIS.STORE)
    fetchAsyncDispatcher(dispatch, "DISPATCH_CONTENT", MAIN_APIS.BEST)
    fetchAsyncDispatcher(dispatch, "DISPATCH_CONTENT", MAIN_APIS.EVENT)
    fetchAsyncDispatcher(dispatch, "DISPATCH_CONTENT", MAIN_APIS.PRODUCTS)
  }, [dispatch])

  return (
    <MainPresenter state={state}/>
  )
}

export default MainContainer;