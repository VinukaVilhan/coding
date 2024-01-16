// window.onload = init;

// function init()
// {
//     var canvas = document.querySelector('#myCanvas');
//     canvas.addEventListener("mousemove", processMouseMove);
// }

// function processMouseMove(event)
// {
//     var positions = document.querySelector('#mousePositions');

//     positions.innerHTML = "Mouse X position: "+ event.clientX + " Mouse Y position: "+ event.clientY + "<br>";
// }

window.onload = () => {
    const canvas = document.querySelector("#myCanvas");
    canvas.addEventListener("mousemove", (event) => {  // Use mousemove (all lowercase)
        document.querySelector('#mousePositions').innerHTML = `Mouse X position: ${event.clientX} Mouse Y position: ${event.clientY}<br>`; // Correct template literal syntax
    });
};
