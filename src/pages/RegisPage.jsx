import { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/register";
import GoogleLogin from "../components/GoogleLogin";

function RegisPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
      toast.error(`Password and confirm password must be same!`);
      return;
    }

    // dispatch the register action
    dispatch(register(navigate, email, password, name, image, setIsLoading));
  };
  return (
    <Row className="mt-4 mx-2">
      <Col md={4} className="mx-auto">
        <Card>
          <Card.Body>
            <CardHeader
              className="mb-3"
              style={{
                background: "linear-gradient( #008DDA, #41C9E2)",
                border: "none",
              }}
            >
              <h2 className="text-white text-center fw-bolder my-3">Sign Up</h2>
            </CardHeader>
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-semibold">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-semibold">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label className="fw-semibold">
                  Confirm Password *
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="name">
                <Form.Label className="fw-semibold">Name *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label className="fw-semibold">Image</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </Form.Group>

              <Button
                className="w-100 rounded-pill"
                variant="primary"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Register"}
              </Button>
              <GoogleLogin text={"Login With Google"} />
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default RegisPage;
