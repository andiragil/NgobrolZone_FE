import React from 'react'
import { Container, Row, Col, Card, Form, Image } from "react-bootstrap";

function ProfilePage() {
    return (
        <Container className="mt-5">
            <Row>
                <Col md={6} className="offset-md-3 pb-5">
                    <Card style={{ backgroundColor: "#FFEC9E" }}>
                        <Card.Header className="text-center fw-bold h4"
                            style={{ backgroundColor: "#ED9455", color: "#FFFBDA" }}>My Profile</Card.Header>
                        <Card.Body>
                            <Form>
                                <div className="d-flex justify-content-center">
                                    <Image
                                        src="public/profile-picture.jpg"
                                        className="img-fluid mt-2 w-50"
                                        roundedCircle
                                    />
                                </div>
                                <div className="mt-4">
                                    <Form.Group
                                        className="mb-3"
                                        controlId="name"
                                    >
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Your name"
                                            disabled
                                            style={{ backgroundColor: "#FFFBDA" }}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="email"
                                    >
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Your email address"
                                            disabled
                                            style={{ backgroundColor: "#FFFBDA" }}
                                        />
                                    </Form.Group>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ProfilePage;