import { Server } from "net";

let server = new Server(socket => {
    console.log("kazkas prisijunge");
    socket.end();
});

server.listen(3000);