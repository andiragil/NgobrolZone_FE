import React from "react";
import { Card, Container, Image } from "react-bootstrap";
import AddMessage from "../components/AddMessage";
import MessageItem from "../components/MessageItem";

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
                    <MessageItem />
                </Card>
                <AddMessage />
            </Card>
        </Container>
    );
}

export default HomePage;
