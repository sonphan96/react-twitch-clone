import React, { Component } from 'react';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '160386881357-6vfp0vj8ctco726in837um02jfn96glf.apps.googleusercontent.com',
        scope: 'email',
      });
    });
  }

  render() {
    return <div>Google auth</div>;
  }
}

export default GoogleAuth;
