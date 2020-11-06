import React, { useContext } from 'react';
import { MainContext } from '../../App';
import MainPresenter from './MainPresenter';

const MainContainer = () => {
  const provide = useContext(MainContext)

  return (
    <MainPresenter state={provide}/>
  )
}

export default MainContainer;