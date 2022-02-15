import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { AuthContext } from "../contexts/auth";
import { Redirect } from "react-router-dom";

export default function NavbarComponent() {
    const { authTokens, setTokens } = useContext(AuthContext);

    function logout() {
        setTokens('');
    }

    return <div>
        <Navbar expand="lg" sticky >
            <Navbar.Brand><Link to="/"><span>Rehoming</span></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="me-auto">
                    <Link to="/">Home</Link>
                    <Link to="/pets">Pets</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact</Link>
                </Nav>
                <Nav >
                    <Link to="/admin">Admin Page</Link>
                    {/*  <Link to="">{data.username}</Link> */}
                    {!authTokens ? (
                        <>

                            <Link to="/registration">Registration</Link>
                            <Link to="/login" >Login </Link>
                        </>
                    ) : (
                        <Link to="/" onClick={logout}>Logout</Link>
                    )}
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    </div>;
}

