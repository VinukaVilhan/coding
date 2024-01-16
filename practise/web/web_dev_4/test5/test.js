window.onload = resize;
window.onresize = resize;
window.onload = progress;

function resize(event)
{
    console.log("window resizing");
    var pageMeasure = document.querySelector('#pageSize');
    pageMeasure.innerHTML = "Height: "+ window.innerHeight + "Width: "+ window.innerWidth;

    var screenMeasure = document.querySelector('#screenSize');
    screenMeasure.innerHTML = "Height: "+ screen.height+ "Width: "+ screen.width;
}

var progressBar;
function progress(event)
{
    progressBar = document.querySelector('.progress div');
    window.addEventListener("scroll", function()
    {
        var max = document.body.scrollHeight- window.innerHeight;
        var precent = (window.pageYOffset / max)* 100;
        pogress.style.width = precent + "%";
    });
}