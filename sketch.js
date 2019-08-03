var canvas = document.getElementById("sketchcanvas");
var draw = canvas.getContext("2d");

canvas.setAttribute("width", window.outerWidth - 100);
canvas.setAttribute("height", window.outerHeight - 150);
var [x, y] = [0, 5];

function draw_dot(x, y) {
    draw.beginPath();
    draw.fillStyle = "#000000";
    draw.arc(x,y,5,0,2*Math.PI);
    draw.fill();
    
}

/* window.addEventListener("keydown", function(event) {
    console.log(event.key);
    switch(event.key) {
        case 'ArrowUp':
        y -=5;
        draw_dot(x, y);
        break;

        case 'ArrowDown':
        y +=5;
        draw_dot(x, y);
        break;

        case 'ArrowRight':
        x +=5;
        draw_dot(x, y);
        break;

        case 'ArrowLeft':
        x -=5;
        draw_dot(x, y);
        break;

        case ' ':
        draw.clearRect(0, 0, canvas.width, canvas.height);;
        draw.beginPath();
        break;


    }
});
*/

canvas.addEventListener("touchstart", function(event) {
    Navigator.vibrate();
});

