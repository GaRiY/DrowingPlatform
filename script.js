var cord = [];
var newcords = [];
var Connected = false;

function setup() {
    createCanvas(1000,1000);
    background('#acacac');  
}

function mouseDragged(){
    ellipse(mouseX,mouseY,20,20);
    newcords.push([mouseX,mouseY]);
    console.log(newcords);
  }

function draw(){
	if(Connected){
		Connected = false;
		console.log("cord.length");
		ellipse(cord[0],cord[1],20,20);
	}
}

function main() {
    var socket = io();
	socket.on("display message",function(data){
    	cord = data;
    	console.log(cord);
    	if(cord.length != 0)
    	Connected = true;
    })
    socket.on("display message 2",function(data){
    	for(var i in data) {
	        	cords = data[i];
	        	if(cord.length != 0)
    			Connected = true;
	    }
    })
    socket.emit("send message",newcords);


}
window.onload = main;