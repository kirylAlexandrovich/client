import React, { Component } from 'react';
import HomePage from '../homePage/homePage';
import LogInPage from '../logInPage/LogInPage';
import NavMenu from '../navMenu/NavMenu';
import ChatPage from '../chatPage/ChatPage';
import RegisterPage from '../register-page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <NavMenu />
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/log_in' component={LogInPage} />
                        <Route path='/chat' component={ChatPage} />
                        <Route path='/register' component={RegisterPage} />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default App;