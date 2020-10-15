import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Main, Login, Join } from 'pages';
class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Main}/>
                <Route path="/login" component={Login}/>
                <Route path="/join" component={Join}/>
            </div>
        );
    }
}

export default App;