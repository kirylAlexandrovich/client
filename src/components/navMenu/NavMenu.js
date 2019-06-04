import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavMenu extends Component {
    state = {
        isLogIn: true
    }
    render() {
        const logInButton = this.state.isLogIn && <Link to='/log_in' className = "btn btn-outline-success my-2 my-sm-0">Log-In</Link>;
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to = "/" className="navbar-brand">Mess)</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to = '/chat' className="nav-link">Chat</Link>
                            {/* <a className="nav-link" href="/"> Home <span className="sr-only">(current)</span></a> */}
                        </li>
                        {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li> */}
                    </ul>
                    {logInButton}
                    {/* <a href="/log_in" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">LogIn</a> */}
                    {/* <button onClick={this.openForm} className="btn btn-outline-success my-2 my-sm-0">LogIn</button> */}
                </div>
            </nav>
        )
    }
}

export default NavMenu;