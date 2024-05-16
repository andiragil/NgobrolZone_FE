import { Col, Row, Form, Button } from "react-bootstrap";

function AddMessage() {
    return (
        <Form className="mt-auto">
            <Row>
                <Col className="my-4 ms-4">
                    <Form.Group controlId="message">
                        <Form.Control
                            type="text"
                            placeholder="Type your message"
                            required
                        />
                    </Form.Group>
                </Col>
                <Col md={1} className="my-4 me-4">
                    <Button className="w-100" variant="dark">
                        Send
                    </Button>{" "}
                </Col>
            </Row>
        </Form>
    );
}

export default AddMessage;
