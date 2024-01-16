window.onclick = Click;

function Click(event)
{
    var clicks = document.querySelector('#clicks');
    var target = event.target.id;

    if(target==='')
    {
        clicks.innerHTML += "You clicked on the window, not on a particular element!<br>";
    }
    else
    {
        clicks.innerHTML += "Element click Id: "+ target +"<br>" ; 
    }
}