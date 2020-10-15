import React from 'react';
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Join from './components/Join';
import Detail from './components/Detail';
import DetailCategory from './components/DetailCategory';
import './style/main.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Header
        Link={Link}
      />
      <Route
        exact
        path='/'
        component={Main}
        Link={Link}
      />
      <Route
        path='/join'
        component={Join}
      />
      <Route
        path='/detail'
        component={Detail}
      />
      <Route
        path='/detailCategory'
        component={DetailCategory}
      />
      <Redirect path="*" to="/" />
    </BrowserRouter>
  );
}

export default App;