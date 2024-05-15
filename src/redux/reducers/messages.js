import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: [],
};

const messagesSlicer = createSlice({
    name: "messages",
    initialState,
    reducers: {
        setMessages: (state, action) => {
            state.messages = action.payload;
        },
    },
});

export const { setMessages } = messagesSlicer.actions;

export default messagesSlicer.reducer;
