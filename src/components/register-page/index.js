import React, { Component } from 'react';
import './register-page.css';
import InputFirstName from './input-first-name';
import InputLastName from './input-last-name';
import InputUsername from './input-username';

class RegisterPage extends Component {
    render() {
        return (
            <form className="registration-form">
                <div className="form-row">
                    <InputFirstName />
                    <InputLastName />
                    <InputUsername />
                </div>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="validationServer03">City</label>
                        <input type="text" className="form-control is-invalid" id="validationServer03" placeholder="City" required />
                        <div className="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="validationServer04">State</label>
                        <input type="text" className="form-control is-invalid" id="validationServer04" placeholder="State" required />
                        <div className="invalid-feedback">
                            Please provide a valid state.
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="validationServer05">Zip</label>
                        <input type="text" className="form-control is-invalid" id="validationServer05" placeholder="Zip" required />
                        <div className="invalid-feedback">
                            Please provide a valid zip.
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required />
                        <label className="form-check-label" htmlFor="invalidCheck3">
                            Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Submit form</button>
            </form>
        )
    }
}

export default RegisterPage;