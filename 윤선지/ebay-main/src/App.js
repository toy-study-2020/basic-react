import React from 'react';
import {Route, Redirect, Switch, Link} from 'react-router-dom';
import Login from './components/Login';
import Menu from './components/menu';
import Main from './components/Main';

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
          <Main></Main>
        </Route>
        <Redirect path="*" to="/"/>
      </Switch>
    </>
  );
}

export default App;
