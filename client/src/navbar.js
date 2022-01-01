import React from 'react';
import './App.css';

const navbar = () => {
  return (
    <nav className='Navigation'>
      <ul>
          <li>
              <a href="reg">Admin</a>
          </li>
          <li>
              <a href="login">Signin</a>
          </li>
          
      </ul>
    </nav>
  );
};
  
export default navbar;
