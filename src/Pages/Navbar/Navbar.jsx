import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="nav-logo">
         <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Beam Logo" className="logo-img" />
          </Link>
        </div>

       <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/Pages/Shop" onClick={closeMenu}>SHOP</Link>
          <Link to="/Pages/About" onClick={closeMenu}>ABOUT</Link>
          <Link to="/Pages/Product" onClick={closeMenu}>PRODUCTS</Link>
          <Link to="/Pages/Contact" onClick={closeMenu}>CONTACT</Link>
          <Link to="/" onClick={closeMenu}>ACCOUNT</Link>
          <Link to="/" onClick={closeMenu}>CART (0)</Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
