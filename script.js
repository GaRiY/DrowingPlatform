var cord = [];

function setup() {
    createCanvas(1000,1000);
    background('#acacac');  
}

function mouseDragged(){
    ellipse(mouseX,mouseY,20,20);
    cord.push(mouseX,mouseY);
  }

function main() {
    var socket = io();
    socket.emit("send message",cord);

}
window.onload = main;