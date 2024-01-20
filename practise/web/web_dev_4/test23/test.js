var canvas, ctx, w, h;

window.onload = function init()
{
    var canvas = document.querySelector('#myCanvas');

    w = canvas.width;
    h = canvas.height;

    ctx = canvas.getContext('2d');

    drawFilledRectangle(10,10,20,20,'red');
    drawFilledCircle(10,10,30,30,'green');

};

function drawFilledCircle()
{

}

function drawFilledRectangle(x,y,width,height,color)
{
    // GOOD practice: save the context, use 2D trasnformations
    ctx.save();

    ctx.translate(x,y);

    ctx.fillStyle = color;
    // (0, 0) is the top left corner of the monster.
    ctx.fillRect(0, 0, width, height);
  
    // GOOD practice: restore the context
    ctx.restore();
}