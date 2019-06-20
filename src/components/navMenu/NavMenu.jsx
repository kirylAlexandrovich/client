/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import LogInButton from './log-in-button';
import './nav-menu.css';

// class NavMenu extends Component {
//   state = {
//     isLogIn: false,
//   }
export default function NavMenu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/chat" className="navbar-brand">Mess)</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <LogInButton />
      </div>
    </nav>
  );
}
