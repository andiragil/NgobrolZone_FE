import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { format, parseISO } from "date-fns";
import { getMessages } from "../redux/actions/messages";

import AddMessage from "../components/AddMessage";

import { Card, Container, Image } from "react-bootstrap";

// Initialization connect to backend websocket (socket.io)
const socket = io(import.meta.env.VITE_WEBSOCKET_API);

function HomePage() {
    const dispatch = useDispatch();

    const { messages } = useSelector((state) => state.messages);

    const { user, token } = useSelector((state) => state.auth);

    const [typing, setTyping] = useState(false);

    useEffect(() => {
        dispatch(getMessages());
    }, [dispatch]);

    useEffect(() => {
        // Connect to backend
        socket.on("connect", () => {
            console.log("Connected to server with id:", socket.id);
        });

        // It will listen the event name "message"
        socket.on("message", (message) => {
            dispatch(getMessages());
        });

        socket.on("ontyping", () => {
            setTyping(true);
            setTimeout(() => {
                setTyping(false);
            }, 1000);
        });
    }, [dispatch]);

    return (
        <Container className="mt-4">
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
                    {messages.map((message) => {
                        const formattedDate = format(
                            parseISO(message.createdAt),
                            "MM/dd/yyyy h:mm a"
                        );
                        return (
                            <div className="d-flex flex-row mx-4 mt-2">
                                <Image
                                    src={message.user.image}
                                    className="d-flex align-self-center shadow-1-strong me-3 mb-auto "
                                    roundedCircle
                                    style={{ width: "3rem" }}
                                />
                                <div className="">
                                    <p className="mb-0">
                                        <b>{message.user.name}</b> -{" "}
                                        {formattedDate}
                                    </p>
                                    <p className="small ">{message.message}</p>
                                </div>
                            </div>
                        );
                    })}
                </Card>
                <div className="mx-4 mt-2 mb-1">
                    <h6>
                        {typing ? "Someone is typing..." : "No one is typing"}
                    </h6>
                </div>
                <AddMessage socket={socket} />
            </Card>
        </Container>
    );
}

export default HomePage;
