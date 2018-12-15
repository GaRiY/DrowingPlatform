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
    for(var i in cords) {
      socket.emit("display message", cords[i]);
    }

    socket.on("send message", function (data) {
    	console.log(data,data[1]);
	    	for(var i in data) {
	        	cords.push(data[i]);
	    	}
        io.sockets.emit("display message 2", data);
    });
 });