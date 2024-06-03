import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <img src="https://via.placeholder.com/150" alt="Logo" className="logo" />
                </Link>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/kiez" className="nav-link">Kiez</Link>
                <Link to="/about" className="nav-link">About</Link>
            </div>
            <div className="navbar-right">
                <Link to="/login" className="nav-link">Login</Link>
            </div>
        </nav>
    );
}

export default Navbar;
