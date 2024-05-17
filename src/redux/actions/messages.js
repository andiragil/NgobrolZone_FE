import axios from "axios";
import { toast } from "react-toastify";
import { setMessages } from "../reducers/messages";

export const getMessages = () => async (dispatch, getState) => {
    const state = getState();
    const { token } = state.auth;

    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_BACKEND_API}/api/messages`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await axios.request(config);
        const { data } = response.data;

        dispatch(setMessages(data));
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
};

export const createNewMessages =
    (message, user_id) => async (dispatch, getState) => {
        const state = getState();
        const { token } = state.auth;

        let data = JSON.stringify({
            message,
            user_id,
        });

        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${import.meta.env.VITE_BACKEND_API}/api/messages`,
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            data: data,
        };

        try {
            const response = await axios.request(config);
            const { messages } = getState().message;
            if (messages.some((item) => item.id === data.data.id)) {
                return;
            }
            toast.success("New message!");
            dispatch(getAllMessages());
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };
