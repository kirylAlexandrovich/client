/* eslint-disable react/prefer-stateless-function */
import React from 'react';
// import HomePage from '../homePage/homePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import LogInPage from '../logInPage/LogInPage';
import NavMenu from '../navMenu/NavMenu';
import ChatPage from '../chatPage/ChatPage';
import RegisterPage from '../register-page';
import store from './store';
import { startSocket } from './client';

class App extends React.Component {
  state = {
    socketState: false,
    // startPage: LogInPage,
  }

  openSocket() {
    const { socketState } = this.state;
    if (socketState === false) {
      console.log('socket state is false');
      this.setState({ socketState: true });
      // startSocket(localStorage.getItem('email'));
    }
  }
  // переделать так чтобы в апп не было логики или переделать
  // старт сокет что бы он не создовал новый сокет если у него есть старый

  render() {
    // let { startPage } = this.state;
    // console.log('LOCAL_STOREGE:', localStorage.getItem('email'));
    // if (localStorage.getItem('email') !== 'false') {
    //   store.dispatch({ type: 'CHANGE_CONNECTION_STATE', payload: true });
    //   this.openSocket();
    // } else {
    //   startPage = LogInPage;
    // }

    // store.subscribe(() => {
    //   console.log(store.getState().connectionState, 'app subscribe connection state ');
    //   if (store.getState().connectionState === false) {
    //     startPage = LogInPage;
    //   } else {
    //     this.openSocket();
    //   }
    // });
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
}

export default App;

// let startPage = LogInPage;
//   if (localStorage.getItem('email') !== 'false') {
//     console.log(localStorage.getItem('email'));
//     startSocket(localStorage.getItem('email'));
//     startPage = ChatPage;
//   }
//   store.subscribe(() => {
//     console.log(store.getState().connectionState);
//     if (store.getState().connectionState === false) {
//       startPage = LogInPage;
//     }
//   });
