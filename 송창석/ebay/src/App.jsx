import React from 'react';
import Header from './components/Header/Header';
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
      <Header
        Link={Link}
      />
      <Switch>
        <Route exact path="/">
          <MainWrap/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/join">
          <UserJoin/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
