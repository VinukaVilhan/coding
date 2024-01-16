window.onload = init;

var selected = null;
var oldX, oldY, elemX, elemY;

function init() {
    document.querySelector('.draggable').onmousedown = DragEvent;
}

function DragEvent(event) {
    selected = event.target;
    elemX = selected.offsetLeft;
    elemY = selected.offsetTop;
    oldX = event.clientX;
    oldY = event.clientY;
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', stopMove);
}

function move(event) {
    var newX = event.clientX;
    var newY = event.clientY;
    var dx = newX - oldX;
    var dy = newY - oldY;

    if (selected !== null) {
        changePosition(dx, dy);
    }

    oldX = newX;
    oldY = newY;
}

function changePosition(dx, dy) {
    elemX += dx;
    elemY += dy;
    selected.style.left = elemX + 'px';
    selected.style.top = elemY + 'px';
}

function stopMove() {
    selected = null;
    window.removeEventListener('mousemove', move);
    window.removeEventListener('mouseup', stopMove);
}
