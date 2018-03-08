import React, { Component } from 'react';

import './basicinfo.css';

class BasicInfo extends Component {
  render() {
    return(
      <div className="basicInfo">
        <div className="profilePic" />
        <div className="nameWrapper">
          <h3 className="normal">Løvemør</h3>
        </div>
      </div>
    );
  }
}

export default BasicInfo;