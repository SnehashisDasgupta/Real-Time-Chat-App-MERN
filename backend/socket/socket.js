import {Server} from 'socket.io';
import http from 'http';
import express from 'express';

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {  
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"]
    }
}); 

export const getReceiverSocketId = (receiverId) => {
    // when pass the receiverId, it will give the socketId
    return userSocketMap[receiverId];
}

const userSocketMap = {}; // {userId: socketId}

io.on('connection', (socket)=>{
    console.log("a user connected", socket.id);

    // to get userId and send it to client 
    const userId = socket.handshake.query.userId;
    if (userId != "undefined") userSocketMap[userId] = socket.id;

    // io.emit() is used to send events to all the connected clients
    //whenever user connects, it will immediately send who is online and who is offline
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
    
    // socket.on() is used to listen to the events, can be used both on client and server side
    socket.on("disconnect", ()=>{
        console.log("user disconnected", socket.id);

        delete userSocketMap[userId];
        //it will immediately send who is online and who is offline
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
})

export {app, io, server};