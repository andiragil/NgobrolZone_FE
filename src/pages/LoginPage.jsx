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
import GoogleLogin from "../components/GoogleLogin";

function LoginPage() {
    return (
        <Row className="mt-4 mx-2">
            <Col md={4} className="mx-auto">
                <Card>
                    <Card.Body>
                        <CardHeader
                            className="mb-3"
                            style={{
                                background:
                                    "linear-gradient( #008DDA, #41C9E2)",
                                border: "none",
                            }}
                        >
                            <h2 className="text-white text-center fw-bolder my-3">
                                Sign In
                            </h2>
                        </CardHeader>
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label className="fw-semibold">
                                    Email address *
                                </Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone
                                    else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Label className="fw-semibold">
                                    Password *
                                </Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Group>

                            <Button
                                className="w-100 rounded-pill"
                                variant="primary"
                                type="submit"
                            >
                                Sign In
                            </Button>
                            <GoogleLogin text={"Login With Google"} />

                            <footer className="mt-2">
                                Need An Account? Sign Here{" "}
                                <a href="/register">Here</a>
                            </footer>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default LoginPage;
