import React, { Component } from 'react';

class InputName extends Component {
    render() {
        return (
            <div className="col-md-4 mb-3">
                <label htmlFor="validationServer01">First name</label>
                <input type="text" className="form-control" id="validationServer01" placeholder="First name" required />
                <div className="valid-feedback">
                    Looks good!
                        </div>
            </div>
        )
    }
}

export default InputName;