import React from "react";
import {
    Col,
    Row,
    Card,
    Container,
    Form,
    Button,
    Image,
    ListGroup,
} from "react-bootstrap";

function HomePage() {
    return (
        <Container className="my-5">
            <Card
                style={{
                    height: "85vh",
                }}
            >
                <Card
                    className="mx-4 mt-4"
                    style={{
                        height: "100vh",
                        overflow: "auto",
                    }}
                >
                    <div className="d-flex flex-row mx-4 mt-4">
                        <Image
                            src="public/profile-picture.jpg"
                            className="d-flex align-self-center shadow-1-strong me-3 mb-auto mt-1"
                            roundedCircle
                            style={{ width: "3rem" }}
                        />
                        <div className="">
                            <p className="mb-0">
                                <b>Stefhan</b> - 10/22/2021 12:47 PM
                            </p>
                            <p className="small ">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Facilis qui explicabo nisi
                                amet numquam adipisci, fuga ipsum quisquam harum
                                et, laudantium quo placeat esse nobis expedita
                                eaque. Consequuntur, doloremque neque. Lorem
                                ipsum dolor sit amet consectetur, adipisicing
                                elit. Error reiciendis ipsum facilis veritatis
                                libero ab fugit dolorum exercitationem nihil,
                                commodi maiores nostrum enim iure. Reiciendis
                                minus vero iure maiores fugit.
                            </p>
                        </div>
                    </div>

                    <div className="d-flex flex-row mx-4">
                        <Image
                            src="public/profile-picture.jpg"
                            className="d-flex align-self-center shadow-1-strong me-3 mb-auto mt-1"
                            roundedCircle
                            style={{ width: "3rem" }}
                        />
                        <div className="">
                            <p className="mb-0">
                                <b>Stefhan</b> - 10/22/2021 12:47 PM
                            </p>
                            <p className="small ">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Facilis qui explicabo nisi
                                amet numquam adipisci, fuga ipsum quisquam harum
                                et, laudantium quo placeat esse nobis expedita
                                eaque. Consequuntur, doloremque neque. Lorem
                                ipsum dolor sit amet consectetur, adipisicing
                                elit. Error reiciendis ipsum facilis veritatis
                                libero ab fugit dolorum exercitationem nihil,
                                commodi maiores nostrum enim iure. Reiciendis
                                minus vero iure maiores fugit.
                            </p>
                        </div>
                    </div>

                    <div className="d-flex flex-row mx-4">
                        <Image
                            src="public/profile-picture.jpg"
                            className="d-flex align-self-center shadow-1-strong me-3 mb-auto mt-1"
                            roundedCircle
                            style={{ width: "3rem" }}
                        />
                        <div className="">
                            <p className="mb-0">
                                <b>Stefhan</b> - 10/22/2021 12:47 PM
                            </p>
                            <p className="small ">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Facilis qui explicabo nisi
                                amet numquam adipisci, fuga ipsum quisquam harum
                                et, laudantium quo placeat esse nobis expedita
                                eaque. Consequuntur, doloremque neque. Lorem
                                ipsum dolor sit amet consectetur, adipisicing
                                elit. Error reiciendis ipsum facilis veritatis
                                libero ab fugit dolorum exercitationem nihil,
                                commodi maiores nostrum enim iure. Reiciendis
                                minus vero iure maiores fugit.
                            </p>
                        </div>
                    </div>
                    <div className="d-flex flex-row mx-4">
                        <Image
                            src="public/profile-picture.jpg"
                            className="d-flex align-self-center shadow-1-strong me-3 mb-auto mt-1"
                            roundedCircle
                            style={{ width: "3rem" }}
                        />
                        <div className="">
                            <p className="mb-0">
                                <b>Stefhan</b> - 10/22/2021 12:47 PM
                            </p>
                            <p className="small ">Hello How Are You?</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row mx-4">
                        <Image
                            src="public/profile-picture.jpg"
                            className="d-flex align-self-center shadow-1-strong me-3 mb-auto mt-1"
                            roundedCircle
                            style={{ width: "3rem" }}
                        />
                        <div className="">
                            <p className="mb-0">
                                <b>Stefhan</b> - 10/22/2021 12:47 PM
                            </p>
                            <p className="small ">Hello How Are You?</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row mx-4">
                        <Image
                            src="public/profile-picture.jpg"
                            className="d-flex align-self-center shadow-1-strong me-3 mb-auto mt-1"
                            roundedCircle
                            style={{ width: "3rem" }}
                        />
                        <div className="">
                            <p className="mb-0">
                                <b>Stefhan</b> - 10/22/2021 12:47 PM
                            </p>
                            <p className="small ">Hello How Are You?</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row mx-4">
                        <Image
                            src="public/profile-picture.jpg"
                            className="d-flex align-self-center shadow-1-strong me-3 mb-auto mt-1"
                            roundedCircle
                            style={{ width: "3rem" }}
                        />
                        <div className="">
                            <p className="mb-0">
                                <b>Stefhan</b> - 10/22/2021 12:47 PM
                            </p>
                            <p className="small ">Hello How Are You?</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row mx-4">
                        <Image
                            src="public/profile-picture.jpg"
                            className="d-flex align-self-center shadow-1-strong me-3 mb-auto mt-1"
                            roundedCircle
                            style={{ width: "3rem" }}
                        />
                        <div className="">
                            <p className="mb-0">
                                <b>Stefhan</b> - 10/22/2021 12:47 PM
                            </p>
                            <p className="small ">Hello How Are You?</p>
                        </div>
                    </div>
                </Card>

                <Form className="mt-auto">
                    <Row>
                        <Col className="my-4 ms-4">
                            <Form.Group controlId="message">
                                <Form.Control
                                    type="text"
                                    placeholder="Type your message"
                                    // value={brand}
                                    // onChange={(e) => setBrand(e.target.value)}
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
            </Card>
        </Container>
    );
}

export default HomePage;
