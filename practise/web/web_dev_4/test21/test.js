//global scope
var ul = document.querySelector('#fruits');

function removeSelected()
{
    var selected = document.querySelectorAll('#fruits input:checked');

    selected.forEach(function(l)
    {
        var parent = l.parentNode;
        ul.removeChild(parent);
    });
}

function reset ()
{
    ul.innerHTML = '';

    ul.innerHTML += "<li><input type='checkbox' name='fruit' value='apples'>Apples</li>";
    ul.innerHTML += "<li><input type='checkbox' name='fruit' value='oranges'>Oranges</li>";
    ul.innerHTML += "<li><input type='checkbox' name='fruit' value='bananas'>Bananas</li>";
    ul.innerHTML += "<li><input type='checkbox' name='fruit' value='grapes'>Grapes</li>";
}