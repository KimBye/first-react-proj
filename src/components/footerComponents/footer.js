import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="h-100  d-flex align-items-center justify-content-center">
          <div className="sign-name">
            Code and write by <a onClick={()=>window.open("https://github.com/KimBye/first-react-proj","_blank")}>Kim By</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
