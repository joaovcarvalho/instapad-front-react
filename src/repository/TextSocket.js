import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:5000";
const NEW_TEXT_MESSAGE = "textChange";

const socket = socketIOClient(ENDPOINT);

export const onTextData = (callback) => {
    socket.on(NEW_TEXT_MESSAGE, callback);
};

export const emitTextChange = (newText) => {
    socket.emit(NEW_TEXT_MESSAGE, newText);
};

