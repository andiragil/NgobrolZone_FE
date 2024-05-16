// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getMessages } from "../redux/actions/messages";

// // Initialization connect to backend websocket (socket.io)
// const socket = io(import.meta.env.VITE_WEBSOCKET_API, {
//     transports: ["websocket"],
// });

// function MessageItem() {
//     const dispatch = useDispatch();
//     const { messages } = useSelector((state) => state.messages);
//     const { user, token } = useSelector((state) => state.auth);
//     const [typing, setTyping] = useState(false);

//     useEffect(() => {
//         dispatch(getMessages());
//     }, [dispatch]);

//     useEffect(() => {
//         // Connect to backend
//         socket.on("connect", () => {});

//         // It will listen the event name "message"
//         socket.on("message", (message) => {
//             console.log("aku dijalankan!", message);
//             dispatch(getAllMessages());
//         });

//         socket.on("ontyping", () => {
//             setTyping(true);
//             setTimeout(() => {
//                 setTyping(false);
//             }, 1000);
//         });

//         socket.on("getAllMessages", () => {
//             console.log("what happen?");
//         });
//     }, [dispatch]);

//     return (
//         <>
//             {messages.map((message) => {
//                 const formattedDate = format(
//                     parseISO(message.createdAt),
//                     "MM/dd/yyyy h:mm a"
//                 );
//                 return (
//                     <div className="d-flex flex-row mx-4 mt-2">
//                         <Image
//                             src={message.user.image}
//                             className="d-flex align-self-center shadow-1-strong me-3 mb-auto "
//                             roundedCircle
//                             style={{ width: "3rem" }}
//                         />
//                         <div className="">
//                             <p className="mb-0">
//                                 <b>{message.user.name}</b> - {formattedDate}
//                             </p>
//                             <p className="small ">{message.message}</p>
//                         </div>
//                     </div>
//                 );
//             })}
//             <h6>{typing && "seseorang sedang mengetik...."}</h6>
//         </>
//     );
// }

// export default MessageItem;
