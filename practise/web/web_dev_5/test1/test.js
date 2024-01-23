var canvas, ctx , w, h;
var xMonster = 10;
var yMonster = 10;
var speed = 1;

window.onload = function init()
{
    canvas = document.querySelector('#myCanvas');

    w = canvas.width;
    h = canvas.height;

    //draw the object
    ctx = canvas.getContext('2d');

    mainLoop();

}

function mainLoop()
{
    //1. clear the canvas
    ctx.clearRect(0,0,w,h);

    //2. draw the item
    //function call
    drawMyMonster(xMonster, yMonster);

    //3. move the monster 
    yMonster += speed;

    //4. test collisions with boundaries
    if(((yMonster + 100) > w || yMonster < 0))
    {
        //change the direction of movement
        speed =- speed;
    }

    //5. request new frame of animation in 1/60s
    requestAnimationFrame(mainLoop);
}

function drawMyMonster(x,y)
{
    //save the context
    ctx.save();

    //translate the coordinate system, draw relative to it
    ctx.translate(x,y);

    // 0,0 is the top left corner of the monster
    ctx.strokeRect(0, 0, 100, 100);

    //eyes, x=20, y=20 is relative to the top left corner. Width and Height is 10.
    ctx.fillRect(20, 20, 10, 10);
    //eyes, x=60, y=20 is relative to the top left corner
    ctx.fillRect(60, 20, 10, 10);

    //nose
    ctx.strokeRect(40,40,10,40);

    //mouth 
    ctx.strokeRect(30, 85, 30, 10);

    ctx.restore();
}