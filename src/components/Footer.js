import React from 'react';
import '../css/Footer.css';
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <footer className="footer navbar justify-content-center align-items-center">
      <Link to="/home">
        <img id="footerlogo" src={require('../assets/logo.png')} alt="logo" />
      </Link>
      <p className="copyright">&copy; 2024 TechCraft.Ltd</p>
    </footer>
  );
}
