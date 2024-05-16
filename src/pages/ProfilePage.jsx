import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../redux/actions/profile";

const ProfilePage = () => {
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        // get profile
        dispatch(getProfile(null, null, null));
    }, [dispatch]);

    return (
        <Container className="mt-5">
            <Row>
                <Col md={6} className="offset-md-3 pb-5">
                    <Card style={{ backgroundColor: "#E1F7F5" }}>
                        <Card.Header
                            className="text-white text-center fw-bold h4"
                            style={{ background: "linear-gradient( #008DDA, #41C9E2)" }}
                        >
                            My Profile
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                {!user ? (
                                    <>
                                        <h2>Loading...</h2>
                                    </>
                                ) : (
                                    <>
                                        {user?.image && (
                                            <div className="d-flex justify-content-center">
                                                <Image
                                                    src={user?.image}
                                                    className="img-fluid mt-2 w-50"
                                                    roundedCircle
                                                />
                                            </div>
                                        )}
                                        <div className="mt-4">
                                            <Form.Group className="mb-3" controlId="name">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    value={user?.name}
                                                    disabled
                                                    style={{ backgroundColor: "#ffffff" }}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="email">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    value={user?.email}
                                                    disabled
                                                    style={{ backgroundColor: "#ffffff" }}
                                                />
                                            </Form.Group>
                                        </div>
                                    </>
                                )}
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ProfilePage;
