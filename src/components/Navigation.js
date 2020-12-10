import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/information">information</Link>
      <a href="https://github.com/dohui-son">Author's Github</a>
    </div>
  );
}

export default Navigation;