import React, { Component } from 'react';

class InputUsername extends Component {
    render() {
        return (
            <div className="col-md-4 mb-3">
                <label htmlFor="validationServerUsername">Username</label>
                <input type="text" className="form-control is-valid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required />
                <div className="invalid-feedback">
                    Please choose a username.
                        </div>
            </div>
        )
    }
}

export default InputUsername;