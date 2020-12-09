import React from 'react';
import { Link } from 'react-router-dom';
function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <a href="https://github.com/dohui-son">Author's Github</a>
    </div>
  );
}

export default Navigation;