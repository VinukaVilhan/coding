function drag(target, evt)
{
     // When dragged, copy into the drag'n'drop clipboard
    // the id of the dragged elem (it's target.id)
    //"browser" serves as a custom data type for the drag-and-drop operation
    evt.dataTransfer.setData('browser', target.id);
}

function drop(target, evt)
{
    //get the id of the item being dragged
    var id = evt.dataTransfer.getData('browser');

    target.appendChild(document.getElementById(id));

    evt.preventDefault;
}
