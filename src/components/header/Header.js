import React from 'react';
import './Header.css';
import Navigation from '../navigation/Navigation';

function Header(props) {
  return (
    <header className="header">
      <h1 className="header__title">{props.title}</h1>
      <Navigation />
    </header >
 );
}

export default Header;
