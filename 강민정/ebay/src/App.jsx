import React, { createContext } from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import './style/main.scss';
import Header from './components/Header';
import Main from "./routes/Main/index"
import Join from "./routes/Join/index"
import { JOIN_INITIAL_METHOD } from './constants/constants';

export const CheckMethod = createContext(JOIN_INITIAL_METHOD);

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Route
        exact
        path='/'
        component={Main}
      />
      <CheckMethod.Provider value=''>
      <Route
        path='/join'
        component={Join}
      />
      </CheckMethod.Provider>
      <Redirect path="*" to="/join"/>
    </BrowserRouter>
  );
};

export default App;