import React from 'react';
import Header from './components/Header/Header';
import { GlobalStyles } from './GlobalStyles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import UserJoin from './components/Join/UserJoin'
import MainWrap from './components/Main/MainWrap'


function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Header
        Link={Link}
      />
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/join">
          <UserJoin/>
        </Route>
        <Route path="/">
          <MainWrap/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
