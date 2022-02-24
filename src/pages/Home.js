import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { AuthContext } from "../contexts/auth";
import { UserContext } from "../contexts/userContext";
import { FaPaw } from 'react-icons/fa';

export default function Home() {
    const { authTokens, setTokens } = useContext(AuthContext);
    const { user } = useContext(UserContext);

    function logout() {
        setTokens('');
    };

    return (
        <div className="home d-flex  text-center text-white bg-dark" >
            <div className="cover-container d-flex w-100 p-3 mx-auto flex-column">
                <header className="mb-auto">

                    <Nav className="justify-content-center me-auto " activeKey="/home">
                        {/* <Nav className="nav nav-masthead justify-content-end"> */}

                        <h2 className="justify-content-start mb-0">
                            <FaPaw /> </h2>
                        <Nav.Item>
                            <Link className="nav-link active" to="/">Home</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to="/pets">Pets</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to="/about">About us</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </Nav.Item>
                        {!authTokens ? (
                            <>
                                <Nav.Item>
                                    <Link className="nav-link" to="/registration">Register</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className="nav-link" to="/login">Login</Link>
                                </Nav.Item>
                            </>
                        ) : (
                            <>
                                <NavDropdown
                                    title={user.username}
                                    id="nav-dropdown">
                                    <NavDropdown.Item
                                        style={{
                                            border: "none",
                                            backgroundColor: "none"
                                        }}
                                        eventKey="">
                                        <Link
                                            style={{
                                                textDecoration: "none",
                                                color: "rgba(255, 255, 255, 0.7)"
                                            }}
                                            className="drop-item" to="/" onClick={logout}>Logout</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className="drop-item" to="/addpet" style={{
                                            textDecoration: "none",
                                            color: "rgba(255, 255, 255, 0.7)"
                                        }}>Add Pet</Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </>
                        )}
                    </Nav>
                </header>
                <main className="px-3">
                    <h1>Rehoming</h1>
                    <p className="lead"> Welcome! <br /> A pet is for life, not just for Christmas. <br />
                        Your rehoming jorney starts here</p>
                    <Link to="/pets"><Button variant="outline-light">View
                        Pets</Button></Link>
                </main>
                <footer className="mt-auto text-white-50">
                    <p>&copy; 2022 Darko DevLab  </p>
                </footer>
            </div>
        </div >
    )
}