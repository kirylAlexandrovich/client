/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import LogInButton from './log-in-button';
import './nav-menu.css';

export default function NavMenu() {
  return (
    <nav className="nav-menu navbar-expand-lg navbar-dark bg-dark">
      <Link to="/chat" className="navbar-brand">Msg`</Link>
      <LogInButton />
    </nav>
  );
}
