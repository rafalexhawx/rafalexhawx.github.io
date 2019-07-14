"use strict";
var canvas = document.getElementById("canvas");
canvas.style.height='100px';
canvas.style.width='1000px';
var draw_board = canvas.getContext('2d');





function draw() {
    var date = new Date;
    draw_board.beginPath();
    draw_board.fillStyle = "white";
    draw_board.fillRect(0, 0, 1000, 1000);
    draw_board.stroke();
    draw_board.closePath();
    draw_board.beginPath();
    var s = date.getMilliseconds();
    draw_board.strokeStyle = "orange";
    draw_board.goTo(s, 0);
    draw_board.lineTo(s, 100);
    draw_board.stroke();    
}

setInterval(draw, 1);