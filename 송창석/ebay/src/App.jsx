import React from 'react';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './routes/Main';
import Login from './routes/Login';
import Join from './routes/Join';


function App() {
  return (
    <Router>
      <Header Link={Link} />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/join" component={Join} />
      </Switch>
    </Router>
  );
}

export default App;
