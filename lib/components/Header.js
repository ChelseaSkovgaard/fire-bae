import React, { Component } from 'react';
import firebase, { reference } from '../firebase';


class Header extends Component {
  render(){
    return(
      <div>
        <h1>TitleofApp</h1>
        <nav>
          <button className='home'>Home</button>
          <button className='wallet'>Wallet</button>
          <button className='games'>Games</button>
        </nav>
      </div>
    )
  }
}
module.exports = Header;