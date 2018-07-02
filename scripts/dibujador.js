var c = document.querySelector("#myCanvas");
var ctx = c.getContext("2d");
var paso = 8;
var dimension = 200;
var x1 = 0, y1 = 0, x2 = 0, y2 = dimension;

var cambiarCara =  function(nombre){
    var avatar = document.querySelector(".avatar");
    avatar.style.backgroundImage = "url('" + ObtenerCara(nombre).url +"')";
}

var dibujar = function () {
    var nombre = 'baby';
    var avatar = document.querySelector(".avatar");
    avatar.style.backgroundImage = "url('" + ObtenerCara(nombre).url +"')";
    ctx.strokeStyle = 'blue';
    for (var i = 0; i <= dimension + paso; i = i + paso) {
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        x1 = i;
        y2 = dimension - i;      
    }
    x2 = dimension;
    y1 = dimension;
    for (var i = 0; i <= dimension + paso; i = i + paso) {
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        x1 = i;
        y2 = dimension - i;
        //ctx.clearRect(0, 0, c.width, c.height);
        
    }
    ctx.stroke();
    
    
}
dibujar();
