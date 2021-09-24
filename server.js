const serverPort = 3000
const http = require("http")
const express = require("express")
const app = express()
const server = http.createServer(app)
const WebSocket = require("ws")
const websocketServer = new WebSocket.Server({ server })

app.use(express.static('client'))

//when a websocket connection is established
websocketServer.on('connection', (webSocketClient) => {
    //send feedback to the incoming connection
    webSocketClient.send('{ "connection" : "ok"}');
    //when a message is received
    webSocketClient.on('message', (message) => {
        //for each websocket client
        for(let client of websocketServer.clients){
            client.send(`{ "message" : ${message} }`);
        }
    });
});

//start the web server
server.listen(serverPort, () => {
    console.log(`Websocket server http://localhost:` + serverPort);
});

//start the game
const {Game} = require('./game/Game')
let game_instance = new Game()
game_instance.on('event',(event_data)=>{
    for(let client of websocketServer.clients){
        client.send(JSON.stringify(event_data));
    }
})