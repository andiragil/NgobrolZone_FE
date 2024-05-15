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
