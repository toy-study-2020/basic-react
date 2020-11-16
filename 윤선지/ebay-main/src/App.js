import React, { useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import LoginReducer from './reducer/LoginReducer';
import MainReducer from './reducer/MainReducer';
import Gnb from './components/Gnb';
import Header from './components/Header';
import Login from './Routes/Login';
import Main from './Routes/Main';
export const LoginConText = React.createContext();
export const MainConText = React.createContext();

function App() {
  const { mainState, getData } = MainReducer();
  const UserJoinValues = LoginReducer({
    name: {
        value: '',
        display: true
    },
    email: {
        value: '',
        display: true
    },
    gender: {
        value: '',
        display: true
    },
    year: {
        value: '',
        display: true
    },
    month: {
        value: '',
        display: true
    },
    day: {
        value: '',
        display: true
    }
  });
  
  useEffect(() => {
    getData("DISPATCH_MENU", 'menu');
    getData("DISPATCH_CONTENT", 'mainStore');
    getData("DISPATCH_CONTENT", 'mainBest');
    getData("DISPATCH_CONTENT", 'mainProducts');
	}, []);

  return (
    <>
      <MainConText.Provider value={{...mainState}}>
        <LoginConText.Provider value={{...UserJoinValues}}>
          <Gnb></Gnb>
          <Header></Header> 
          <Switch>
            <Route exact path="/login">   
              <Login></Login>
            </Route>
            <Route exact path="/">
              <Main></Main>
            </Route>
            <Redirect path="*" to="/"/>
          </Switch>
        </LoginConText.Provider>
      </MainConText.Provider>
    </>
  );
}

export default App;
