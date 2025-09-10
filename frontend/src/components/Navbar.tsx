import React from 'react';
import { Link } from 'react-router-dom';
const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">LMS</Link\>
      <ul className="nav-links">
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};
export default Navbar;