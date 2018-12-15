var cord = [];
var newcords = [];
var Connected = false;
var socket;

function setup() {
    createCanvas(1000,1000);
    background('#acacac');  
}

function mouseDragged(){
    ellipse(mouseX,mouseY,20,20);
    newcords.push([mouseX,mouseY]);
	console.log(newcords);
	socket.emit("send message",newcords);
  }

function draw(){
	if(Connected){
		Connected = false;
		for(var i in cord)
		ellipse(cord[i][0],cord[i][1],20,20);
	}
}

function main() {
    socket = io();
	socket.on("display message",function(data){
		if(cord != data)
    	cord = data;
    	if(cord.length != 0)
    	Connected = true;
    })
    


}
window.onload = main;