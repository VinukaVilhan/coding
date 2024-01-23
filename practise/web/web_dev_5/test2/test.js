var canvas, ctx, w, h;

var ball =
{
    x: 100,
    y:100,
    radius: 15,
    color:'green',
    speedX:2,
    speedY:1
}

var player = {
    x:10,
    y:10,
    width:20,
    height:20,
    color:'red'
  }

window.onload = function init() {
    // called AFTER the page has been loaded
    canvas = document.querySelector("#myCanvas");
  
    // often useful
    w = canvas.width; 
    h = canvas.height;  
  
    // important, we will draw with this object
    ctx = canvas.getContext('2d');
  
    // ready to go !
    mainLoop();
};

function mainLoop()
{
    // 1. clear the canvas
    ctx.clearRect(0,0,w,h);

    //draw the balll and player
    drawFilledRectangle(player);
    drawFilledCircle(ball);

    //animate the ball that is bouncing all over the wall
    moveBall(ball);

    requestAnimationFrame(mainLoop);
}

function moveBall(b)
{
    b.x += b.speedX;
    b.y += b.speedY;

    testCollisionBallWithWalls(b);
}

function testCollisionBallWithWalls(b)
{
    //horizontal direction changing
    if((b.x + b.radius) > w)
    {
        //when the ball hit the right wall change the horizontal direction
        b.speedX =- b.speedX;

        //put the ball at collision point
        b.x = w - b.radius;
    }
    else if ((b.x -b.radius) < 0)
    {
        //the ball hit the left wall change the horizontal direction
        b.speedX =- b.speedX;

        //put the ball at the collision point
        b.x = b.radius;

    }

    //vertical direction changing
    if((b.y + b.radius) > h)
    {
        //change the vertical direction when it hits the down wall
        b.speedY =- b.speedY;

        //put the ball at collision point
        b.y = h - b.radius;
    }
    else if((b.y - b.radius)< 0)
    {
        //change the vertical direction when it hits the top wall
        b.speedY =- b.speedY;

        //put the ball at collision point
        b.y = b.radius;
    }
} 

function drawFilledRectangle(r)
{
    //save the context with the 2D transformations
    ctx.save();

    //translate the cordinate system
    ctx.translate(r.x, r.y);

    ctx.fillStyle = r.color;

    ctx.fillRect(0,0, r.width, r.height);

    ctx.restore();


}

function drawFilledCircle(c)
{
    ctx.save();

    ctx.translate(c.x ,c.y);

    ctx.fillStyle = c.color;

    ctx.beginPath();

    ctx.arc(0,0, c.radius, 0, 2*Math.PI);

    ctx.fill();

    ctx.restore();
}