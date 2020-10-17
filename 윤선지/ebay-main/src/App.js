import React from 'react';
import {Route, Redirect, Switch, Link} from 'react-router-dom';

import Best from './components/best';
import Login from './components/Login';
import Menu from './components/menu';
import Store from './components/store';
import Chance from './components/chance';

function App() {
  return (
    <>
      <div>
        <Link to={`/`} className="btnHome">홈</Link>
        <Link to={`/login`} className="btnLogin">로그인</Link>
      </div>
      <Menu getUrl='https://baekcode.github.io/APIs/menu.json'></Menu>
      <Switch>
        <Route exact path="/login" render={() => <Login></Login>}></Route>
        <Route exact path="/">
          <Store getUrl='https://baekcode.github.io/APIs/mainStore.json'></Store>
          <Best getUrl='https://baekcode.github.io/APIs/mainBest.json'></Best>
          <Chance getUrl='https://baekcode.github.io/APIs/mainProducts.json'></Chance>
        </Route>
        <Redirect path="*" to="/"/>
      </Switch>
    </>
  );
}

export default App;
