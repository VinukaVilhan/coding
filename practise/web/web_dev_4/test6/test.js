window.onkeydown = keyDown;
window.onkeyup = keyUp;

function keyUp(evnt)
{
    var keys = document.querySelector('#keys');

    keys.innerHTML += "Keyup: "+ evnt.key + " Code: "+evnt.keyCode + "<br>";
} 

function keyDown(evnt)
{
    var keys = document.querySelector('#keys');

    keys.innerHTML += "keydown: "+ evnt.key + " code: "+evnt.keyCode+ "<br>";
}