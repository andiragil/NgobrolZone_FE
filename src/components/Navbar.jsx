import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { getProfile, logout } from "../redux/actions/profile";

const NavbarComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, token } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getProfile(null, null, null));
    }, [dispatch, token]);

    return (
        <Navbar expand="lg" style={{ backgroundColor: "#0F1035" }}>
            <Container>
                <Navbar.Brand as={Link} to="/" style={{ color: "#EEF7FF" }}>
                    NgobrolZone
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    style={{
                        backgroundColor: "#EEF7FF",
                        borderColor: "#EEF7FF",
                    }}
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" style={{ color: "#EEF7FF" }}>
                            Home
                        </Nav.Link>
                        {user ? (
                            <>
                                <Nav.Link
                                    as={Link}
                                    to="/profile"
                                    style={{ color: "#EEF7FF" }}
                                >
                                    {user.name}
                                </Nav.Link>
                                <Button
                                    variant="outline-danger"
                                    className="ms-md-2"
                                    onClick={() => {
                                        dispatch(logout());
                                        navigate("/login");
                                    }}
                                >
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button
                                    as={Link}
                                    to="/login"
                                    variant="outline-light"
                                    className="mx-lg-4"
                                >
                                    Login
                                </Button>
                                <Button
                                    as={Link}
                                    to="/register"
                                    variant="outline-warning"
                                >
                                    Register
                                </Button>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
