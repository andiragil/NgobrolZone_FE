import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavbarComponent = () => {
    const [user, setUser] = useState() //fetch data jika sudah ada
    const navigate = useNavigate();

    return (
        <Navbar expand="lg" style={{ backgroundColor: "#0F1035" }}>
            <Container>
                <Navbar.Brand as={Link} to="/" style={{ color: "#EEF7FF" }}>
                    Ngobrol Zone
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"
                    style={{ backgroundColor: "#EEF7FF", borderColor: "#EEF7FF" }} />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" style={{ color: "#EEF7FF" }}>
                            Home
                        </Nav.Link>
                        {user ? (
                            <>
                                <Nav.Link as={Link} to="/profile" style={{ color: "#EEF7FF" }}>
                                    {user.name}
                                </Nav.Link>
                                <Nav.Link as={Link} to="/login" style={{ color: "#EEF7FF" }}>
                                    Logout
                                </Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login" style={{ color: "#EEF7FF" }}>
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to="/register" style={{ color: "#EEF7FF" }}>
                                    Register
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
