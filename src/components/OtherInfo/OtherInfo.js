import React, { Component } from 'react';

import './otherinfo.css';

class OtherInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationEditing: false,
            contactEditing: false
        };
    }

    getLocationData() {
        return (
            <div className="lIWrapper" key="lIWrapperText">
                <div className="inputWrapper">
                    <label>Local Address:</label>
                    <p className="inputData">House no 33</p>
                </div>
                <div className="inputWrapper">
                    <label>City:</label>
                    <p className="inputData">New Delhi</p>
                </div>
                <div className="inputWrapper">
                    <label>State:</label>
                    <p className="inputData">Delhi</p>
                </div>
                <div className="inputWrapper">
                    <label>Landmark:</label>
                    <p className="inputData">Yasin Manzil</p>
                </div>
                <div className="inputWrapper">
                    <label>Country:</label>
                    <p className="inputData">India</p>
                </div>
                <div className="inputWrapper">
                    <label>Pin Code:</label>
                    <p className="inputData">100065</p>
                </div>
            </div>
        );
    }

    getContactData() {
        return (
            <div className="cIWrapper" key="cIWrapperText">
                <div className="inputWrapper">
                    <label>Email:</label>
                    <p className="inputData">lovemor@gmail.com</p>
                </div>
                <div className="inputWrapper">
                    <label>Phone no:</label>
                    <p className="inputData">9999999999</p>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="otherInfo">
                <div className="locationInfo">
                    <div className="heading">
                        <h3 className="normal marB20">What is Løvemør?</h3>
                    </div>
                    <div>Some Description</div>
                </div>
                <div className="contactInfo">
                    <div className="heading">
                        <h3 className="normal marB20">Contact Info</h3>
                    </div>
                    {this.getContactData()}
                </div>
            </div>
        );
    }
}

export default OtherInfo;