
function add()
{
    // getting the selected number
    var number = document.querySelector('#newNumber').value;
    // getting the display area
    var numbers = document.querySelector('#numbers');
    // creating li element
    var newNumber = document.createElement('li');
    // updates the context of the element
    newNumber.textContent = number;
    //adding the input nunmber as a li
    numbers.append (newNumber);
}

function reset()
{
    numbers.innerHTML = '';
}