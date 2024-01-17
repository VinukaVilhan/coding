//empty the name
function resetName()
{
    var name = document.querySelector('#name');
    name.value = '';
}

function setToGreen() {
    var colorElement = document.querySelector('#color');
    colorElement.value = "#00FF00"; // Assuming you want to change the text color
  }
  

function changeStep()
{
    var number = document.querySelector('#number');
    number.value = 10;
    number.step = 0.1;
    number.max = 11;
}

function changeAndResize(element)
{
    element.src = "https://pbs.twimg.com/profile_images/110455194/n666194627_2302_400x400.jpg";
    element.width = 100;
    element.style.border = "4px solid red";

}