import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <img src="/bln.png" alt="Logo" className="logo" />
       <h2 className="title">Sermon On The Mount</h2>
        <p className="motto">Let your Light Shine</p>
      </div>
    </div>
  );
};

export default Header;
