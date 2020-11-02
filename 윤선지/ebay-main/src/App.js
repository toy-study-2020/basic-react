import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Gnb from './components/Gnb';
import Header from './components/Header';
import Login from './components/login';
import Main from './components/Main';
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <Gnb></Gnb>
      <Header></Header>
      <Slider></Slider>

      <Switch>
        <Route exact path="/login" render={() => <Login></Login>}></Route>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Redirect path="*" to="/"/>
      </Switch>
    </>
  );
}

export default App;
