import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './logInPage.css';

class LogInPage extends Component {
    state = {
        email: '',
        password: ''
    }

    onInput = (event) => {
        if (event.target.id === 'staticEmail') {
            this.setState({ email: event.target.value });
        } else {
            this.setState({ password: event.target.value });
        }
    }

    submit = () => {
        // console.log(this.props);
        // this.props.setState({logIn: this.state.email});
    }

    render() {
        return (
            <div className='log-in-container'>
                <h3 className="log-in-header">Log In:</h3>
                <form>
                    <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" name="login" className="form-control" id="staticEmail" placeholder="Enter your email" required
                                onChange={this.onInput}
                            ></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" placeholder="Password" required
                                onChange={this.onInput}
                            ></input>
                        </div>
                    </div>
                    <div className="btn btn-outline-success my-2 my-sm-0"
                        onClick={this.submit}
                    >Log In</div>
                </form>
                <span>or</span>
                <Link to="/register" className="nav-link sign-in-link">Register</Link>
            </div>
        )
    }
}

export default LogInPage;