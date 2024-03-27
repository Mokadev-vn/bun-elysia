import { Elysia } from "elysia";

const ws = new Elysia().ws("/ws", {
    open: (context) => {
        console.log("Connection opened");
    },
    message: (context, message) => {
        console.log("Message received", message);
        context.send("Message received");
    },
    close: (context) => {
        console.log("Connection closed");
    }
});

export default ws;