import React from 'react';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainIndex from './routes/Main/MainIndex';
import LoginIndex from './routes/Login/LoginIndex';
import UserJoinIndex from './routes/Join/UserJoinIndex';

function App() {
  return (
    <Router>
      <Header
        Link={Link}
      />
      <Switch>
        <Route exact path="/">
          <MainIndex/>
        </Route>
        <Route path="/login">
          <LoginIndex/>
        </Route>
        <Route path="/join">
          <UserJoinIndex/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
