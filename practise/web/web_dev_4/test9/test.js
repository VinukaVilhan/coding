//function is executed when the page is fully loaded
window.onload = init;

//stores the currently dragged element
var selected = null;

//mouse coordinates and element positions
var oldX, oldY, elemX, elemY;

function init() 
{
    //attaches a mouse down event to the element with the class draggable. When clicked DragEvent function is called.
    document.querySelector('.draggable').onmousedown = DragEvent;
}

//triggers when user presses the mouse on the draggable element
function DragEvent(event) 
{
    //stores the clicked element as the currently dragged element
    selected = event.target;
    //retrieves the initial horizontal position of the element
    elemX = selected.offsetLeft;
    //retrieves the initial vertical position of the element
    elemY = selected.offsetTop;
    //stores the initial mouse X position
    oldX = event.clientX;
    //stores the initial mouse Y position
    oldY = event.clientY;
    //attaches a eventlistner to the window so move function will be called whenever the mouse moves while the button is pressed
    window.addEventListener('mousemove', move);
    //attaches a mouseup event and it is executed when the button is released and the dragging is stopped.
    window.addEventListener('mouseup', stopMove);
}

//element moves while the button is pressed
function move(event) 
{
    //current mouse X position
    var newX = event.clientX;
    //current mouse Y position
    var newY = event.clientY;
    //horizontal distance mouse has moved
    var dx = newX - oldX;
    //vertical distance mouse has moved
    var dy = newY - oldY;

    //when the element is being dragged the change position function is being called
    if (selected !== null) 
    {
        changePosition(dx, dy);
    }

    oldX = newX;
    oldY = newY;
}


function changePosition(dx, dy) 
{
    //increments the horizontal position
    elemX += dx;
    //increments the vertical position
    elemY += dy;
    //sets the elements left and top positions (updated one's)
    selected.style.left = elemX + 'px';
    selected.style.top = elemY + 'px';
}

//function is triggered when the button is released
function stopMove() 
{
    selected = null;
    window.removeEventListener('mousemove', move);
    window.removeEventListener('mouseup', stopMove);
}
