import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../redux/actions/messages";

import { Image } from "react-bootstrap";

function MessageItem() {
    const dispatch = useDispatch();
    const { messages } = useSelector((state) => state.messages);
    const { user, token } = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(getMessages());
    }, [dispatch]);

    return (
        <div>
            {messages.map((message) => (
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
                        <p className="small ">{message.message}</p>
                    </div>
                </div>
            ))}
        </div>
        // <div className="d-flex flex-row mx-4 mt-4">
        //     <Image
        //         src="public/profile-picture.jpg"
        //         className="d-flex align-self-center shadow-1-strong me-3 mb-auto mt-1"
        //         roundedCircle
        //         style={{ width: "3rem" }}
        //     />
        //     <div className="">
        //         <p className="mb-0">
        //             <b>Stefhan</b> - 10/22/2021 12:47 PM
        //         </p>
        //         <p className="small ">
        //             Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        //             Inventore aut magnam adipisci obcaecati sunt magni mollitia
        //             ullam neque? Commodi deserunt consectetur nam. Illo debitis
        //             soluta repellat, cum itaque recusandae corrupti!
        //         </p>
        //     </div>
        // </div>
    );
}

export default MessageItem;
