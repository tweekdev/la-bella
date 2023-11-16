import React from 'react';
import './MobileMenu.css';
import { Link, useLocation } from 'react-router-dom';

export const MobileMenu = props => {
  const location = useLocation();
  return (
    <div className="menu-mobile">
      <h1>MobileMenu</h1>
      <nav className="topbar-nav">
        {props.routes.map((route, index) => {
          return (
            <Link className={location.pathname} key={index} to={`/${route.toLowerCase()}`}>
              {route}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
