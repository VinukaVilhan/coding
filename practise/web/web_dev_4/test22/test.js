var canvas, ctx; 
 window.onload = init;

 function init()
 {
    canvas = document.querySelector('#myCanvas');
    //assigning the object to draw

    //red filled rectangle
    ctx = canvas.getContext('2d');
    ctx.fillStyle='red';
    ctx.fillRect(40, 40, 60, 60);

    //wireframe rectangle

    ctx.strokeStyle = 'green';
    ctx.lineWidth = 4;
    ctx.strokeRect(100, 40, 40, 40);

    //circle
    // fill circle, will use current ctx.fillStyle
    ctx.beginPath();
    ctx.arc(150, 150, 30, 0, 2*Math.PI);
    ctx.fill();

    ctx.fillStyle = "blue";
    ctx.font = "10px arial ";

    ctx.fillText("Hello!", 60, 20);
 }