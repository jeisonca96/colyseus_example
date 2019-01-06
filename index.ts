require('./config/config')

import * as path from 'path';
import * as express from 'express';
import * as serveIndex from 'serve-index';
import { createServer } from 'http';
import { Server } from 'colyseus';
import { monitor } from '@colyseus/monitor';
const rooms = require('./rooms/index')

const port = Number(process.env.PORT);
const app = express();

// Attach WebSocket Server on HTTP Server.
const gameServer = new Server({
  server: createServer(app),
  // verifyClient : function  ( info ,  next )  { 
  //   // console.log(info.secure);
  //   // validate 'info' 
  //   // 
  //   // - next (false) rechazará el protocolo websocket handshake 
  //   // - next (true) will aceptar el websocket handshake 
  // } 
});

rooms.forEach(element => {
  gameServer.register(element.name, element.room, element.options);
});

app.use('/', express.static(path.join(__dirname, "static")));
app.use('/', serveIndex(path.join(__dirname, "static"), {'icons': true}))

// (optional) attach web monitoring panel
app.use('/colyseus', monitor(gameServer));

gameServer.onShutdown(function(){
  console.log(`game server is going down.`);
});

gameServer.listen(port);
console.log(`Listening on http://localhost:${ port }`);
