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
      socket.emit("display message", cords);
    

    socket.on("send message", function (data) {
    	console.log(data,cords);
	    	for(var i in data) {
	        	cords.push(data[i]);
	    	}
        io.sockets.emit("display message", data);
    });
 });