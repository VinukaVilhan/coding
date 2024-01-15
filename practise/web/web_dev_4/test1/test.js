window.onload = init;

function init()
{
    var images = document.querySelectorAll('img');

    images.forEach(function(image)
    {
        image.style.margin = "5px 5px 15px 5px grey";
        image.style.boxShadow = "10px";
    });
}


function addBorderToFirstImage()
{
    var first = document.querySelector('#img1');

    first.style.border = '3px solid red';
}


function resizeAllImages()
{
    var images = document.querySelectorAll('img');

    images.forEach(function(img)
    {
        img.width = 100;
    });
}