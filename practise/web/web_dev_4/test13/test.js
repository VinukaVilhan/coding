function changePageBackgroundColor(color)
{
    document.body.style.backgroundColor = color;

    var out = document.querySelector('#choosedColor');

    out.innerHTML = "Selected color is: " + color;
}