var pikachu = document.getElementById('pikachusprite');
var pikacanvas = document.getElementById('movepika');
pikachu.style.width = 72;
pikachu.style.height = 44;
pikacanvas.style.height = 50;




function move_pikachu() {
    var x = 0;
    var id = setInterval(animation, 1);
    pikacanvas.onclick = function restart() {pikachu.style.left = '0px;'; clearInterval(id);move_pikachu();}
    pikacanvas.ontouchstart = function restart() {pikachu.style.left = '0px;'; clearInterval(id);move_pikachu();}
    function animation() {
    if (x == parseInt(pikacanvas.offsetWidth) -72) {
        x = 0;
    }
    else {
        pikachu.style.left = x+'px';
        x++;
    }    
}
}

move_pikachu();

