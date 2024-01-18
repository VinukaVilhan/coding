function move(element)
{
    var area = document.querySelector('.box');

    // trick to remove the click listener once the image has been moved into the list
    area.append(element);
    element.onclick = null;
}