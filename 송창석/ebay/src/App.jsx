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
import useFormStore from './store/useFormStore';
import useMainStore from './store/useMainStore';
import { MAIN_APIS } from './constant/constant';
import { useOnMounted } from './utils/useOnMounted';

const LoginContext = React.createContext(null)
const UserJoinContext = React.createContext(null)
const MainContext = React.createContext(null)

export {
  LoginContext,
  UserJoinContext,
  MainContext
}


function App() {
  // login
  const loginValues = useFormStore({
    email: "",
    password: ""
  })
  // userjoin
  const userJoinValues = useFormStore({
    name: "",
    email: "",
    password: "",
    gender: "",
    year: "",
    month: "",
    day: ""
  })
  // main
  const {mainState, fetchData} = useMainStore({
    menu: {
      main: [],
      side: []
    },
    mainStore: {
      title: "",
      items: []
    },
    mainBest: {
      title: "",
      items: []
    },
    mainEvent: {
      title: "",
      items: []
    },
    mainProducts: {
      title: "",
      items: []
    }
  })
  // login fetch
  useOnMounted(() => fetchData("DISPATCH_GNB", MAIN_APIS.MENU))
  useOnMounted(() => fetchData("DISPATCH_CONTENT", MAIN_APIS.STORE))
  useOnMounted(() => fetchData("DISPATCH_CONTENT", MAIN_APIS.BEST))
  useOnMounted(() => fetchData("DISPATCH_CONTENT", MAIN_APIS.EVENT))
  useOnMounted(() => fetchData("DISPATCH_CONTENT", MAIN_APIS.PRODUCTS))



  return (
    <Router>
      <Header Link={Link} />
      <Switch>
        <LoginContext.Provider value={loginValues}>
          <UserJoinContext.Provider value={userJoinValues}>
            <MainContext.Provider value={mainState}>
              <Route exact path="/" component={Main} />
              <Route path="/login" component={Login} />
              <Route path="/join" component={Join} />
            </MainContext.Provider>
          </UserJoinContext.Provider>
        </LoginContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
