import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { AuthContext } from "../contexts/auth";
import { UserContext } from "../contexts/userContext";
import { FaPaw } from 'react-icons/fa';

export default function NavbarComponent() {
    const { authTokens, setTokens } = useContext(AuthContext);
    const { user } = useContext(UserContext);


    function logout() {
        setTokens('');
    };

    console.log(user)
    return <div>
        <Navbar expand="lg"  >
            <Navbar.Brand><Link to="/"><span><FaPaw /> Rehoming</span></Link>
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
                    {!authTokens ? (
                        <>
                            <Link to="/registration">Register</Link>
                            <Link to="/login" >Login </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/">{user.username}</Link>
                            <Link to="/" onClick={logout}>Logout</Link>
                            {/* <Link to="/admin">Admin Page</Link> */}
                        </>
                    )}
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    </div>;
}

