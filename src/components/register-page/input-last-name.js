import React, { Component } from 'react';

class InputLastName extends Component {
    render() {
        return (
            <div className="col-md-4 mb-3">
                <label htmlFor="validationServer02">Last name</label>
                <input type="text" className="form-control" id="validationServer02" placeholder="Last name" required />
                <div className="valid-feedback">
                    Looks good!
                        </div>
            </div>
        )
    }
}

export default InputLastName;