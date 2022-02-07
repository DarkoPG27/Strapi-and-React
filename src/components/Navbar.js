import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return <div>
        <nav className="navbar">
            <h1>Veb-Prodavnica kućnih ljubimaca</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/pets">Pets</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/registration">Registration</Link>
                <Link to="/Login">Login</Link>
                <Link to="/admin">Admin</Link>
            </div>
        </nav>
    </div>;
}

