import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function NavbarComponent() {
    return <div>
        <Navbar expand="lg">
            <Navbar.Brand><Link to="/"><span>Rehoming</span></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="me-auto">
                    <Link to="/">Home</Link>
                    <Link to="/pets">Pets</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact</Link> </Nav>
                <Nav >
                    <Link to="/registration">Registration</Link>
                    <Link to="/Login">Login</Link>
                </Nav>
                {/* <Link to="/admin">Admin</Link> */}
            </Navbar.Collapse>
        </Navbar>
    </div>;
}

