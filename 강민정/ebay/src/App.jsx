import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import './style/main.scss';
import Header from './components/Header';
import Main from "./routes/Main/Main"
import Join from "./routes/Join/Join"

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
      <Redirect path="*" to="/"/>
    </BrowserRouter>
  );
};

export default App;