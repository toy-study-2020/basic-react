import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Join from './components/Join';
import Login from './components/Login';
import Detail from './components/Detail';
import DetailCategory from './components/DetailCategory';
import DetailStore from './components/DetailStore';
import './style/main.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Route
        exact
        path='/'
        component={Main}
      />
      <Route
        path='/join'
        component={Join}
      />
      <Route
        path='/login'
        component={Login}
      />
      <Route
        path='/detail'
        component={Detail}
      />
      <Route
        path='/detailCategory'
        component={DetailCategory}
      />
      <Route
        path='/detailStore'
        component={DetailStore}
      />
      <Redirect path="*" to="/" />
    </BrowserRouter>
  );
}

export default App;