function doSomething(event)
{
    var val = event.target.value;
    
    var dis = document.querySelector('#sliderValue');

    dis.innerHTML = "Selected value is: " + val;

}

function displayValue(event)
{
    var num = event.target.value;

    var dis = document.querySelector('#numberValue');

    dis.innerHTML = "Entered value: " + num;
}