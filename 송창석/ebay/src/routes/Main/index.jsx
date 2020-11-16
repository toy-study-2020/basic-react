import React from 'react';
import { MainProvider } from '../../hooks/MainContext';
import MainContainer from './MainContainer';

const index = () => {
  return (
    <MainProvider>
      <MainContainer/>
    </MainProvider>
  );
};

export default index;