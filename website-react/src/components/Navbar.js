
import {React, useState} from 'react';
import { Link } from '@reach/router';


const MenuItem = ({ children, icon = null, className = '', ...props }) => (
    <Link
      {...props}
      className={className}
      getProps={({ isPartiallyCurrent }) => ({
        className: isPartiallyCurrent ? `${className} nav-item--active` : '',
      })}
    >
      {icon}
      {children}
    </Link>
  );
  
  const Navbar = () => {

  return (
    <header>
      <nav>
        <MenuItem to="/" className="nav-item--primary">
          Emma Guo
        </MenuItem>

        <div className="nav-item--stretch" />

        {/* <MenuItem to="/form">Form</MenuItem> */}
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/projects">Projects</MenuItem>
      </nav>
    </header>
  );
};



export default Navbar;

