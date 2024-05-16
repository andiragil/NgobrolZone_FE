import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { Col, Row, Form, Button } from "react-bootstrap";

import { createNewMessages } from "../redux/actions/messages";

function AddMessage({ socket }) {
    const dispatch = useDispatch();

    const [addMessage, setAddMessage] = useState("");

    const { user } = useSelector((state) => state.auth);

    const onSubmit = (e) => {
        e.preventDefault();

        if (addMessage === "") {
            toast.error("Message can not be empty!");
            return;
        }

        dispatch(createNewMessages(addMessage, user.id));

        setAddMessage("");
    };
    return (
        <Form onSubmit={onSubmit} className="mt-auto">
            <Row className="align-items-center">
                <Col className="mb-4 ms-4">
                    <Form.Group controlId="message">
                        <Form.Control
                            type="text"
                            placeholder="Type your message"
                            value={addMessage}
                            onChange={(e) => {
                                setAddMessage(e.target.value);
                                socket.emit("typing");
                            }}
                            className="w-100"
                        />
                    </Form.Group>
                </Col>
                <Col xs={3} sm={2} className="mb-4 me-4">
                    <Button
                        type="submit"
                        className="w-100"
                        style={{
                            background: "linear-gradient(#008DDA, #41C9E2)",
                            border: "none",
                        }}
                    >
                        Send
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

AddMessage.propTypes = {
    socket: PropTypes.any,
};

export default AddMessage;
