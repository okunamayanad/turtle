const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 7071 });

const clients = new Map();

wss.on('connection', (ws) => {
    clients.set(ws, metadata);

    ws.on('message', (messageAsString) => {
        console.log(messageAsString);
    });
    
    ws.on("close", () => {
        clients.delete(ws);
    });
});