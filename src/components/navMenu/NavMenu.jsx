/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavMenu extends Component {
  state = {
    isLogIn: false,
  }

  render() {
    const logInButton = this.state.isLogIn === false && <Link to="/" className="btn btn-outline-success my-2 my-sm-0">Log-In</Link>;
    const chatButton = this.state.isLogIn && <Link to="/chat" className="nav-link">Chat</Link>;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/chat" className="navbar-brand">Mess)</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              {chatButton}
            </li>
          </ul>
          {logInButton}
        </div>
      </nav>
    );
  }
}

export default NavMenu;
