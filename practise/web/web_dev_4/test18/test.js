var area  = document.querySelector('#numbers');

function add()
{
    var number = document.querySelector('#newNumber').value;
    if ((number !== '') && (number !== 'undefined') )
    {
        area.innerHTML += "<li>"+ number +"</li>";
    }

}

function reset()
{
    area.innerHTML = '';
}