import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { MobileMenu } from '../MobileMenu';

export const Navbar = () => {
  const routes = ['Home', 'Carte', 'Contact'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const location = useLocation();

  return (
    <header className="topbar">
      <div className="logo-container">
        <Link to="home" className="topbar-logo1">
          La Bella
        </Link>
      </div>

      <div className="topbar-menu">
        <nav className="topbar-nav">
          {routes.map((route, index) => {
            return (
              <Link className={location.pathname} key={index} to={`/${route.toLowerCase()}`}>
                {route}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={toggleMenu}
          type="button"
          aria-label="toggle curtain navigation"
          className="nav-toggler"
        >
          <span className="line l1"></span>
          <span className="line l2"></span>
          <span className="line l3"></span>
        </button>

        <section className="home"></section>
      </div>
      {isMenuOpen && <MobileMenu routes={routes} />}

      <div className="topbar-last-section">
        <div className="container-numero">
          <img href="#" className="img-numero" src="img/phone1.svg" />

          <span href="#" className="numero">
            06 01 02 03 04
          </span>

          <a href="shopping-cart.php" className="cart-icon">
            <img src="img/shopping-cart-line.png" />
          </a>

          <a href="#" title="search">
            <img src="img/search.svg" title="search" className="img-search" />
          </a>
        </div>
      </div>
    </header>
  );
};
