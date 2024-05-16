import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/login";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    /* Login action (fetch API) */
    dispatch(login(navigate, email, password, setIsLoading));
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
              <h2 className="text-white text-center fw-bolder my-3">Sign In</h2>
            </CardHeader>
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-semibold">Email address *</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-semibold">Password *</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button
                className="w-100 rounded-pill"
                variant="primary"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Sign In"}
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
