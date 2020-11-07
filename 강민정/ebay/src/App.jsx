import React, { createContext } from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import './style/main.scss';
import Header from './components/Header';
import Main from "./routes/Main/index"
import Join from "./routes/Join/index"
import { joinReducer, mainReducer } from './action/reducer';


export const JoinReducer = createContext(() => {});
export const MainReducer = createContext(() => {});
const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <MainReducer.Provider value={{mainReducer}}>
        <Route
          exact
          path='/'
          component={Main}
        />
      </MainReducer.Provider>
      <JoinReducer.Provider value={{joinReducer}}>
        <Route
          path='/join'
          component={Join}
        />
      </JoinReducer.Provider>
      <Redirect path="*" to="/"/>
    </BrowserRouter>
  );
};

export default App;