import React from "react";
import {
    Col,
    Row,
    Card,
    Container,
    Form,
    Button,
    Image,
    CardHeader,
} from "react-bootstrap";

function RegisPage() {
    return (
        <Row className="mt-4 mx-2">
            <Col md={4} className="mx-auto">
                <Card>
                    <Card.Body>
                        <CardHeader className="mb-3" style={{ background: 'linear-gradient( #008DDA, #41C9E2)', border: 'none' }}><h2 className="text-white text-center fw-bolder my-3">Sign Up</h2></CardHeader>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="fw-semibold">Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="fw-semibold">Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label className="fw-semibold">Name *</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" />
                            </Form.Group>

                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label className="fw-semibold" >Image</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button className="w-100" variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row >
    );
}

export default RegisPage;