var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var cords = [];

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);

io.on('connection', function (socket) {
    for(var i in messages) {
      socket.emit("display message", cords[i]);
    }
    socket.on("send message", function (data) {
        cords.push(data);
        io.sockets.emit("display message", data);
    });
 });