function displayListOfCheckedItems()
{
    var selected = '';

    var list = document.querySelectorAll('#fruits input:checked');

    list.forEach(function(l)
    {
        selected += l.value + ' ';

        //get the parent node of the selected input
        var parent = l.parentNode;

        parent.classList.add('checked');
    });
    document.body.append("You selected: " + selected);
}

function reset()
{
    var list = document.querySelectorAll('#fruits input');

    list.forEach(function(l)
    {
        l.checked = false;

        var parent = l.parentNode;

        parent.classList.remove('checked');
    });
}