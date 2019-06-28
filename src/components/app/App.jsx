
import React from 'react';
// import HomePage from '../homePage/homePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import LogInPage from '../logInPage/LogInPage';
import NavMenu from '../navMenu/NavMenu';
import ChatPage from '../chatPage/chat-page';
import RegisterPage from '../register-page';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavMenu />
        <Switch>
          {/* <Route exact path='/' component={HomePage} /> */}
          <Route exact path="/" component={LogInPage} />
          <Route path="/chat" component={ChatPage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </Router>
    </Provider>
  );
}


export default App;
